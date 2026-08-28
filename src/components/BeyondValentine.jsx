import { Heart, Cake, HeartHandshake, Gem, Baby, GraduationCap, PartyPopper, Users2, Truck, } from "lucide-react";

const futureMoments = [
  { icon: Heart, label: "Valentine" },
  { icon: Cake, label: "Birthdays" },
  { icon: HeartHandshake, label: "Anniversaries" },
  { icon: Gem, label: "Proposals" },
  { icon: Baby, label: "Baby Showers" },
  { icon: GraduationCap, label: "Graduations" },
  { icon: PartyPopper, label: "Events & Celebrations" },
  { icon: Users2, label: "Event Planners & Coordinators" },
  { icon: Truck, label: "Delivery & Fulfilment" },
];

export default function BeyondValentine() {
  return (
    /* Beyond Valentine */
    <section id="beyond" className="px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold tracking-[0.22em] text-magenta uppercase">
          Beyond Valentine
        </p>
        <h2 className="mt-3 text-4xl leading-[1.08] text-plum-deep md:text-5xl">
          Valentine is where we start. Celebrations are where we're going.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Evivi is being built around the wider celebration journey, connecting gift buyers with the businesses, planners and services that help meaningful moments happen.
        </p>
      </div>
      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
        {futureMoments.map((item, index) => (
          <li
            key={item.label}
            className={`flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-6 text-center ${
              index === futureMoments.length - 1 ? "col-span-2 sm:col-span-4 mx-auto w-full sm:w-1/4" : ""
            }`}
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-accent text-primary">
              <item.icon className="size-5" />
            </span>
            <span className="text-sm text-plum-deep">{item.label}</span>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-2xl text-center font-display text-2xl text-plum">
        From a single gift to a full celebration, Evivi is being built to bring the journey
        together.
      </p>
    </section>
  );
}