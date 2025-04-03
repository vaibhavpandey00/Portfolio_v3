"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [ isVisible, setIsVisible ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
            onComplete(); // Notify parent that animation is done
        }, 3000); // Adjust duration as needed
    }, []);

    return (
        isVisible && (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50"
            >
                {/* The Text */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="absolute text-white text-5xl font-bold"
                >
                    Welcome to My Portfolio
                </motion.h1>

                <motion.div
                    initial={{ x: "-150%", y: 0 }}  // Start from left, no vertical movement
                    animate={{ x: "150%", y: 0 }}   // Move to right, keep y fixed
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute w-[5px] h-[120px] bg-white"
                    style={{
                        transform: "rotate(45deg)",  // Keep it tilted at 45 degrees
                    }}
                ></motion.div>

            </motion.div>
        )
    );
};

export default Preloader;
