"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger>
                <div className="w-16 flex justify-center">
                    <div className="lg:hidden text-jul-red">
                        <Menu />
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <span className="sr-only">
                    <SheetTitle>Hidden Sidebar Title</SheetTitle>
                </span>
                <Sidebar withSheetClose />
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
