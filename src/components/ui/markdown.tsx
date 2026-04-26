"use client";

import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";

export function Markdown({ children, ...props }: { children: any }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }],
      ]}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
}