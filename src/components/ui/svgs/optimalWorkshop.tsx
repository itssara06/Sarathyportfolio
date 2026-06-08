import { SVGProps } from "react";

export const OptimalWorkshop = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="3" fill="#FF6B35" />
    <circle cx="8" cy="7.5" r="2.5" fill="white" />
    <circle cx="8" cy="7.5" r="1" fill="#FF6B35" />
    <path d="M5 12.5C5 11.1 6.3 10 8 10C9.7 10 11 11.1 11 12.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
