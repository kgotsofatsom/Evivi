import { Heart, Flower2, Candy, Gift, HeartHandshake, PartyPopper, CalendarClock, Sparkles, ChevronRight } from "lucide-react";
import { CTA } from "../constants/copy";
import valentineExperience from "../assets/images/valentine-experience.jpg";

const packages = [
  { icon: Flower2, label: "Flowers & Bouquets" },
  { icon: Candy, label: "Chocolates" },
  { icon: Gift, label: "Gift Hampers" },
  { icon: HeartHandshake, label: "Romantic Gift Bundles" },
  { icon: PartyPopper, label: "Balloons & Add-ons" },
];

export default function ValentineExperience() {
  return (
    <section id="valentine" className="px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-stretch">
        <div className="h-full overflow-hidden rounded-[2rem] shadow-soft">
          <img
            src={valentineExperience}
            alt="A local florist preparing a luxury gift hamper with flowers and chocolates"
            loading="lazy"
            width={1200}
            height={1100}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        <div>
          <p
            className="text-[12px] font-semibold text-magenta uppercase"
            style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}
          >
            Valentine 2027
          </p>
          <h2 className="font-display mt-3 text-[28px] leading-[1.25] text-plum-deep md:text-4xl">
            Make Valentine's Day about the moment — not the last-minute rush.{" "}
            <Heart size={26} fill="currentColor" className="inline text-[#ff8fa3] align-middle" aria-hidden="true" />
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            For Valentine 2027, Evivi is bringing together ready-to-order gifts from local gift sellers — from flowers and chocolates to hampers, romantic gift bundles and thoughtful add-ons.
          </p>
          <p
            className="mt-6 text-[12px] font-semibold text-magenta uppercase"
            style={{ letterSpacing: "1.2px" }}
          >
            What you'll find
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {packages.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-border bg-accent/60 px-4 py-2 text-[14px] text-plum-deep"
              >
                <Icon size={16} className="text-[#E91E63]" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-[#f6c9d6] bg-gradient-to-br from-[#fdf1f5] to-[#fbe4ec] p-6">
            <CalendarClock size={28} className="mt-0.5 shrink-0 text-[#E91E63]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="block font-display text-base text-plum-deep">Plan early. Have more choice.</span>
              Popular Valentine gifts and delivery times can become limited closer to the day. Join early and be ready when Evivi opens for shopping.
            </p>
          </div>


          <a  href={CTA.buyer.href}
            className="btn-primary mt-4 inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-deep-plum,#3B0D5C)]/40"
          >
            {CTA.buyer.label}
            <ChevronRight size={16} aria-hidden="true" />
          </a>
          <p className="mt-2 text-center text-xs leading-snug text-muted-foreground">
            Be the first to shop and enjoy early offers.
          </p>
        </div>

      </div>
      <p className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center font-display text-lg text-plum">
        <Sparkles size={18} className="shrink-0 text-[#ff8fa3]" aria-hidden="true" />
        Valentine is where Evivi starts — not where it ends.
      </p>
    </section>
  );
}