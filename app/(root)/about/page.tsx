import { LayoutGrid } from "@/components/AboutGrid";

const page = () => {

  return <div className="flex flex-col xl:flex-row items-center justify-center w-full h-screen md:h-screen">

    <div className="flex flex-col items-center md:items-end mt-56 sm:mt-28 md:mt-14 pr-2 p-4 sm:p-0 text-center xl:w-2/6">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-inter font-bold text-accent mb-2">
        A <span className="text-[#64ffda]">Glimpse Into</span>  My World
      </h1>
      <p className="text-sm sm:text-base text-white/70">
        Learn more about who I am, what I do, and <span className="text-[#64ffda] font-mono ">what inspires me.</span>
      </p>
    </div>

    <div className="hidden md:flex justify-center items-center pl-2 w-5/6 lg:w-4/6 xl:w-3/6 h-2/3 lg:h-5/6">
      {/* Bento Grid */}
      <LayoutGrid />
    </div>

    <div className="flex md:hidden w-full h-full">
      <LayoutGrid />
    </div>
  </div>
}

export default page