import deliveryPartner from "../assets/images/delivery-partner.jpg";

const registrationPoints = [
  "Access eligible local delivery opportunities",
  "Potential demand from multiple participating sellers",
  "Indicate the areas and times you can support",
  "Grow with the network as Evivi expands",
];

export default function DeliveryPartners() {
  return (
    /* Delivery partners */
    <section id="delivery" className="bg-soft-gradient px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-magenta uppercase">
            Delivery partners
          </p>
          <h2 className="mt-3 text-4xl leading-[1.08] text-plum-deep md:text-5xl">
            Help local gifts get where they need to go
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Evivi is building a network of independent delivery partners who can help participating
            sellers fulfil eligible local orders. If you have reliable transport and want to deliver with Evivi, join the delivery partner waitlist.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {registrationPoints.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border/70 bg-card px-4 py-3 text-sm text-plum-deep"
              >
                {item}
              </li>
            ))}
          </ul>
          <a href="#join" className="btn-primary mt-8">
            Join the Delivery Partner Waitlist
          </a>
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
    </section>
  );
}