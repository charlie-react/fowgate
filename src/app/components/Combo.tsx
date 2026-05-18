"use client"

import Header from "./Header";
import { useState } from "react";
import HomeHero from "./HomeHero";
import SubNav from "./Subnav";


export default function Combo({ openMobileNav, setOpenMobileNav }: { openMobileNav: boolean, setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>> }) {

 
    return (
        <>
            <Header openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav} />
            <HomeHero />
            <SubNav openMobileNav={openMobileNav} />
        </>
    )
}