"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = URL.createObjectURL(file!)
    setImageUrl(url);

    await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({url: url}),
    });
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*,.pdf" onChange={handleChange} />
        <button type="submit">Upload</button>
        {imageUrl && <Image width='200' height='200' src={imageUrl} alt="Uploaded file preview" />}
      </form>
    </div>
  );
};

export default FileUploader;
