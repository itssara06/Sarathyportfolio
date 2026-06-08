import { SVGProps } from "react";

export const UserTesting = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="3" fill="#1B2548" />
    <circle cx="8" cy="6" r="2.2" fill="white" />
    <path
      d="M3.5 13C3.5 10.5 5.5 8.5 8 8.5C10.5 8.5 12.5 10.5 12.5 13"
      stroke="white"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);
