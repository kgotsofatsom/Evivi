import { Heart, Cake, HeartHandshake, Gem, Baby, GraduationCap, PartyPopper, Sparkles, Users2, Store } from "lucide-react";

const celebrationMoments = [
  { icon: Cake, label: "Birthdays" },
  { icon: HeartHandshake, label: "Anniversaries" },
  { icon: Gem, label: "Proposals" },
  { icon: Baby, label: "Baby Showers" },
  { icon: GraduationCap, label: "Graduations" },
  { icon: PartyPopper, label: "Other Celebrations" },
];

const ecosystemRoles = [
  { icon: Sparkles, title: "Plan a celebration", copy: "Find support to organise meaningful events and special occasions." },
  { icon: Users2, title: "Event Planners & Coordinators", copy: "Connect with professional planners who help customers design and coordinate unforgettable events." },
  { icon: Store, title: "Event Suppliers", copy: "Discover trusted businesses that provide products and services such as décor, catering, equipment and more." },
];

export default function BeyondValentine() {
  return (
    /* Beyond Valentine */
    <section id="beyond" className="px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[12px] font-semibold text-magenta uppercase" style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}>
          Beyond Valentine
        </p>
        <h2 className="font-display mt-3 text-[28px] leading-[1.25] text-plum-deep md:text-4xl">
          Valentine is where we start. Celebrations are where we're going.{" "}
          <Heart size={26} fill="currentColor" className="inline text-[#ff8fa3] align-middle" aria-hidden="true" />
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Evivi is being built around the wider celebration journey, connecting gift buyers with the businesses, planners and services that help meaningful moments happen.
        </p>
      </div>
      {/* More moments to celebrate — chips, not cards */}
      <div className="mx-auto mt-10 max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="flex items-center gap-1.5 text-sm font-semibold text-magenta">
            <Cake size={16} aria-hidden="true" /> More moments to celebrate
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-3">
          {celebrationMoments.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 rounded-2xl border border-border/60 bg-white px-4 py-3"
            >
              <Icon size={22} className="shrink-0 text-[#E91E63]" aria-hidden="true" />
              <span className="text-sm text-plum-deep">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* More ways Evivi can help — tinted cards, stacked rows on mobile, 3 columns on desktop */}
      <div className="mx-auto mt-10 max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="flex items-center gap-1.5 text-sm font-semibold text-magenta">
            <Sparkles size={16} aria-hidden="true" /> More ways Evivi can help
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <ul className="mt-5 grid gap-3 lg:grid-cols-3 lg:items-stretch">
          {ecosystemRoles.map(({ icon: Icon, title, copy }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl p-5 text-left lg:flex-col lg:items-center lg:gap-3 lg:text-center"
              style={{ backgroundColor: "#FDF2F7" }}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#E91E63]">
                <Icon size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold leading-[1.4] text-plum-deep">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 text-center font-display text-2xl text-plum">
        From a single gift to a full celebration, Evivi is being built to bring the journey together.
        <Heart size={22} fill="currentColor" className="text-[#ff8fa3]" aria-hidden="true" />
      </p>
    </section>
  );
}