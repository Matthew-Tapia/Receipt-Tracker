"use client";

import { useState } from "react";
import Image from "next/image";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", file!);

    await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*,.pdf" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUploader;
