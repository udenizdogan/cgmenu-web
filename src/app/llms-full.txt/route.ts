import { buildLlmsFullTxt } from "@/lib/llms";

export async function GET() {
  return new Response(await buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
