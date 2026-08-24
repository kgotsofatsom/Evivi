const sellerBenefits = [
  {
    title: "Get discovered",
    copy: "Reach customers actively looking for Valentine gifts near them.",
  },
  {
    title: "Structured orders",
    copy: "Receive clear, structured orders instead of managing everything manually.",
  },
  {
    title: "Secure payments",
    copy: "Get paid through Evivi's trusted payment partners.",
  },
  {
    title: "Grow your reputation",
    copy: "Build ratings and reviews that help you grow beyond Valentine.",
  },
];

export default function SellerGrowth() {
  return (
    /* Seller beta */
    <section id="seller-beta" className="px-5 pb-16 sm:px-8 md:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-gradient p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-primary-foreground/70 uppercase">
              Seller beta
            </p>
            <h2 className="mt-3 text-4xl leading-[1.08] text-primary-foreground md:text-5xl">
              Do you sell gifts, flowers or Valentine packages?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80">
              Help us build Evivi with real businesses. We're inviting selected gift sellers to
              join early, create real packages, test the ordering and fulfilment journey, and
              help us refine Evivi before the Valentine launch.
            </p>
            
            <a href="#join"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-plum-deep transition-transform hover:-translate-y-0.5"
            >
              Apply for Seller Beta
            </a>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {sellerBenefits.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-5 backdrop-blur-sm"
              >
                <h3 className="text-lg text-primary-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}