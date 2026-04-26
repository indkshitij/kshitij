"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  LinkIcon,
  Sparkles,
  ArrowRight,
  FileText,
  Code2,
  Type,
  Bot,
  Brain,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { PostShareMenu } from "@/components/sections/blog/post-share-menu";
import { BlogPost } from "@/types/blog-type";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { PostKeyboardShortcuts } from "@/components/sections/blog/blog-detail/post-keyboard-shortcuts";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";

interface BlogOptionsProps {
  post: BlogPost;
  previous?: string | null;
  next?: string | null;
}

const BlogOptions = ({ post, previous, next }: BlogOptionsProps) => {
  const router = useRouter();
  const playTurnPageSound = useSound(SOUNDS?.turnPage);

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`;

  const getContent = () => {
    return post.content
      .map((block) => {
        switch (block.type) {
          case "heading":
            return `## ${block.content}`;
          case "paragraph":
            return block.content;
          case "quote":
            return `> ${block.content}`;
          case "code":
            return `\`\`\`\n${block.content}\n\`\`\``;
          default:
            return "";
        }
      })
      .join("\n\n");
  };

  const content = getContent();

  //  Copy link
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    toast.success("Link copied!");
  };

  // Copy AI formats
  const copyMarkdown = async () => {
    await navigator.clipboard.writeText(content);
    toast.success("Copied as Markdown");
  };

  const copyJSON = async () => {
    await navigator.clipboard.writeText(JSON.stringify(post, null, 2));
    toast.success("Copied as JSON");
  };

  const copyPlain = async () => {
    await navigator.clipboard.writeText(
      post.content.map((b) => b.content).join("\n\n"),
    );
    toast.success("Copied as Plain Text");
  };

  // 🤖 AI share
  const explainPrompt = `
    Explain the following content in a clear and easy-to-understand way.

    - Break it into sections
    - Add bullet points
    - Include key concepts and examples if needed
    - Keep it beginner-friendly

    Content:
    ${content}
    `;

  const openChatGPT = () => {
    const prompt = encodeURIComponent(explainPrompt);
    window.open(`https://chat.openai.com/?q=${prompt}`, "_blank");
  };

  const openClaude = () => {
    const prompt = encodeURIComponent(explainPrompt);
    window.open(`https://claude.ai/new?q=${prompt}`, "_blank");
  };

  //  Quick AI summary
  // const summarize = async () => {
  //   const summary = content.slice(0, 300) + "...";
  //   await navigator.clipboard.writeText(summary);
  //   toast.success("Summary copied!");
  // };

  return (
    <>
      <PostKeyboardShortcuts
        previous={previous ? previous : null}
        next={next ? next : null}
      />
      <div className="flex items-center justify-between gap-4">
        {/* LEFT */}
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {/* Copy link */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                className="flex items-center gap-2 transition cursor-pointer"
                onClick={handleCopy}
                aria-label="Copy link"
              >
                <LinkIcon className="size-4" />
                <p className="text-[12.5px]">Copy Link</p>
              </Button>
            </TooltipTrigger>

            <TooltipContent>Copy link</TooltipContent>
          </Tooltip>

          {/* Share */}
          <PostShareMenu title={post.title} url={url} />

          {/*  AI TOOLS */}

          <DropdownMenu>
            {/* Tooltip wrapper */}
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    aria-label="AI tools"
                    className="flex items-center gap-2 transition cursor-pointer"
                  >
                    <Sparkles className="size-4" />
                    <p className="text-[12.5px]">AI Actions</p>
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>

              <TooltipContent>AI tools</TooltipContent>
            </Tooltip>

            {/*  Dropdown */}
            <DropdownMenuContent className="w-56 p-1.5">
              {/* 🧾 COPY FORMATS */}
              <div className="px-2 py-1 text-xs font-medium text-muted-foreground">
                Copy format
              </div>

              <DropdownMenuItem onClick={copyMarkdown} className="gap-2">
                <FileText className="size-4" />
                Markdown
              </DropdownMenuItem>

              <DropdownMenuItem onClick={copyJSON} className="gap-2">
                <Code2 className="size-4" />
                JSON
              </DropdownMenuItem>

              <DropdownMenuItem onClick={copyPlain} className="gap-2">
                <Type className="size-4" />
                Plain text
              </DropdownMenuItem>

              <div className="h-px bg-border my-2" />

              {/* 🤖 AI ACTIONS */}
              <div className="px-2 py-1 text-xs font-medium text-muted-foreground">
                AI actions
              </div>

              <DropdownMenuItem onClick={openChatGPT} className="gap-2">
                <Bot className="size-4" />
                Open in ChatGPT
              </DropdownMenuItem>

              <DropdownMenuItem onClick={openClaude} className="gap-2">
                <Brain className="size-4" />
                Open in Claude
              </DropdownMenuItem>

              {/* <div className="h-px bg-border my-2" /> */}

              {/* ✨ SUMMARY */}
              {/* <DropdownMenuItem onClick={summarize} className="gap-2">
                <Sparkles className="size-4" />
                Generate summary
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Previous */}
          {previous && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => {
                    playTurnPageSound();
                    router.push(previous);
                  }}
                  title="Previous post"
                  className="cursor-pointer"
                >
                  <ArrowLeft className="size-4" />
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                Previous
                <KbdGroup>
                  <Kbd>←</Kbd>
                </KbdGroup>
              </TooltipContent>
            </Tooltip>
          )}

          {next && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => {
                    playTurnPageSound();
                    router.push(next);
                  }}
                  title="Next post"
                  className="cursor-pointer"
                >
                  <ArrowRight className="size-4" />
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                Next
                <KbdGroup>
                  <Kbd>→</Kbd>
                </KbdGroup>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogOptions;
