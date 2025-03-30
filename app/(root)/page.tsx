import VerticalLeftContactSection, { VerticalRightContactSection } from "@/components/verticalLineSection";

export default function Home() {
  const name = [ "Vaibhav", "Pandey." ];
  const resumeUrl = "https://docs.google.com/document/d/1i5c6WIUMJvwMYKm4JiN4SWTSD3G6EQ_65LEqnaceH_U/export?format=pdf";
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Main section - Hight of the Hero Section */}
        <div className="flex w-full h-full justify-between items-center lg:gap-5">
          <VerticalLeftContactSection />

          {/* Hero Section */}
          <div className="flex flex-col justify-center gap-2 md:gap-5 w-[1000px] h-screen p-5 md:p-0 mb-24 md:mb-0">
            <h3 className="font-robotoMono text-[#64ffda] text-sm md:text-[18px] w-full">Hi, my name is</h3>
            <h1 className="font-inter text-4xl md:text-6xl font-bold w-full text-[#ccd6f6]">
              {name.map((name: string, index: number) => (
                <span key={index} className="mr-2 hover:text-[#64ffda] cursor-pointer transition duration-300">{name}</span>
              ))}
            </h1>
            <h1 className="font-inter text-4xl md:text-6xl font-bold w-full text-[#8892b0]">I build scalable web applications.</h1>
            <p className="font-inter md:w-3/5 mt-3 text-[#8892b0]">
              {/* A short description of myself */}
              I'm a Full Stack Web Developer with a passion for creating innovative and user-friendly web applications.
              I have experience in building applications using React, Next.js, and Node.js.
              Currently working as a Software Engineer Intern at <a href="https://www.propero.in" target="_blank" className="md:cursor-pointer"><span className="text-[#64ffda]">Propero.</span></a>
            </p>

            <div className="mt-5">
              <div className="flex justify-center items-center h-12 w-32 border-2 rounded-md border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:font-semibold cursor-pointer transition duration-300 "><a href={resumeUrl} download="Vaibhav_Pandey_Resume.pdf" target="_blank" rel="noopener noreferrer" >Resume</a></div>
            </div>

          </div>

          <VerticalRightContactSection />
        </div>
      </div>

    </>
  );
}
