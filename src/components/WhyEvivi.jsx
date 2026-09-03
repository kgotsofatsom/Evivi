import { Search, MapPin, PackageCheck, ShieldCheck, Gift, Heart } from "lucide-react";
import { CTA } from "../constants/copy";

const ACCENT = "#E91E63";

const benefits = [
  {
    icon: Search,
    title: "Find the right gift faster",
    copy: "Find relevant gifts without endless scrolling through endless options or searching across different sellers.",
  },
  {
    icon: MapPin,
    title: "Find gifts from local sellers",
    copy: "Discover gifts from local gift sellers near where the gift needs to go, where available.",
  },
  {
    icon: PackageCheck,
    title: "Choose how your gift gets there",
    copy: "See the available delivery or collection options before you place your order.",
  },
  {
    icon: ShieldCheck,
    title: "Know what happens after you order",
    copy: "Keep track of your gift from purchase through fulfilment so you always know what's happening.",
  },
];

export default function WhyEvivi() {
  return (
    /* Why Evivi */
    <section className="px-5 py-16 sm:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          
          <p
            className="text-[12px] font-semibold uppercase text-magenta"
            style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}
          >
            Why use Evivi
          </p>
          <h2 className="font-display mt-3 text-[28px] leading-[1.25] text-plum-deep md:text-4xl">
            A simpler way to find and send the right gift.{" "}
            <Heart
              size={26}
              fill="currentColor"
              className="inline text-[#ff8fa3] align-middle"
              aria-hidden="true"
            />
          </h2>
          
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Everything you need to find, send and enjoy the perfect gift this Valentine's Day.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/70 bg-card p-6 transition-all md:hover:-translate-y-1 md:hover:shadow-soft"
            >
              
              <div className="relative inline-flex">
                <span
                  className="flex size-11 items-center justify-center rounded-xl bg-secondary"
                  style={{ color: ACCENT }}
                >
                  
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <span
                  className="absolute -left-2 -top-2 flex size-6 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: ACCENT }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display mt-5 text-xl leading-[1.3] text-plum-deep">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-[#f6c9d6] bg-gradient-to-br from-[#fdf1f5] to-[#fbe4ec] p-6 sm:flex-row sm:items-center md:p-8">
          <span
            className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white"
            style={{ color: ACCENT }}
          >
            <Gift className="size-7" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h3 className="font-display text-xl text-plum-deep">Valentine's Day doesn't wait.</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Find your gift early, choose how you want it delivered, and avoid the last-minute rush.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end">
            <a
              href={CTA.buyer.href}
              className="btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-base font-semibold sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-deep-plum,#3B0D5C)]/40"
            >
              {CTA.buyer.label}
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-xs leading-snug text-muted-foreground">
              Be the first to shop and enjoy early offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}