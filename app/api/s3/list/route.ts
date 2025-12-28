export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import {
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


export async function GET() {
  try {

    const { s3Client, BUCKET_NAME } = await import("@/app/lib/s3");

    const s3 = s3Client        // ✅ runtime only
    const bucket = BUCKET_NAME; // ✅ runtime only

    const command = new ListObjectsV2Command({
      Bucket: bucket,
    });

    const response = await s3.send(command);

    if (!response.Contents?.length) {
      return NextResponse.json({ images: [] });
    }

    const images = await Promise.all(
      response.Contents.map(async (item) => {
        if (!item.Key) return null;

        const getObjectCommand = new GetObjectCommand({
          Bucket: bucket,
          Key: item.Key,
        });

        const url = await getSignedUrl(s3, getObjectCommand, {
          expiresIn: 3600,
        });

        return {
          key: item.Key,
          url,
          lastModified: item.LastModified?.toISOString() ?? "",
          size: item.Size ?? 0,
        };
      })
    );

    return NextResponse.json({
      images: images.filter(Boolean),
    });
  } catch (error) {
    console.error("List error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch images",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
