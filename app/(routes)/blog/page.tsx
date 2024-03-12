import { db } from "@/lib/db";

import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { PostItem } from "@/components/post-item";
import { DashboardShell } from "@/components/shell";

export const metadata = {
  title: "Dashboard",
};

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: {
      authorId: "123456789012345678901234",
    },
    select: {
      id: true,
      title: true,
      //published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <div className='flex justify-center h-screen ml-20 mt-10'>
      <DashboardShell>
        <div className='flex'>
          <DashboardHeader
            heading='Blog'
            text='Here are some ideas thaat run through my mind'
          />
        </div>
        <div className='text-white flex flex-col gap-2'>
          <div></div>
          {posts?.length ? (
            <div className='divide-y divide-border rounded-md border m-6'>
              {posts.map((post) => (
                <PostItem
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          ) : (
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name='post' />
              <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                You don&apos;t have any posts yet. Start creating content.
              </EmptyPlaceholder.Description>
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    </div>
  );
}
