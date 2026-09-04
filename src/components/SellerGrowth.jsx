import { Link } from "react-router-dom";
import { Heart, CalendarHeart, Users, ClipboardList, ShieldCheck, Star, TrendingUp, ChevronRight, Sparkles } from "lucide-react";
import { CTA } from "../constants/copy";

const ACCENT = "#E91E63";

const sellerBenefits = [
  { icon: Users, title: "Reach more gift buyers", copy: "Put your products in front of people actively looking for Valentine gifts." },
  { icon: ClipboardList, title: "Manage orders easily", copy: "Receive customer orders through Evivi instead of relying on scattered messages and manual tracking." },
  { icon: ShieldCheck, title: "Get paid securely", copy: "Customer payments are processed through Evivi's payment system." },
  { icon: Star, title: "Build your reputation", copy: "Earn ratings and reviews that help future buyers choose your business." },
  { icon: TrendingUp, title: "Create more opportunities to sell", copy: "Reach customers beyond your existing audience and add another sales channel for your gift business." },
];

export default function SellerGrowth() {
  return (
    <section id="seller-beta" className="px-5 pb-16 sm:px-8 md:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-gradient p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p
                className="text-[12px] font-semibold text-primary-foreground/70 uppercase"
                style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}
              >
                For gift sellers
              </p>
              <h2 className="font-display mt-3 text-[28px] leading-[1.2] text-primary-foreground md:text-4xl">
                Sell your gifts. Reach more customers. Grow with Evivi.{" "}
                <Heart size={26} fill="currentColor" className="inline text-[#ff8fa3] align-middle" aria-hidden="true" />
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80">
                If you sell flowers, hampers, chocolates, balloons or Valentine gift packages, we're inviting selected gift sellers to join Evivi early.
              </p>

              <div className="mt-5 flex items-start gap-3 max-w-lg">
                <CalendarHeart size={36} className="mt-0.5 shrink-0 text-white/80" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  List real Valentine gifts, experience the platform before launch and prepare your business for Valentine 2027.
                </p>
              </div>
            </div>
            <div className="mt-8 w-full flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("evivi-select-role", { detail: "seller" }));
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-plum-deep transition-transform md:hover:-translate-y-0.5"
              >
                {CTA.seller.label}
                <ChevronRight size={16} aria-hidden="true" />
              </button>

              <Link
                to="/HowToSell"
                className="inline-flex items-center justify-center gap-1 rounded-full border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 sm:rounded-none sm:border-0 sm:px-0 sm:py-0 sm:text-base sm:underline sm:underline-offset-4 sm:hover:bg-transparent sm:hover:opacity-80"
              >
                See How Selling Works
                <ChevronRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div>
            {/* 3. "WHY SELL ON EVIVI?" divider — only shown below lg, where
                content and cards stack vertically and the question needs to
                be stated. At lg+ the two-column split already makes the
                cards' purpose visually obvious without it. */}
            <div className="mb-4 flex items-center gap-3 lg:hidden">
              <span className="h-px flex-1 bg-white/20" />
              <span className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
                Why sell on Evivi?
              </span>
              <span className="h-px flex-1 bg-white/20" />
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {sellerBenefits.map((item, i) => (
                <li
                  key={item.title}
                  className={`rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-5 backdrop-blur-sm ${
                    i === sellerBenefits.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* 4. Mobile only (below sm): icon sits left, full height of
                      the title+description block — matches Screen 5's card
                      layout. */}
                  <div className="flex items-stretch gap-4 sm:hidden">
                    <span
                      className="flex w-14 shrink-0 items-center justify-center rounded-xl bg-secondary"
                      style={{ color: ACCENT }}
                    >
                      <item.icon size={24} aria-hidden="true" />
                    </span>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-medium text-primary-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">
                        {item.copy}
                      </p>
                    </div>
                  </div>

                  {/* sm and up: icon + title inline, description below —
                      the space-saving layout from earlier in this thread. */}
                  <div className="hidden sm:block">
                    <div className="flex items-center gap-3">
                      {/* 2. Icon now sits in a bg-secondary box tinted with
                          ACCENT, instead of a bare white icon. */}
                      <span
                        className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary"
                        style={{ color: ACCENT }}
                      >
                        <item.icon size={22} aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-medium text-primary-foreground">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                      {item.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-2xl bg-secondary p-5 sm:p-6">
          <span
            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white"
            style={{ color: ACCENT }}
          >
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <div>
            <span className="font-medium text-plum-deep">Early sellers help shape Evivi.</span>
            <p className="mt-1 text-sm leading-relaxed text-plum-deep/80">
              Share feedback, suggest improvements and be part of building the best way to buy and sell gifts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}