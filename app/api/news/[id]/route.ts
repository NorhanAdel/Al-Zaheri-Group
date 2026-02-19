import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import News from "../../../models/News";
import fs from "fs";
import path from "path";
export async function GET(req: Request) {
  await connectDB();

   
  const url = new URL(req.url);
  const segments = url.pathname.split("/");  
  const id = segments[segments.length - 1];  

  console.log("ID اللي جاي:", id);

  const item = await News.findById(id);

  if (!item) {
    return NextResponse.json({ message: "الخبر غير موجود" }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: item });
}
export async function PUT(req: Request) {
  await connectDB();

 
  const url = new URL(req.url);
  const segments = url.pathname.split("/");
  const id = segments[segments.length - 1];

 
  const formData = await req.formData();
  const title = formData.get("title") as string | null;
  const description = formData.get("description") as string | null;
  const image = formData.get("image") as File | null;

  const updateData: any = {};
  if (title) updateData.title = title;
  if (description) updateData.description = description;

 
  if (image && image.size > 0) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = Date.now() + "-" + image.name;
    const uploadPath = path.join(process.cwd(), "public/uploads", fileName);
    fs.writeFileSync(uploadPath, buffer);
    updateData.image = `/uploads/${fileName}`;
  }

  const updated = await News.findByIdAndUpdate(id, updateData, { new: true });

  if (!updated) {
    return NextResponse.json({ message: "الخبر غير موجود" }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: updated });
}
 
export async function DELETE(req: Request) {
  await connectDB();

 
  const url = new URL(req.url);
  const segments = url.pathname.split("/");
  const id = segments[segments.length - 1];

  const deleted = await News.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json({ message: "الخبر غير موجود" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
