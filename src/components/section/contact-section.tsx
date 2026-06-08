import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ArrowUpRight, Mail } from "lucide-react";

const EMAIL = "talktosarathy067@gmail.com";

export default function ContactSection() {

  return (
    <div className="relative rounded-2xl border overflow-hidden">
      {/* Background grid fading out downward */}
      <div className="absolute inset-0 pointer-events-none">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 text-center px-8 py-16 sm:py-20">
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Available for work
        </span>

        {/* Headline */}
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl leading-tight">
          Let&apos;s create something
          <br />
          <span className="text-muted-foreground">great together.</span>
        </h2>

        {/* Sub-text */}
        <p className="max-w-md text-muted-foreground text-balance leading-relaxed">
          Open to UI/UX projects, product design roles, freelance work and
          creative collaborations. Drop me a message — I&apos;d love to hear
          from you.
        </p>

        {/* Email CTA */}
        <Link
          href={`mailto:${EMAIL}`}
          className="group mt-2 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:gap-3 hover:shadow-lg"
        >
          <Mail className="size-4 shrink-0" />
          {EMAIL}
          <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        {/* Footer line */}
        <p className="mt-6 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Parthasarathy · Designed &amp; built with care
        </p>
      </div>
    </div>
  );
}
