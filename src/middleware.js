import { NextResponse } from 'next/server'
 

export function middleware(request) {
  const path = request.nextUrl.pathname

//   const isPublicPath = path === '/auth/login' || path === '/auth/forgot-password'

  const token = request.cookies.get('token')?.value || ''

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl))
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/app/:path*',
  ]
}