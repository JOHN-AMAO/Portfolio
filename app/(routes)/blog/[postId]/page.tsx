import { notFound, redirect } from "next/navigation";
import { Post, User } from "@prisma/client";

import { db } from "@/lib/db";

import { ReadOnlyEditor } from "@/components/ReadOnlyEditor";

async function getPostForUser(postId: Post["id"]) {
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: "123456789012345678901234",
    },
  });
}

interface EditorPageProps {
  params: { postId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  const post = await getPostForUser(params.postId);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className='md:ml-20'>
        <ReadOnlyEditor
          post={{
            id: post.id,
            title: post.title,
            content: post.content,
            //published: post.published,
          }}
        />
      </div>
    </>
  );
}
