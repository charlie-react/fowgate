const industries = ["Oil, Gas & Energy", "Sales Distribution", "Manufacturing", "Food & Hospitality", "Government", "Real Estate", "Professional Services", "Agribusiness", "Construction"];

import Button from "./Button";
export default function Footer() {
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

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-22">



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