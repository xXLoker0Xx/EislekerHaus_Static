"use client";

import { cn } from "@/libs/utils";
import { BookA, ChevronsUpDown, Contact, Layers, LucideProps, NotebookPen, PersonStanding, TicketCheck } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "./ui/sheet"; // Assuming this is your custom close component
import React, { useState } from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
    {
        label: "Courses & Workshops",
        icon: BookA,
        href: "no",
        color: "text-jul-green",
        courses: [
            {
                title: "Pregnant & Couples",
                href: "/courses/pregnant&couples",
            },
            {
                title: "Parent & Kids",
                href: "/courses/parents&kids",
            },
            {
                title: "Parents",
                href: "/courses/parents",
            },
            {
                title: "Kids",
                href: "/courses/kids",
            },
            {
                title: "Grandparents",
                href: "/courses/grandparents",
            },
        ]
    },
    {
        label: "Who is Julie",
        icon: PersonStanding,
        href: "/julieoswald",
        color: "text-jul-green"
    },
    {
        label: "Previous Work",
        icon: Layers,
        href: "/previouswork",
        color: "text-jul-green"
    },
    {
        label: "Events",
        icon: TicketCheck,
        href: "/events",
        color: "text-jul-green"
    },
    {
        label: "Blog",
        icon: NotebookPen,
        href: "/blog",
        color: "text-jul-green"
    },
    {
        label: "Contact",
        icon: Contact,
        href: "/contact",
        color: "text-jul-green"
    },
];

interface SidebarProps {
    withSheetClose?: boolean;
    // Aquí puedes añadir más propiedades según sea necesario
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const [SheetCloseWrapper, shetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-jul-white">
            <div className="px-3 py-2 flex-1">
                <SheetCloseWrapper {...shetCloseWrapperProps}>
                    <Link href="/home" className="flex items-center pl-3 mb-10">
                        <div className="relative w-16 h-16 mr-4"> {/* Ensure this has 'relative' */}
                            <Image
                                fill
                                alt="Logo"
                                src="/eisleken-logo.PNG"
                                style={{ objectFit: 'cover' }} // Optional: maintain aspect ratio
                            />
                        </div>
                        <h1 className={cn("text-2xl font-bold text-jul-red", monserrat.className)}>
                            Eisleker Haus
                        </h1>
                    </Link>
                </SheetCloseWrapper>
                <div className="space-y-1">
                    {routes.map((route, index) => (
                        <CollapsibleCategory key={index} {...route} props={props} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

// Rest of your code remains unchanged...

interface CollapsibleCategoryProp {
    props: SidebarProps,
    label: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    href: string,
    color: string,
    courses?: { title: string, href: string }[]
}

const CollapsibleCategory = ({ props, label, icon, href, color, courses,

}: CollapsibleCategoryProp) => {
    const pathname = usePathname()

    const [SheetCloseWrapper, shetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    const isCoursePath = pathname.startsWith("/courses");

    const [isOpen, setIsOpen] = useState(isCoursePath);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
            <CollapsibleTrigger asChild className="w-full">
                {href !== "no" ? (
                    <SheetCloseWrapper {...shetCloseWrapperProps} key={label}>
                        <Link
                            href={href}
                            key={href}
                            className={cn("text-lg group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-jul-red hover:bg-jul-red/10 rounded-lg transition",
                                pathname === href ? "text-jul-red bg-jul-red/10" : "text-zinc-600"
                            )}
                        >
                            {React.createElement(icon, { className: cn("h-7 w-7 mr-3", pathname === href ? "text-jul-red" : color) })}

                            <div className="flex items-center flex-1">
                                {label}
                            </div>
                        </Link>
                    </SheetCloseWrapper>
                ) : (
                    <div
                        key={href}
                        className={cn(
                            "text-lg group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-jul-red hover:bg-jul-red/10 rounded-lg transition",
                            pathname === href ? "text-jul-red bg-jul-red/10" : "text-zinc-600"
                        )}
                    >
                        {React.createElement(icon, {
                            className: cn("h-7 w-7 mr-3", pathname === href ? "text-jul-red" : color),
                        })}

                        <div className="flex items-center flex-1">
                            {label}
                        </div>

                        <div className="flex items-center">
                            <ChevronsUpDown className="h-4 w-4" />
                        </div>
                    </div>
                )
                }
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
                {courses?.map((course, index) => (
                    <CourseLink key={index} {...course} props={props} />
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
};

interface CourseLinkProps {
    props: SidebarProps,
    title: string,
    href: string,
}

const CourseLink = ({
    props,
    title,
    href,
}: CourseLinkProps) => {
    const [SheetCloseWrapper, shetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    const pathname = usePathname()
    return (
        <SheetCloseWrapper {...shetCloseWrapperProps} key={title}>
            <Link
                href={href}
                key={href}
                className={cn("text-lg group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-jul-red hover:bg-jul-red/10 rounded-lg transition",
                    pathname === href ? "text-jul-red bg-jul-red/10" : "text-zinc-600"
                )}
            >
                <div className="items-center pl-6">
                    {title}
                </div>
            </Link>
        </SheetCloseWrapper>
    )
};