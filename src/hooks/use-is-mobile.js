import { useState, useEffect } from 'react';

const useIsMobile = (minWidth = 768) => {

    // Logic to reuse
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return width <= minWidth;
};

export default useIsMobile;