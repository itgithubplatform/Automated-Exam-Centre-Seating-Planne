import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: [
    // Protect all dashboard routes EXCEPT select-role (which is the post-login landing page)
    '/dashboard/((?!select-role).)*',
    '/admin/:path*',
    '/staff/:path*',
    '/exams/:path*',
    '/students/:path*',
    '/rooms/:path*',
    '/seating/:path*',
    '/reports/:path*',
  ],
};