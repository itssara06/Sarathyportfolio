/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { ProjectThumbnail } from "@/components/project-thumbnail";

function SlidingThumbnail({
  images,
  alt,
  contain,
}: {
  images: readonly string[];
  alt: string;
  contain?: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden bg-muted">
      {images.map((src, i) => (
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
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={cn(
                "block size-1.5 rounded-full transition-all duration-300",
                i === current ? "bg-white scale-125" : "bg-white/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  contain,
}: {
  src: string;
  alt: string;
  contain?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-64 md:h-80 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "w-full h-64 md:h-80 transition-all",
        contain ? "object-contain" : "object-cover"
      )}
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  slug?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  images?: readonly string[];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  slug,
  description,
  dates,
  tags,
  link,
  image,
  images,
  video,
  links,
  className,
}: Props) {
  const dest = slug ? `/projects/${slug}` : href || "#";

  return (
    <Link
      href={dest}
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="shrink-0 h-64 md:h-80">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <ProjectThumbnail
            images={images}
            image={image}
            alt={title}
            contain={slug === "3nethra-eci" || slug === "leap"}
          />
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold leading-tight">{title}</h3>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        </div>
        <div className="text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </Link>
  );
}
