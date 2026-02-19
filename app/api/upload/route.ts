import { NextResponse } from "next/server";
import { upload } from "@/lib/multer";
import type { NextApiRequest, NextApiResponse } from "next";
import { promisify } from "util";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadSingle = promisify(upload.single("image"));

export async function POST(req: any) {
  try {
    await uploadSingle(req, {} as any);

    const file = req.file;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      path: `/uploads/${file.filename}`,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
