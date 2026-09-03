import { Heart, Gift, Store, Bike, CalendarDays, Briefcase, Mail } from "lucide-react";
import HeroImage from "../assets/images/hero-image.jpg";
import HeroMobileImage from "../assets/images/Hero-mobile.jpg";
import { CTA } from "../constants/copy";

const BRAND_GRADIENT =
  "linear-gradient(135deg, #3B0D5C 0%, #6A1B9A 45%, #C2185B 80%, #E8607E 100%)";

const ICON_SIZE = 24;

const audienceLinks = [
  {
    href: "#delivery",
    Icon: Bike,
    title: "Become an Evivi Delivery Partner",
    copy: "Deliver joy. Earn with flexible deliveries.",
  },
  {
    href: "#planners",
    Icon: CalendarDays,
    title: "Event Planners & Coordinators",
    copy: "Join the waitlist for tools that help you plan amazing celebrations.",
  },
  {
    href: "#suppliers",
    Icon: Briefcase,
    title: "Event Suppliers",
    copy: "Provide catering, décor, sound, lighting, equipment and more for events.",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-30 pb-16 md:pt-40 md:pb-24 text-white md:min-h-[720px] flex items-center"
    >
      {/* Background picture with mix-blend modes and animations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet={HeroMobileImage} />
          <img
            src={HeroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top md:object-[80%_25%] transition-transform duration-700 md:hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 animate-fade-in motion-reduce:animate-none"
            loading="eager"
          />
        </picture>

        {/* mix-blend-soft-light at 45% opacity */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{ background: BRAND_GRADIENT, opacity: 0.45 }}
        />

        {/* mix-blend-color at 15% opacity */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-color"
          style={{ background: BRAND_GRADIENT, opacity: 0.15 }}
        />

        {/* Vertical scrim for mobile (stacked layout, text sits over full-width image) */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,8,35,0.75) 0%, rgba(20,8,35,0.60) 50%, rgba(20,8,35,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,8,35,0.85) 0%, rgba(20,8,35,0.65) 45%, rgba(20,8,35,0.25) 75%, rgba(20,8,35,0.1) 100%)",
          }}
        />
        <div
          className="hidden md:block absolute -top-24 right-0 h-[420px] w-[420px] rounded-full blur-3xl opacity-20"
          style={{ background: "var(--color-soft-peach)" }}
        />
        <div
          className="hidden md:block absolute top-1/3 -left-24 h-[320px] w-[320px] rounded-full blur-3xl opacity-15"
          style={{ background: "var(--color-warm-lilac)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-8 w-full">
        <div className="max-w-[820px] lg:max-w-[680px] xl:max-w-[760px] mx-auto md:mx-0">
          {/* Copy column */}
          <div className="fade-up">
            {/* 1. Valentine Launch Badge */}
            <span className="section-eyebrow mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 text-sm font-medium">
              {/* Fix: spec calls for line-style icons; this was filled. */}
              <Heart size={16} className="text-[#ff8fa3]" aria-hidden="true" />
              LAUNCHING WITH VALENTINE GIFTING
            </span>

            {/* 2. Strong, Emotional Headline */}
            <h1 className="font-display text-[2.5rem] leading-[1.1] font-medium md:text-[3.8rem] md:leading-[1.08] text-white drop-shadow-md">
              Find the right gift. Make the moment happen.{" "}
              {/* Fix: wireframe shows a small heart glyph closing the headline. */}
              <Heart
                size={28}
                fill="currentColor"
                className="inline text-[#ff8fa3] align-middle"
                aria-hidden="true"
              />
            </h1>

            {/* 3. Clear Platform Description */}
            <p className="mt-5 max-w-[640px] text-[1.05rem] md:text-[1.15rem] leading-relaxed text-purple-100 drop-shadow">
              Evivi is a marketplace for gifts and celebrations — connecting gift buyers with local gift sellers today, with Event Planners & Coordinators and Event Suppliers coming as we expand.
            </p>

            {/* 4. Valentine Positioning */}
            <div className="mt-4">
              <p className="text-base font-bold tracking-wide text-[#ff8fa3] drop-shadow">
                Starting with Valentine gifting.
              </p>
            </div>

            {/* 5 & 6. Primary & Secondary CTAs — now sourced from shared copy so
                Navbar and Hero can't drift out of sync. */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={CTA.buyer.href}
                className="btn-primary uppercase shadow-lg flex items-center gap-4 px-6 py-4 flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B0D5C]"
              >
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm shrink-0">
                  <Gift size={ICON_SIZE} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-base font-bold tracking-tight">{CTA.buyer.label}</div>
                  <div className="text-[13px] text-purple-100/90 font-normal normal-case">
                    {CTA.buyer.subtext}
                  </div>
                </div>
              </a>

              <a
                href={CTA.seller.href}
                className="btn-secondary uppercase bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md shadow-lg flex items-center gap-4 px-6 py-4 flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B0D5C]"
              >
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm shrink-0">
                  <Store size={ICON_SIZE} className="text-[#ff8fa3]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-base font-bold tracking-tight">{CTA.seller.label}</div>
                  <div className="text-[13px] text-purple-200/90 font-normal normal-case">
                    {CTA.seller.subtext}
                  </div>
                </div>
              </a>
            </div>

            {/* Divider for Other Audiences */}
            <div className="mt-10 mb-5 relative flex items-center">
              <div className="flex-grow border-t border-white/15"></div>
              <span className="flex-shrink mx-4 text-xs tracking-wider uppercase text-purple-200/80 font-medium">
                Other ways to join Evivi
              </span>
              <div className="flex-grow border-t border-white/15"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 md:divide-x md:divide-white/10">
              {audienceLinks.map(({ href, Icon, title, copy }, i) => (
                <a
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 py-3 px-2 md:px-4 rounded-lg hover:bg-white/5 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                    i > 0 ? "border-t border-white/10 md:border-t-0" : ""
                  }`}
                >
                  <Icon size={ICON_SIZE} className="text-[#ff8fa3] shrink-0" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#ff8fa3] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-[12px] text-purple-200/70 mt-0.5 line-clamp-2">{copy}</p>
                  </div>
                  <span
                    className="text-white/50 group-hover:translate-x-1 transition-transform shrink-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* 8. Supporting Line (Simplified) */}
            <div className="mt-6 flex items-center gap-2.5 text-xs text-purple-200/80">
              <Mail size={14} className="text-[#ff8fa3] shrink-0" aria-hidden="true" />
              <p>Join early for launch updates and early access. No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}