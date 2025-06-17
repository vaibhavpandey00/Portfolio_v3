"use client";
import { motion } from "framer-motion";

const Hero = ({ resumeUrl }: { resumeUrl: string }) => {
  return (
    <div className="flex flex-col justify-center gap-2 md:gap-5 w-[1000px] h-screen p-5 md:p-0 mb-24 md:mb-0">

      {/* Hi, my name is */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }} // Starts below
        animate={{ opacity: 1, y: 0 }} // Moves up & fades in
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="font-robotoMono text-[#64ffda] text-sm md:text-[18px] w-full"
      >
        Hi, my name is
      </motion.h3>

      {/* Vaibhav Pandey */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="font-inter text-4xl md:text-6xl font-bold w-full text-[#ccd6f6]"
      >
        <span className="mr-3 hover:text-[#64ffda] cursor-pointer transition duration-300">Vaibhav</span>
        <span className="hover:text-[#64ffda] cursor-pointer transition duration-300">Pandey.</span>

      </motion.h1>

      {/* I build scalable web applications */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        className="font-inter text-4xl md:text-6xl font-bold w-full text-[#8892b0]"
      >
        I build scalable web applications.
      </motion.h1>

      {/* Short bio paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        className="font-inter md:w-3/5 mt-3 text-[#8892b0]"
      >
        I&apos;m a Full Stack Web Developer with a passion for creating innovative and user-friendly web applications.
        I have experience in building applications using React, Next.js, and Node.js.
        Currently working as a Software Engineer Intern at{" "}
        <a
          href="https://www.propero.in"
          target="_blank"
          className="md:cursor-pointer text-[#64ffda]"
        >
          Propero.
        </a>
      </motion.p>

      {/* Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
        className="mt-5"
      >
        <div className="flex justify-center items-center h-12 w-32 border-2 rounded-md border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:font-semibold cursor-pointer transition duration-300">
          <a href={resumeUrl} download="Vaibhav_Pandey_Resume.pdf" target="_blank" rel="noopener noreferrer"
          className="h-full w-full flex justify-center items-center"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
