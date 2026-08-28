import { Heart } from "lucide-react";
import HeroImage from "../assets/images/hero-image.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-40 pb-12 md:pt-35 md:pb-14 text-white"
    >
      {/* Background picture with mix-blend modes and z-index fix */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HeroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105 animate-fade-in"
          loading="eager"
        />

        {/* mix-blend-soft-light at 45% opacity */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              "linear-gradient(135deg, #3B0D5C 0%, #6A1B9A 45%, #C2185B 80%, #E8607E 100%)",
            opacity: 0.45,
          }}
        />

        {/* mix-blend-color at 15% opacity */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-color"
          style={{
            background:
              "linear-gradient(135deg, #3B0D5C 0%, #6A1B9A 45%, #C2185B 80%, #E8607E 100%)",
            opacity: 0.15,
          }}
        />

        {/* Dark overlay gradient to ensure text and buttons pop against the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,8,35,0.75) 0%, rgba(20,8,35,0.60) 50%, rgba(20,8,35,0.85) 100%)",
          }}
        />

        {/* Optional soft ambient glows */}
        <div
          className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--color-soft-peach)" }}
        />
        <div
          className="absolute top-1/3 -left-24 h-[320px] w-[320px] rounded-full blur-3xl opacity-15"
          style={{ background: "var(--color-warm-lilac)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-1 md:max-w-[720px]">
          {/* Copy column */}
          <div className="fade-up">
            <span className="section-eyebrow mb-6 bg-white/10 text-white backdrop-blur-md border border-white/20">
              <Heart size={13} fill="currentColor" />
              Launching with Valentine gifting
            </span>

            <h1
              className="font-display text-[2.6rem] leading-[1.08] font-medium md:text-[3.4rem] text-white drop-shadow-md"
            >
              Find the right gift. Make the moment happen.
            </h1>

            <p className="mt-5 max-w-[520px] text-[1.05rem] leading-relaxed text-purple-100 drop-shadow">
              Evivi is a marketplace for gifts and celebrations, connecting you with gift sellers today and expanding to help people plan and organise celebrations.
            </p>
            
            <div className="mt-4 max-w-[520px]">
              <p className="mt-4 text-base font-bold tracking-wide text-[#ff8fa3] drop-shadow">
                Starting with Valentine gifting.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="btn-primary shadow-lg">
                Get Valentine Early Access
              </a>
              <a href="#seller-beta" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md shadow-lg">
                Sell Gifts on Evivi
              </a>
            </div>

            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-purple-200">
              <a href="#delivery" className="underline decoration-white/40 underline-offset-4 hover:text-white">
                Become an Evivi Delivery Partner →
              </a>
              <a href="#beyond" className="underline decoration-white/40 underline-offset-4 hover:text-white">
                Plan celebrations or supply events →
              </a>
            </p>

            <p className="mt-6 text-xs italic text-purple-200/80">
              Join early for launch updates, selected Valentine offers and future Evivi access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}