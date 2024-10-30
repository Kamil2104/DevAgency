import React from "react";

const BackgroundTransition: React.FC = () => {
  return (
    <svg
      className="backgroundTransition"
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1440" height="100" fill="url(#paint0_linear_446_258)" />
      <defs>
        <linearGradient
          id="paint0_linear_446_258"
          x1="720"
          y1="0"
          x2="720"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#131313" stopOpacity="0" />
          <stop offset="1" stopColor="#131313" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackgroundTransition;
