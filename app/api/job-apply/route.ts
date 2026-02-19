import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import JobApplication from "../../models/JobApplication";
import path from "path";
import fs from "fs/promises";

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const job = formData.get("job") as string;
    const file = formData.get("cv") as File;

    if (!file) {
      return NextResponse.json(
        { message: "الملف مطلوب" },
        { status: 400 }
      );
    }

    // حفظ الملف
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, file.name);
    await fs.writeFile(filePath, buffer);

    const newApplication = await JobApplication.create({
      name,
      phone,
      job,
      cv: `/uploads/${file.name}`,
    });

    return NextResponse.json({
      message: "تم إرسال الطلب بنجاح",
      data: newApplication,
    });

  } catch (error) {
    return NextResponse.json(
      { message: "حدث خطأ" },
      { status: 500 }
    );
  }
}
