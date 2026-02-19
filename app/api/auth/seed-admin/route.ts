import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST() {
  await connectDB();

  const adminEmail = "admin@site.com";
  const adminPassword = "Al456ry";

  const exists = await User.findOne({ role: "admin" });
  if (exists) {
    return NextResponse.json({ message: "Admin موجود بالفعل" });
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = await User.create({
    email: adminEmail,
    password: hashedPassword,
    role: "admin",
  });

  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  return NextResponse.json({
    message: "Admin created",
    email: admin.email,
    token,
  });
}
