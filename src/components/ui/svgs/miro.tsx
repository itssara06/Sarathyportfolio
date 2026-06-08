import { SVGProps } from "react";

export const Miro = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="3" fill="#FFD02F" />
    <path
      d="M11.2 3.2H9.6L8 8.48 6.4 3.2H4.8L3.2 12.8H4.72L5.68 7.04 7.36 12.8H8.64L10.32 7.04 11.28 12.8H12.8L11.2 3.2Z"
      fill="#050038"
    />
  </svg>
);
