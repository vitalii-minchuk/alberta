"use client"

import uploadFile from "@/app/actions/uploadFileAction";
import { useState } from "react";

export default function AudioRecorder() {
 const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
 // ...app code omitted

 const uploadAudio = async () => {
  if (!audioBlob) {
   throw new Error("No audio to upload");
  }

  // Prepare FormData
  let formData = new FormData();
  const timestamp = Date.now();

  // Append the audio blob to the FormData object. You might want to give it a filename.
  formData.append("audio", audioBlob, `${timestamp}.webm`);


  // Send the request to your API endpoint
  try {
   const response = await uploadFile(formData)
   console.log("Upload successful:", response);
  } catch (error) {
   console.error("Error uploading audio:", error);
  }
 };

 return (
  <div className="container">
   <form id="uploadForm">
    <input type="file" id="fileInput" onChange={(v) => v && setAudioBlob(v.target.files[0])} />
    <button type="button" onClick={uploadAudio}>
     Upload
    </button>
   </form>
  </div>
 );
}