import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SectionHeading = ({
  title,
  subtitle,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn("space-y-1", className)}>
      
      {/* Title */}
      <h2 className="ml-3 text-2xl sm:text-3xl font-heading font-semibold tracking-tight text-foreground">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;