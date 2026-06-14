"use client";

import { Mail } from "lucide-react";
import { DockIcon } from "@/components/magicui/dock";
import { DATA } from "@/data/resume";

const TO = DATA.contact.email;
const SUBJECT = "Let%27s%20work%20together%21";

export function EmailPicker() {
  return (
    <a
      href={`mailto:${TO}?subject=${SUBJECT}`}
      className="flex items-center justify-center"
    >
      <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
        <Mail className="size-4" />
      </DockIcon>
    </a>
  );
}
