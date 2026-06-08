"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DockIcon } from "@/components/magicui/dock";
import { DATA } from "@/data/resume";

const TO = DATA.contact.email;
const SUBJECT = encodeURIComponent("Hey Sarathy, let's work together!");
const BODY = encodeURIComponent(
  "Hi Sarathy,\n\nI came across your portfolio and would love to connect.\n\nHere's a bit about what I have in mind:\n\n[Your message here]\n\nLooking forward to hearing from you!\n\n[Your name]\n[Your contact]"
);

const EMAIL_APPS = [
  {
    name: "Gmail",
    href: `https://mail.google.com/mail/?view=cm&to=${TO}&su=${SUBJECT}&body=${BODY}`,
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "Outlook",
    href: `https://outlook.live.com/mail/0/deeplink/compose?to=${TO}&subject=${SUBJECT}&body=${BODY}`,
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72h.01q.26.15.33.44.07.29-.07.53zM9.5 7.72q.11-.2.24-.34.14-.15.35-.26.2-.1.46-.16.27-.06.58-.06.44 0 .75.14.31.14.51.37.21.22.32.53.1.3.1.64v3.06h-.86V8.23q0-.35-.1-.6-.1-.26-.27-.43-.18-.17-.41-.26-.24-.09-.53-.09-.29 0-.56.1-.27.09-.47.27-.19.18-.31.43-.11.25-.11.55v3.06h-.86V5.44h.86v2.28zm4.42 4.6q-.27 0-.52-.1-.25-.1-.43-.3-.18-.18-.29-.47-.1-.29-.1-.66V5.44h.86v5.27q0 .28.1.43.11.15.26.15h.18v.72q-.04.01-.06.01zm.24-5.44q0-.35.09-.65.1-.3.27-.53.18-.23.42-.37.25-.13.54-.13.3 0 .54.12.24.12.42.34.17.22.27.5.1.28.1.6v.32q0 .13-.05.19l-2.14.85q.18.41.51.62.32.22.71.22.26 0 .48-.1.22-.09.41-.25l.42.56q-.25.2-.58.32-.33.12-.73.12-.4 0-.74-.15-.34-.14-.59-.43-.25-.29-.39-.69-.14-.4-.14-.88zm.86-.17q.01-.46-.2-.73-.2-.28-.52-.28-.16 0-.3.07-.14.07-.25.19-.12.13-.19.3-.07.19-.07.4l1.53-.61-.01.66zm3.27 5.61q.45 0 .84-.16.38-.16.63-.45.25-.29.38-.7.13-.41.13-.9 0-.5-.13-.9-.14-.41-.38-.7-.26-.29-.63-.45-.39-.16-.84-.16-.46 0-.84.16-.38.16-.63.45-.25.29-.38.7-.14.4-.14.9 0 .49.14.9.13.41.38.7.25.29.63.45.38.16.84.16zm0-.8q-.27 0-.48-.1-.22-.11-.37-.3-.16-.19-.24-.45-.09-.26-.09-.57 0-.32.09-.57.08-.26.24-.45.15-.19.37-.3.21-.1.48-.1.27 0 .48.1.22.11.37.3.16.19.24.45.09.25.09.57 0 .31-.09.57-.08.26-.24.45-.15.19-.37.3-.21.1-.48.1zM11.05 21h10.7q.11 0 .2-.09.08-.09.08-.2v-8.64l-5.44 3.14q-.1.05-.2.05-.11 0-.2-.05l-5.14-2.97v8.47q0 .11.08.2.09.09.2.09zm12.09-9.88l-.37-.21-5.32 3.07-5.01-2.9-.4.23 5.41 3.13 5.69-3.32z" fill="#0078D4"/>
      </svg>
    ),
  },
  {
    name: "Yahoo Mail",
    href: `https://compose.mail.yahoo.com/?to=${TO}&subject=${SUBJECT}&body=${BODY}`,
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6h-3.6l-4.4 9.4L11.6 6H8l6.4 13-1.9 4H16l8-17z" fill="#6001D2"/>
      </svg>
    ),
  },
  {
    name: "Default Mail",
    href: `mailto:${TO}?subject=${SUBJECT}&body=${BODY}`,
    icon: <Mail className="size-4 text-muted-foreground" />,
  },
];

export function EmailPicker() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
          <Mail className="size-4" />
        </DockIcon>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        sideOffset={12}
        className="w-52 p-2 rounded-2xl border bg-card/95 backdrop-blur-xl shadow-xl"
      >
        <p className="text-xs font-semibold text-muted-foreground px-2 pb-2">Open with</p>
        <div className="flex flex-col gap-0.5">
          {EMAIL_APPS.map((app) => (
            <button
              key={app.name}
              onClick={() => {
                setOpen(false);
                if (app.name === "Default Mail") {
                  window.location.href = app.href;
                } else {
                  window.open(app.href, "_blank", "noopener,noreferrer");
                }
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors text-left"
            >
              {app.icon}
              {app.name}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
