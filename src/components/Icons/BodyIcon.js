export const ArrowLeft = ({
  className,
  width = "2.6rem",
  height = "2.6rem",
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={className}
    width={width}
    height={height}
    fill={color ? color : "currentColor"}
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    ></path>
  </svg>
);
export const ArrowRight = ({
  className,
  width = "2.6rem",
  height = "2.6rem",
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    width={width}
    height={height}
    style={{ color: color }}
  >
    <path
      d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"
      fill={color ? color : "currentColor"}
      stroke="currentColor"
    ></path>
  </svg>
);
