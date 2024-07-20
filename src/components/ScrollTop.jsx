import React, { useEffect, useState } from 'react';
import Uparrow from '../assets/Uparrow.png';

function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 140) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {showScroll && (
                <img
                    src={Uparrow}
                    alt="Uparrow"
                    style={{ 
                        position: 'fixed', 
                        bottom: '30px', 
                        right: '15px', 
                        width: '30px', 
                        cursor: 'pointer' 
                    }}
                    onClick={scrollToTop}
                />
            )}
        </div>
    );
}

export default ScrollTop;
