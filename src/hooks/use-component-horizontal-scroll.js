

import { useRef, useEffect } from "react";

export function useHorizontalScroll() {

    const elRef = useRef();

    useEffect(() => {

        const element = elRef.current;

        if (element) {

            const onWheel = (event) => {

                console.log(event);

                const deltaY = event.deltaY;
                

                if (deltaY === 0) return;

                if (
                    !(element.scrollLeft === 0 && deltaY < 0) &&
                    !(element.scrollWidth - element.clientWidth - Math.round(element.scrollLeft) === 0 &&
                        deltaY > 0)
                ) {
                    event.preventDefault();
                }

                element.scrollTo({
                    to: 0,
                    left: element.scrollLeft + deltaY,
                    behavior: "smooth"
                });

            };

            //TODO check browser compatibility for wheel
            element.addEventListener("wheel", onWheel);
            return () => element.removeEventListener("wheel", onWheel);
        }
    }, []);

    return elRef;
}