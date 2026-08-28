import { Search, MapPin, PackageCheck, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Find the right gift faster",
    copy: "Guided discovery that helps you find relevant gifts without endless searching",
  },
  {
    icon: MapPin,
    title: "Shop closer to home",
    copy: "Discover gifts from participating local sellers near where the gift needs to go.",
  },
  {
    icon: PackageCheck,
    title: "Fulfilment that fits",
    copy: "Choose available delivery or collection options before you order.",
  },
  {
    icon: ShieldCheck,
    title: "A structured order journey",
    copy: "Keep track of your gift order from purchase through fulfilment.",
  },
];

export default function WhyEvivi() {
    return (
        /* Why Evivi */
        <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-magenta uppercase">
                Why Evivi
            </p>
            <h2 className="mt-3 text-4xl leading-[1.08] text-plum-deep md:text-5xl">
                A better way to send something that matters.
            </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
                <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <item.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl text-plum-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}