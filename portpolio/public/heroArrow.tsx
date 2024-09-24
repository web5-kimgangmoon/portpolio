export const HeroArrow = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 8"
    strokeWidth="0.6"
    stroke="currentColor"
    aria-hidden="true"
    data-slot="icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.99 4.5 1.75 1.75m0 0 1.75-1.75m-1.75 1.75V1.75H4.49"
    ></path>
  </svg>
);
