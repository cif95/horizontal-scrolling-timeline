import { useEffect, useCallback } from "react";
import useIsMobile from "./use-is-mobile";



export const useHorizontalScroll = (containerRef, sectionsWrapperRef) => {

    const isMobile = useIsMobile();

    const scrollHandler = useCallback((event) => {

        if (isMobile) return;

        const scrollY = window.scrollY;
    
        const startingPoint = containerRef.current.offsetTop;
        const endPoint = containerRef.current.offsetHeight;
    
    
        if (scrollY > startingPoint && scrollY < endPoint) {
            
            const currentPoint = scrollY - startingPoint;
            sectionsWrapperRef.current.scrollLeft = currentPoint;

        }

    },[containerRef, isMobile, sectionsWrapperRef]);

    useEffect(() => {

    
        window.addEventListener("scroll", scrollHandler);
    
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    
    }, [scrollHandler]);

}