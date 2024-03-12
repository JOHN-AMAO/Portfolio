import { db } from "@/lib/db";
import * as z from "zod";
const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

export async function GET() {
  try {
    const posts = await db.post.findMany({
      select: {
        id: true,
        title: true,
        //published: true,
        createdAt: true,
      },
      where: {
        authorId: "123456789012345678901234",
      },
    });

    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = postCreateSchema.parse(json);

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: "123456789012345678901234",
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(post));
  } catch (error) {
    if (error) {
      return new Response(JSON.stringify(error), { status: 422 });
    }
  }
}
