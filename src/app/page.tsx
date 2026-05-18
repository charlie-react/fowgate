"use client";

import { Reveal, Stagger, StaggerItem } from "./components/motion-wrapper";
import Button from "./components/Button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { b, pre } from "framer-motion/client";
import HomeHero from "./components/HomeHero";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Combo from "./components/Combo";
const navItems = ["Product", "Solutions", "Resources", "Learning", "Partners", "About", "Contact"];
const industries = ["Oil, Gas & Energy", "Sales Distribution", "Manufacturing", "Food & Hospitality", "Government", "Real Estate", "Professional Services", "Agribusiness", "Construction"];
const apps = ["Financial Management", "Human Capital Management", "Payroll Software", "Project Management", "CRM Software", "Invoicing Management", "Supply Chain Management", "Warehouse Management"];
const businessSuites = ["Cloud ERP Solutions", "Business AI", "Data Lake"]
const resourcesOverview = ["Knowledge Base", "Blog", "Community"]
const partnersOverview = ["Alliance Partners", "Tech Partners"]
const companyOverview = ["Company Information", "Customer Stories", "Events", "News", "Security & Trust", "Careers"]

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




const tabs = ["Multi Business Entity", "Productivity Tools", "Data Management", "Human Capital Management", "Integration"];

const logos = [{ companyName: "Nestle.png", text: "Nestlé relies on Fowgate Business Cloud to streamline multi-warehouse inventory, supply chain, and sales", url: "nestle2.jpg" }, { "companyName": "Uber.png", text: "Uber drivers use Fowgate Business Cloud to manage premium customers.", url: 'uber1.avif' }, { "companyName": "Hisense.png", text: "Hisense uses Fowgate Sales Distribution Software to unify multi-branch operations.", url: 'hisense1.avif' }, { "companyName": "NNPC.png", text: "Enhancing settlor and host community collaborative operations through AI-powered data management.", url: "nnp3.jpg" }, { "companyName": "Lonking.png", text: "Lonking Nigeris manages multi-entity financials and logistics efficiently with Fowgate ERP.", url: 'lonking1.jpg' }, { "companyName": "Litzburg.png", text: "Leveraging integrated project and workforce management for optimal performance.", url: "litzburg1.jpg" }];

const resources = [
  ["Fowgate partners with Tekpluent, UK, to train 100 aspiring data analysts in Nigeria.", "IDC", "wide"],
  ["Fowgate Launches Next-Gen AI-Powered Cloud ERP Platform", "NUCLEUS", ""],
  ["Fowgate Partners with NNPC to Drive Digital Transformation & Collaboration with Host Communities", "NUCLEUS", ""],
  ["Fowgate Introduces Data Lake Solution for Smarter, Centralized Data Management", "IDC", "wide"],
  ["Aspiring Data Analysts Program (ADAP): Fowgate Launches Vision to Train & Raise 10,000 Young Nigerians in Data Analysis and AI by 2030.", "NUCLEUS", ""],
  ["Fowgate Expands Its Product Suite with Workflow Automation and Human Capital Management Tools", "NUCLEUS", ""]
];

const resources2 = [
  ["Product Guide: Unlocking Full Potential", "GUIDE", ""],
  ["Product Guide: Unlocking Full Potentials", "GUIDE", ""],
  ["How To Migrate Data Seamlessly", "DOCS", "wide"],
  ["Product : Unlocking Full Potential", "GUIDE", "wide"],
  ["Products : Unlocking Full Potential", "GUIDE", ""],
  ["How Migrating Data Works Seamlessly", "DOCS", ""]
]

const news = [
  ["Superagency in the workplace - McKinsey & Company", "Artificial intelligence has arrived in the workplace and has the potential to be transformative as...", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=680&q=80"],
  ["The Impact of Generative AI on Work Productivity", "Generative artificial intelligence (AI) has rapidly emerged as a...", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=680&q=80"],
  ["Workflow Automation Market Report", "The workflow automation market size stood at USD 23.77 billion in 2025 and is forecast to reach USD 37.45 billion by...", "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=680&q=80"]
];

const partners = [
  ["Fowgate Marketplace", "Explore industry-ready tools built to work seamlessly and helps you customize, scale, and unlock greater value across all your business operations.", "Explore partner solutions", "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"],
  ["Find a partner", "Connect with trusted experts who deliver implementation, support, and innovation. Find the right partner who can accelerate your success and help you maximize ROI.", "Discover potential partners", "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"],
  ["Become a partner", "Partner with Fowgate to expand your capabilities, access new markets, and provide high-value services to enterprise clients.", "Partner with us", "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"]
];



function ProductIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F6F8FC]" id="overview">
      <div className="absolute inset-x-0 top-0 h-[420px] rounded-b-[80px] bg-[#bfcfffc9] md:h-[520px] md:rounded-b-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-20 lg:py-16">
        <Reveal>
          <div className="mx-auto text-center max-w-7xl">
            <h2 className="text-balance w-full  text-3xl sm:text-4xl font-semibold tracking-tight lg:text-4xl">
              Smarter . Faster . More Productive Workflows
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              AI-powered cloud solutions designed to automate workflows and
              improve operational efficiency across your organization.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden shadow-md rounded-4xl">
          <img src="/overview-image.png" />
        </div>
      </div>
    </section>
  );
}



function Solutions() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const currentItems = tabs.find((tab) => tab === activeTab);
  const [mobileSolutions, setMobileSolutions] = useState(true);
  const [openMenu, setOpenMenu] = useState(false)
  const items = [
    ["Consolidate & Manage Multiple Branches Or Companies", "Reconcile financials, inventory, and operations across multiple entities with a unified platform that provides real-time visibility and control.",],
    ["Simplify Complex Inter-Company Operations.", "Streamline inter-company transactions, eliminations, and reporting with automated processes that ensure accuracy and compliance across your organization.",],
    ["Consolidated Financial Reporting", "Generate comprehensive financial reports across all entities with a single, unified view.",],
    ["Scalable Multi-Entity Architecture", "Build and manage a flexible, scalable infrastructure that supports your organization's growth and complexity.",],
  ]
  const items2 = [
    ["Anticipate Financial Needs", "Reconcile financials, inventory, and operations across multiple entities with a unified platform that provides real-time visibility and control.",],
    ["Simplify Complex Inter-Company Operations.", "Streamline inter-company transactions, eliminations, and reporting with automated processes that ensure accuracy and compliance across your organization.",],
    ["Consolidated Financial Reporting", "Generate comprehensive financial reports across all entities with a single, unified view.",],
    ["Scalable Multi-Entity Architecture", "Build and manage a flexible, scalable infrastructure that supports your organization's growth and complexity.",],
  ]
  const items3 = [
    ["Impact Analysis", "Reconcile financials, inventory, and operations across multiple entities with a unified platform that provides real-time visibility and control.",],
    ["Simplify Complex Inter-Company Operations.", "Streamline inter-company transactions, eliminations, and reporting with automated processes that ensure accuracy and compliance across your organization.",],
    ["Consolidated Financial Reporting", "Generate comprehensive financial reports across all entities with a single, unified view.",],
    ["Scalable Multi-Entity Architecture", "Build and manage a flexible, scalable infrastructure that supports your organization's growth and complexity.",],
  ]
  const items4 = [
    ["Compliance Management", "Reconcile financials, inventory, and operations across multiple entities with a unified platform that provides real-time visibility and control.",],
    ["Simplify Complex Inter-Company Operations.", "Streamline inter-company transactions, eliminations, and reporting with automated processes that ensure accuracy and compliance across your organization.",],
    ["Consolidated Financial Reporting", "Generate comprehensive financial reports across all entities with a single, unified view.",],
    ["Scalable Multi-Entity Architecture", "Build and manage a flexible, scalable infrastructure that supports your organization's growth and complexity.",],
  ]
  const items5 = [
    ["Market depth Analysis", "Reconcile financials, inventory, and operations across multiple entities with a unified platform that provides real-time visibility and control.",],
    ["Simplify Complex Inter-Company Operations.", "Streamline inter-company transactions, eliminations, and reporting with automated processes that ensure accuracy and compliance across your organization.",],
    ["Consolidated Financial Reporting", "Generate comprehensive financial reports across all entities with a single, unified view.",],
    ["Scalable Multi-Entity Architecture", "Build and manage a flexible, scalable infrastructure that supports your organization's growth and complexity.",],
  ]
  return (
    <section className="bg-white" id="solutions">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-14 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Unlock intelligent workflows with scalable enterprise solutions.
          </p>
        </div>

        <Stagger className="mt-12 hidden md:flex items-center gap-3 overflow-x-auto scrollbar-hide justify-center">
          {tabs.map((tab) => (
            <StaggerItem key={tab}>
              <button
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition cursor-pointer ${tab === activeTab
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-2">


            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-black/10 border border-black/5 bg-white"
            >
              {items.map((item, index) => (
                <Accordion.Item
                  key={item[0]}
                  value={`item-${index}`}
                  className="p-4 lg:p-6"
                >
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left text-xl font-medium">
                    {item[0]}

                    <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-6 leading-8">
                      {item[1]}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>






            <div className="hidden lg:block">
              <div className="sticky top-28">
                <img
                  className="h-[520px] w-full rounded-4xl object-cover"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
        {currentItems === "Productivity Tools" && (
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-2">


            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-black/10 border border-black/5 bg-white"
            >
              {items2.map((item, index) => (
                <Accordion.Item
                  key={item[0]}
                  value={`item-${index}`}
                  className="p-4 lg:p-6"
                >
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left text-xl font-medium">
                    {item[0]}

                    <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-6 leading-8">
                      {item[1]}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>






            <div className="hidden lg:block">
              <div className="sticky top-28">
                <img
                  className="h-[520px] w-full rounded-4xl object-cover"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>)}
        {currentItems === "Data Management" && (
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-2">


            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-black/10 border border-black/5 bg-white"
            >
              {items3.map((item, index) => (
                <Accordion.Item
                  key={item[0]}
                  value={`item-${index}`}
                  className="p-4 lg:p-6"
                >
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left text-xl font-medium">
                    {item[0]}

                    <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-6 leading-8">
                      {item[1]}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>






            <div className="hidden lg:block">
              <div className="sticky top-28">
                <img
                  className="h-[520px] w-full rounded-4xl object-cover"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>)}
        {currentItems === "Human Capital Management" && (
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-2">


            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-black/10 border border-black/5 bg-white"
            >
              {items4.map((item, index) => (
                <Accordion.Item
                  key={item[0]}
                  value={`item-${index}`}
                  className="p-4 lg:p-6"
                >
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left text-xl font-medium">
                    {item[0]}

                    <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-6 leading-8">
                      {item[1]}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>






            <div className="hidden lg:block">
              <div className="sticky top-28">
                <img
                  className="h-[520px] w-full rounded-4xl object-cover"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>)}
        {currentItems === "Integration" && (
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-2">


            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-black/10 border border-black/5 bg-white"
            >
              {items5.map((item, index) => (
                <Accordion.Item
                  key={item[0]}
                  value={`item-${index}`}
                  className="p-4 lg:p-6"
                >
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left text-xl font-medium">
                    {item[0]}

                    <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-6 leading-8">
                      {item[1]}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>






            <div className="hidden lg:block">
              <div className="sticky top-28">
                <img
                  className="h-[520px] w-full rounded-4xl object-cover"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>)}
      </div>

      <div className="bg-slate-50"  >
        <div className="max-w-7xl mx-auto px-6 lg:px-14  py-24 lg:py-32">

          <div className="space-y-32">
            <div className="grid items-center gap-20 lg:grid-cols-2 order-2 lg:order-1">
              <img src="approval.jpeg" className="rounded-4xl" />
              <div className="max-w-xl md:h-97 md:py-8">
                <h2 className="text-balance text-3xl sm:text-3xl lg:text-3xl font-medium leading-tight tracking-tight  ">Faster Cross-Team Approval Processes</h2>
                <p className="mt-7 text-lg leading-9 text-slate-700">Approve purchase orders, bills, vendor requests, and speed up internal processes on the go. Fowgate's intuitive multi-level cloud approval system eliminates bottlenecks across departments, ensuring strong internal controls, compliance, and a fast, paperless approval experience.</p>
                <div className="mt-10"><Button>Get Started</Button></div>
              </div>
            </div>

            <div className="grid items-center gap-20 lg:grid-cols-2 order-1 lg:order-2">
              <div className="max-w-xl md:h-97 md:py-8">
                <h2 className="text-balance text-3xl sm:text-3xl lg:text-3xl font-medium leading-tight tracking-tight ">Monthly Finance Closing Reports</h2>
                <p className="mt-7 text-lg leading-9 text-slate-700">Close books faster with automated accuracy, smooth reconciliations, unified ledgers, and instant variance insights that empower your finance team to finalize reports in hours, not days, while maintaining compliance and strategic decision-making.</p>
                <div className="mt-10"><Button>Get Started</Button></div>
              </div>
              <img src="finance.jpeg" className="rounded-4xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Stories() {
  const [currentStory, setCurrentStory] = useState(logos[0].companyName);
  const activeStory = logos.find(
    (logo) => logo.companyName === currentStory
  );
  return (
    <section className="bg-white" id="customer-stories">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-14 lg:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Customer Stories
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Learn why leading organizations trust Fowgate to streamline
              operations and accelerate growth.
            </p>
          </div>

          <a
            className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
            href="#"
          >
            Explore all customer stories
          </a>
        </div>

        <div className="mt-20  overflow-x-auto scroll-auto md:grid flex gap-6   pb-10 text-center md:grid-cols-6">
          {logos.map((logo, index) => (
            <div
              key={logo.companyName}
              className={`relative cursor-pointer flex items-center justify-center font-semibold   transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-left after:bg-blue-600 after:transition-transform after:duration-300 ${logo.companyName === currentStory
                ? "text-black after:scale-x-100"
                : "text-slate-400 after:scale-x-0 hover:text-slate-700"
                }`}
              onClick={() => setCurrentStory(logo.companyName)}
            >
              <img src={`/${logo.companyName}`} className={`w-30 p-2 ${index === 5 ? " mt-12" : ""}`} />
            </div>
          ))}
        </div>

        {/* story card */}

        <div className="relative overflow-hidden border-black/5 border -mt-10" >
          
            <img
              className="absolute top-0 inset-0 h-full w-full object-cover"
              src={`/${activeStory?.url}`}
              alt="Warehouse boxes"
            />

          

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative flex min-h-100 items-end p-6 lg:p-12">
            <div className="max-w-2xl flex items-start justify-center flex-col border border-white/10 bg-white/90 px-6 py-8 backdrop-blur-xl lg:py-8">


              <h3 className="mt-6 text-xl font-medium leading-tight tracking-tight text-gray-700 md:text-lg">
                {activeStory?.text}
              </h3>

              

              <div className="mt-6">
                <Button>Read More Stories</Button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

function Integrations() {
  const chips = [
    "Oracle NetSuite",
    "Slack",
    "Azure",
    "Google",
    "Okta",
  ];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 py-24 lg:grid-cols-[1fr_auto_1fr] lg:px-14 lg:py-32">

        <div className="grid  lg:grid-cols-2">

      
          <img src="/integration.png" className="flex items-center justify-center md:w-full w-1/3"/>

          <div className="max-w-7xl">
            <p className="text-md ">
              Pre-Built Connectors
            </p>

            <h2 className="mt-2 w-full max-w-7xl text-xl font-semibold tracking-tight">
              Integration Ecosystem
            </h2>

            <p className="mt-2 text-sm font-medium text-slate-800">
              The operating system for business
            </p>

            <p className="mt-3 max-w-2xl w-full text-base  sm:text-sm">
              Connect all your essential business applications from accounting
              and CRM to HR and project management into one intelligent cloud
              ecosystem that streamlines operations and automates workflows
              across teams.
            </p>

            <div className="mt-4">
              <Button>Talk to an Expert</Button>
            </div>
          </div>
        </div>

        <div className="w-px hidden md:block bg-slate-200  " />

        <div className="relative overflow-hidden ">

         

          <div className="relative">

            <div className="flex h-8 w-8 justify-center items-center py-4 px-2 rounded-full bg-blue-600 text-md text-white ">
              ❝
            </div>

            <blockquote className="mt-10 max-w-7xl w-full text-md font-normal text-slate-900 ">
              “Fowgate’s Integration Solutions ensures your operations become
              more connected, faster and intelligently data-driven.”
            </blockquote>

            <div className="mt-12 flex items-center gap-5">
              <img
                className="h-14 w-14 rounded-full object-cover ring-4 ring-blue-50 sm:h-16 sm:w-16"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80"
                alt=""
              />

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  Imonalimne Augustine
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  AXA, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


function Resources() {
  const [resource, setResource] = useState("Press");
  return (
    <section className="bg-[#0a2b5a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-14 lg:py-32">

        <div className="max-w-3xl">


          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Most Popular Resources
          </h2>
        </div>

        <div className="mt-16 overflow-x-auto scrollbar-hide ">
          <div className="flex min-w-max border-b border-white/10">

            <button className={`cursor-pointer relative pb-6 pr-10 w-[50%] text-sm font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-600 after:transition-transform after:duration-300 ${resource === "Press"
              ? "text-white after:scale-x-100"
              : "text-white/50 after:scale-x-0 hover:text-white"
              }`} onClick={() => setResource("Press")}>
              Press
            </button>

            <button className={`cursor-pointer relative pb-6 text-sm w-[50%] font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-600 after:transition-transform after:duration-300 ${resource === "Product Materials"
              ? "text-white after:scale-x-100"
              : "text-white/50 after:scale-x-0 hover:text-white"
              }`} onClick={() => setResource("Product Materials")}>
              Product Materials
            </button>
          </div>
        </div>

        {resource === "Press" && (
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {resources.map(([title, tag, wide]) => (
              <article
                key={title}
                className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 ${wide
                  ? "bg-[#3cbfc0] xl:col-span-2"
                  : "bg-[#1256f4]"
                  }`}
              >
                <div className="relative p-7 sm:p-9">
                  <h3 className="max-w-[520px] text-lg font-medium leading-8 tracking-tight sm:text-xl">
                    {title}
                  </h3>
                </div>

                <div className="relative flex items-center justify-between border-t border-white/10 bg-white px-6 py-4 text-slate-900">
                  <span className="text-sm font-medium">
                    {tag}
                  </span>

                  <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-900">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {resource === "Product Materials" && (
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {resources2.map(([title2, tag, wide]) => (
              <article
                key={title2}
                className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 ${wide
                  ? "bg-[#3cbfc0] xl:col-span-2"
                  : "bg-[#1256f4]"
                  }`}
              >
                <div className="relative p-7 sm:p-9">
                  <h3 className="max-w-[520px] text-lg font-medium leading-8 tracking-tight sm:text-xl">
                    {title2}
                  </h3>
                </div>

                <div className="relative flex items-center justify-between border-t border-white/10 bg-white px-6 py-4 text-slate-900">
                  <span className="text-sm font-medium">
                    {tag}
                  </span>

                  <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-900">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


function News() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-14 lg:py-32">

        <div className="max-w-3xl">


          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            See What's New
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Stay updated with the latest innovations, insights and enterprise
            solutions helping businesses operate smarter worldwide.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_1fr]">

          <article className="group">
            <div className="overflow-hidden rounded-[2rem] border border-black/5">
              <img
                className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[420px] lg:h-[500px]"
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=80"
                alt=""
              />
            </div>

            <div className="mt-8">
              <h3 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                The Impact of ERP on Business Efficiency
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                In today's dynamic business landscape, achieving operational
                excellence is paramount for sustainable growth. Enterprise
                Resource Planning systems continue to reshape enterprise
                productivity.
              </p>

              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:gap-3"
                href="#"
              >
                Read More
                <span>→</span>
              </a>
            </div>
          </article>

          <div className="space-y-8">
            {news.map(([title, body, img]) => (
              <article
                key={title}
                className="group grid gap-6  border border-black/5 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:grid-cols-[220px_1fr]"
              >
                <div className="overflow-hidden rounded-3xl">
                  <img
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-full"
                    src={img}
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                      {title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {body}
                    </p>
                  </div>

                  <a
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:gap-3"
                    href="#"
                  >
                    Read More
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-md bg-blue-600">
          <div className="flex flex-col gap-10 px-8 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-14">

            <div className="max-w-4xl text-start md:text-center">


              <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Jan 28th: Implementing Cloud ERP in Your Business
              </h3>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Discover how you can unlock agility, scalability and operational
                excellence across every department with AI-powered cloud ERP
                solutions.
              </p>
            </div>

            <div className="shrink-0">
              <Button variant="light">
                Register Now
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );


}


function PartnerEcosystem() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-3xl text-center">


          <h2 className=" text-3xl font-semibold tracking-tight md:text-4xl">
            Accelerate Success With Our Extensive Partner Ecosystem
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Collaborate with trusted technology and implementation partners
            helping organizations scale smarter with enterprise-grade digital
            transformation solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {partners.map(([title, body, link, img]) => (
            <article
              key={title}
              className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="overflow-hidden">
                <img
                  className="h-64 w-full object-cover transition duration-500 sm:h-72"
                  src={img}
                  alt=""
                />
              </div>

              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900">
                  {title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  {body}
                </p>

                <a
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:gap-3"
                  href="#"
                >
                  {link}
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function Footer() {
  const groups = {
    Company: [
      "Company Information",
      "Customer Stories",
      "Events",
      "News",
      "Security & Trust",
      "Careers",
    ],
    Solutions: [
      "Financial Management",
      "Human Capital Management",
      "Payroll Software",
      "Project Management",
      "CRM Software",
      "Invoicing Management",
      "Supply Chain Management",
      "Warehouse Management",
    ],
    Industry: industries,
    Resources: [
      "Knowledge Base",
      "Blog",
      "Community",
      "Learning",
    ],
    More: [
      "Alliance Partners",
      "Tech Partners",
      "Terms & Conditions",
      "Privacy Policy",
      "Cookies",
    ],
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b204e] text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center lg:px-14 lg:py-22">



          <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Build Your Own Fowgate Story
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            We are transforming how businesses operate, collaborate and grow
            through intelligent cloud and AI-powered enterprise solutions.
            Discover how Fowgate can enhance operational productivity across
            your organization.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="light">
              Contact Us
            </Button>

            <Button variant="outline">
              Request Quote
            </Button>
          </div>

        </div>
      </section>

      <footer className="bg-[#040429] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-[220px_1fr]">

            <div>
              <div className="inline-flex rounded-md bg-blue-600 px-5 py-3 text-lg font-semibold tracking-tight shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
                Fowgate
              </div>

              <p className="mt-6 max-w-[220px] text-sm leading-7 text-white/60">
                Intelligent cloud and AI-powered solutions helping enterprises
                operate smarter and scale faster.
              </p>

              <div className="mt-8 flex items-center gap-4 text-white/50">
                {["f", "𝕏", "in", "◎", "▶"].map((icon) => (
                  <div
                    key={icon}
                    className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/5 text-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
              {Object.entries(groups).map(([title, links]) => (
                <div key={title}>

                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                    {title}
                  </h3>

                  <div className="mt-6 space-y-4">
                    {links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-sm leading-6 text-white/60 transition hover:text-white"
                      >
                        {link}
                      </a>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-8 text-sm text-white/40 md:flex-row">

            <p>
              © 2026 Fowgate. All rights reserved.
            </p>

          </div>
        </div>
      </footer>
    </>
  );
}





export default function Home() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  console.log({ openMobileNav })
  return (
    <main className="min-h-screen">
      <MobileNav openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav} />
      <Combo openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav} />
      <ProductIntro />
      <Solutions />
      <Stories />
      <Integrations />
      <Resources />
      <News />
      <PartnerEcosystem />
      <Footer />

    </main>
  )
};
