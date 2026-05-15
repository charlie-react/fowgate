import { Stagger, StaggerItem, Reveal } from "./motion-wrapper"

export default function HomeHero(){
    return (
         
             <section className="relative overflow-hidden bg-[#030816] ">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_35%)]" />

        <div className="mx-auto flex  min-h-[85vh] max-w-7xl items-center px-6 py-28 lg:px-8 lg:py-36">
          <Stagger className="max-w-3xl">
            <StaggerItem>
              <h1 className="text-balance text-white text-5xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Powering Businesses
                <br />
                Across <span className="text-blue-600">Africa</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-8 max-w-2xl text-base sm:text-lg sm:leading-8 leading-7 text-white/70 lg:text-xl">
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
       
    )
}