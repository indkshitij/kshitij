"use client";

type VideoBlockProps = {
  media?: {
    url?: string;
    poster?: string;
    alt?: string;
  };
};

const VideoBlock = ({ media }: VideoBlockProps) => {
  if (!media?.url) return null;

  return (
    <div className="relative  pb-8">
      
      {/* Video */}
      <div className="overflow-hidden rounded-xl ">
        <video
          src={media.url}
          poster={media.poster || "/fallback-image.jpg"}
          controls
          preload="metadata"
          playsInline
          className="w-full aspect-video object-cover rounded-xl"
          onError={(e) => {
            e.currentTarget.poster = "/fallback-image.jpg";
          }}
        />
      </div>

      {/* Caption */}
      {media.alt?.trim() && (
        <p className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-sm text-muted-foreground/70 leading-relaxed max-w-[65ch] mx-auto px-2">
          {media.alt}
        </p>
      )}
    </div>
  );
};

export default VideoBlock;