import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function listImages(folder: string): Promise<string[]> {
  const result = await cloudinary.api.resources({
    type: "upload",
    prefix: folder,
    max_results: 100,
  }) as { resources: { secure_url: string }[] };
  return result.resources.map((r) => r.secure_url);
}

export async function uploadImage(
  buffer: Buffer,
  folder: string,
  publicId: string
): Promise<string> {
  const stripped = publicId.replace(/\.[^/.]+$/, "");
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, public_id: stripped, overwrite: true },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary upload failed"));
          return;
        }
        resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });
}
