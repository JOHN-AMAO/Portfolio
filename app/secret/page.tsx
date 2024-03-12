import { db } from "@/lib/db";

import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { PostCreateButton } from "@/components/post-create-button";
import { PostItem } from "@/components/post-item";
import { DashboardShell } from "@/components/shell";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
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
            text='A canvas for your creative ideas.'
          />
        </div>
        <div className='text-white flex flex-col gap-2'>
          <div>
            <PostCreateButton />
          </div>
          {posts?.length ? (
            <div className='divide-y divide-border rounded-md border'>
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
              <PostCreateButton variant='outline' />
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    </div>
  );
}
