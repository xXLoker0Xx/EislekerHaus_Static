import React, { useEffect, useState } from "react";

// Define an interface for the floating element styles
interface FloatingElementStyle {
    backgroundColor: string;
    top: string;
    left: string;
    width: string;
    height: string;
    animationDuration: string;
    animationDelay: string;
}

const FloatingElements = () => {
    // Set the state with an explicit type
    const [elements, setElements] = useState<FloatingElementStyle[]>([]);

    useEffect(() => {
        const newElements = [...Array(8)].map((_, i) => ({
            backgroundColor: ['#fce7f3', '#dbeafe', '#fef3c7', '#d1fae5'][i % 4],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
        }));
        setElements(newElements);
    }, []); // Run this effect only once after the initial render

    return (
        <div>
            {elements.map((style, i) => (
                <div
                    key={i}
                    className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"
                    style={style}
                />
            ))}
        </div>
    );
};

export default FloatingElements;