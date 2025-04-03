"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const VerticalLeftContactSection = () => {
  const socialLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: 'https://instagram.com/yourusername',
      label: 'Instagram'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
      href: 'https://twitter.com/yourusername',
      label: 'Twitter'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      href: 'https://codepen.io/yourusername',
      label: 'CodePen'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
      className="hidden md:flex flex-col text-sm justify-end items-center gap-6 bg-transparent m-10 h-screen"
    >
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          aria-label={social.label}
          className="text-[#8892b0] h-7 hover:text-[#64ffda] hover:-translate-y-1 duration-300"
        >
          {social.icon}
        </Link>
      ))}

      {/* Vertical line */}
      <div className="w-px h-32 bg-[#8892b0]"></div>
    </motion.div>
  );
};

export const VerticalRightContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
      className="hidden md:flex flex-col justify-end items-center w-[100px] gap-6 h-screen">
      {/* Rotate this p tag 90 degrees clockwise */}
      <p className="font-robotoMono text-[#8892b0] text-base rotate-90 mb-32 hover:text-[#64ffda] hover:-translate-y-1 duration-300 lg:cursor-pointer">
        <a href="mailto:vaibhav.pandey0798@gamil.com">vaibhav.pandey0798@gamil.com</a>
      </p>

      {/* Vertical line */}
      <div className="w-px h-28 bg-[#8892b0]"></div>
    </motion.div>
  )
}


export default VerticalLeftContactSection;