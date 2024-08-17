import { useEffect, useRef, useState } from 'react';

function LazyLoadImage({ src, alt }) {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px',
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <img ref={imgRef} src={isVisible ? src : ''}
            alt={alt} style={{ minHeight: '200px', minWidth: '200px', backgroundColor: '#f0f0f0' }}
        />
    );
}

export default LazyLoadImage;
