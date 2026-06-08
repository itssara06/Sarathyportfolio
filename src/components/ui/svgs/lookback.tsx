import { SVGProps } from "react";

export const Lookback = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="3" fill="#5B4BD5" />
    <circle cx="8" cy="8" r="4.5" stroke="white" strokeWidth="1.4" />
    <path d="M6.5 6L10.5 8L6.5 10V6Z" fill="white" />
  </svg>
);
