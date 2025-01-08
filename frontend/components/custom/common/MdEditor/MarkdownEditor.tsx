"use client";

import dynamic from "next/dynamic";
import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import rehypeSanitize from "rehype-sanitize";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  hideToolbar?: boolean;
  preview?: "live" | "edit" | "preview";
  height?: string | number;
  maxHeight?: number;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  value,
  onChange,
  hideToolbar = false,
  preview = "live",
  height = 500,
  maxHeight = 500,
}) => {
  return (
    <div data-color-mode="dark" className="w-full markdown-editor">
      <MDEditor
        value={value}
        onChange={onChange}
        preview={preview}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        height={height}
        visiableDragbar={true}
        hideToolbar={hideToolbar}
        maxHeight={maxHeight}
      />
    </div>
  );
};

export default MarkdownEditor;
