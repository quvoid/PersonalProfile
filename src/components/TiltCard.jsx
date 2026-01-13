import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = "" }) => {
    const ref = useRef(null);

    // Mouse position relative to the card
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the tilt
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Rotate the card based on mouse position
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Glare effect movement
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXRel = e.clientX - rect.left;
        const mouseYRel = e.clientY - rect.top;

        // Calculate percentage (-0.5 to 0.5)
        const xPct = (mouseXRel / width) - 0.5;
        const yPct = (mouseYRel / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative transition-transform duration-200 ease-linear ${className}`}
        >
            {/* 3D Depth effect */}
            <div style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>

            {/* Glare Overlay */}
            <motion.div
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`,
                    opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.4]), // Only show glare when interacting
                    zIndex: 10
                }}
                className="absolute inset-0 rounded-xl pointer-events-none mix-blend-overlay"
            />
        </motion.div>
    );
};

export default TiltCard;
