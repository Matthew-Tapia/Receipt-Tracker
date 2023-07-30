export async function POST(req: Request) {
  return new Response(
    JSON.stringify({
      date: "NOV 16, 2023",
      startTime: "7:00AM",
      endTime: "3:25PM",
      startLocation: "Los Angeles, CA",
      endLocation: "New Haven, CT",
    })
  );
}
