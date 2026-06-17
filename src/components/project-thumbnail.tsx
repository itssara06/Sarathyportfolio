"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ProjectThumbnailProps {
  images?: readonly string[];
  image?: string;
  alt: string;
  contain?: boolean;
  className?: string;
}

export function ProjectThumbnail({
  images,
  image,
  alt,
  contain,
  className,
}: ProjectThumbnailProps) {
  const [current, setCurrent] = useState(0);
  const safeImages = images?.length ? images : image ? [image] : [];

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeImages.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [safeImages.length]);

  if (safeImages.length === 0) {
    return <div className={cn("w-full h-full bg-muted", className)} />;
  }

  if (safeImages.length === 1) {
    return (
      <img
        src={safeImages[0]}
        alt={alt}
        className={cn(
          "w-full h-full transition-all",
          contain ? "object-contain" : "object-cover",
          className
        )}
      />
    );
  }

  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-muted", className)}>
      {safeImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-700",
            contain ? "object-contain" : "object-cover",
            i === current ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <div className="absolute bottom-2 right-2 flex gap-1">
        {safeImages.map((_, i) => (
          <span
            key={i}
            className={cn(
              "block size-1.5 rounded-full transition-all duration-300",
              i === current ? "bg-white scale-125" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
