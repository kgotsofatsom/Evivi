import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
  return (
    /* Closing CTA */
    <section className="px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-brand-gradient px-8 py-14 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-4xl leading-[1.08] text-primary-foreground md:text-5xl">
          Be there from the beginning.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80">
          Evivi launches with Valentine gifting in 2027. Join early to discover what's coming and help shape a better way to celebrate.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("evivi-select-role", {
                  detail: "customer",
                })
              );
            }}
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-plum-deep transition-transform hover:-translate-y-0.5"
          >
            Get Valentine Early Access
          </button>

          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("evivi-select-role", {
                  detail: "seller",
                })
              );
            }}
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/85 underline-offset-4 hover:underline"
          >
            Sell Gifts on Evivi <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}