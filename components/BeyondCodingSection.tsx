import React, { useRef } from "react";
import { motion } from "framer-motion";
import { IoGameController } from "react-icons/io5";
import { FaMusic, FaHiking, FaBook, FaCamera } from "react-icons/fa";

const BeyondCodingSection = () => {
    // Create a reference to the container element
    const containerRef = useRef(null);

    // Hobby cards
    const hobbies = [
        { id: 1, name: "Gaming", icon: <IoGameController size={24} />, color: "bg-purple-200" },
        { id: 2, name: "Music", icon: <FaMusic size={24} />, color: "bg-blue-200" },
        { id: 3, name: "Hiking", icon: <FaHiking size={24} />, color: "bg-green-200" },
        { id: 4, name: "Reading", icon: <FaBook size={24} />, color: "bg-yellow-200" },
        { id: 5, name: "Photography", icon: <FaCamera size={24} />, color: "bg-red-200" },
    ];

    // Create predefined positions that ensure good distribution
    const positions = [
        { x: "15%", y: "20%" },   // top left
        { x: "70%", y: "15%" },   // top right
        { x: "40%", y: "50%" },   // center
        { x: "20%", y: "75%" },   // bottom left
        { x: "75%", y: "70%" },   // bottom right
    ];

    return (
        <>
            <div className="grid-block-items w-full h-1/6 text-accent text-xl font-semibold">
                <IoGameController />
                <h2 className="">Beyond Coding</h2>
            </div>
            <div className="w-full h-1/6 text-center text-sm text-accent">
                Interested in my hobbies? Here are some, I enjoy the most.
            </div>
            <div ref={containerRef} className="w-full h-4/6 relative overflow-hidden">
                {hobbies.map((hobby, index) => {
                    // Use predefined positions for better distribution
                    const position = positions[ index % positions.length ];

                    return (
                        <motion.div
                            key={hobby.id}
                            className={`absolute ${hobby.color} bg-gradient-to-r from-green-400 to-blue-400 p-4 rounded-lg shadow-md cursor-grab active:cursor-grabbing w-24 h-24 flex flex-col items-center justify-center`}
                            // Use predefined positions
                            style={{
                                left: position.x,
                                top: position.y,
                                margin: "-12px 0 0 -12px", // Center the element itself
                            }}
                            // Make it draggable
                            drag
                            // Constrain drag area to parent boundaries using the ref
                            dragConstraints={containerRef}
                            // Add some physics
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                            // Scale up slightly when dragged
                            whileDrag={{ scale: 1.1, zIndex: 10 }}
                            // Subtle hover effect
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-black mb-2">{hobby.icon}</div>
                            <div className="text-black text-sm font-medium text-center">{hobby.name}</div>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
};

export default BeyondCodingSection;