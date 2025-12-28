import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  console.log("Upload API called");

  try {
    // Import S3 client dynamically to ensure it's only loaded on server
    const { s3Client, BUCKET_NAME } = await import("@/app/lib/s3");

    console.log("S3 Client initialized");
    console.log("Bucket Name:", BUCKET_NAME);

    const formData = await request.formData();
    const file = formData.get("file") as File;
    const fileName = formData.get("fileName") as string;

    console.log("File received:", file?.name);
    console.log("Custom filename:", fileName);

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    if (!fileName) {
      return NextResponse.json(
        { error: "No file name provided" },
        { status: 400 }
      );
    }

    // Get file extension from original file
    const fileExtension = file.name.split(".").pop();
    const finalFileName = `${fileName}.${fileExtension}`;

    console.log("Final filename:", finalFileName);

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log("File size:", buffer.length, "bytes");

    // Upload to S3
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: finalFileName,
      Body: buffer,
      ContentType: file.type,
    });

    console.log("Uploading to S3...");
    const result = await s3Client.send(command);
    console.log("Upload successful:", result);

    return NextResponse.json(
      {
        message: "File uploaded successfully",
        fileName: finalFileName,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Upload error details:", error);

    // Detailed error logging
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }

    return NextResponse.json(
      {
        error: "Failed to upload file",
        details: error instanceof Error ? error.message : "Unknown error",
        stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : '') : undefined
      },
      { status: 500 }
    );
  }
}