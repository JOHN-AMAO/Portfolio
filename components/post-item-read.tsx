import Link from "next/link";
import { Post } from "@prisma/client";

import { formatDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { PostOperations } from "@/components/post-operations";

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "createdAt">;
}

// interface PostItemProps {
//   post: Pick<Post, "id" | "title" | "published" | "createdAt">;
// }
export function PostItemRead({ post, className }: PostItemProps & { className?: string }) {
  return (
    <div className={`flex items-center justify-between p-4 ${className || ''}`}>
      <div className='grid gap-1 w-full'>
        <Link
          href={`/blog/${post.id}`}
          className='font-semibold hover:underline hover:bg-blue-800 transition'
        >
          {post.title}
        </Link>
        <div>
          <p className='text-sm text-muted-foreground'>
            {formatDate(post.createdAt?.toDateString())}
          </p>
        </div>
      </div>
    </div>
  );
}

PostItemRead.Skeleton = function PostItemSkeleton() {
  return (
    <div className='p-4'>
      <div className='space-y-3'>
        <Skeleton className='h-5 w-2/5' />
        <Skeleton className='h-4 w-4/5' />
      </div>
    </div>
  );
};
