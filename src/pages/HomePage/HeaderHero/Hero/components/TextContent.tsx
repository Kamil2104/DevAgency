import React, { useEffect, useState } from "react";

import './styles/TextContent.css'

const TextContent: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollTop / (windowHeight * 0.8), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='textContent' style={{ transform: `translateX(${-scrollProgress * 100}%)` }}>
      <p>&lt; We are a AI development agency <br /> focused on bringing designs, <br /> brands, and products to life&nbsp;/&gt;</p>
    </section>
  )
}

export default TextContent