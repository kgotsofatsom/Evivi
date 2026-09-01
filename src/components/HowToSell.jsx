import { Link } from "react-router-dom";

import sellerHero from "../assets/images/seller-hero.png";
import sellerCraft from "../assets/images/seller-craft.png";
import sellerGifts from "../assets/images/seller-gifts.png";
import sellerGrowth from "../assets/images/seller-growth.png";

const journeySteps = [
  {
    num: "01",
    title: "Apply to join",
    copy: "Tell us about your business, what you sell and where you operate.",
  },
  {
    num: "02",
    title: "Share your offerings",
    copy: "Let Evivi know what types of gifts or Valentine packages you offer.",
  },
  {
    num: "03",
    title: "Get ready for customers",
    copy: "Once selected, prepare your eligible offerings for the Evivi marketplace.",
  },
  {
    num: "04",
    title: "Receive structured orders",
    copy: "Customers discover your offerings and place orders through Evivi.",
  },
  {
    num: "05",
    title: "Fulfil the order",
    copy: "Support delivery, collection, or both based on your business model.",
  },
  {
    num: "06",
    title: "Grow with Evivi",
    copy: "Build your presence, customer trust and reputation as the marketplace develops.",
  },
];

const sellerPerks = [
  {
    num: "01",
    title: "Get discovered",
    copy: "Put your gifts in front of customers actively looking for Valentine and celebration gifts.",
  },
  {
    num: "02",
    title: "Structured orders",
    copy: "Receive clearer order information instead of relying entirely on manual messages and DMs.",
  },
  {
    num: "03",
    title: "Secure payments",
    copy: "Transactions are securely handled through Evivi's trusted payment partners.",
  },
  {
    num: "04",
    title: "Grow your reputation",
    copy: "Successful customer experiences help establish your seller presence as Evivi grows.",
  },
];

export default function HowToSell() {
  return (
    <div className="min-h-screen bg-[var(--color-blush-white)] text-[var(--color-near-black)]">
      <main className="pt-15">
        <section className="relative flex min-h-[calc(100vh-5rem)] items-center px-5 py-10 sm:px-8 md:py-12 animate-fade-in">
          {/* Animated background picture layer */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
            <img 
              src={sellerHero} 
              alt="" 
              className="w-full h-full object-cover animate-pulse scale-105 transition-transform duration-1000" 
            />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl w-full">
            {/* <Link
              to="/"
              className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-vibrant-magenta)] transition-colors hover:text-[var(--color-deep-plum)]"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link> */}

            <div className="grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                  How to sell on Evivi
                </p>

                <h1 className="mt-2 max-w-xl font-display text-3xl leading-[1.05] text-[var(--color-deep-plum)] sm:text-5xl lg:text-6xl animate-fade-in">
                  Turn what you create into something worth celebrating.
                </h1>

                <p className="mt-2 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--color-muted-foreground)]">
                  Bring your gifts, flowers and Valentine packages to customers
                  looking for meaningful ways to celebrate.
                </p>

                <p className="mt-2 max-w-xl text-sm sm:text-base leading-relaxed text-[var(--color-muted-foreground)]">
                  Evivi is building a celebration marketplace where customers
                  can discover gifts and Valentine offerings from participating
                  local sellers.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link to="/#join" className="btn-primary">
                    Apply to Sell on Evivi
                  </Link>

                  <a
                    href="#seller-journey"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--color-lavender-border)] bg-white px-6 py-3.5 text-sm font-medium text-[var(--color-deep-plum)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-vibrant-magenta)]"
                  >
                    Explore how it works
                    <span className="ml-2 animate-bounce" aria-hidden="true">
                      ↓
                    </span>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-[var(--color-warm-lilac)]/60 blur-2xl animate-pulse" />

                <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
                  <img
                    src={sellerHero}
                    alt="Gift seller preparing a beautifully packaged Valentine's gift"
                    loading="eager"
                    width={1400}
                    height={1100}
                    className="aspect-[4/3] w-full object-cover animate-fade-in"
                  />
                </div>

                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/40 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-vibrant-magenta)]">
                    For gift sellers
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--color-deep-plum)]">
                    Build your presence with Evivi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            INTRO
        ========================================================== */}
        <section className="flex min-h-[50vh] items-center border-y border-[var(--color-lavender-border)] bg-[var(--color-deep-plum)] px-5 py-12 text-white sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Your craft deserves to be discovered
            </p>

            <h2 className="mt-3 font-display text-2xl leading-tight sm:text-3xl md:text-4xl">
              Whether you create bouquets, hampers, baked treats or personalised
              gifts, there may be a place for you on Evivi.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
              We're inviting selected sellers to join early, create real
              Valentine offerings and help shape the marketplace before launch.
            </p>
          </div>
        </section>


        {/* =========================================================
            SELLER JOURNEY
        ========================================================== */}
        <section
          id="seller-journey"
          className="flex min-h-[calc(100vh-5rem)] flex-col justify-center px-5 py-12 sm:px-8"
        >
          <div className="mx-auto max-w-6xl w-full">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                The seller journey
              </p>

              <h2 className="mt-2 font-display text-3xl leading-tight text-[var(--color-deep-plum)] md:text-4xl">
                A simple path from application to selling.
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--color-muted-foreground)]">
                Here's what the early seller journey with Evivi is designed to
                look like.
              </p>
            </div>

            <div className="mt-6 grid gap-0 border-t border-[var(--color-lavender-border)] md:grid-cols-2 lg:grid-cols-3">
              {journeySteps.map((step, index) => (
                <div
                  key={step.num}
                  className={`group border-b border-[var(--color-lavender-border)] p-5 transition-colors hover:bg-white ${
                    index % 3 !== 2 ? "lg:border-r" : ""
                  } ${
                    index % 2 !== 1 ? "md:border-r lg:border-r-0" : ""
                  }`}
                >
                  <span className="font-display text-2xl text-[var(--color-vibrant-magenta)]/70 transition-colors group-hover:text-[var(--color-vibrant-magenta)]">
                    {step.num}
                  </span>

                  <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-deep-plum)]">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-6 sm:px-8 lg:py-8">
          <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-soft lg:min-h-[calc(85vh-5rem)] lg:grid-cols-2">

            {/* Image */}
            <div className="hidden h-[420px] self-center lg:block lg:h-[460px]">
              <img
                src={sellerCraft}
                alt="A gift seller creating and preparing a celebration gift"
                loading="lazy"
                width={1200}
                height={1000}
                className="h-full min-h-[520px] w-full object-cover animate-fade-in"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                Made for creators
              </p>

              <h2 className="mt-2 font-display text-xl leading-tight text-[var(--color-deep-plum)] sm:text-2xl md:text-3xl">
                Your products tell a story. Evivi helps customers find it.
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-[var(--color-muted-foreground)] sm:text-sm">
                From a carefully arranged bouquet to a personalised gift box,
                the things you create are part of how people celebrate the
                moments that matter to them.
              </p>

              <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-foreground)] sm:text-sm">
                Evivi is creating a place where those offerings can be
                discovered alongside other local celebration businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center px-5 py-8 sm:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                Who can sell
              </p>

              <h2 className="mt-1 font-display text-3xl leading-tight text-[var(--color-deep-plum)] md:text-4xl">
                Made for the people who make celebrations special.
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)] sm:text-base">
                Evivi is designed to support a range of gift and celebration
                businesses.
              </p>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <img
                  src={sellerGifts}
                  alt="Beautifully prepared Valentine's gift packages"
                  loading="lazy"
                  width={1000}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Florists",
                  "Gift & hamper businesses",
                  "Bakeries & sweet treats",
                  "Personalised gift creators",
                  "Chocolatiers & confectionery",
                  "Balloons & décor",
                  "Jewellery & accessories",
                  "Other eligible gift businesses",
                ].map((category) => (
                  <div
                    key={category}
                    className="rounded-xl border border-[var(--color-lavender-border)] bg-white px-4 py-3 text-xs font-medium text-[var(--color-deep-plum)] transition-all hover:-translate-y-0.5 hover:shadow-sm sm:text-sm"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-2 text-center text-xs text-[var(--color-muted-foreground)] sm:text-sm">
              Don't see your category? Tell us what you create when you apply.
            </p>
          </div>
        </section>
        <section className="flex min-h-[calc(100vh-5rem)] items-center border-y border-[var(--color-lavender-border)] bg-[var(--color-warm-lilac)]/60 px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl w-full">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                  Why sell on Evivi
                </p>

                <h2 className="mt-2 font-display text-3xl leading-tight text-[var(--color-deep-plum)] md:text-4xl">
                  More than a place to list your gifts.
                </h2>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--color-muted-foreground)]">
                  Evivi is being built to help local gift businesses connect
                  with customers during meaningful moments.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {sellerPerks.map((perk) => (
                  <div
                    key={perk.title}
                    className="rounded-2xl border border-[var(--color-lavender-border)] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                  >
                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--color-vibrant-magenta)]">
                      {perk.num}
                    </span>

                    <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-deep-plum)]">
                      {perk.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                      {perk.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center px-5 py-8 sm:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-soft lg:grid-cols-[1fr_0.85fr]">

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                  After you apply
                </p>

                <h2 className="mt-1 font-display text-3xl leading-tight text-[var(--color-deep-plum)] md:text-4xl">
                  What happens next?
                </h2>

                <div className="mt-4 space-y-2.5">
                  {[
                    ["01", "You apply", "Tell us about your business and offerings."],
                    ["02", "We review", "We review the information you provide."],
                    ["03", "Selected sellers are contacted", "If selected, we'll be in touch with next steps."],
                    ["04", "Prepare your offerings", "Get your eligible gifts and packages ready."],
                    ["05", "Get ready for launch", "Prepare to welcome customers through Evivi."],
                  ].map(([num, title, copy]) => (
                    <div key={num} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-warm-lilac)] text-xs font-semibold text-[var(--color-vibrant-magenta)]">
                        {num}
                      </span>

                      <div>
                        <h3 className="text-sm font-medium text-[var(--color-deep-plum)] sm:text-base">
                          {title}
                        </h3>

                        <p className="text-xs leading-relaxed text-[var(--color-muted-foreground)] sm:text-sm">
                          {copy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[420px] lg:h-[460px]">
                <img
                  src={sellerGrowth}
                  alt="Gift seller preparing orders for customers"
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-xs leading-relaxed text-white/85 sm:text-sm">
                    Evivi is currently building its early seller network.
                  </p>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-3 max-w-2xl text-center text-[11px] leading-relaxed text-[var(--color-muted-foreground)] sm:text-xs">
              Submitting an application does not automatically guarantee
              marketplace approval or placement.
            </p>
          </div>
        </section>
        <section className="flex min-h-[45vh] items-center px-5 pb-12 sm:px-8">
          <div className="mx-auto max-w-6xl w-full overflow-hidden rounded-[2.5rem] bg-[var(--color-deep-plum)] px-6 py-10 text-center sm:px-10 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Ready to join Evivi?
            </p>

            <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl leading-tight text-white md:text-4xl">
              Your next customer could be looking for exactly what you create.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
              Join the early Evivi seller network and help us shape the future
              of celebration.
            </p>

            <div className="mt-6">
              <Link
                to="/#join"
                onClick={() => {
                  sessionStorage.setItem("evivi-selected-role", "seller");
                }}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--color-deep-plum)] transition-transform hover:-translate-y-0.5"
              >
                Apply to Sell Gifts on Evivi
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}