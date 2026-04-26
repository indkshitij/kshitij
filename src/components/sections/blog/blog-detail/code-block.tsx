"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { toast } from "react-hot-toast";
import { Sandpack } from "@codesandbox/sandpack-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type CodeBlockProps = {
  code?: string;
  lang?: string;
  interactive?: boolean;
  dependencies?: Record<string, string>;
};

const CodeBlock = ({
  code,
  lang = "text",
  interactive = false,
  dependencies,
}: CodeBlockProps) => {
  const [html, setHtml] = useState("");

  if (!code?.trim()) {
    return (
      <div className="my-6 rounded-lg border px-4 py-3 text-sm text-muted-foreground">
        No code available
      </div>
    );
  }

  const normalized = lang.toLowerCase();

  useEffect(() => {
    let mounted = true;

    codeToHtml(code, {
      lang: normalized as any,
      theme: "github-dark",
    }).then((res) => {
      if (mounted) {
        // remove inline background from shiki
        const cleaned = res.replace(/style="background-color:[^"]*"/, "");
        setHtml(cleaned);
      }
    });

    return () => {
      mounted = false;
    };
  }, [code, normalized]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Copied!");
  };

  return (
    <div className="my-5 rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 text-xs border-b border-white/10 text-gray-400">
        <span className="uppercase tracking-wide">{lang}</span>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleCopy}
              className="cursor-pointer hover:text-white transition"
            >
              Copy
            </button>
          </TooltipTrigger>
          <TooltipContent>Copy code</TooltipContent>
        </Tooltip>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        {/* Code OR Interactive */}
        {interactive && ["react", "jsx", "tsx"].includes(normalized) ? (
          <Sandpack
            template="react"
            theme="dark"
            files={{
              "/App.js": code,
            }}
            customSetup={{
              dependencies: {
                "framer-motion": "latest",
                ...dependencies
              },
            }}
            options={{
              showLineNumbers: true,
              showConsole: true,
              editorHeight: 300,
            }}
          />
        ) : (
          <div className="overflow-x-auto">
            <div
              className="
        text-sm leading-6 font-mono
        px-4 py-4
        [&_pre]:!bg-transparent
        [&_pre]:!m-0
        [&_pre]:!p-0
      "
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;
