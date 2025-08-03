"use client";
import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic
import contactAnimation from "@/Assets/contactMee.json";
import { RxPaperPlane, RxReset } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

// Dynamically import the Lottie component with SSR turned off
const LottiePlayer = dynamic(() => import('lottie-react'), { ssr: false });

const Page = () => {
    return (
        <div className="h-screen w-full flex flex-col md:flex-row justify-center items-center p-5 gap-4">

            {/* Form Section */}
            <div className="flex flex-col justify-center items-center p-5 w-full md:h-4/6 lg:w-2/6 rounded-2xl glassmorphism ">
                <h3 className="flex w-full h-1/5 text-[#64ffda] text-2xl md:text-3xl mb-4 font-robotoMono font-semibold ">
                    Get In Touch
                </h3>
                <form className="flex flex-col h-full w-full gap-4 md:gap-6" action="https://formspree.io/f/mzbnkogd" method="POST">
                    <input className="bg-slate-600 text-accent font-inter font-semibold rounded-lg p-3" autoComplete='off' type="text" name="name" placeholder="Your Name" required />
                    <input className="bg-slate-600 text-accent font-inter font-semibold rounded-lg p-3" autoComplete='off' type="email" name="email" placeholder="Email" required />
                    <textarea className="bg-slate-600 text-accent font-inter font-semibold rounded-lg p-3" rows={10} name="message" placeholder="Your Message..." required />
                    <div className="flex w-full justify-between pl-5 pr-5">
                        <button className="flex items-center gap-2 bg-accent text-slate-900 font-inter font-semibold rounded-lg p-3" type="reset">Reset <RxReset /></button>
                        <button className="flex items-center gap-2 bg-accent text-slate-900 font-inter font-semibold rounded-lg p-3" type="submit">Send <RxPaperPlane /></button>
                    </div>
                </form>
            </div>

            {/* Social Media Section */}
            <div className="flex md:flex-col justify-center items-center gap-10 md:gap-12 w-full h-16 md:h-4/6 md:w-20 rounded-2xl glassmorphism ">
                <a href="mailto:vaibhav.pandey0798@gmail.com" className="">
                    <MdEmail className="text-4xl lg:cursor-pointer lg:hover:text-[#64ffda] hover:-translate-y-2 duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/vaibhavpandey0" className="">
                    <FaLinkedin className="text-4xl lg:cursor-pointer lg:hover:text-[#64ffda] hover:-translate-y-2 duration-300" />
                </a>
                <a href="https://www.github.com/vaibhavpandey00" className="">
                    <FaGithub className="text-4xl lg:cursor-pointer lg:hover:text-[#64ffda] hover:-translate-y-2 duration-300" />
                </a>
                <a href="https://www.instagram.com/vaibhavpandey0" className="">
                    <IoLogoInstagram className="text-4xl lg:cursor-pointer lg:hover:text-[#64ffda] hover:-translate-y-2 duration-300" />
                </a>
            </div>

            {/* Lottie Contact me SVG - now uses the dynamic component */}
            <div className="hidden lg:flex h-2/6 xl:h-2/4 ml-5 rounded-full">
                <LottiePlayer animationData={contactAnimation} loop={true} />
            </div>
        </div>
    );
}

export default Page;