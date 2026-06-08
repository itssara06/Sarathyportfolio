import { SVGProps } from "react";

export const Protopie = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="3" fill="#161616" />
    <path d="M8 2L13.5 5.5V10.5L8 14L2.5 10.5V5.5L8 2Z" fill="url(#pp)" />
    <defs>
      <linearGradient id="pp" x1="2.5" y1="2" x2="13.5" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5C5C" />
        <stop offset="0.5" stopColor="#FF9D00" />
        <stop offset="1" stopColor="#7B61FF" />
      </linearGradient>
    </defs>
  </svg>
);
