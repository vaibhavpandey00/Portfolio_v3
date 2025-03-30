import { FloatingDock } from "@/components/floating-dock"

import { IconAddressBook, IconDeviceProjector, IconHome, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "About",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/about",
        },
        {
            title: "Projects",
            icon: (
                <IconDeviceProjector className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/projects",
        },
        {
            title: "Contact",
            icon: (
                <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/contact",
        },
    ];
    return <>
        <div className="font-blackRiver absolute text-3xl lg:text-4xl pt-4 md:pt-6 pl-5 lg:pl-10"> Vaibhav.</div>
            {children}
            <FloatingDock
                mobileClassName="translate-y-1"
                items={links}
            />
    </>
}

export default layout