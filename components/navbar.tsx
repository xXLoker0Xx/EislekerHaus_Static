import Image from "next/image";
import MobileSidebar from "./mobile-sidebar";
import { cn } from "@/libs/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const monserrat = Montserrat({ weight: "600", subsets: ["latin"] })

const Navbar = async () => {
    return (
        <div className="flex justify-between flex-wrap items-center p-2 bg-jul-white lg:hidden bg-opacity-95">
            <div className="relative w-16 h-16">
                <Link href="/home" className="relative block w-full h-full">
                    <Image
                        fill
                        alt="Logo"
                        src="/eisleken-logo.PNG"
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 64px), (min-width: 64px)"
                    />
                </Link>
            </div>
            <Link href="/home">
                <h1 className={cn("text-3xl font-bold text-jul-green", monserrat.className)}>
                    Eisleker Haus
                </h1>
            </Link>
            <MobileSidebar />
            <div className="flex w-full justify-end">
            </div>
        </div>
    );
}

export default Navbar;