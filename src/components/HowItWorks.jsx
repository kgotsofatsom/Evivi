import { Search, Gift, Truck, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    copy: "Explore relevant Valentine gifts from participating local sellers.",
  },
  {
    icon: Gift,
    title: "Choose",
    copy: "Select the gift that fits the moment and review the available fulfilment options.",
  },
  {
    icon: Truck,
    title: "Deliver or collect",
    copy: "Choose an available delivery or collection option for your gift.",
  },
  {
    icon: ClipboardCheck,
    title: "Follow your order",
    copy: "Complete your purchase and follow your gift through fulfilment.",
  },
];

export default function HowItWorks() {
  return (
    /* How it works */
    <section id="how-it-works" className="bg-soft-gradient px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-magenta uppercase">
            How Evivi works
          </p>
          <h2 className="mt-3 text-4xl leading-[1.08] text-plum-deep md:text-5xl">
            A simpler way to find, choose and send the right gift.
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground">
                  <step.icon className="size-5" />
                </span>
                <span className="font-display text-2xl text-primary/30">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl text-plum-deep">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}