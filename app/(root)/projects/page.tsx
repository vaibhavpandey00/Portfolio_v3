"use client";
import Image from "next/image";
import { Timeline } from '@/components/timeline'

const page = () => {
    const data = [
        {
            title: "April-2025",
            content: (
                <div>
                    <p className="text-accent text-sm md:text-lg font-normal mb-8">
                        Redesigned My Personal Portfolio Website to be more
                        responsive and user-friendly. With Next.JS 15
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1VhVvQKJuZnOuJMiZogR_QBHYV3NEHfxV"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border"
                        />
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1VXTnkI82TqxW9C0KB0NDGjBeZw4aYMpZ"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border"
                        />
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1QIixcQs5eAE-qGCjaP0tOjpMJ7z8df2z"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border"
                        />
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1bEGfmnUePROS_J55JpTCTJQRU5qEOFn9"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "March-2025",
            content: (
                <div>
                    <p className="text-accent text-sm md:text-lg font-normal mb-8">
                        Built and launched a Startup Platform with realtime ranking system and
                        live refreshing Statups fields. <a href="https://startup-plat.vercel.app/" target="_blank" className="md:cursor-pointer"><span className="text-[#64ffda]">Live Demo</span></a>
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1_DYZuy7Yyp_IZVocdXqQQXT2mwrdjfE_"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1Lpvdj3TWUpUBVPhpVUXkarY5ILJKY_5-"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://drive.google.com/uc?export=view&id=12c_pdRO8tz5eeBtapDC0UlUkm2SomtmS"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1-M1YSzcO9MnakRv3Q-po0lakZdNY54bs"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Changelogs",
            content: (
                <div>
                    <p className="text-accent text-sm md:text-lg font-normal mb-4">
                        ⚠️ Work in progress
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-accent text-xs md:text-sm">
                            🙇‍♂️ Sorry for the inconvenience
                        </div>
                        <div className="flex gap-2 items-center text-accent text-xs md:text-sm">
                            ☕ Developer is running on hopes and questionable amounts of coffee ☕
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1FO4XdRUL0Bz6Ojr0Mb8E3cCuiM_qP5pH"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    )
}

export default page