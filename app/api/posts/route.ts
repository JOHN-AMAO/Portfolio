import { db } from "@/lib/db";

export async function GET() {
  try {
    const posts = await db.post.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      where: {
        authorId: "AJy",
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
    const body = json;

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: "AJy",
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
