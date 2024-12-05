import React, { useEffect, useState } from "react";

import useIsMobileView from "../../../../../hooks/useIsMobileView";

import './styles/TextContent.css'

const TextContent: React.FC = () => {
  const { isMobileView } = useIsMobileView()

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollTop / (windowHeight * 0.8), 1);
      setScrollProgress(progress);
    };

    if (!isMobileView) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobileView]);

  return (
    <div className='textContent' style={{ transform: `translateX(${-scrollProgress * 100}%)` }}>
      {isMobileView
        ? <p> &lt; We are a AI development agency focused on bringing designs, brands, and products to life&nbsp;/&gt; </p>
        : <p> &lt; We are a AI development agency <br /> focused on bringing designs, <br /> brands, and products to life&nbsp;/&gt; </p>
      }
    </div>
  )
}

export default TextContent