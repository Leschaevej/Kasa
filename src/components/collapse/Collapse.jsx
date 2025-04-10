import React, { useState, useRef, useEffect } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isOpen && containerRef.current) {
            const timer = setTimeout(() => {
                const rect = containerRef.current.getBoundingClientRect();
                const scrollOffset = rect.bottom - window.innerHeight + 30;

                if (scrollOffset > 0) {
                    window.scrollBy({
                        top: scrollOffset,
                        behavior: 'smooth',
                    });
                }
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div ref={containerRef} className="collapse">
            <button className="header" onClick={toggleCollapse} aria-expanded={isOpen}>
                <h3>{title}</h3>
                <div className={`arrow ${isOpen ? 'open' : ''}`}>
                <i className="fa-solid fa-chevron-up"></i>
                </div>
            </button>
            <div className={`content ${isOpen ? 'open' : ''}`}>
                {content}
            </div>
        </div>
    );
}

export default Collapse;
