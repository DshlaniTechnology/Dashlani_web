import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorStyle, setCursorStyle] = useState(''); // State for cursor style
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        // GSAP animation for cursor movement
        gsap.to(cursorRef.current, {
            x: position.x,
            y: position.y,
            duration: 0.3,
            ease: "power4.OUT",
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [position]);

    useEffect(() => {
        // Elements that trigger style changes (images, buttons, etc.)
        const interactiveElements = document.querySelectorAll('img, button, a');

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', () => setCursorStyle('hover'));  // Add hover style
            el.addEventListener('mouseleave', () => setCursorStyle(''));       // Remove hover style
        });

        return () => {
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', () => setCursorStyle('hover'));
                el.removeEventListener('mouseleave', () => setCursorStyle(''));
            });
        };
    }, []);

    return (
        <div ref={cursorRef} className={`custom-cursor ${cursorStyle}`}></div>
    );
};

export default CustomCursor;
