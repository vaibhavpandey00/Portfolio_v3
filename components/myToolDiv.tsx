"use client";
import React from 'react'
import { motion } from "framer-motion"

interface Tool {
    id: number;
    name: string;
    logo: React.ReactNode;
}

const MyToolDiv = ({ duplicatedTools, toolsLength }: { duplicatedTools: Tool[], toolsLength: number }) => {
    return <div className="flex flex-col justify-center items-center gap-8 overflow-hidden w-full h-4/6 border">
        {/* First row - right to left */}
        <motion.div
            className="flex justify-center items-center gap-5 w-full"
            animate={{
                x: [ 0, -50 * toolsLength ],
            }}
            transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            }}
        >
            {duplicatedTools.map((tool, index) => (
                <div
                    key={`row1-${tool.id}-${index}`}
                    className="tool min-w-max px-4 py-2 flex items-center justify-center"
                >
                    <div className="text-2xl">{tool.logo}</div>
                    <div className="">{tool.name}</div>
                </div>
            ))}
        </motion.div>

        {/* Second row - left to right */}
        <motion.div
            className="flex justify-center items-center gap-5 w-full"
            animate={{
                x: [ -50 * toolsLength, 0 ],
            }}
            transition={{
                duration: 25, // Slightly different speed for visual interest
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            }}
        >
            {duplicatedTools.map((tool, index) => (
                <div
                    key={`row2-${tool.id}-${index}`}
                    className="tool min-w-max px-4 py-2 flex items-center justify-center"
                >
                    <div className="text-2xl">{tool.logo}</div>
                    <div className="">{tool.name}</div>
                </div>
            ))}
        </motion.div>
    </div>
}

export default MyToolDiv