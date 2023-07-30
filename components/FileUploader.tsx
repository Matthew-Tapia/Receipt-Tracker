"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import CreateCardForm from "./CreateCardForm/CreateCardForm";

interface ItineraryJSON {
  date: string,
  startTime: string,
  endTime: string,
  startLocation: string,
  endLocation: string
}

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<Boolean>(false)
  const [itineraryData, setItineraryData] = useState<ItineraryJSON | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", file!);

    const url = URL.createObjectURL(file!)
    setImageUrl(url);

    const ocrText = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    await fetch("/api/categorizer", {
      method: "POST",
      body: ""
    })
      .then(res => {
        return res.json()
      })
      .then(output => {
        console.log(output)
        setItineraryData(output)
        setModalVisible(true)
      })
  };


  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*,.pdf" onChange={handleChange} />
        <button type="submit">Upload</button>
        {imageUrl && <Image width='200' height='200' src={imageUrl} alt="Uploaded file preview" />}
        {modalVisible && itineraryData != null &&
          <CreateCardForm itineraryData={itineraryData}></CreateCardForm>
        }
      </form>
    </div>
  );
};

export default FileUploader;
