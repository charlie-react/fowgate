"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, X } from "lucide-react";

const mobileNavItems = [
  {
    title: "Product",
    sections: [
      {
        heading: "Business Suites",
        links: [
          "Cloud ERP Solutions",
          "Business AI",
          "Data Lake",
        ],
      },
    ],
  },


  {
    title: "Solutions",
    sections: [
      {
        heading: "By Industry",
        links: [
          "Oil, Gas & Energy",
          "Sales Distribution",
          "Manufacturing",
          "Food & Hospitality",
          "Government",
          "Real Estate",
          "Professional Services",
          "Agribusiness",
          "Construction",
        ],
      },

      {
        heading: "By Business Application",
        links: [
          "Financial Management",
          "Human Capital Management",
          "Payroll Software",
          "Project Management",
          "CRM Software",
          "Invoicing Management",
          "Supply Chain Management",
          "Warehouse Management",
        ],
      },
    ],
  },

  {
    title: "Resources",
    sections: [
      {
        heading: "Resources Overview",
        links: [
          "Knowledge Base",
          "Blog",
          "Community",
        ],
      },
    ],
  },

  {
    title: "Partners",
    sections: [
      {
        heading: "Partners Overview",
        links: [
          "Alliance Partners",
          "Tech Partners",
        ],
      },
    ],
  },

  {
    title: "About",
    sections: [
      {
        heading: "Company Overview",
        links: [
          "Company Information",
          "Customer Stories",
          "Events",
          "News",
          "Security & Trust",
          "Careers",
        ],
      },
    ],
  },
];

export default function MobileNav({ openMobileNav, setOpenMobileNav }: { openMobileNav: boolean, setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div
      className={`fixed inset-0 z-9999 w-full bg-white transition-all duration-500 md:hidden ${openMobileNav
        ? "translate-x-0 opacity-100"
        : "translate-x-full opacity-0 pointer-events-none"
        }`}
    >

      <div className="flex h-full flex-col">

        <div className="flex h-20  items-center justify-between border-b border-black/5 px-6">

          <div className="text-xl font-semibold text-blue-600">
            Fowgate
          </div>

          <button onClick={() => setOpenMobileNav(false)}>
            <X className="h-7 w-7 cursor-pointer hover:text-blue-600 transition duration-300" />
          </button>

        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-10">
          <div className="flex flex-col pt-10 ">

            <Accordion.Root
              type="multiple"
              className="flex flex-col"
            >

              {mobileNavItems.map((item) => (

                <Accordion.Item
                  key={item.title}
                  value={item.title}
                  className="border-b border-black/10"
                >

                  <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left text-2xl font-medium text-black">

                    {item.title}

                    <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />

                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden pb-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">

                    <Accordion.Root
                      type="multiple"
                      className="flex flex-col gap-2"
                    >

                      {item.sections.map((section) => (

                        <Accordion.Item
                          key={section.heading}
                          value={section.heading}
                          className="rounded-2xl bg-slate-50 px-5"
                        >

                          <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left text-lg font-medium text-slate-900">

                            {section.heading}

                            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />

                          </Accordion.Trigger>

                          <Accordion.Content className="overflow-hidden pb-5 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">

                            <div className="flex flex-col gap-4 pl-2">

                              {section.links.map((link) => (
                                <a
                                  key={link}
                                  href={`${link === "Cloud ERP Solutions"?"/product/cloud-erp-solutions":""}`}
                                  className="text-base font-normal text-slate-600 transition hover:text-black"
                                >
                                  {link}
                                </a>
                              ))}

                            </div>

                          </Accordion.Content>

                        </Accordion.Item>

                      ))}

                    </Accordion.Root>

                  </Accordion.Content>

                </Accordion.Item>

              ))}

            </Accordion.Root>

          </div>
        </div>
      </div>



    </div>
  );
}