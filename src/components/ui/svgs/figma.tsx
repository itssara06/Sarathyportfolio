import { SVGProps } from "react";

export const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 4C0 1.79 1.79 0 4 0H8V8H4C1.79 8 0 6.21 0 4Z" fill="#F24E1E" />
    <path d="M8 0H12C14.21 0 16 1.79 16 4C16 6.21 14.21 8 12 8H8V0Z" fill="#FF7262" />
    <path d="M0 12C0 9.79 1.79 8 4 8H8V16H4C1.79 16 0 14.21 0 12Z" fill="#A259FF" />
    <circle cx="12" cy="12" r="4" fill="#1ABCFE" />
    <circle cx="4" cy="20" r="4" fill="#0ACF83" />
  </svg>
);
