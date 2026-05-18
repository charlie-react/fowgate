import { Stagger, StaggerItem, Reveal } from "./motion-wrapper"

export default function HomeHero() {
  return (

    <section className="relative ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/fowgate-clone.jpg')",
        }}
      />
      


      <div className="mx-auto flex  min-h-[85vh] max-w-7xl items-center px-6 py-28 lg:px-14 lg:pt-36 lg:pb-26">
        <Stagger className="max-w-3xl">
          <StaggerItem>
            <h1 className="text-balance text-white text-3xl font-semibold leading-[1.02] tracking-tight  lg:text-5xl">
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