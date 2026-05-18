"use client"

import { useState } from "react";
import Button from "./Button";

const subNavItems = ["Overview", "Solutions", "Customer Stories", "Integrations", "Resources", "What's New", "Getting Started"];

export default function SubNav({ openMobileNav }: { openMobileNav: boolean }) {
    const [activeSubNav, setActiveSubNav] = useState("");
    return (
        <div className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur-xl shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-14">

                <div className="scrollbar-hide flex min-w-0 flex-1 overflow-x-auto">
                    <div className="flex min-w-max items-center gap-8">
                        {subNavItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setActiveSubNav(item)}
                                className={`flex h-16 shrink-0 items-center border-b-2 text-sm font-medium transition-all duration-300  ${activeSubNav === item
                                    ? "border-blue-600 text-black"
                                    : "border-transparent text-slate-500 hover:text-black"
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button>Book a Demo</Button>
                </div>
            </div>
        </div>
    );
}