import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Branch from "../../../models/Branch";
import fs from "fs";
import path from "path";
export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await context.params;

  const branch = await Branch.findById(id);
  if (!branch) {
    return NextResponse.json(
      { message: "الفرع غير موجود" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: branch });
}
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await context.params;

  const formData = await req.formData();

  const updateData: any = {
    name: formData.get("name"),
    about: formData.get("about"),
    vision: JSON.parse((formData.get("vision") as string) || "[]"),
    mission: JSON.parse((formData.get("mission") as string) || "[]"),
    goals: JSON.parse((formData.get("goals") as string) || "[]"),
  };

  const uploadDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const saveFile = async (file: File) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    const name = Date.now() + "-" + file.name;
    fs.writeFileSync(path.join(uploadDir, name), buffer);
    return `/uploads/${name}`;
  };

  const mainImage = formData.get("mainImage") as File;
  if (mainImage?.name) updateData.mainImage = await saveFile(mainImage);

  const mainAudio = formData.get("mainAudio") as File;
  if (mainAudio?.name) updateData.mainAudio = await saveFile(mainAudio);

  const images = formData.getAll("images") as File[];
  if (images.length)
    updateData.images = await Promise.all(images.map(saveFile));

  const videos = formData.getAll("videos") as File[];
  if (videos.length)
    updateData.videos = await Promise.all(videos.map(saveFile));

  const updated = await Branch.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  return NextResponse.json({ success: true, data: updated });
}
export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await context.params;

  const deleted = await Branch.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json(
      { message: "الفرع غير موجود" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}