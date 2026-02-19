import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import News from "../../models/News";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    await connectDB();

   
    const newsList = await News.find().sort({ createdAt: -1 }); // ترتيب حسب الأحدث أولاً

    return NextResponse.json({ success: true, data: newsList });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
 

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const images = formData.getAll("images") as File[]; // ✅ array من الملفات

    if (!title || !description || images.length === 0) {
      return NextResponse.json(
        { message: "كل البيانات مطلوبة" },
        { status: 400 }
      );
    }

    
    const imagePaths: string[] = [];

    for (const image of images) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = Date.now() + "-" + image.name;
      const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

      fs.writeFileSync(uploadPath, buffer);

      imagePaths.push(`/uploads/${fileName}`);
    }

    const news = await News.create({
      title,
      description,
      images: imagePaths,  
    });

    return NextResponse.json({ success: true, data: news });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
