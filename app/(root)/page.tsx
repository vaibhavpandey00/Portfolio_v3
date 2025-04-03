"use client";
import VerticalLeftContactSection, { VerticalRightContactSection } from "@/components/verticalLineSection";
import Hero from "@/components/hero";

export default function Home() {

  const resumeUrl = "https://docs.google.com/document/d/1i5c6WIUMJvwMYKm4JiN4SWTSD3G6EQ_65LEqnaceH_U/export?format=pdf";
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Main section - Hight of the Hero Section */}
        <div className="flex w-full h-full justify-between items-center lg:gap-5">
          <VerticalLeftContactSection />

          {/* Hero Section */}
          <Hero resumeUrl={resumeUrl} />

          <VerticalRightContactSection />
        </div>
      </div>

    </>
  );
}
