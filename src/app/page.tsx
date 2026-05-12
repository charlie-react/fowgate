"use client";

import { Reveal, Stagger, StaggerItem } from "./components/motion-wrapper";
import { useState } from "react";
const navItems = ["Product", "Solutions", "Resources", "Learning", "Partners", "About", "Contact"];
const subNavItems = ["Overview", "Solutions", "Customer Stories", "Integrations", "Resources", "What's New", "Getting Started"];

const industries = ["Oil, Gas & Energy", "Sales Distribution", "Manufacturing", "Food & Hospitality", "Government", "Real Estate", "Professional Services", "Agribusiness", "Construction"];
const apps = ["Financial Management", "Human Capital Management", "Payroll Software", "Project Management", "CRM Software", "Invoicing Management", "Supply Chain Management", "Warehouse Management"];
const businessSuites = ["Cloud ERP Solutions", "Business AI", "Data Lake"]
const resourcesOverview = ["Knowledge Base", "Blog", "Community"]
const partnersOverview = ["Alliance Partners", "Tech Partners"]
const companyOverview = ["Company Information", "Customer Stories", "Events", "News", "Security & Trust", "Careers"]

const tabs = ["Multi Business Entity", "Productivity Tools", "Data Management", "Human Capital Management", "Integration"];

const logos = [{ companyName: "Nestle", text: "Nestlé relies on Fowgate Business Cloud to streamline multi-warehouse inventory, supply chain, and sales" }, { "companyName": "Uber", text: "Uber drivers use Fowgate Business Cloud to manage premium customers." }, { "companyName": "Hisense", text: "Hisense uses Fowgate Sales Distribution Software to unify multi-branch operations." }, { "companyName": "NNPC", text: "Enhancing settlor and host community collaborative operations through AI-powered data management." }, { "companyName": "Lonking", text: "Lonking Nigeris manages multi-entity financials and logistics efficiently with Fowgate ERP." }, { "companyName": "Litzburg", text: "Leveraging integrated project and workforce management for optimal performance." }];

const resources = [
  ["Fowgate partners with Tekpluent, UK, to train 100 aspiring data analysts in Nigeria.", "IDC", "wide"],
  ["Fowgate Launches Next-Gen AI-Powered Cloud ERP Platform", "NUCLEUS", ""],
  ["Fowgate Partners with NNPC to Drive Digital Transformation & Collaboration with Host Communities", "NUCLEUS", ""],
  ["Fowgate Introduces Data Lake Solution for Smarter, Centralized Data Management", "IDC", "wide"],
  ["Aspiring Data Analysts Program (ADAP): Fowgate Launches Vision to Train & Raise 10,000 Young Nigerians in Data Analysis and AI by 2030.", "NUCLEUS", ""],
  ["Fowgate Expands Its Product Suite with Workflow Automation and Human Capital Management Tools", "NUCLEUS", ""]
];

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



function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
}) {
  const styles = {
    primary:
      "bg-cobalt text-white  bg-blue-700 border border-transparent",
    light:
      "bg-white text-ink hover:bg-slate-100 border border-transparent",
    outline:
      "border border-white/15 bg-white/5 text-white hover:bg-white hover:text-cobalt",
  };

  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
function DashboardMockup() {
  return (
    <div className="mx-auto mt-10 grid w-full max-w-180 grid-cols-[142px_1fr] overflow-hidden rounded-lg bg-white text-xs shadow-soft ring-1 ring-slate-200">
      <aside className="bg-[#111318] p-5 text-white">
        <div className="mb-7 inline rounded bg-cobalt px-3 py-1 text-[10px]">Fowgate</div>
        {["Teams", "Payroll", "Compliance", "Calendar", "Settings", "Banking", "Accounts", "Suppliers", "Reports", "Inventory", "Tax", "CRM"].map((item) => (
          <div key={item} className="mb-4 text-[11px] text-white/55">{item}</div>
        ))}
      </aside>
      <main className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-base font-extrabold">Engagement Tracking</h3>
          <div className="flex gap-3 text-slate-400"><span>✦</span><span>◌</span><span>●</span></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["$150,250", "$42,376", "$230,498"].map((num) => <div key={num} className="rounded border border-slate-200 p-3"><p className="text-slate-500">Total Sales</p><b>{num}</b></div>)}
        </div>
        <div className="mt-6 grid grid-cols-[1.2fr_0.8fr_1fr] gap-5">
          <div className="flex h-40 items-end gap-3 rounded border border-slate-200 p-5">
            {[42, 58, 75].map((h) => <span key={h} className="w-10 rounded-t bg-cobalt" style={{ height: `${h}%` }} />)}
          </div>
          <div className="grid place-items-center rounded border border-slate-200">
            <div className="grid h-24 w-24 place-items-center rounded-full border-14 border-cyan border-t-orange-400 text-center font-extrabold">54<br /><span className="text-[10px] font-normal">Tasks</span></div>
          </div>
          <div className="space-y-3">
            {["Move approvals", "Follow up", "Monthly report", "Send document"].map((task, i) => <div key={task} className="rounded bg-slate-50 p-3 text-[11px]"><span className="mr-2 text-cobalt">●</span>{task}</div>)}
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {["Meeting Alerts", "Deadline Alerts", "Shutdown Alert"].map((item) => <div key={item} className="h-24 rounded border border-slate-200 p-3 text-slate-500">{item}</div>)}
        </div>
      </main>
    </div>
  );
}

function Header() {

  const [activeNav, setActiveNav] = useState("");
  console.log(activeNav)
  return (
    <header className="relative overflow-visible bg-black text-white">
      <nav className="relative z-20 border-b  border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="bg-blue">
            <a
              className="rounded-full px-4 py-2 text-sm font-semibold tracking-tight"
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
                  <div className="absolute left-1/2 top-full hidden w-210 -translate-x-1/2 rounded-4xl border border-black/5 bg-white p-10 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
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
                  <div className="absolute left-1/2 top-full hidden w-60 -translate-x-1/2 rounded-4xl border border-black/5 bg-white p-8 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
                    <div className="grid gap-16">
                      <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Business Suites
                        </h3>

                        <div className="grid gap-x-10 gap-y-5">
                          {businessSuites.map((item) => (
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
                {item === "Resources" && (
                  <div className="absolute left-1/2 top-full hidden w-60 -translate-x-1/2 rounded-4xl border border-black/5 bg-white p-8 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
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
                  <div className="absolute left-1/2 top-full hidden w-60 -translate-x-1/2 rounded-4xl border border-black/5 bg-white p-8 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
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
                  <div className="absolute left-1/2 top-full hidden w-60 -translate-x-1/2 rounded-4xl border border-black/5 bg-white p-8 text-ink shadow-[0_20px_80px_rgba(0,0,0,0.08)] group-hover:block">
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

          <div className="text-lg text-white/70">文</div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_35%)]" />

        <div className="mx-auto flex min-h-155 max-w-7xl items-center px-6 py-28 lg:px-8 lg:py-36">
          <Stagger className="max-w-3xl">
            <StaggerItem>
              <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                Powering Businesses
                <br />
                Across <span className="text-cobalt">Africa</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 lg:text-xl">
                Transform your business processes with intelligent AI-driven
                workflow solutions built for seamless collaboration and enterprise
                productivity.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-14 flex flex-wrap gap-x-6 gap-y-4 text-sm text-white/60">
                {[
                  "Cloud ERP",
                  "Business Intelligence",
                  "IOT",
                  "Productivity Tools",
                  "Data Lake",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </header>
  );
}

function SubNav() {
  const [activeSubNav, setActiveSubNav] = useState("");
  return (
    <div className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto md:flex h-16 max-w-7xl items-center justify-between gap-8  px-6 lg:px-8">
        <div className="flex h-full min-w-max items-center gap-8">
          {subNavItems.map((item, index) => (
            <a
              key={item}
              className={`flex h-full items-center border-b-2 text-sm font-medium transition-all duration-100 ease-in ${activeSubNav === item
                ? "border-blue-600 text-black"
                : "border-transparent text-slate-500 hover:text-black"
                }`}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveSubNav(item)}
            >
              {item}
            </a>
          ))}
        </div>

        <Button>Book a Demo</Button>
      </div>
    </div>
  );
}

function ProductIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F6F8FC]">
      <div className="absolute inset-x-0 top-0 h-130 rounded-b-[120px] bg-[#DCE6FF]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Smarter . Faster . More Productive Workflows
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              AI-powered cloud solutions designed to automate workflows and
              improve operational efficiency across your organization.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-4xl border border-black/5 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function OverlayImage({ src, type }: { src: string; type: "approval" | "finance" }) {
  return (
    <div className="relative">
      <img className="h-97 w-full rounded-4xl object-cover shadow-image" src={src} alt="" />
      {type === "approval" ? (
        <>
          <div className="absolute left-16 top-7 rounded bg-white/88 p-4 text-xs shadow-soft">
            {["Purchase Order #00435", "Payment Requisition #034", "Bill of Materials #MR002"].map((item, i) => <p key={item} className="mb-3 text-sm font-medium">{item} <span
              className={`rounded-full px-3 py-1 text-[11px] font-medium ${i === 1
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
                }`}
            >
              {i === 1 ? "Pending" : "Approved"}
            </span></p>)}
          </div>
          <div className="absolute bottom-9 left-8 w-56 rounded bg-white/85 p-4 text-xs shadow-soft">
            <b>Purchase Order #00435</b><div className="mt-4 h-3 rounded bg-slate-300" /><div className="mt-3 h-3 w-4/5 rounded bg-slate-300" />
          </div>
        </>
      ) : (
        <div className="absolute right-10 top-20 rounded bg-white/86 p-4 text-xs shadow-soft">
          {["1100 - Accounts Receivable", "1600 - Accumulated Depreciation", "2100 - Accrued Expenses", "2300 - Long-Term Liabilities"].map((item) => <p key={item} className="mb-2 max-w-120 font-semibold">{item}<span className="ml-8 font-bold">₦120,890</span></p>)}
        </div>
      )}
    </div>
  );
}

function Solutions() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <section className="bg-white" id="solutions">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight">
            Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Unlock intelligent workflows with scalable enterprise solutions.
          </p>
        </div>

        <Stagger className="mt-12 flex items-center gap-6 overflow-x-auto justify-center">
          {tabs.map((tab) => (
            <StaggerItem key={tab}>
              <button
                className={`rounded-full px-5 py-2 text-sm font-medium transition cursor-pointer ${tab === activeTab
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

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          <div className="divide-y divide-black/5 rounded-4xl border border-black/5 bg-white">
            {[
              "Consolidate & Manage Multiple Branches Or Companies",
              "Simplify Complex Inter-Company Operations.",
              "Consolidated Financial Reporting",
              "Scalable Multi-Entity Architecture",
            ].map((item, index) => (
              <div key={item} className="p-8 lg:p-10">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="max-w-xl text-xl font-semibold leading-8 tracking-tight">
                    {item}
                  </h3>

                  <span className="mt-1 text-cobalt">
                  +
                  </span>
                </div>

                {/* {index === 1 && (
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                    Manage complex inventory operations, automate approvals,
                    reconcile transactions and improve consistency across
                    multiple business units.
                  </p>
                )} */}
              </div>
            ))}
          </div>

          <img
            className="h-130 w-full rounded-4xl object-cover"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="bg-slate-50"  >
        <div className="max-w-7xl mx-auto px-6 lg:px-8  py-24 lg:py-32">

          <div className="space-y-32">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              <OverlayImage type="approval" src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1100&q=80" />
              <div className="max-w-xl">
                <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight  ">Faster Cross-Team Approval Processes</h2>
                <p className="mt-7 text-lg leading-9 text-slate-700">Approve purchase orders, bills, vendor requests, and speed up internal processes on the go. Fowgate's intuitive multi-level cloud approval system eliminates bottlenecks across departments, ensuring strong internal controls, compliance, and a fast, paperless approval experience.</p>
                <div className="mt-10"><Button>Get Started</Button></div>
              </div>
            </div>

            <div className="grid items-center gap-20 lg:grid-cols-2 ">
              <div className="max-w-xl">
                <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight ">Monthly Finance Closing Reports</h2>
                <p className="mt-7 text-lg leading-9 text-slate-700">Close books faster with automated accuracy, smooth reconciliations, unified ledgers, and instant variance insights that empower your finance team to finalize reports in hours, not days, while maintaining compliance and strategic decision-making.</p>
                <div className="mt-10"><Button>Get Started</Button></div>
              </div>
              <OverlayImage type="finance" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80" />
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
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl">
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

        <div className="mt-20 grid grid-cols-2 gap-y-10 border-b border-black/5 pb-10 text-center md:grid-cols-6">
          {logos.map((logo, i) => (
            <div
              key={logo.companyName}
              className={`relative cursor-pointer flex items-center justify-center pb-5 text-2xl font-semibold tracking-tight transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-blue-600 after:transition-transform after:duration-300 ${logo.companyName === currentStory
                ? "text-black after:scale-x-100"
                : "text-slate-400 after:scale-x-0 hover:text-slate-700"
                }`}
              onClick={() => setCurrentStory(logo.companyName)}
            >
              {logo.companyName}
            </div>
          ))}
        </div>

        {/* story card */}

        <div className="relative mt-20 overflow-hidden rounded-[2.5rem] border border-black/5" >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
            alt="Warehouse boxes"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative flex min-h-155 items-end p-6 lg:p-12">
            <div className="max-w-2xl rounded-4xl border border-white/10 bg-white/90 p-8 backdrop-blur-xl lg:p-12">


              <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900 lg:text-4xl">
                {activeStory?.text}
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Discover how enterprise automation and cloud infrastructure
                helped improve operational efficiency and workflow visibility
                across multiple business units.
              </p>

              <div className="mt-10">
                <Button>Read More Stories</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}








export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SubNav />
      <ProductIntro />
      <Solutions />
      <Stories />

    </main>
  )
};
