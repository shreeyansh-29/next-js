import {NextResponse, type NextRequest} from "next/server";
import React from "react";

export function Middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
  // return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: "/profile",
// };
