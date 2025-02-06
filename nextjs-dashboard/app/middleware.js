// import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   const { pathname } = req.nextUrl;

//   // Allow requests if token exists
//   if (token) {
//     return NextResponse.next();
//   }

//   // If there is no token, redirect to the login page
//   if (!token && pathname !== "/auth/signin") {
//     return NextResponse.redirect(new URL("/auth/signin", req.url));
//   }

//   return NextResponse.next();
// }

export function middleware(req) {
  const token = req.cookies.get("token");
  if (!token) return NextResponse.redirect(new URL("/login", req.url));
  return NextResponse.next();
}
