// @ts-nocheck
"use client";
import { useEffect } from "react";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import "@/styles/editor.css";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import { uploadFiles } from "@/lib/uploadthing";
import { Post } from "@prisma/client";
import { Embed } from '@editorjs/embed';

export function Editor({ post }) {
  const { register, handleSubmit } = useForm();
  const ref = React.useRef();
  const router = useRouter();
  const [isSaving, setIsSaving] = React.useState(false);
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
        data: body.content,
        tools: {
          header: {
            class: Header,
            config: {
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 3
            }
          },
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "/api/link",
            },
          },
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                // ... other services you want to support
              },
              placeholder: '<div class="embed-tool__placeholder">Loading embed...</div>'
            }
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  const res = await uploadFiles("imageUploader", {
                    files: [file],
                  });
                  console.log(res);
                  if (Array.isArray(res) && res.length > 0) {
                    const firstResponse = res[0];
                    const { serverData } = firstResponse;
                    if (serverData && serverData.fileUrl) {
                      return {
                        success: 1,
                        file: {
                          url: serverData.fileUrl,
                        },
                      };
                    }
                  }

                  return null;
                },
              },
            },
          },
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid w-full gap-10 text-white'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center space-x-10'>
            <Link
              href='/secret'
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <>
                <Icons.chevronLeft className='mr-2 h-4 w-4' />
                Back
              </>
            </Link>
            {/* <p className='text-sm text-muted-foreground'>
              {post.published ? "Published" : "Draft"}
            </p> */}
          </div>
          <button
            type='submit'
            className={cn(buttonVariants())}
          >
            {isSaving && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            <span>Save</span>
          </button>
        </div>
        <div className='prose prose-stone mx-auto w-[800px] dark:prose-invert'>
          <TextareaAutosize
            autoFocus
            id='title'
            defaultValue={post.title}
            placeholder='Post title'
            className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none'
            {...register("title")}
          />
          <div
            id='editor'
            className='min-h-[500px]'
          />
        </div>
      </div>
    </form>
  );
}
