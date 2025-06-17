"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { RiJavaLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import Image from "next/image";
import BeyondCodingSection from "./BeyondCodingSection";

interface Tool {
    id: number;
    name: string;
    logo: React.ReactNode;
}

export const LayoutGrid = () => {
    const mapImage = "https://drive.google.com/uc?export=view&id=1i3VXLt6FeUiz0aXoGyHVkdICHv5v1wE6";
    const [ containerWidth, setContainerWidth ] = useState(0);
    const toolsContainerRef = useRef<HTMLDivElement>(null);

    // Update width on resize
    useEffect(() => {
        const updateWidth = () => {
            if (toolsContainerRef.current) {
                setContainerWidth(toolsContainerRef.current.offsetWidth);
            }
        };

        // Initial width
        updateWidth();

        // Add resize listener
        window.addEventListener('resize', updateWidth);

        // Clean up
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const tools: Tool[] = [
        {
            id: 1,
            name: "JavaScript",
            logo: <TbBrandJavascript className="icons" />
        },
        {
            id: 2,
            name: "React",
            logo: <FaReact />
        },
        {
            id: 3,
            name: "Next.JS",
            logo: <TbBrandNextjs />
        },
        {
            id: 4,
            name: "Node.JS",
            logo: <IoLogoNodejs />
        },
        {
            id: 5,
            name: "C++",
            logo: <BiLogoCPlusPlus />
        },
        {
            id: 6,
            name: "Java",
            logo: <RiJavaLine />
        },
        {
            id: 7,
            name: "MySQL",
            logo: <GrMysql />
        },
        {
            id: 8,
            name: "MongoDB",
            logo: <SiMongodb />
        },
        {
            id: 9,
            name: "VSCode",
            logo: <VscVscodeInsiders />
        },
        {
            id: 10,
            name: "Postman",
            logo: <SiPostman />
        }
    ];

    const duplicatedTools: Tool[] = [ ...tools, ...tools ];

    return (
        <div className="w-full h-full p-7 overflow-scroll no-scrollbar grid sm:grid-cols-3 sm:grid-rows-8 gap-4">
            {/* My Reads */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}

            className="grid-block glassmorphism !h-[20rem] md:!h-full sm:row-span-4 rounded-3xl">
                <div className="grid-block-items w-full h-1/6 text-accent text-xl font-semibold">
                    <FaStar />
                    <h2 className="">My Reads</h2>
                </div>
                <div className="w-full h-1/6 text-center text-sm text-accent">
                    <h3 className="">Explore the book shapping my perspective</h3>
                </div>
                <div className="w-full h-4/6 flex items-center justify-center overflow-hidden">
                    <img src="/book.png" alt="Dopamin Detox" className="h-full" />
                </div>
            </motion.div>

            {/* My Tools */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            ref={toolsContainerRef} className="grid-block glassmorphism !h-[20rem] md:!h-full sm:col-span-2 sm:row-span-4 rounded-3xl">
                <div className="grid-block-items w-full h-1/6 text-accent text-xl font-semibold">
                    <FaTools />
                    <h2 className="">My Tools</h2>
                </div>
                <div className="w-full h-1/6 text-center text-sm text-accent">
                    Here are the tools and technologies i use to craft exceptional digital experiences.
                </div>
                <div className="flex flex-col justify-center items-center gap-5 w-full h-4/6">
                    {/* First row - right to left */}
                    <div className="relative w-full h-14 overflow-hidden">
                        <motion.div
                            className="absolute flex items-center gap-5"
                            animate={{
                                x: containerWidth > 0 ? [ 0, -containerWidth * 2 ] : [ 0, -1000 ]
                            }}
                            transition={{
                                duration: 45,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >
                            {duplicatedTools.map((tool, index) => (
                                <div
                                    key={`row1-${tool.id}-${index}`}
                                    className="tool whitespace-nowrap px-3 py-1 flex items-center"
                                >
                                    <div className="text-xl mr-1">{tool.logo}</div>
                                    <div className="text-sm">{tool.name}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Second row - left to right */}
                    <div className="relative w-full h-14 overflow-hidden">
                        <motion.div
                            className="absolute flex items-center gap-5"
                            animate={{
                                x: containerWidth > 0 ? [ -containerWidth * 2, 0 ] : [ -1000, 0 ]
                            }}
                            transition={{
                                duration: 40,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >
                            {duplicatedTools.map((tool, index) => (
                                <div
                                    key={`row2-${tool.id}-${index}`}
                                    className="tool whitespace-nowrap px-3 py-1 flex items-center"
                                >
                                    <div className="text-xl mr-1">{tool.logo}</div>
                                    <div className="text-sm">{tool.name}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Beyond Coding */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="grid-block glassmorphism !h-[20rem] md:!h-full sm:col-span-2 sm:row-span-4 sm:row-start-5 rounded-3xl">
                <BeyondCodingSection />
            </motion.div>

            {/* Map */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            className="flex justify-center items-center relative !h-[20rem] md:!h-full sm:row-span-4 sm:col-start-3 sm:row-start-5">
                <Image src={mapImage} alt="Map location" width={600} height={600} className="w-full h-full rounded-3xl" />
                <img src="/person.png" alt="Me" className="absolute z-99 h-14 rounded-full" />
            </motion.div>
        </div>
    );
};