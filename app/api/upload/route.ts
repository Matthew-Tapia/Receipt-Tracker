export async function POST(req: Request) {
  const data = await req.formData();

  console.log(data.get("file"));

  return new Response("OK");
}
