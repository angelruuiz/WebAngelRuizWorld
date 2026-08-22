import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In-memory rate limiting map for brute force prevention
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME_MS = 15 * 60 * 1000; // 15 minutes

function getClientIp(req) {
    const forwarded = req.headers.get('x-forwarded-for');
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    return req.headers.get('x-real-ip') || 'unknown';
}

function checkRateLimit(ip) {
    const now = Date.now();
    const attemptData = loginAttempts.get(ip);

    if (!attemptData) {
        return { allowed: true };
    }

    if (attemptData.lockedUntil && now < attemptData.lockedUntil) {
        const remainingMinutes = Math.ceil((attemptData.lockedUntil - now) / 60000);
        return { allowed: false, remainingMinutes };
    }

    if (now - attemptData.firstAttempt > LOCKOUT_TIME_MS) {
        loginAttempts.delete(ip);
        return { allowed: true };
    }

    if (attemptData.count >= MAX_ATTEMPTS) {
        attemptData.lockedUntil = now + LOCKOUT_TIME_MS;
        return { allowed: false, remainingMinutes: 15 };
    }

    return { allowed: true };
}

function registerFailedAttempt(ip) {
    const now = Date.now();
    const attemptData = loginAttempts.get(ip) || { count: 0, firstAttempt: now };
    attemptData.count += 1;
    loginAttempts.set(ip, attemptData);
}

function clearAttempts(ip) {
    loginAttempts.delete(ip);
}

export async function POST(req) {
    try {
        const ip = getClientIp(req);
        const rateLimit = checkRateLimit(ip);

        if (!rateLimit.allowed) {
            return NextResponse.json(
                { 
                    success: false, 
                    error: `Demasiados intentos fallidos. Bloqueado temporalmente durante ${rateLimit.remainingMinutes} minutos.` 
                },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { password } = body || {};

        if (!password || typeof password !== 'string') {
            registerFailedAttempt(ip);
            return NextResponse.json({ success: false, error: 'Contraseña requerida.' }, { status: 400 });
        }

        const expectedPassword = process.env.ADMIN_PASSWORD || 'wEyzye9b';

        // Timing-safe comparison to prevent timing attacks
        const providedBuffer = Buffer.from(password);
        const expectedBuffer = Buffer.from(expectedPassword);

        let match = false;
        if (providedBuffer.length === expectedBuffer.length) {
            match = crypto.timingSafeEqual(providedBuffer, expectedBuffer);
        } else {
            // Constant-time dummy check to prevent timing leaks
            crypto.timingSafeEqual(providedBuffer, providedBuffer);
        }

        if (!match) {
            registerFailedAttempt(ip);
            return NextResponse.json({ success: false, error: 'Credenciales inválidas.' }, { status: 401 });
        }

        // Authentication successful
        clearAttempts(ip);

        // Generate a cryptographically secure token
        const secret = process.env.ADMIN_SECRET || 'ar-world-secure-magic-salt-2026';
        const timestamp = Date.now();
        const signature = crypto
            .createHmac('sha256', secret)
            .update(`ar_admin_session_${timestamp}`)
            .digest('hex');
        
        const token = `${timestamp}.${signature}`;

        return NextResponse.json({ success: true, token });
    } catch (err) {
        return NextResponse.json({ success: false, error: 'Error del servidor.' }, { status: 500 });
    }
}
