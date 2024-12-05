import { useState, useEffect } from "react";

const useIsMobileView = (): { isMobileView: boolean; windowWidth: number } => {
    const [isMobileView, setIsMobileView] = useState<boolean>(window.matchMedia("(max-width: 768px)").matches);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");

      const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        setIsMobileView(e.matches);
      };

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      setIsMobileView(mediaQuery.matches);
      handleResize();

      mediaQuery.addEventListener('change', handleMediaQueryChange);
      window.addEventListener('resize', handleResize);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return { isMobileView, windowWidth };
}

export default useIsMobileView;