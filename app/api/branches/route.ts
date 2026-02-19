import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Branch from "../../models/Branch";
import fs from "fs";
import path from "path";

export async function GET() {
  await connectDB();
  const branches = await Branch.find().sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: branches });
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

 
    const name = formData.get("name") as string;
    const about = formData.get("about") as string;

    const vision = JSON.parse((formData.get("vision") as string) || "[]");
    const mission = JSON.parse((formData.get("mission") as string) || "[]");
    const goals = JSON.parse((formData.get("goals") as string) || "[]");

   
    const mainImage = formData.get("mainImage") as File;
    const mainAudio = formData.get("mainAudio") as File;

    const images = formData.getAll("images") as File[];
    const videos = formData.getAll("videos") as File[];

    if (!name || !about || !mainImage || !mainAudio) {
      return NextResponse.json(
        { message: "البيانات الأساسية مطلوبة" },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    
    const saveFile = async (file: File) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, buffer);
      return `/uploads/${fileName}`;
    };

 
    const mainImagePath = await saveFile(mainImage);
    const mainAudioPath = await saveFile(mainAudio);

    
    const imagePaths = await Promise.all(images.map(saveFile));
    const videoPaths = await Promise.all(videos.map(saveFile));
 
    const branch = await Branch.create({
      name,
      about,
      mainImage: mainImagePath,
      mainAudio: mainAudioPath,
      vision,
      mission,
      goals,
      images: imagePaths,
      videos: videoPaths,
    });

    return NextResponse.json({ success: true, data: branch });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
