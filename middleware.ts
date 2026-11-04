import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Excluir archivos internos de Next.js, API y recursos estáticos
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Si la URL contiene mayúsculas, redirigir a minúsculas permanentemente (308)
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
