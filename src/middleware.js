import { NextResponse } from "next/server";

function middleware(request) {
  if(request.nextUrl.pathname!='/studentlist'){
    return NextResponse.redirect(new URL("/studentlist",request.url));
  }
}

export default middleware

//single page if want to exclude 
// export const config ={
//  matcher:"/about/:path*"
// }

///for multiple page if we want to exclude 
export const config ={
    matcher:["/about/:path*","/login/:path*"]
   }