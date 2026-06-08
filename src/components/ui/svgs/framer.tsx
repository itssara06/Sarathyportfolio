import { SVGProps } from "react";

export const Framer = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0H16V8H8L16 16H8V24L0 16V8H8L0 0Z" fill="#0055FF" />
  </svg>
);
