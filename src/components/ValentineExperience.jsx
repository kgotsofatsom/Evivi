import valentineExperience from "../assets/images/valentine-experience.jpg";

const packages = [
    "Flower Bouquets",
    "Flowers + Chocolates",
    "Romantic Gift Bundles",
    "Hampers",
    "Balloons & Add-ons",
];

export default function ValentineExperience() {
  return (
    <section id="valentine" className="px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] shadow-soft">
          <img
            src={valentineExperience}
            alt="A local florist preparing a luxury gift hamper with flowers and chocolates"
            loading="lazy"
            width={1200}
            height={912}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-magenta uppercase">
            Valentine 2027
          </p>
          <h2 className="mt-3 text-4xl leading-[1.08] text-plum-deep md:text-5xl">
            Start with Valentine gifting
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Evivi's first release focuses on ready-to-order Valentine gift packages from
            participating local businesses — making it easier to discover, choose and fulfil a
            meaningful gift.
          </p>
          <p className="mt-5 font-display text-2xl text-plum">
            Valentine is the first Evivi experience — not the last.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {packages.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-accent/60 px-4 py-2 text-sm text-plum-deep"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}