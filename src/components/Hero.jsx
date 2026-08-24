import { Heart } from "lucide-react";
import HeroImage from "../assets/images/hero-gift.jpg";



export default function Hero() {

  return (
    <section
      id="hero"
      className="relative overflow-hidden  pt-35 pb-12 md:pt-28 md:pb-14"
    >
      {/* background gradient wash + glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ background: "linear-gradient(135deg, #3B0D5C 0%, #6A1B9A 45%, #C2185B 80%, #E8607E 100%)" }}
        />
        <div
          className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
          style={{ background: "var(--color-soft-peach)" }}
        />
        <div
          className="absolute top-1/3 -left-24 h-[320px] w-[320px] rounded-full blur-3xl opacity-30"
          style={{ background: "var(--color-warm-lilac)" }}
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[58%_42%] md:gap-10">
          {/* Copy column */}
          <div className="fade-up">
            <span className="section-eyebrow mb-6">
              <Heart size={13} fill="currentColor" />
              Launching with Valentine gifting
            </span>

            <h1
              className="font-display text-[2.6rem] leading-[1.08] font-medium md:text-[3.4rem]"
              style={{ color: "var(--color-deep-plum)" }}
            >
              Your celebration marketplace starts with Valentine gifting.
            </h1>

            <p className="mt-5 max-w-[520px] text-[1.05rem] leading-relaxed" style={{ color: "var(--color-muted-purple)" }}>
               Discover gifts from local businesses, choose how you’d like them delivered
               or collected, and make celebrating someone special simpler. Evivi launches
               first with Valentine gifting — with more ways to celebrate coming next.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="btn-primary">
                Get Valentine Early Access
              </a>
              <a href="#seller-beta" className="btn-secondary">
                Sell Gifts on Evivi
              </a>
            </div>

            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--color-muted-purple)" }}>
              <a href="#delivery" className="underline decoration-[var(--color-lavender-border)] underline-offset-4 hover:text-[var(--color-vibrant-magenta)]">
                Delivery driver? Register your interest →
              </a>
              <a href="#beyond" className="underline decoration-[var(--color-lavender-border)] underline-offset-4 hover:text-[var(--color-vibrant-magenta)]">
                Planner or event supplier? Join the future marketplace →
              </a>
            </p>
          </div>

          {/* Visual column */}
          <div className="fade-up" style={{ animationDelay: "120ms" }}>
            <div
              className="relative mx-auto overflow-hidden rounded-[24px] shadow-[0_30px_60px_-20px_rgba(59,13,92,0.35)]"
              style={{ aspectRatio: "4/3", maxHeight: "520px" }}
            >
              <img
                src={HeroImage}
                alt="Premium Valentine gift bouquet from a local Evivi seller"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              {/* darken bottom of the photo so overlay text/cards stay legible */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(59,13,92,0) 55%, rgba(19,9,32,0.55) 100%)" }}
              />

              
            </div>

            <p className="mt-3 text-center text-xs italic" style={{ color: "var(--color-muted-purple)" }}>
              Join early for launch updates, selected Valentine offers and future Evivi access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
