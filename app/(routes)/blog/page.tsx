import { db } from "@/lib/db";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { PostItemRead } from "@/components/post-item-read";
import { FaRss } from "react-icons/fa";

export const metadata = {
  title: "Blog",
  description: "My Ideas, learnings and opinions.",
};

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: {
      authorId: "123456789012345678901234",
      published: true, // Only show published posts
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen lg:ml-24 text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <DashboardShell>
          <DashboardHeader
            heading="Blog"
            text="My Ideas, learnings and opinions."
            
          />
          <div className="mt-8">
            {posts?.length ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <PostItemRead
                    key={post.id}
                    post={post}
                    className="bg-[#1a2547] rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  />
                ))}
              </div>
            ) : (
              <EmptyPlaceholder>
                <EmptyPlaceholder.Icon name="post" />
                <EmptyPlaceholder.Title>No posts yet</EmptyPlaceholder.Title>
                <EmptyPlaceholder.Description>
                  Stay tuned! I'm working on creating amazing content for you.
                </EmptyPlaceholder.Description>
              </EmptyPlaceholder>
            )}
          </div>
        </DashboardShell>
      </div>
    </div>
  );
}
