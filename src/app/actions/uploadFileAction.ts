"use server"

import { Storage } from '@google-cloud/storage';

export default async function uploadFile(formData: FormData) {
  try {
   const file = formData.get("audio") as File;
 

   if (!file || typeof file === "string") {
    throw new Error("Audio file not found");
   }
   const filePath = file?.name;
 
   const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID ?? '',
    keyFilename: 'google-key.json'
   });
   const bucket = storage.bucket(process.env.GCP_BUCKET_NAME ?? '');
 
   const bytes = await file.arrayBuffer();
   const buffer = Buffer.from(bytes);
   
   // Wrap the upload logic in a promise
   await new Promise((resolve, reject) => {
    const blob = bucket.file(filePath);
    const blobStream = blob.createWriteStream({
     resumable: false,
    });
 
    blobStream
     .on("error", (err) => reject(err))
     .on("finish", () => resolve(true));
 
    blobStream.end(buffer);
   });
 
   return { success: true }
  } catch (error) {
    console.log(error)
   return { status: 500 }
  }
 };
