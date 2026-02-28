
export async function POST() {
  return new Response(
    JSON.stringify({ message: "API working" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}