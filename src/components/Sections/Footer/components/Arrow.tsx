import React, { useState } from "react";
import "./styles/Arrow.css";

const Arrow: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const targetPosition = 0;
    const distance = startPosition - targetPosition;
    const duration = 1000;
    let startTime: number | null = null;

    const easeOutQuad = (t: number) => t * (2 - t);

    const scrollAnimation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easedProgress = easeOutQuad(progress);
      const scrollPosition = startPosition - distance * easedProgress;
      window.scrollTo(0, scrollPosition);

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  return (
    <div
      className="arrowIconContainer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        onClick={scrollToTop}
        width="123"
        height="123"
        viewBox="0 0 123 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`arrowIcon default ${isHovered ? "fadeOut" : "fadeIn"}`}
      >
        <rect
          x="0.5"
          y="0.5"
          width="122"
          height="122"
          rx="61"
          stroke="url(#paint0_linear_489_192)"
        />
        <path
          d="M61 82.1818L61 40.8181M61 40.8181L43.5 58.5454M61 40.8181L78.5 58.5454"
          stroke="#9DA9FE"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_489_192"
            x1="0"
            y1="61.5"
            x2="123"
            y2="61.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5E71FE" />
            <stop offset="0.465" stopColor="#7E8DFE" stopOpacity="0.99" />
            <stop offset="0.94" stopColor="#B8C1FF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        onClick={scrollToTop}
        width="123"
        height="123"
        viewBox="0 0 123 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`arrowIcon hovered ${isHovered ? "fadeIn" : "fadeOut"}`}
      >
        <rect
          x="0.5"
          y="0.5"
          width="122"
          height="122"
          rx="61"
          stroke="#F4F4F4"
        />
        <path
          d="M61 82.1819L61 40.8182M61 40.8182L43.5 58.5455M61 40.8182L78.5 58.5455"
          stroke="#F4F4F4"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Arrow;
