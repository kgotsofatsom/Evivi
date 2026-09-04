import { Search, Gift, Truck, ClipboardCheck, ChevronRight, Heart } from "lucide-react";
import { CTA } from "../constants/copy"
const ACCENT = "#E91E63";

const steps = [
  {
    icon: Search,
    title: "Discover",
    copy: "Browse Valentine gifts from local gift sellers near you or near where the gift needs to go.",
  },
  {
    icon: Gift,
    title: "Choose",
    copy: "Pick the gift that feels right and review the product details before ordering.",
  },
  {
    icon: Truck,
    title: "Choose delivery or collection",
    copy: "See the options available for your gift and plan for when you need it.",
  },
  {
    icon: ClipboardCheck,
    title: "Pay and follow your order",
    copy: "Complete your purchase and follow your gift until it is delivered or ready for collection.",
  },
];

export default function HowItWorks() {
  return (
    /* How it works */
    <section id="how-it-works" className="bg-soft-gradient px-5  sm:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold text-magenta uppercase"
            style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}
          >
            How Evivi works
          </p>
          <h2 className="font-display mt-3 text-[28px] leading-[1.25] text-plum-deep md:text-4xl">
            Find, choose and send the perfect gift.{" "}
            <Heart 
              size={26}
              fill="currentColor"
              className="inline text-[#ff8fa3] align-middle"
              aria-hidden="true"
            /> 
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From discovery to delivery, Evivi makes gifting easy and stress-free
          </p>
        </div>
        
       {/* Mobile: numbered rail with dashed connector */}
        <div className="mt-10 max-w-2xl md:hidden">
          {steps.map((item, i) => (
            <div key={item.title} className="relative flex gap-4 pb-5 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  className="absolute left-[22px] top-11 bottom-0 border-l-2 border-dashed"
                  style={{ borderColor: "#F2B6CC" }}
                  aria-hidden="true"
                />
              )}
              <span
                className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                style={{ backgroundColor: "#FDE7EF", color: ACCENT }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 rounded-2xl border border-border/70 bg-card px-4 py-4">
                <span
                  className="flex size-11 items-center justify-center rounded-xl bg-secondary"
                  style={{ color: ACCENT }}
                >
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-xl leading-[1.3] text-plum-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: original 4-column grid with badge-on-icon-corner numbering */}
        <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
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
              <span aria-hidden="true">
                <ChevronRight size={16}/>
              </span>
            </a>
            <p className="text-xs leading-snug text-muted-foreground px-6">
              Be the first to shop and enjoy early offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}