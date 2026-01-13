import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for efficient scroll-triggered animations
 * Uses Intersection Observer API for performance
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visibility (0-1)
 * @param {string} options.rootMargin - Margin around root element
 * @param {boolean} options.triggerOnce - Only trigger once (default: true)
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, isIntersecting]
 */
export const useIntersectionObserver = ({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
} = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const target = targetRef.current;

        if (!target) return;

        // If already triggered and triggerOnce is true, don't observe
        if (triggerOnce && hasTriggered) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementIntersecting = entry.isIntersecting;

                setIsIntersecting(isElementIntersecting);

                if (isElementIntersecting && triggerOnce) {
                    setHasTriggered(true);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(target);

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [threshold, rootMargin, triggerOnce, hasTriggered]);

    return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
