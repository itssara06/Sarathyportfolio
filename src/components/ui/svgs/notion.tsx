import { SVGProps } from "react";

export const Notion = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="2.5" fill="white" />
    <path
      d="M2.5 2.8C2.5 2.8 3.3 3.46 4.2 3.46H11.8C12.62 3.46 13.5 2.8 13.5 2.8V13.2C13.5 13.2 12.62 12.54 11.8 12.54H4.2C3.3 12.54 2.5 13.2 2.5 13.2V2.8Z"
      fill="white"
    />
    <path
      d="M4.5 4.5L10.5 4.5M4.5 4.5L4.5 11.5M4.5 4.5L10.5 11.5"
      stroke="#37352F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
