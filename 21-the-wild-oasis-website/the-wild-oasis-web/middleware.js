// import { NextResponse } from "next/server";

// export const middleware = (request) => {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// };

// import { auth } from "@/app/_lib/Auth";
// export const middleware = auth;

export { auth as middleware } from "@/app/_lib/Auth";

export const config = {
  matcher: ["/account"],
};
