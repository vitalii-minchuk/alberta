"use server"

import { Storage } from '@google-cloud/storage';
import path from 'path';

const storage = new Storage();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function uploadFile(file: File) {

    try {
        const bucket = ''
      const destination = `images/${file.name}`;

      // Upload the file to the bucket
      await storage.bucket(bucket).upload(file, {
        destination,
      });

      // Return the public URL of the uploaded file
      const publicUrl = `${bucket}/${destination}`;
      return { url: publicUrl }
    } catch (error) {
      console.error(error);
      return { error: 'Failed to upload file' }
    }
  
};
