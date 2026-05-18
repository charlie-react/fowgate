"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Stagger, StaggerItem } from "./motion-wrapper";



const navItems = ["Product", "Solutions", "Resources", "Learning", "Partners", "About", "Contact"];
const industries = ["Oil, Gas & Energy", "Sales Distribution", "Manufacturing", "Food & Hospitality", "Government", "Real Estate", "Professional Services", "Agribusiness", "Construction"];
const apps = ["Financial Management", "Human Capital Management", "Payroll Software", "Project Management", "CRM Software", "Invoicing Management", "Supply Chain Management", "Warehouse Management"];
const businessSuites = ["Cloud ERP Solutions", "Business AI", "Data Lake"]
const resourcesOverview = ["Knowledge Base", "Blog", "Community"]
const partnersOverview = ["Alliance Partners", "Tech Partners"]
const companyOverview = ["Company Information", "Customer Stories", "Events", "News", "Security & Trust", "Careers"]

export default function Header({
  openMobileNav,
  setOpenMobileNav,
}: {
  openMobileNav: boolean;
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  const [activeNav, setActiveNav] = useState("");

  console.log({openMobileNav})

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black/60 text-white">
      <nav className="border-b border-white/5">
        <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6 lg:px-14">
          <div className="">
            <img src={"/fowgate.png"} className="w-30"/>
          </div>

          <div className="hidden h-full items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item}
                className={`group relative flex h-full items-center ${activeNav === item ? "text-white" : ""
                  }`}
              >
                <a
                  className={`flex h-full items-center border-b-2 text-sm font-medium transition-all ease-linear duration-600 ${activeNav === item
                    ? "text-white"
                    : "border-transparent text-white/70 hover:border-blue-600 hover:text-white"
                    }`}
                  href="#"
                  onClick={() => setActiveNav(item)}
                >
                  {item}
                </a>

                {item === "Solutions" && (
                  <div className="absolute left-89 top-full hidden w-180 -translate-x-1/2 border border-black/5 bg-white px-3 py-3 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:flex justify-center items-center">
                    <div className="grid grid-cols-[1fr_1.3fr] gap-6">
                      <div>
                        <h3 className="mb-3 mt-3 text-sm font-bold text-black">
                          By Industry
                        </h3>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                          {industries.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-blue-600"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-3 mt-3 text-sm font-bold text-black">
                          By Business Application
                        </h3>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-2  ">
                          {apps.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-blue-600 w-full "
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {item === "Product" && (
                  <div className="absolute left-22 top-full hidden w-45 -translate-x-1/2  border border-black/5 bg-white px-3 py-3 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:flex justify-center items-center">
                    <div className="grid">
                      <div>
                        <h3 className="mb-3 text-sm font-bold text-black">
                          Business Suites
                        </h3>

                        <div className="grid gap-y-1">
                          {businessSuites.map((item, index) => (
                            <a
                              key={item}
                              href={`${index === 0 ? "/product/cloud-erp-solutions" : " "}`}
                              className="text-sm text-slate-600 transition hover:text-blue-600"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
                {item === "Resources" && (
                  <div className="absolute left-22 top-full hidden w-45 -translate-x-1/2  border border-black/5 bg-white px-4 py-3 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:flex justify-center items-center">
                    <div className="grid   gap-6">

                      <div>
                        <h3 className="mb-3  text-sm font-bold text-black">
                          Resources Overview
                        </h3>

                        <div className="gridgap-y-1">
                          {resourcesOverview.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-blue-600"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {item === "Partners" && (
                  <div className="absolute left-22 top-full hidden w-45 -translate-x-1/2  border border-black/5 bg-white px-3 py-3 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:flex justify-center items-center">
                    <div className="grid gap-6">


                      <div>
                        <h3 className="mb-3 text-sm font-bold text-black">
                          Partners Overview
                        </h3>

                        <div className="grid gap-y-1">
                          {partnersOverview.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-blue-600"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {item === "About" && (
                  <div className="absolute left-22 top-full hidden w-45 -translate-x-1/2  border border-black/5 bg-white px-3 py-3 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:flex justify-center items-center">
                    <div className="grid gap-6">


                      <div>
                        <h3 className="mb-3 text-sm font-bold text-black">
                          Company Overview
                        </h3>

                        <div className="grid gap-y-1">
                          {companyOverview.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-blue-600"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-lg hidden md:block text-white/70">文</div>
          <div
            className="text-2xl md:hidden text-white/70 hover:text-blue-600 transition-all duration-200 cursor-pointer"
            onClick={() => setOpenMobileNav((prev) => !prev)}
          >
            {openMobileNav ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </div>


        </div>


      </nav>


    </header>
  );
}