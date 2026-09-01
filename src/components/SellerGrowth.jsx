import { Link } from "react-router-dom";

const sellerBenefits = [
  {
    title: "Get discovered",
    copy: "Get your gifts in front of customers actively looking for Valentine gifts.",
  },
  {
    title: "Structured orders",
    copy: "Receive clear, structured orders instead of managing everything manually.",
  },
  {
    title: "Secure payments",
    copy: "Get paid through Evivi's payment partners.",
  },
  {
    title: "Grow your reputation",
    copy: "Build ratings and reviews that help you grow beyond Valentine.",
  },
];

export default function SellerGrowth() {
  return (
    <section id="seller-beta" className="px-5 pb-16 sm:px-8 md:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-gradient p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-primary-foreground/70 uppercase">
              FOR GIFT SELLERS
            </p>
            <h2 className="mt-3 text-4xl font-display leading-[1.08] text-primary-foreground md:text-5xl">
              Do you sell gifts, flowers or Valentine packages?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80">
              We're inviting selected gift sellers to join early, create real Valentine packages, 
              test the ordering and fulfilment journey, and help shape Evivi before launch.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("evivi-select-role", {
                      detail: "seller",
                    })
                  );
                }}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-plum-deep transition-transform hover:-translate-y-0.5"
              >
                Sell Gifts on Evivi
              </button>
              
              <Link 
                to="/HowToSell"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-medium text-white transition-all hover:bg-white/10"
              >
                How to Sell on Evivi →
              </Link>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {sellerBenefits.map((item) => (
              <li
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-5 backdrop-blur-sm"
              >
                <div>
                  <h3 className="text-lg text-primary-foreground font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}