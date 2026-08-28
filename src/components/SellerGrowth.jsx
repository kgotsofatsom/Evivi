import { useState } from "react";
import { Link } from "react-router-dom";

const sellerBenefits = [
  {
    title: "Get discovered",
    copy: "Get your gifts in front of customers actively looking for Valentine gifts.",
    slug: "get-discovered",
    details: "Evivi places your products directly into high-intent search feeds, local gift catalogs, and curated Valentine collections designed to capture eager seasonal buyers right when they are ready to purchase.",
  },
  {
    title: "Structured orders",
    copy: "Receive clear, structured orders instead of managing everything manually.",
    slug: "structured-orders",
    details: "No more messy DMs or lost instructions. Every order comes with exact recipient details, gift messages, fulfilment type, and scheduling timestamps right in your dashboard.",
  },
  {
    title: "Secure payments",
    copy: "Get paid through Evivi's payment partners.",
    slug: "secure-payments",
    details: "Transactions are processed securely via trusted industry payment gateways, ensuring reliable payouts directly to your business account without chasing bank transfers.",
  },
  {
    title: "Grow your reputation",
    copy: "Build ratings and reviews that help you grow beyond Valentine.",
    slug: "grow-reputation",
    details: "Every successful delivery contributes to your permanent seller profile, accumulating verified reviews that establish social proof and drive sales for future occasions year-round.",
  },
];

export default function SellerGrowth() {
  const [modalItem, setModalItem] = useState(null);

  return (
    <>
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
              
              <a href="#join"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-plum-deep transition-transform hover:-translate-y-0.5"
              >
                Sell Gifts on Evivi
              </a>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {sellerBenefits.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-5 backdrop-blur-sm transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg text-primary-foreground font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                      {item.copy}
                    </p>
                  </div>
                  
                  {/* Option A: Link for when you build the real page later */}
                  {/* <Link
                    to={`/seller-benefits/${item.slug}`}
                    className="mt-4 self-start text-xs font-semibold tracking-wide uppercase text-white/95 underline decoration-white/50 underline-offset-4 transition-colors hover:text-white"
                  >
                    Read more →
                  </Link> */}

                  {/* Option B: Safe temporary trigger that opens a modal popup so it works right now */}
                  <button
                    onClick={() => setModalItem(item)}
                    className="mt-4 self-start text-xs font-semibold tracking-wide uppercase text-white/95 underline decoration-white/50 underline-offset-4 transition-colors hover:text-white text-left"
                  >
                    Read more →
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Temporary Modal Preview for when users click "Read more" */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#22012E] border border-white/20 p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-display font-semibold">{modalItem.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-purple-100/90">
              {modalItem.details}
            </p>
            <div className="mt-8 flex items-center justify-end gap-3">
              <a
                href="#join"
                onClick={() => setModalItem(null)}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-plum-deep transition-transform hover:-translate-y-0.5"
              >
                Join Early Access
              </a>
              <button
                onClick={() => setModalItem(null)}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}