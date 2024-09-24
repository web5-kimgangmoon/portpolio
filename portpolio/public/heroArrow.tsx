export const HeroArrow = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    data-slot="icon"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"
    ></path>
  </svg>
);
