import { ImageAnnotatorClient } from "@google-cloud/vision";
// import CREDENTIALS from "@/credentials.json"

// const CONFIG = {
//   credentials: {
//     private_key: CREDENTIALS.private_key,
//     client_email: CREDENTIALS.client_email
//   }
// }

export async function POST(req: Request) {
  const data = await req.json();
  const url : string = data.url; 

  console.log(url)

  // const client = new ImageAnnotatorClient(CONFIG);

  // const [result] = await client.textDetection("IMAGE FILE HERE");
  // const detections = result.textAnnotations;

  // console.log("Text:");


  // detections?.forEach(text => console.log(text));

  return new Response("OK");
}
