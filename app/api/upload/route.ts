import { ImageAnnotatorClient } from "@google-cloud/vision";
import CREDENTIALS from "@/credentials.json"

const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email
  }
}

export async function POST(req: Request) {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;
  const arrayBuffer = await file.arrayBuffer();
  const fileBuffer = Buffer.from(arrayBuffer);

  const client = new ImageAnnotatorClient(CONFIG);

  const [result] = await client.textDetection(fileBuffer);
  const detections = result.textAnnotations;

  const text = detections![0].description;
  
  console.log(text);

  return new Response("OK");
}
