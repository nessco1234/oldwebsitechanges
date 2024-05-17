import React, { useState, useEffect } from 'react';
import '../../Styles/Scroll.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollLevel, setScrollLevel] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            setScrollLevel(scrollPercent);
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button onClick={scrollToTop} className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
                <div>
                    <div className="scroll-top-inner visible">
                        <div className="scroll-bar">
                            <div className="bar-inner" style={{ width: `${scrollLevel}%` }}></div>
                        </div>
                        <div className="scroll-bar-text g_color">Go To Top</div>
                    </div>
                </div>
            </button>

        </>
    );
};

export default ScrollToTop;
