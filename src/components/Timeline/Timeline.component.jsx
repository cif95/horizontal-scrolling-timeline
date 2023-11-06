import { useEffect, useRef, useCallback } from "react";
import { style } from "./Timeline.style.js";
import { FirstFrame } from "./FirstFrame/FirstFrame.component.jsx";
import { SecondFrame } from "./SecondFrame/SecondFrame.component.jsx";

const  {
    Header,
    Wrapper,
    StickyContainer
} = style;


export const Timeline = () => {

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

    },[]);

    useEffect(() => {

        updateWrapperSize();
    
        window.addEventListener("scroll", scrollHandler);
    
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    
    }, [scrollHandler, updateWrapperSize]);

    return(
        <Wrapper ref={wrapperRef}>
            <Header />
            <StickyContainer ref={stickyContainerRef} >
                <FirstFrame/>
                <SecondFrame/>
            </StickyContainer>
        </Wrapper>
    )
}