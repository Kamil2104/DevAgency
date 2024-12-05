import { useState, useEffect } from "react";

const useIsMobileView = (): boolean => {
    const [isMobileView, setIsMobileView] = useState<boolean>(window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");

      const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        setIsMobileView(e.matches);
      };

      setIsMobileView(mediaQuery.matches);

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }, []);

    return isMobileView;
}

export default useIsMobileView;