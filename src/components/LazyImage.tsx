import { useState, useRef, useEffect } from "react";

// Shared observer instance to prevent memory leaks and performance lag
let observer: IntersectionObserver | null = null;
const listeners = new Map<Element, (entry: IntersectionObserverEntry) => void>();

const getObserver = () => {
    if (observer) return observer;

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const listener = listeners.get(entry.target);
            if (listener && entry.isIntersecting) {
                listener(entry);
            }
        });
    }, { rootMargin: '400px' }); // Adjusted to balance speed vs memory

    return observer;
};

const LazyImage = ({ src, className, alt, ...props }: any) => {
    const [inView, setInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = imgRef.current;
        if (!el) return;

        // callback when intersected
        const onIntersect = () => {
            setInView(true);
            listeners.delete(el);
            getObserver().unobserve(el);
        };

        listeners.set(el, onIntersect);
        getObserver().observe(el);

        return () => {
            listeners.delete(el);
            if (observer) observer.unobserve(el);
        };
    }, []);

    return (
        <div ref={imgRef} className={`w-full h-full relative overflow-hidden bg-slate-50 ${className?.includes('rounded') ? '' : ''}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-slate-100 animate-pulse" />
            )}
            {inView ? (
                <img
                    src={src}
                    alt={alt}
                    className={`${className} transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                    decoding="async"
                    {...props}
                />
            ) : null}
        </div>
    );
};

export default LazyImage;
