import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  // ✅ لو GET → سيبيه يعدي من غير حماية
  if (request.method === "GET") {
    return NextResponse.next();
  }

  // 🔐 باقي العمليات (POST, PUT, DELETE)
  const token = request.cookies.get("Amzoneweb")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized - No Token" },
      { status: 401 }
    );
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    if (decoded.role !== "admin") {
      return NextResponse.json(
        { message: "Forbidden - Admins only" },
        { status: 403 }
      );
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid Token" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: [
    "/api/branches/:path*",
    "/api/news/:path*",
  ],
};
