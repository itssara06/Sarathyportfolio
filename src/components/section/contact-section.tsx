import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "talktosarathy067@gmail.com";

export default function ContactSection() {
  return (
    <footer className="rounded-2xl border border-border overflow-hidden">
      {/* CTA area */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 pointer-events-none">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative flex flex-col items-center text-center gap-4 px-8 pt-16 pb-12">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Available for work
          </span>

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl leading-tight">
            Let&apos;s work together.
          </h2>

          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
            Open to product design roles, freelance projects, and creative collaborations.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group mt-2 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            {EMAIL}
            <ArrowUpRight className="size-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-center border-t border-border px-8 py-4">
        <p className="text-xs text-muted-foreground">
          Designed &amp; built with ❤️
        </p>
      </div>
    </footer>
  );
}
