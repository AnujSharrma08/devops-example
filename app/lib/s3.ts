import { S3Client } from "@aws-sdk/client-s3";

// This function will be called only on the server side
function getS3Client() {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION;

  if (!accessKeyId || !secretAccessKey) {
    throw new Error(
      "Missing required AWS credentials. Please check your .env.local file. " +
      "Make sure AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are set."
    );
  }

  return new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

function getBucketName() {
  const bucketName = process.env.AWS_S3_BUCKET_NAME;

  if (!bucketName) {
    throw new Error(
      "Missing AWS_S3_BUCKET_NAME. Please check your .env.local file."
    );
  }

  return bucketName;
}

// Export as functions to avoid edge runtime issues
export const s3Client = getS3Client();
export const BUCKET_NAME = getBucketName();