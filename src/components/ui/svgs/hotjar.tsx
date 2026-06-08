import { SVGProps } from "react";

export const Hotjar = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="3" fill="#FD3A5C" />
    <path
      d="M8 2C6.5 4 5 5.5 5 7.5C5 8.5 5.3 9.2 5.8 9.8C5.9 9 6.2 8.4 6.7 8C6.6 9 7.2 9.9 7.2 9.9C7.9 9.1 8.1 8.1 7.8 7.4C8.4 7.9 8.6 8.6 8.4 9.4C9.2 8.6 9.5 7.6 9 6.6C9 6.6 8.5 7.1 7.8 7C8.4 5.7 8.3 3.7 8 2Z"
      fill="white"
    />
    <ellipse cx="8" cy="12.5" rx="2.2" ry="1" fill="white" opacity="0.5" />
  </svg>
);
