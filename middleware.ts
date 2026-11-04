import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Redirigir HTTP a HTTPS permanentemente (308)
    const proto = request.headers.get('x-forwarded-proto');
    const host = request.headers.get('host') || request.nextUrl.host;
    if (proto === 'http') {
        const httpsUrl = `https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`;
        return NextResponse.redirect(httpsUrl, 308);
    }

    // 2. Redirigir /particulares y /particulares/ permanentemente (308) a /particulares/bodas
    if (pathname === '/particulares' || pathname === '/particulares/') {
        const url = request.nextUrl.clone();
        url.pathname = '/particulares/bodas';
        return NextResponse.redirect(url, 308);
    }

    // Excluir archivos internos de Next.js, API y recursos estáticos
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // 3. Si la URL contiene mayúsculas, redirigir a minúsculas permanentemente (308)
    if (pathname !== pathname.toLowerCase()) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.toLowerCase();
        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Coincidir con todas las rutas excepto archivos estáticos
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};
