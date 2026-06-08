import { SVGProps } from "react";

export const Dovetail = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="3" fill="#141414" />
    <path
      d="M8 3L13 6.5V9.5L8 13L3 9.5V6.5L8 3Z"
      stroke="white"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M5 7.5L8 9.5L11 7.5" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M8 9.5V13" stroke="white" strokeWidth="1.2" />
  </svg>
);
