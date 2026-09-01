import { Link } from "react-router-dom";

import deliveryHero from "../assets/images/delivery-hero.png";
import deliveryBag from "../assets/images/delivery-bag.png";
import deliveryCar from "../assets/images/delivery-car.png";
import deliveryCity from "../assets/images/delivery-city.png";

const journeySteps = [
  {
    num: "01",
    title: "Join the waitlist",
    copy: "Tell Evivi about yourself, your transport and the areas where you can provide delivery support.",
  },
  {
    num: "02",
    title: "We review your details",
    copy: "We'll review the information you provide as we build the early delivery partner network.",
  },
  {
    num: "03",
    title: "Get ready",
    copy: "If selected, we'll share the relevant next steps and expectations before you begin supporting deliveries.",
  },
  {
    num: "04",
    title: "Receive eligible opportunities",
    copy: "As the network develops, participating sellers may have local delivery opportunities that match your availability and coverage.",
  },
  {
    num: "05",
    title: "Collect and deliver",
    copy: "Collect eligible orders from participating sellers and help get them safely to the intended customer or recipient.",
  },
  {
    num: "06",
    title: "Grow with Evivi",
    copy: "As Evivi expands, reliable delivery partners can become part of the wider celebration marketplace network.",
  },
];

const partnerRequirements = [
  "Reliable transport",
  "A valid driver's licence where applicable",
  "Ability to safely handle gifts and packages",
  "Ability to indicate your service areas",
  "Ability to indicate when you can provide delivery support",
  "A reliable way for Evivi or participating sellers to contact you",
];

const deliveryTypes = [
  {
    title: "Local gift deliveries",
    copy: "Help participating sellers get eligible gifts and celebration packages to customers within supported areas.",
  },
  {
    title: "Scheduled deliveries",
    copy: "Some orders may have specific delivery dates or time requirements. Availability will matter when matching opportunities.",
  },
  {
    title: "Seller collections",
    copy: "Collect prepared orders from participating sellers according to the fulfilment instructions provided.",
  },
  {
    title: "Recipient handover",
    copy: "Complete the final part of the journey by getting the order to the intended customer or recipient.",
  },
];

const partnerBenefits = [
  {
    num: "01",
    title: "Flexible opportunities",
    copy: "Indicate the areas and times when you can support deliveries.",
  },
  {
    num: "02",
    title: "Local delivery work",
    copy: "Support participating sellers with eligible local orders in areas you can serve.",
  },
  {
    num: "03",
    title: "Be part of something growing",
    copy: "Join Evivi's early delivery network as the celebration marketplace develops.",
  },
  {
    num: "04",
    title: "Build a reliable reputation",
    copy: "Consistent, professional fulfilment can help establish trust within the Evivi network.",
  },
];

// Stores the selected role so JoinEvivi (on a different page/route)
// can pick it up on mount, since the CustomEvent approach only works
// when both components are already mounted on the same page.
const selectDriverRole = () => {
  sessionStorage.setItem("evivi-selected-role", "driver");
};

export default function HowToBecomeDeliveryPartner() {
  return (
    <div className="min-h-screen bg-[var(--color-blush-white)] text-[var(--color-near-black)]">
      <main className="pt-15">
        <section className="px-5 pb-14 pt-8 sm:px-8 md:pb-18 md:pt-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                  Delivery partners
                </p>

                <h1 className="mt-3 max-w-xl font-display text-5xl leading-[0.98] text-[var(--color-deep-plum)] sm:text-6xl lg:text-7xl">
                  Help local gifts get where they need to go.
                </h1>

                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-muted-foreground)]">
                  Evivi is building a network of independent delivery partners
                  who can help participating sellers fulfil eligible local
                  orders.
                </p>

                <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--color-muted-foreground)]">
                  If you have reliable transport and want to support local gift
                  deliveries, join the Evivi delivery partner waitlist.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">

                  <Link
                    to="/#join"
                    onClick={selectDriverRole}
                    className="btn-primary"
                  >
                    Join the Delivery Partner Waitlist
                  </Link>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative">

                <div className="absolute -inset-3 rounded-[2.5rem] bg-[var(--color-warm-lilac)]/60 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
                  <img
                    src={deliveryHero}
                    alt="Delivery partner preparing to make a local gift delivery"
                    loading="eager"
                    width={1400}
                    height={1100}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/40 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-vibrant-magenta)]">
                    Delivery network
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--color-deep-plum)]">
                    Help celebrations arrive
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            QUICK ANSWER
        ========================================================== */}
        <section className="border-y border-[var(--color-lavender-border)] bg-[var(--color-deep-plum)] px-5 py-12 text-white sm:px-8 md:py-16">
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              What is an Evivi delivery partner?
            </p>

            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              You help move the celebration from the seller to the recipient.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Delivery partners support participating sellers by helping
              fulfil eligible local orders. You provide the transport and
              delivery support while Evivi works toward coordinating the
              marketplace experience.
            </p>

          </div>
        </section>


        {/* =========================================================
            HOW IT WORKS
        ========================================================== */}
        <section
          id="delivery-journey"
          className="px-5 py-14 sm:px-8 md:py-18"
        >
          <div className="mx-auto max-w-6xl">

            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                The delivery journey
              </p>

              <h2 className="mt-2 font-display text-4xl leading-tight text-[var(--color-deep-plum)] md:text-5xl">
                From opportunity to doorstep.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                Here's how the delivery partner journey is designed to work.
              </p>
            </div>

            <div className="mt-9 grid gap-0 border-t border-[var(--color-lavender-border)] md:grid-cols-2 lg:grid-cols-3">

              {journeySteps.map((step, index) => (
                <div
                  key={step.num}
                  className={`group border-b border-[var(--color-lavender-border)] p-6 transition-colors hover:bg-white ${
                    index % 3 !== 2 ? "lg:border-r" : ""
                  } ${
                    index % 2 !== 1 ? "md:border-r lg:border-r-0" : ""
                  }`}
                >

                  <span className="font-display text-3xl text-[var(--color-vibrant-magenta)]/70 transition-colors group-hover:text-[var(--color-vibrant-magenta)]">
                    {step.num}
                  </span>

                  <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    {step.copy}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* =========================================================
            DELIVERY IN PRACTICE
        ========================================================== */}
        <section className="px-5 py-6 sm:px-8 md:py-8">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-white shadow-soft lg:grid-cols-2">

            <div className="min-h-[320px] lg:min-h-[420px]">
              <img
                src={deliveryBag}
                alt="Delivery bag and carefully prepared gift package"
                loading="lazy"
                width={1200}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 md:p-14">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                What you may deliver
              </p>

              <h2 className="mt-2 font-display text-3xl leading-tight text-[var(--color-deep-plum)] md:text-4xl">
                Every delivery is part of someone's celebration.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                Deliveries may include eligible gifts, flowers, hampers,
                celebration packages and other offerings from participating
                sellers.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {deliveryTypes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[var(--color-warm-lilac)]/60 p-4"
                  >
                    <h3 className="font-medium text-[var(--color-deep-plum)]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted-foreground)]">
                      {item.copy}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            WHO CAN APPLY
        ========================================================== */}
        <section className="px-5 py-14 sm:px-8 md:py-18">
          <div className="mx-auto max-w-6xl">

            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                  Who can apply?
                </p>

                <h2 className="mt-2 font-display text-4xl leading-tight text-[var(--color-deep-plum)] md:text-5xl">
                  If you can deliver reliably, there may be an opportunity for you.
                </h2>

                <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                  Evivi is looking for dependable independent delivery partners
                  who can support participating sellers in their local areas.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {partnerRequirements.map((requirement, index) => (
                  <div
                    key={requirement}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--color-lavender-border)] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                  >

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-warm-lilac)] text-xs font-semibold text-[var(--color-vibrant-magenta)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-relaxed text-[var(--color-deep-plum)]">
                      {requirement}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            TRANSPORT / FLEXIBILITY
        ========================================================== */}
        <section className="border-y border-[var(--color-lavender-border)] bg-[var(--color-warm-lilac)]/60 px-5 py-14 sm:px-8 md:py-18">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-white shadow-soft lg:grid-cols-[1.05fr_0.95fr]">

            <div className="p-7 sm:p-10 md:p-14">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                Your availability matters
              </p>

              <h2 className="mt-2 font-display text-4xl leading-tight text-[var(--color-deep-plum)] md:text-5xl">
                Delivery should fit around where you can actually operate.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                When you join the waitlist, you'll have an opportunity to tell
                Evivi where and when you can provide delivery support.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Tell us the areas you can cover.",
                  "Indicate the times you are generally available.",
                  "Let us know what type of transport you have.",
                  "Keep your contact information accurate.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">

                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-vibrant-magenta)] text-xs text-white">
                      ✓
                    </span>

                    <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            <div className="min-h-[340px]">

              <img
                src={deliveryCar}
                alt="Delivery partner standing beside a car ready to support local deliveries"
                loading="lazy"
                width={1000}
                height={1100}
                className="h-full w-full object-cover"
              />

            </div>

          </div>
        </section>


        {/* =========================================================
            PARTNER BENEFITS
        ========================================================== */}
        <section className="px-5 py-14 sm:px-8 md:py-18">
          <div className="mx-auto max-w-6xl">

            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                  Why become a partner?
                </p>

                <h2 className="mt-2 font-display text-4xl leading-tight text-[var(--color-deep-plum)] md:text-5xl">
                  More than just making a delivery.
                </h2>

                <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)]">
                  Delivery partners are an important part of helping local
                  sellers deliver better customer experiences.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {partnerBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-3xl border border-[var(--color-lavender-border)] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                  >

                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--color-vibrant-magenta)]">
                      {benefit.num}
                    </span>

                    <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                      {benefit.copy}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            WHAT HAPPENS AFTER APPLYING
        ========================================================== */}
        <section className="px-5 py-6 sm:px-8 md:py-8">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-white shadow-soft lg:grid-cols-[1fr_0.85fr]">

            <div className="p-7 sm:p-10 md:p-14">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                After you apply
              </p>

              <h2 className="mt-2 font-display text-4xl leading-tight text-[var(--color-deep-plum)] md:text-5xl">
                What happens next?
              </h2>

              <div className="mt-7 space-y-5">

                {[
                  [
                    "01",
                    "You join the waitlist",
                    "Provide your details, transport information and delivery areas.",
                  ],
                  [
                    "02",
                    "Evivi reviews your information",
                    "Your information helps us understand the early delivery network.",
                  ],
                  [
                    "03",
                    "Selected partners are contacted",
                    "If you're selected for the next stage, we'll be in touch.",
                  ],
                  [
                    "04",
                    "You receive next steps",
                    "We'll explain what you need to know before supporting deliveries.",
                  ],
                  [
                    "05",
                    "You can support eligible deliveries",
                    "As opportunities become available, your availability and coverage can help determine suitable delivery opportunities.",
                  ],
                ].map(([num, title, copy]) => (
                  <div key={num} className="flex gap-3">

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-warm-lilac)] text-xs font-semibold text-[var(--color-vibrant-magenta)]">
                      {num}
                    </span>

                    <div>

                      <h3 className="font-medium text-[var(--color-deep-plum)]">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                        {copy}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            <div className="relative min-h-[360px] lg:min-h-[460px]">

              <img
                src={deliveryCity}
                alt="City view representing local delivery opportunities"
                loading="lazy"
                width={1000}
                height={1200}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/60 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 text-white">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Growing together
                </p>

                <p className="mt-2 text-lg font-medium">
                  Be part of the network as Evivi expands.
                </p>

              </div>

            </div>

          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-[var(--color-muted-foreground)]">
            Joining the waitlist does not automatically guarantee acceptance,
            delivery opportunities or a specific level of work.
          </p>

        </section>


        {/* =========================================================
            SELLER CROSS-LINK
        ========================================================== */}
        <section className="px-5 py-12 sm:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">

            <div className="flex flex-col gap-6 rounded-[2rem] border border-[var(--color-lavender-border)] bg-white p-7 shadow-sm sm:p-9 md:flex-row md:items-center md:justify-between">

              <div className="max-w-2xl">

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                  Another way to join Evivi
                </p>

                <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--color-deep-plum)] md:text-3xl">
                  Do you sell gifts or celebration products?
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                  If you create gifts, flowers, hampers or other celebration
                  products, you can learn more about becoming an Evivi seller.
                </p>

              </div>

              <Link
                to="/HowToSell"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--color-deep-plum)] px-6 py-3.5 text-sm font-medium text-[var(--color-deep-plum)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-deep-plum)] hover:text-white"
              >
                Learn How to Sell
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

            </div>

          </div>
        </section>
        <section className="px-5 pb-14 sm:px-8 md:pb-18">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[var(--color-deep-plum)] px-7 py-12 text-center sm:px-12 md:py-16">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Ready to join the network?
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl leading-tight text-white md:text-5xl">
              Help local celebrations arrive where they're meant to be.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Join the Evivi delivery partner waitlist and tell us where and
              when you can help.
            </p>

            <div className="mt-7">

              <Link
                to="/#join"
                onClick={() => {
                  sessionStorage.setItem("evivi-selected-role", "driver");
                }}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-[var(--color-deep-plum)] transition-transform hover:-translate-y-0.5"
              >
                Join the Delivery Partner Waitlist
              </Link>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}