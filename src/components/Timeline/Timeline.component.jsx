import { useState, useEffect, useRef, useCallback } from "react";
import { style } from "./Timeline.style.js";
import { FirstFrame } from "./FirstFrame/FirstFrame.component.jsx";
import { SecondFrame } from "./SecondFrame/SecondFrame.component.jsx";

const  {
    Wrapper,
    StickyContainer
} = style;


export const Timeline = () => {

    const [isScrollingLeft, setIsScrollingLeft] = useState(false);
    const [y, setY] = useState(0);

    const stickyContainerRef = useRef();
    const wrapperRef = useRef();

    const updateWrapperSize = useCallback(() => {

        const stikyContainerHeight = stickyContainerRef.current.scrollWidth - 900;
        wrapperRef.current.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');

    }, []);

    const scrollHandler = useCallback(() => {

        const scrollY = window.scrollY;

        const startingPoint = wrapperRef.current.offsetTop;
        const endPoint = wrapperRef.current.offsetHeight;

        if (scrollY > startingPoint && scrollY < endPoint) {
            const currentPoint = scrollY - startingPoint;
            stickyContainerRef.current.scrollLeft = currentPoint;
        }

        if (y > scrollY) {
            setIsScrollingLeft(true);
            
        } else if (y < scrollY) {
            setIsScrollingLeft(false);
        }

        setY(scrollY);

    },[y]);

    useEffect(() => {

        setY(window.scrollY);
        updateWrapperSize();
    
        window.addEventListener("scroll", scrollHandler);
    
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    
    }, [scrollHandler, updateWrapperSize]);

    return(
        <Wrapper ref={wrapperRef}>
            <StickyContainer ref={stickyContainerRef} >
                <FirstFrame />
                <SecondFrame isScrollingBack={isScrollingLeft}/>
            </StickyContainer>
        </Wrapper>
    )
}