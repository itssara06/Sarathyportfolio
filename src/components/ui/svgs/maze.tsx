import { SVGProps } from "react";

export const Maze = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="3" fill="#6C3FD4" />
    <path
      d="M3 4H7V5.5H4.5V7.5H7V9H3V4ZM9 7H13V12H9V7ZM10.5 8.5V10.5H11.5V8.5H10.5ZM9 4H13V5.5H9V4Z"
      fill="white"
    />
  </svg>
);
