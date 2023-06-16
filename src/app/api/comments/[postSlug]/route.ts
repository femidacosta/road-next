// app/api/comments/[postSlug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getComments, saveComment } from "@/lib/comments";

interface PostParams {
  postSlug: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: PostParams }
) {
  const { postSlug } = params;
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const comment = formData.get("comment") as string;
  await saveComment(username, comment, postSlug);
  console.log("server saved comments");
  return NextResponse.json("all saved");
}

interface GetParams {
  postSlug: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: GetParams }
) {
  const { postSlug } = params;

  const comments = await getComments(postSlug);
  console.log("server loaded comments", comments);
  return NextResponse.json({ comments });
}
