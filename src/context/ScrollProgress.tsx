import { createContext, useState, useEffect, ReactNode } from "react";

import useIsMobileView from "../hooks/useIsMobileView";

export const ScrollProgressContext = createContext({ scrollProgress: 0 });

export const ScrollProgressProvider = ({ children }: { children: ReactNode }) => {
    const { isMobileView } = useIsMobileView()

    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const progress = Math.min(scrollTop / (windowHeight * 0.8), 1);

        requestAnimationFrame(() => setScrollProgress(progress));
    }

    useEffect(() => {
        if (isMobileView) {
            setScrollProgress(0)
            window.removeEventListener("scroll", handleScroll)
        } else {
            if (scrollProgress == 0) {
                const progress = Math.min(window.scrollY / (window.innerHeight * 0.8), 1)
                setScrollProgress(progress)
            }

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [isMobileView, scrollProgress])

    return (
        <ScrollProgressContext.Provider value={{ scrollProgress }}>
            {children}
        </ScrollProgressContext.Provider>
    );
};