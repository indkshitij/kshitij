"use client";
import PageWrapper from "@/components/layout/page-wrapper";
import { BlogPost } from "@/types/blog-type";
import { format } from "date-fns";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BlogOptions from "@/components/sections/blog/blog-detail/blog-options";
import FilledGridWrapper from "@/components/layout/filled-grid-wrapper";
import VideoBlock from "@/components/sections/blog/blog-detail/video-block";
import ImageBlock from "@/components/sections/blog/blog-detail/image-block";
import CodeBlock from "@/components/sections/blog/blog-detail/code-block";

const BlogDetailSection = ({
  post,
  previous,
  next,
}: {
  post: BlogPost;
  previous?: BlogPost | null;
  next?: BlogPost | null;
}) => {
  return (
    <>
      <div className="border-b border-line">
        <PageWrapper>
          <div className="h-10" />
        </PageWrapper>
      </div>
      <PageWrapper className="p-2 sm:px-5 py-1.5 ">
        <BlogOptions
          post={post}
          previous={previous ? `/blog/${previous.slug}` : null}
          next={next ? `/blog/${next.slug}` : null}
        />
      </PageWrapper>

      <FilledGridWrapper />
      <div className="border-b border-line">
        <TitleHeading title={post.title || "Untitled post"} />
      </div>

      <div className="border-b border-line">
        <AuthorAndDate post={post} />
      </div>
      <PageWrapper>
        <article className="px-2 sm:px-5 pb-5">
          {/* Cover Image */}
          <CoverImage src={post.coverImage} alt={post.title} />

          {/* Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none prose-no-margin">
            {post.content.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2
                      key={index}
                      className={cn(
                        "mt-8 first:mt-0",
                        "text-xl sm:text-2xl font-semibold tracking-tight",
                        "scroll-mt-24",
                        "text-foreground",
                      )}
                    >
                      {block.content}
                    </h2>
                  );

                case "paragraph":
                  return (
                    <p
                      key={index}
                      className={cn(
                        "mt-4",
                        "text-base sm:text-lg leading-8",
                        "text-muted-foreground",
                      )}
                    >
                      {block.content}
                    </p>
                  );

                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className={cn(
                        "mt-6",
                        "border-l-6 border-primary/40",
                        "pl-4 py-2",
                        "italic text-muted-foreground",
                        "bg-muted/40 rounded-l-sm",
                      )}
                    >
                      {block.content}
                    </blockquote>
                  );

                case "code":
                  return block.content ? (
                    <CodeBlock
                      key={index}
                      code={block.content}
                      lang={block.codeLanguage}
                      interactive={block?.interactive}
                      dependencies={block?.dependencies}
                    />
                  ) : null;

                case "image":
                  return block.media ? (
                    <ImageBlock key={index} media={block.media} />
                  ) : null;

                case "video":
                  return block.media ? (
                    <VideoBlock key={index} media={block.media} />
                  ) : null;

                default:
                  return null;
              }
            })}
          </div>
        </article>
      </PageWrapper>
    </>
  );
};

const TitleHeading = ({ title }: { title: string }) => {
  return (
    <PageWrapper>
      <h1
        className={cn(
          "px-2 sm:px-5",
          "text-2xl sm:text-3xl md:text-4xl",
          "font-semibold tracking-tight leading-tight",
          "break-words",
        )}
      >
        {title.trim() || "Untitled post"}
      </h1>
    </PageWrapper>
  );
};

const AuthorAndDate = ({ post }: { post: BlogPost }) => {
  const authorName = post.author?.name?.trim() || "Unknown author";
  const avatar = post.author?.avatar || "/default-avatar.png";

  let formattedDate = "Unknown date";
  try {
    if (post.publishedAt) {
      formattedDate = format(new Date(post.publishedAt), "MMMM d, yyyy");
    }
  } catch {
    formattedDate = "Invalid date";
  }

  return (
    <PageWrapper>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-2 sm:px-5 py-1.5 sm:py-2.5">
        {/* Author */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
            <Image
              src={avatar}
              alt={authorName}
              fill
              sizes="40px"
              className={cn(
                "rounded-full object-cover border border-muted-foreground/15",
                "ring-1 ring-line ring-offset-1 ring-offset-background",
                "transition-all duration-300 ease-out",
                "hover:ring-primary/30 hover:shadow-md hover:-translate-y-px",
              )}
            />
          </div>

          {/* Name */}
          <p className="text-sm sm:text-base font-medium truncate">
            {authorName}
          </p>
        </div>

        {/* Date */}
        <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
          {formattedDate}
        </p>
      </div>
    </PageWrapper>
  );
};

type CoverImageProps = {
  src?: string | null;
  alt?: string;
  className?: string;
};

const CoverImage = ({ src, alt, className }: CoverImageProps) => {
  if (!src) return null;

  const safeAlt = alt?.trim() || "Blog cover image";

  return (
    <div className={cn("py-4 sm:py-6", className)}>
      <div className="group relative overflow-hidden rounded-xl bg-muted aspect-video">
        <Image
          src={src}
          alt={safeAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* subtle overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export default BlogDetailSection;
