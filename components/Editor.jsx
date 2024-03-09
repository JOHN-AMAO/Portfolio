import React from "react";
import EditorJs from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/table";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Embed from "@/editorjs/embed";
import InlineCode from "@editorjs/inlinecode";

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
  return <div>Editor</div>;
};

export default Editor;
