"use client";
import { FloatingDock } from "@/components/floating-dock"
import { motion } from "framer-motion";
import CustomCursor from "@/components/customCursor";
import { usePathname } from "next/navigation";

import { IconAddressBook, IconDeviceProjector, IconHome, IconUser } from "@tabler/icons-react";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
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

    const isPulse: boolean = usePathname() === "/";

    return <>
        <CustomCursor />
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-blackRiver absolute text-2xl sm:text-3xl lg:text-4xl pt-4 md:pt-6 pl-5 lg:pl-10"> Vaibhav.</motion.div>
        {children}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
            className="">
            <FloatingDock
                mobileClassName="translate-y-1"
                items={links}
                isPulse={isPulse}
            />
        </motion.div>
    </>
}

export default Layout