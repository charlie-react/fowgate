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

  return (
    <header className="relative overflow-visible bg-black text-white">
      <nav className="relative z-20 border-b  border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="bg-blue">
            <a
              className="rounded-md text-white bg-blue-600 px-4 py-2 text-sm font-semibold tracking-tight"
              href="#"
            >
              Fowgate
            </a>
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
                  <div className="absolute left-1/2 top-full hidden w-210 -translate-x-1/2 border border-black/5 bg-white p-10 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
                    <div className="grid grid-cols-[1fr_1.3fr] gap-16">
                      <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                          By Industry
                        </h3>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                          {industries.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-black"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                          By Business Application
                        </h3>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                          {apps.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-black"
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
                  <div className="absolute left-1/2 top-full hidden w-60 -translate-x-1/2  border border-black/5 bg-white p-8 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
                    <div className="grid gap-16">
                      <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Business Suites
                        </h3>

                        <div className="grid gap-x-10 gap-y-5">
                          {businessSuites.map((item, index) => (
                            <a
                              key={item}
                              href={`${index===0?"/product/cloud-erp-solutions":" "}`}
                              className="text-sm text-slate-600 transition hover:text-black"
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
                  <div className="absolute left-1/2 top-full hidden w-60 -translate-x-1/2  border border-black/5 bg-white p-8 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
                    <div className="grid   gap-16">

                      <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Resources Overview
                        </h3>

                        <div className="grid   gap-x-10 gap-y-5">
                          {resourcesOverview.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-black"
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
                  <div className="absolute left-1/2 top-full hidden w-60 -translate-x-1/2  border border-black/5 bg-white p-8 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
                    <div className="grid gap-16">


                      <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Partners Overview
                        </h3>

                        <div className="grid  gap-x-10 gap-y-5">
                          {partnersOverview.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-black"
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
                  <div className="absolute left-1/2 top-full hidden w-60 -translate-x-1/2  border border-black/5 bg-white p-8 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
                    <div className="grid gap-16">


                      <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Company Overview
                        </h3>

                        <div className="grid   gap-x-10 gap-y-5">
                          {companyOverview.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="text-sm text-slate-600 transition hover:text-black"
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