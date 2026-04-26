"use client";
import Image from "next/image";

type ImageBlockProps = {
  media: {
    url: string;
    alt?: string;
  };
};

const ImageBlock = ({ media }: ImageBlockProps) => {
  if (!media?.url) return null;

  const altText = media.alt?.trim() || "Article image";

  return (
    <div className="relative pb-8">

      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <Image
          src={media.url}
          alt={altText}
          loading="lazy"
          decoding="async"
          className="w-full aspect-video object-cover rounded-xl block"
          onError={(e) => {
            e.currentTarget.src = "/fallback-image.jpg";
          }}
        />
      </div>

      {/* Caption (same as VideoBlock) */}
      {media.alt?.trim() && (
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-sm text-muted-foreground/70 leading-relaxed max-w-[65ch] mx-auto px-2">
          {media.alt}
        </p>
      )}
    </div>
  );
};

export default ImageBlock;