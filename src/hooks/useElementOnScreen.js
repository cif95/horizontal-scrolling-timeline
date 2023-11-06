import { useState, useRef, useEffect } from 'react';


/**
 * This hook checks if provided ref DOM target is on screen following provided options
 * @param {Element} parent - Wrapper DOM Element of target DOM Element
 * @param {string} parentMargin - Intersection observer margin of parent Element
 * @param {number} targetThreshold - Intersection observer ratio of intersection area relative to total bounding box area
 * @returns {[MutableRefObject, boolean]} [targetRef, isTargetOnScreen] the targetRef is to use in target DOM Element that we want to observe
 */
const useElementOnScreen = ( parent=null, parentMargin='0px', targetThreshold=1.0 ) => {

    const [isTargetOnScreen, setIsTargetOnScreen] = useState(false);
    const targetRef = useRef(null);

    const intersectionHandler = (entries, _) => {

        const [ entry ] = entries;
        setIsTargetOnScreen(entry?.isIntersecting);
    };

    useEffect(() => {

        const targetCurrentRefSupp = targetRef?.current;
        const hasIOSupport = !!window.IntersectionObserver;
        
        if (!targetCurrentRefSupp || !hasIOSupport) {
            return;
        }

        const intersectionObserverOptions = {
            
            root: parent,
            rootMargin: parentMargin,
            threshold: targetThreshold
        };

        const observer = new IntersectionObserver(intersectionHandler, intersectionObserverOptions);
        observer.observe(targetCurrentRefSupp);

        // disconnect all observers
        return () => observer.disconnect();

    }, [targetRef, parent, parentMargin, targetThreshold]);

    return [targetRef, isTargetOnScreen];
};

export default useElementOnScreen;
