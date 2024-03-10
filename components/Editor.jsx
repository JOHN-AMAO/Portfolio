"use client";
import React, { useRef, useState } from "react";
import EditorJs from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/table";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Embed from "@/editorjs/embed";
import InlineCode from "@editorjs/inlinecode";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import "@/styles/editor.css";
import { cn } from "@/lib/utils";

const editor = new EditorJs({
  holder: "editorjs",
  tools: {
    header: Header,
    list: List,
    table: Table,
    code: Code,
    link: LinkTool,
    embed: Embed,
    Inlinecode: InlineCode,
  },
});

const Editor = () => {
  const ref = useRef();
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  return <div>Editor</div>;
};

export default Editor;
