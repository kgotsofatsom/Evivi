import { Link } from "react-router-dom";
import { Heart, Gift, Truck, Users2, MapPin, TrendingUp, ChevronRight, Bike } from "lucide-react";
import deliveryPartner from "../assets/images/delivery-partner.jpg";

const ecosystemFlow = [
  { icon: Gift, label: "Gift Seller", copy: "prepares the order" },
  { icon: Truck, label: "Delivery Partner", copy: "helps get it there" },
  { icon: Heart, label: "Gift Buyer", copy: "receives the gift" },
];

const whyJoin = [
  { icon: Truck, title: "Earn from local deliveries", copy: "Accept eligible Evivi delivery opportunities and earn for the deliveries you complete." },
  { icon: Users2, title: "Connect with multiple Gift Sellers", copy: "Delivery opportunities can come from Gift Sellers across Evivi." },
  { icon: MapPin, title: "Choose where you're available", copy: "Tell Evivi the areas and times you can support so opportunities match your availability." },
  { icon: TrendingUp, title: "Start with Valentine. Grow with Evivi.", copy: "Join during the Valentine launch and grow with the Delivery Partner community as Evivi expands." },
];

export default function DeliveryPartners() {
  return (
    /* Delivery partners */
    <section id="delivery" className="bg-soft-gradient px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl lg:max-w-7xl">
        {/* Hero row — text left, image right. 55/45 split + vertical centering on desktop. */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold text-magenta uppercase" style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}>
              Delivery partners
            </p>
            <h2 className="font-display mt-3 text-[28px] leading-[1.25] text-plum-deep md:text-4xl lg:text-5xl lg:leading-[1.15]">
              Help local gifts get where they need to go{" "}
              <Heart size={26} fill="currentColor" className="inline text-[#ff8fa3] align-middle" aria-hidden="true" />
            </h2>
            <p className="mt-3 text-base font-semibold leading-[1.5] text-magenta">
              Earn from eligible local deliveries as Evivi grows.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Have reliable transport and want to earn from local deliveries? Join Evivi's Delivery Partner community and help Gift Sellers get customer orders where they need to go.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We're starting with Valentine gifting and inviting interested Delivery Partners to join the waitlist before launch.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={deliveryPartner}
              alt="An independent delivery partner holding a wrapped gift beside a scooter"
              loading="lazy"
              width={1200}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* How you fit into Evivi — full width, centered. No dividers. */}
        <div className="mt-14 text-center lg:mt-24">
          <span className="text-[12px] font-semibold uppercase text-magenta" style={{ letterSpacing: "1.2px" }}>
            How you fit into Evivi
          </span>
        </div>

        <div className="mt-6 flex w-full items-stretch justify-center gap-3 sm:gap-4 lg:gap-6">
          {ecosystemFlow.map((step, i) => (
            <>
              <div
                key={step.label}
                className={`flex flex-1 basis-0 flex-col items-center gap-1.5 rounded-2xl px-5 py-4 text-center lg:px-8 lg:py-6 ${
                  i === 1 ? "border-2 bg-white lg:shadow-sm" : ""
                }`}
                style={i === 1 ? { borderColor: "#E91E63" } : undefined}
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/60 text-[#E91E63] lg:size-16">
                  <step.icon size={26} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-plum-deep lg:text-base">{step.label}</span>
                <span className="text-xs text-muted-foreground lg:text-sm">{step.copy}</span>
              </div>
              {i < ecosystemFlow.length - 1 && (
                <ChevronRight
                  key={`${step.label}-arrow`}
                  size={20}
                  className="shrink-0 self-center text-muted-foreground lg:size-6"
                  aria-hidden="true"
                />
              )}
            </>
          ))}
        </div>

        {/* Why join? — full width, centered heading, no dividers, 4-up on desktop. */}
        <div className="mt-8 text-center lg:mt-16">
          <span className="text-[12px] font-semibold uppercase text-magenta" style={{ letterSpacing: "1.2px" }}>
            Why join?
          </span>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyJoin.map(({ icon: Icon, title, copy }) => (
            <li key={title} className="rounded-2xl border border-border/70 bg-card p-5 lg:p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/60 text-[#E91E63]">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-base font-semibold leading-[1.4] text-plum-deep">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </li>
          ))}
        </ul>

        {/* CTA — full width on mobile, contained + centered on desktop. */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("evivi-select-role", { detail: "driver" }))}
            className="btn-primary inline-flex w-full items-center justify-center gap-2 lg:w-[460px]"
          >
            <Bike size={18} aria-hidden="true" />
            Join the Delivery Partner Waitlist
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <Link
            to="/HowToDeliver"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-plum-deep/30 px-5 py-2.5 text-sm font-medium text-plum-deep transition-all hover:bg-plum-deep/5 sm:w-auto sm:rounded-none sm:border-0 sm:px-0 sm:py-0 sm:underline sm:underline-offset-4 sm:hover:bg-transparent"
          >
            See How Delivery Partner Access Works
            <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}