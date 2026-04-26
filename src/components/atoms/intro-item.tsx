import { cn } from "@/lib/utils"

export function IntroItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-4 font-mono text-sm", className)}
      {...props}
    />
  )
}

export function IntroItemIcon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex size-5 sm:size-7 shrink-0 items-center justify-center rounded-md border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background",
        "[&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-3 sm:[&_svg:not([class*='size-'])]:size-4",
        
        // smooth transitions
        "transition-all duration-300 ease-out",

        // hover glow + lift
        "hover:text-muted-foreground hover:ring-primary/30 hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:-translate-y-px",
        className
      )}
      {...props}
    />
  )
}

export function IntroItemContent({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-balance", className)} {...props} />
}

export function IntroItemLink({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn("underline-offset-4 hover:underline", className)}
      target="_blank"
      rel="noopener"
      {...props}
    />
  )
}
