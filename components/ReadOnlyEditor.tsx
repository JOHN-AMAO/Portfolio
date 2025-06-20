// @ts-nocheck
"use client";
import { useEffect } from "react";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import "@/styles/editor.css";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";

export function ReadOnlyEditor({ post }) {
  const { register, handleSubmit } = useForm();
  const ref = React.useRef();
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);

  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;
    const ImageTool = (await import("@editorjs/image")).default;

    const body = post;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        readOnly: "true",
        data: body.content,
        tools: {
          header: {
            class: Header,
            config: {
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 3
            }
          },
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
          image: ImageTool,
        },
      });
    }
  }, [post]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  async function onSubmit(data) {
    setIsSaving(true);

    const blocks = await ref.current?.save();

    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
      }),
    });

    setIsSaving(false);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your post was not saved. Please try again.",
        variant: "destructive",
      });
    }

    router.refresh();

    return toast({
      description: "Your post has been saved.",
    });
  }

  if (!isMounted) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className='grid w-full gap-6 sm:gap-10 text-white'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center space-x-4 sm:space-x-10'>
            <Link
              href='/blog'
              className={cn(buttonVariants({ variant: "ghost" }), "text-sm sm:text-base")}
            >
              <>
                <Icons.chevronLeft className='mr-2 h-3 w-3 sm:h-4 sm:w-4' />
                Back
              </>
            </Link>
          </div>
        </div>
        <div className='prose prose-stone w-full max-w-full sm:max-w-[1000px] dark:prose-invert'>
          <h1
            id='title'
            className='w-full resize-none appearance-none overflow-hidden bg-transparent text-3xl sm:text-5xl font-bold focus:outline-none'
          >
            {post.title}
          </h1>
          <div
            id='editor'
            className='min-h-[300px] sm:min-h-[500px] '
          />
        </div>
      </div>
    </form>
  );
}
