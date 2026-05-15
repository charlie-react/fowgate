"use client";

import { Stagger, StaggerItem, Reveal } from "@/app/components/motion-wrapper"
import * as Accordion from "@radix-ui/react-accordion";
import Button from "@/app/components/Button"
import { useState } from "react";
import { ChevronDown, CheckCircleIcon } from "lucide-react";
import Header from "@/app/components/Header";
import MobileNav from "@/app/components/MobileNav";
import Footer from "@/app/components/Footer";
const tabs = ["Multi Business Entity", "Productivity Tools", "Data Management", "Human Capital Management", "Integration"];

const features = [
    {
        url: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80",
        title: "The Ultimate Guide to Cloud ERP Transformation for Modern Businesses",
        description: "A comprehensive resource that walks organizations through the journey of adopting a Cloud ERP, including benefits, implementation roadmap, change management strategies, ROI timelines, and how Fowgate ERP accelerates digital transformation.",
        buttonText: "View Whitepaper"
    },
    {
        url: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80",
        title: "The Ultimate Guide to Cloud ERP Transformation for Businesses",
        description: "A comprehensive resource that walks organizations through the journey of adopting a Cloud ERP, including benefits, implementation roadmap, change management strategies, ROI timelines, and how Fowgate ERP accelerates digital transformation.",
        buttonText: "Learn More"
    },
    {
        url: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80",
        title: "The Ultimate Guide to Cloud ERP Transformation for Modern Businesses in 2026",
        description: "A comprehensive resource that walks organizations through the journey of adopting a Cloud ERP, including benefits, implementation roadmap, change management strategies, ROI timelines, and how Fowgate ERP accelerates digital transformation.",
        buttonText: "See Analyst Report/Comparison Guide"
    },
]
const items = [
    {
        title: "Unified Business Operations in One ERP Platform",
        description: "Integrate all your core business functions into a single, intelligent platform for seamless operations and real-time insights."
    },
    {
        title: "Intelligent Process Automation for Efficiency",
        description: "Leverage AI to automate routine tasks, optimize workflows, and make data-driven decisions for increased efficiency and agility."
    },
    {
        title: "Scalable ERP Solutions for Multi-Business Entities",
        description: "Easily scale your operations with flexible cloud-based solutions that grow with your business needs."
    },
    {
        title: "Real-Time Insights with AI-Powered Analytics",
        description: "Gain actionable insights with advanced analytics and reporting tools that help you make informed decisions and drive business growth."
    },
]
const items2 = [
    {
        title: "Identify and Eliminate Bottlenecks with AI-Driven Process Analysis",
        description: "Integrate all your core business functions into a single, intelligent platform for seamless operations and real-time insights."
    },
    {
        title: "Smart Process Automation for Efficiency",
        description: "Leverage AI to automate routine tasks, optimize workflows, and make data-driven decisions for increased efficiency and agility."
    },
    {
        title: "Industry-Specific Scalable ERP Solutions for Multi-Business Entities",
        description: "Easily scale your operations with flexible cloud-based solutions that grow with your business needs."
    },
    {
        title: "Predictive Insights with AI-Powered Analytics",
        description: "Gain actionable insights with advanced analytics and reporting tools that help you make informed decisions and drive business growth."
    }
]
const items3 = [
    {
        title: "Real-Time Inventory Tracking",
        description: "Track and control stock levels, stock movement, barcode-enabled management, and valuation across locations and warehouses"
    },
    {
        title: "Smart Procurement & Supplier Management",
        description: "Automate purchase requisitions, approvals, and supplier management to enhance procurement efficiency and reduce purchase-related risks."
    },
    {
        title: "Scalable ERP Solutions for Multi-Business Entities",
        description: "Easily scale your operations with flexible cloud-based solutions that grow with your business needs."
    },
    {
        title: "Real-Time Insights with AI-Powered Analytics",
        description: "Gain actionable insights with advanced analytics and reporting tools that help you make informed decisions and drive business growth."
    },
]
const items4 = [
    {
        title: "ATS, Recruitment & Onboarding",
        description: "Attract, hire, and onboard top talent through a comprehensive recruitment lifecycle that includes job posting, applicant tracking, candidate selection, interview scheduling, and onboarding checklists for a smooth employee experience."
    },
    {
        title: "Centralized Employee Data & Workforce Management",
        description: "Manage a comprehensive and organized employee information, performance data, team appraisals/performance, and HR activities in a secure centralized"
    },
    {
        title: "Scalable ERP Solutions for Multi-Business Entities",
        description: "Easily scale your operations with flexible cloud-based solutions that grow with your business needs."
    },
    {
        title: "Real-Time Insights with AI-Powered Analytics",
        description: "Gain actionable insights with advanced analytics and reporting tools that help you make informed decisions and drive business growth."
    },
]
const items5 = [
    {
        title: "Standard Operations in One ERP Platform",
        description: "Integrate all your core business functions into a single, intelligent platform for seamless operations and real-time insights."
    },
    {
        title: "Automation for Efficiency",
        description: "Leverage AI to automate routine tasks, optimize workflows, and make data-driven decisions for increased efficiency and agility."
    },
    {
        title: "Scalable ERP Solutions for Multi-Business Entities",
        description: "Easily scale your operations with flexible cloud-based solutions that grow with your business needs."
    },
    {
        title: "Real-Time Insights with AI-Powered Analytics",
        description: "Gain actionable insights with advanced analytics and reporting tools that help you make informed decisions and drive business growth."
    },
]
const innovateFeatures = [
    {
        title: "Unified Business Operations in One ERP Platform",
        description: "Integrate all your core business functions into a single, intelligent platform for seamless operations and real-time insights."
    },
    {
        title: "Intelligent Process Automation for Efficiency",
        description: "Leverage AI to automate routine tasks, optimize workflows, and make data-driven decisions for increased efficiency and agility."
    },
    {
        title: "Scalable ERP Solutions for Multi-Business Entities",
        description: "Easily scale your operations with flexible cloud-based solutions that grow with your business needs."
    },
    {
        title: "Real-Time Insights with AI-Powered Analytics",
        description: "Gain actionable insights with advanced analytics and reporting tools that help you make informed decisions and drive business growth."
    },

]

function Hero() {
    return (
        <section className="bg-[#bfcfffc9]">
            <div className="max-w-7xl flex flex-col px-6 py-24 lg:px-12   mx-auto">
                <Stagger className="max-w-3xl">
                    <StaggerItem>
                        <h1 className="text-balance text-xl font-medium leading-[1.02] tracking-tight md:text-2xl lg:text-4xl">
                            Cloud ERP

                        </h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="mt-8 tracking-tight max-w-2xl text-base sm:text-lg lg:text-xl sm:leading-8 leading-7 text-gray-600">
                            Streamline your business processes with Fowgate Cloud ERP integrating finance, operations, HR, and supply chain into one intelligent platform for higher efficiency and control.</p>
                    </StaggerItem>

                    <StaggerItem>
                        <button className="mt-8 rounded-md bg-blue-600 px-4 py-3 text-sm text-white shadow-sm hover:bg-blue-700 focus-visible:outlinefocus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300 cursor-pointer">
                            Request a Demo
                        </button>
                    </StaggerItem>
                </Stagger>
            </div>

        </section>
    )
}

function Innovate() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl flex flex-col px-6 py-24 lg:px-12 lg:py-32  mx-auto">
                <Stagger className="max-w-5xl">
                    <StaggerItem>
                        <h2 className="text-balance w-full text-3xl font-medium tracking-tight md:text-4xl">
                            Innovate Faster with a Smart Business Suite
                        </h2>
                    </StaggerItem>
                    <StaggerItem className="mt-12 grid items-start justify-center gap-14 md:grid-cols-2">

                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80"
                            className="h-97 w-full rounded-4xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                        />

                        <div className="space-y-8">

                            {innovateFeatures.map((feature) => (

                                <div
                                    key={feature.title}
                                    className="max-w-3xl lg:max-w-7xl"
                                >
                                    <p className="text-lg leading-9 text-slate-600 lg:text-[18px]">

                                        <span className="font-semibold tracking-tight text-slate-900">
                                            {feature.title}:
                                        </span>{" "}

                                        {feature.description}

                                    </p>
                                </div>

                            ))}

                        </div>

                    </StaggerItem>
                </Stagger>

                <div className="mt-20 overflow-hidden rounded-md bg-blue-600">
                    <div className="flex flex-col gap-10 px-8 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-14">

                        <div className="max-w-4xl text-center">


                            <h3 className="text-2xl md:text-start font-semibold leading-tight tracking-tight sm:text-3xl">
                                Jan 28th: Implementing Cloud ERP in Your Business
                            </h3>

                            <p className="mt-5 max-w-3xl md:text-start text-base leading-8 text-white/80 sm:text-lg">
                                Discover how you can unlock agility, scalability and operational
                                excellence across every department with AI-powered cloud ERP
                                solutions.
                            </p>
                        </div>

                        <div className="shrink-0 mx-auto">
                            <Button variant="light">
                                Register Now
                            </Button>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

function Explore() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const currentItems = tabs.find((tab) => tab === activeTab);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <section className="bg-white">
            <div className="max-w-7xl flex flex-col px-6 py-24 lg:px-12 lg:py-32  mx-auto">
                <Stagger className="max-w-5xl">
                    <StaggerItem>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-balance w-full text-3xl font-medium tracking-tight md:text-4xl">
                                Explore Fowgate Cloud ERP Capabilities
                            </h2>
                            <p className="text-lg max-w-3xl leading-7 text-gray-800/80">
                                Streamline processes, reduce costs, and accelerate growth, giving leaders control and confidence in every decision.
                            </p>
                        </div>
                    </StaggerItem>
                </Stagger>

                <Stagger className="mt-12 hidden md:flex items-start gap-3 overflow-x-auto scrollbar-hide border-b border-black/10 ">
                    {tabs.map((tab) => (
                        <StaggerItem key={tab}>
                            <button
                                className={`shrink-0 px-5 py-12 text-sm font-medium transition cursor-pointer ${tab === activeTab
                                    ? "bg-blue-600 text-white"
                                    : " text-slate-600 hover:text-blue-600"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        </StaggerItem>
                    ))}
                </Stagger>
                <Stagger className="relative mt-12 flex items-center justify-between gap-3 md:hidden">

                    <div className="">
                        <h3 className="text-lg border-b-2 border-blue-600">
                            {activeTab}
                        </h3>
                    </div>

                    <div
                        className="flex cursor-pointer items-center rounded-md border-2 border-blue-600 px-2 py-1"
                        onClick={() => setOpenMenu((prev) => !prev)}
                    >
                        <p className="text-blue-600">
                            More
                        </p>

                        <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${openMenu ? "rotate-180" : ""
                                }`}
                        />
                    </div>

                    {openMenu && (
                        <div className="absolute right-0 top-14 z-50 rounded-md border border-slate-200 bg-white p-4 text-black shadow-lg">

                            {tabs.map((tab) => (
                                <p
                                    key={tab}
                                    className="cursor-pointer rounded-md px-4 py-2 hover:bg-slate-100"
                                    onClick={() => {
                                        setActiveTab(tab);
                                        setOpenMenu(false);
                                    }}
                                >
                                    {tab}
                                </p>
                            ))}

                        </div>
                    )}

                </Stagger>
                {currentItems === "Multi Business Entity" && (
                    <Stagger className="mt-12 grid items-start justify-center gap-14 md:grid-cols-2">

                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80"
                            className="h-97 w-full rounded-4xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                        />

                        <div className="space-y-8">

                            {items.map((feature) => (

                                <div
                                    key={feature.title}
                                    className="max-w-3xl lg:max-w-7xl"
                                >
                                    <p className="text-lg leading-9 text-slate-600 lg:text-[18px]">

                                        <span className="font-semibold tracking-tight text-slate-900">
                                            {feature.title}:
                                        </span>{" "}

                                        {feature.description}

                                    </p>
                                </div>

                            ))}
                            <div className="px-2 py-2 w-[350px] items-center justify-center flex bg-white/70 text-blue-600 hover:bg-gray-400/50 rounded-md border cursor-pointer">
                                <span>
                                    Learn More About Financial Management
                                </span>
                            </div>

                        </div>

                    </Stagger>)}

                {currentItems === "Productivity Tools" && (
                    <Stagger className="mt-12 grid items-start justify-center gap-14 md:grid-cols-2">

                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80"
                            className="h-97 w-full rounded-4xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                        />

                        <div className="space-y-8">

                            {items2.map((feature) => (

                                <div
                                    key={feature.title}
                                    className="max-w-3xl lg:max-w-7xl"
                                >
                                    <p className="text-lg leading-9 text-slate-600 lg:text-[18px]">

                                        <span className="font-semibold tracking-tight text-slate-900">
                                            {feature.title}:
                                        </span>{" "}

                                        {feature.description}

                                    </p>
                                </div>

                            ))}
                            <div className="px-2 py-2 w-[350px] items-center justify-center flex bg-white/70 text-blue-600 hover:bg-gray-400/50 rounded-md border cursor-pointer">
                                <span>
                                    Learn More About Financial Management
                                </span>
                            </div>

                        </div>

                    </Stagger>)}

                {currentItems === "Data Management" && (
                    <Stagger className="mt-12 grid items-start justify-center gap-14 md:grid-cols-2">

                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80"
                            className="h-97 w-full rounded-4xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                        />

                        <div className="space-y-8">

                            {items3.map((feature) => (

                                <div
                                    key={feature.title}
                                    className="max-w-3xl lg:max-w-7xl"
                                >
                                    <p className="text-lg leading-9 text-slate-600 lg:text-[18px]">

                                        <span className="font-semibold tracking-tight text-slate-900">
                                            {feature.title}:
                                        </span>{" "}

                                        {feature.description}

                                    </p>
                                </div>

                            ))}

                            <div className="px-2 py-2 w-[350px] items-center justify-center flex bg-white/70 text-blue-600 hover:bg-gray-400/50 rounded-md border cursor-pointer">
                                <span>
                                    Learn More About Financial Management
                                </span>
                            </div>

                        </div>

                    </Stagger>)}
                {currentItems === "Human Capital Management" && (
                    <Stagger className="mt-12 grid items-start justify-center gap-14 md:grid-cols-2">

                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80"
                            className="h-97 w-full rounded-4xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                        />

                        <div className="space-y-8">

                            {items4.map((feature) => (

                                <div
                                    key={feature.title}
                                    className="max-w-3xl lg:max-w-7xl"
                                >
                                    <p className="text-lg leading-9 text-slate-600 lg:text-[18px]">

                                        <span className="font-semibold tracking-tight text-slate-900">
                                            {feature.title}:
                                        </span>{" "}

                                        {feature.description}

                                    </p>
                                </div>

                            ))}
                            <div className="px-2 py-2 w-[350px] items-center justify-center flex bg-white/70 text-blue-600 hover:bg-gray-400/50 rounded-md border cursor-pointer">
                                <span>
                                    Learn More About Financial Management
                                </span>
                            </div>

                        </div>

                    </Stagger>)}
                {currentItems === "Integration" && (
                    <Stagger className="mt-12 grid items-start justify-center gap-14 md:grid-cols-2">

                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80"
                            className="h-97 w-full rounded-4xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                        />

                        <div className="space-y-8">

                            {items5.map((feature) => (

                                <div
                                    key={feature.title}
                                    className="max-w-3xl lg:max-w-7xl"
                                >
                                    <p className="text-lg leading-9 text-slate-600 lg:text-[18px]">

                                        <span className="font-semibold tracking-tight text-slate-900">
                                            {feature.title}:
                                        </span>{" "}

                                        {feature.description}

                                    </p>
                                </div>

                            ))}

                            <div className="px-2 py-2 w-[350px] items-center justify-center flex bg-white/70 text-blue-600 hover:bg-gray-400/50 rounded-md border cursor-pointer">
                                <span>
                                    Learn More About Financial Management
                                </span>
                            </div>

                        </div>

                    </Stagger>)}

            </div>
        </section>
    )
}

function Enterprise() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl flex flex-col px-6 py-24 lg:px-12 lg:py-32  mx-auto">

                <Stagger className="max-w-5xl">
                    <StaggerItem className="grid lg:grid-cols-[45%_55%] gap-14 items-start">
                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80"
                            className="h-97 w-full rounded-4xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                        />
                        <div className="space-y-8 max-w-3xl lg:max-w-7xl">
                            <h2 className="font-semibold text-2xl md:text-3xl lg:text-2xl tracking-tight ">
                                The Next Level of Enterprise Productivity
                            </h2>

                            <Accordion.Root
                                type="single"
                                collapsible
                                className="divide-y divide-black/10 border border-black/5 bg-white"
                            >
                                {items.map((item, index) => (
                                    <Accordion.Item
                                        key={item.title}
                                        value={`item-${index}`}
                                        className="p-4 lg:p-6"
                                    >
                                        <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left text-xl font-medium">
                                            {item.title}

                                            <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                        </Accordion.Trigger>

                                        <Accordion.Content className="overflow-hidden flex flex-col gap-6 text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                            <p className="pb-6 leading-8">
                                                {item.description}
                                            </p>

                                            <button className="self-start rounded-md bg-blue-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300 cursor-pointer">
                                                Get Started
                                            </button>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                ))}
                            </Accordion.Root>
                        </div>
                    </StaggerItem>
                </Stagger>
            </div>

        </section>)
}

function Discover() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl flex flex-col px-6 py-24 lg:px-12 lg:py-32  mx-auto">
                <Stagger className="max-w-5xl">
                    <StaggerItem className="grid lg:grid-cols-2 gap-14 items-start">
                        <div className="space-y-8">
                            <h2 className="font-medium text-2xl md:text-3xl lg:text-2xl tracking-tight ">
                                Discover Fowgate ERP Turbo
                            </h2>

                            <p className="text-lg leading-8 text-gray-600">
                                Fowgate ERP Turbo is our advanced, enterprise-grade Cloud ERP platform designed for large organizations that require extensive customization and can handle high transaction volumes and massive data sets. It is ideal for businesses with multiple subsidiaries, offering high scalability and intelligent automation to manage complex global operations.
                            </p>
                            <p className="text-lg leading-8 text-gray-600">
                                This solution unifies various operations with AI-powered automation integrated into core processes, including predictive analytics, automated reconciliation, intelligent approvals, anomaly detection, forecasting, and decision-support dashboards.
                            </p>
                            <div className="flex flex-col gap-3">
                                <span>
                                    <CheckCircleIcon className="inline-block h-5 w-5 text-blue-500 mr-2" />
                                    End-to-End Customization & Flexible Workflows
                                </span>
                                <span>
                                    <CheckCircleIcon className="inline-block h-5 w-5 text-blue-500 mr-2" />
                                    Enterprise-Grade Performance & Scalability
                                </span>
                                <span>
                                    <CheckCircleIcon className="inline-block h-5 w-5 text-blue-500 mr-2" />
                                    AI-Driven Automation & Smart Insights
                                </span>
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80"
                            className="h-97 w-full rounded-4xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                        />
                    </StaggerItem>
                </Stagger>
            </div>
        </section>
    )
}

function Features() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl flex flex-col px-6 py-24 lg:px-12 lg:py-32  mx-auto">
                <Stagger className="max-w-5xl">
                    <StaggerItem>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-balance w-full text-3xl font-medium tracking-tight md:text-4xl">
                                Featured Resources
                            </h2>
                            <p className="text-lg max-w-3xl leading-7 text-gray-800/80">
                                Access resources and insights into Cloud ERP Implementation
                            </p>
                        </div>
                    </StaggerItem>
                </Stagger>

                <Stagger className="mt-10">
                    <StaggerItem className="grid lg:grid-cols-3 gap-8 ">
                        {features.map((feature, index) => (

                            <div
                                key={feature.title}
                                className={`flex flex-col gap-3 px-2 py-3 bg-white/60 border-slate-300 ${index !== 2 ? " lg:border-r" : ""}`}
                            >
                                <img src={feature.url} className="rounded-md object-cover" />
                                <h3 className="text-lg leading-9 font-medium tracking-tight text-slate-900 lg:text-[18px]">
                                    {feature.title}
                                </h3>
                                <p className="text-md text-base leading-8">
                                    {feature.description}
                                </p>
                                <button className="self-start rounded-md bg-blue-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300 cursor-pointer">
                                    {feature.buttonText}
                                </button>
                            </div>

                        ))}
                    </StaggerItem>
                </Stagger>

            </div>

        </section>
    )
}
export default function CloudERPSolutions() {
      const [openMobileNav, setOpenMobileNav] = useState(false);
    return (
        <main className="min-h-screen">
            <Header
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
            />

            <MobileNav
                openMobileNav={openMobileNav}
                setOpenMobileNav={setOpenMobileNav}
            />
            <Hero />
            <Innovate />
            <Explore />
            <Enterprise />
            <Discover />
            <Features />
            <Footer/>
        </main>
    )
}