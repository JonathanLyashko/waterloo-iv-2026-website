import Image from "next/image";
import { tournamentContent } from "./data/tournament";

export default function Home() {
  const {
    event,
    heroNotes,
    deadlines,
    quickLinks,
    tournamentDetails,
    chiefAdjudicators,
    fees,
    schedule,
    forms,
    resources,
    location,
    policies,
    contacts,
    socials,
  } = tournamentContent;

  const sections = [
    { id: "deadlines", label: "Deadlines" },
    { id: "details", label: "Format" },
    { id: "ca-team", label: "CA Team" },
    { id: "schedule", label: "Schedule" },
    { id: "forms", label: "Forms" },
    { id: "location", label: "Logistics" },
    { id: "contacts", label: "Social" },
  ];

  return (
    <div className="whimsy-shell min-h-screen">
      <header className="header-glow sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full border border-[rgba(254,211,76,0.3)] bg-[rgba(254,211,76,0.08)] text-lg font-black text-[var(--gold)]">
              <Image
                  src="/waterloo-debate-logo.png"
                  alt="Waterloo Debate logo"
                  width={100}
                  height={100}
                  priority
                />
            </div>
            <div>
              <p className="font-display text-2xl text-[var(--gold)]">{event.name}</p>
              <p className="tiny-note text-[var(--muted)]">WATER WATER WATER</p>
            </div>
          </div>
          <nav aria-label="Section navigation" className="hidden flex-wrap gap-2 xl:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="nav-pill rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-soft)] transition"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="ink-card hero-stage rounded-[2.5rem]">
          <span className="sticker sticker-goose">Goose approved</span>
          <span className="curlicue one" aria-hidden="true" />
          <span className="curlicue two" aria-hidden="true" />
          <span className="magic-mote m1" aria-hidden="true" />
          <span className="magic-mote m2" aria-hidden="true" />
          <span className="magic-mote m3" aria-hidden="true" />
          <span className="magic-mote m4" aria-hidden="true" />
          <span className="magic-mote m5" aria-hidden="true" />
          <span className="magic-mote m6" aria-hidden="true" />

          <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-12">
            <div className="relative z-10 flex flex-col justify-center gap-7">
              <div className="flex flex-wrap gap-3">
                {event.callouts.map((callout) => (
                  <span
                    key={callout}
                    className="badge-chip rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--gold-soft)]"
                  >
                    {callout}
                  </span>
                ))}
              </div>

              <div className="space-y-5">
                <p className="tiny-note text-[var(--grass)]">
                  Isn&apos;t this better than a Google Doc?
                </p>
                <h1 className="section-title font-display text-6xl leading-[0.92] text-[var(--gold)] sm:text-7xl lg:text-[5.8rem]">
                  Your excuse to touch grass this summer
                </h1>
                <p className="max-w-3xl text-xl leading-9 text-[var(--gold-soft)]">
                  {event.subtitle}
                </p>
                <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
                  {event.overview}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#forms"
                  className="rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[var(--gold-soft)]"
                >
                  Open the package
                </a>
                <a
                  href="#schedule"
                  className="rounded-full border border-[rgba(254,211,76,0.3)] bg-[rgba(255,248,222,0.06)] px-7 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--gold-soft)] transition hover:bg-[rgba(254,211,76,0.12)]"
                >
                  See the weekend
                </a>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {heroNotes.map((note) => (
                  <HeroStatusNote key={note} note={note} />
                ))}
              </div>
            </div>

            <div className="logo-stage">
              <div className="logo-halo" />
              <div className="logo-ring ring-a" />
              <div className="logo-ring ring-b" />
              <div className="logo-ring ring-c" />
              <div className="orbit-star star-a" />
              <div className="orbit-star star-b" />
              <div className="orbit-star star-c" />
              <div className="orbit-star star-d" />
              <div className="logo-frame">
                <Image
                  src="/waterloo-debate-logo.png"
                  alt="Waterloo Debate logo"
                  width={900}
                  height={900}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="marquee">
            <div className="marquee-track" aria-hidden="true">
              {[
                "geese",
                "fire pit social",
                "stickers",
                "open semis",
                "grass",
                "summer",
                "round recordings",
                "wudc prep",
                "air conditioning",
                "photographer",
                "geese",
                "fire pit social",
                "stickers",
                "open semis",
                "grass",
                "summer",
                "round recordings",
                "wudc prep",
                "air conditioning",
                "photographer",
              ].map((item, index) => (
                <span key={`${item}-${index}`} className="marquee-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Section
            id="deadlines"
            eyebrow="Clock tower"
            title="Important dates"
            description="These are hard deadlines. If you have any questions or concerns, reach out to the TD team!"
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {deadlines.map((deadline) => (
                <article
                  key={deadline.label}
                  className="data-card flex h-full flex-col rounded-[1.6rem] px-5 py-5"
                >
                  <p className="tiny-note text-[var(--grass)]">Deadline</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--gold-soft)]">
                    {deadline.label}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {deadline.note}
                  </p>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-4">
                    <p className="note text-[var(--gold)]">{deadline.date}</p>
                    {deadline.href ? (
                      <SafeExternalLink
                        href={deadline.href}
                        className="inline-flex text-sm font-bold text-[var(--gold)]"
                      >
                        Open link
                        <span aria-hidden="true" className="arrow-link">
                          &rarr;
                        </span>
                      </SafeExternalLink>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section
            eyebrow="Pocket portal"
            title="Links you need on hand"
            description="Quick links stay near the top. Make sure to have a look through all of them."
          >
            <div className="grid gap-4">
              {quickLinks.map((item) => (
                <LinkCard key={item.label} item={item} />
              ))}
            </div>
          </Section>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Section
            id="details"
            eyebrow="Rulebook"
            title="Format, eligibility, break, and logistics"
            description="Everything you need to know about how the tournament is actually running"
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {tournamentDetails.map((detail) => (
                <DetailCard key={detail.title} item={detail} />
              ))}
            </div>
          </Section>

          <Section
            eyebrow="Treasure chest"
            title="Fees, fines, and money things"
            description="Pay up! If you need a waiver in order to attend, please reach out to the TD team ASAP :)"
          >
            <div className="grid gap-4">
              {fees.map((fee) => (
                <DetailCard key={fee.title} item={fee} />
              ))}
            </div>
          </Section>
        </section>

        <Section
          id="ca-team"
          eyebrow="Boss roster"
          title="Meet the chief adjudicators"
          description="This is our star studded collection. Read through each CA&apos;s battle card to find out more about them."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {chiefAdjudicators.map((profile, index) => (
              <CAProfileCard
                key={`${profile.name}-${profile.title}-${index}`}
                profile={profile}
              />
            ))}
          </div>
        </Section>

        <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Section
            id="schedule"
            eyebrow="Weekend arc"
            title="Tournament Schedule"
            description="This is a tentative schedule, but things are unlikely to change. Any dietary restrictions should be submitted in the participant information form."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {schedule.map((day) => (
                <article
                  key={day.day}
                  className="data-card flex h-full flex-col rounded-[1.8rem] px-5 py-5"
                >
                  <p className="tiny-note text-[var(--grass)]">{day.day}</p>
                  <h3 className="mt-3 font-display text-4xl text-[var(--gold)]">
                    {day.date}
                  </h3>
                  <div className="mt-5 space-y-4">
                    {day.items.map((item) => (
                      <div
                        key={`${day.day}-${item.time}-${item.title}`}
                        className="rounded-[1.2rem] border border-[rgba(254,211,76,0.12)] bg-[rgba(255,248,222,0.04)] px-4 py-4"
                      >
                        <p className="tiny-note text-[var(--gold)]">{item.time}</p>
                        <h4 className="mt-2 text-lg font-semibold text-[var(--gold-soft)]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="location"
            eyebrow="Field guide"
            title="Logistics in Waterloo"
            description="Travel, parking, food, accessibility, and housing"
          >
            <div className="grid gap-4">
              <DetailRow label="Address" value={location.address} />
              <DetailRow label="Travel notes" value={location.travelNotes} bulletize />
              {location.parking ? <DetailRow label="Parking" value={location.parking} /> : null}
              {location.accommodation ? (
                <DetailRow label="Billeting" value={location.accommodation} />
              ) : null}
              {location.food ? <DetailRow label="Food" value={location.food} /> : null}
              {location.accessibility ? (
                <DetailRow label="Accessibility" value={location.accessibility} />
              ) : null}
              {location.mapHref ? (
                <SafeExternalLink
                  href={location.mapHref}
                  className="w-fit rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[var(--gold-soft)]"
                >
                  Open map
                </SafeExternalLink>
              ) : null}
            </div>
          </Section>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <Section
            id="forms"
            eyebrow="Launch pad"
            title="Forms, Forms, Forms"
            description="Any information we need from, or any you want us to have, should be submitted via these forms"
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {forms.map((form) => (
                <LinkCard key={form.label} item={form} />
              ))}
            </div>
          </Section>

          <Section
            eyebrow="Toolshed"
            title="Maps, Tabs, and Useful Machinery"
            description="Have a read through this, it&apos;ll make your weekend so much smoother"
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {resources.map((resource) => (
                <LinkCard key={resource.label} item={resource} />
              ))}
            </div>
          </Section>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Section
            eyebrow="House rules"
            title="Policies and Expectations"
            description="Tech, Equity, and Opt-Out policies will be released once confirmed by their organisers"
          >
            <div className="grid gap-4">
              {policies.map((policy) => (
                <DetailCard key={policy.title} item={policy} />
              ))}
            </div>
          </Section>

          <Section
            eyebrow="Campfire social"
            title="This&apos;ll Be a Social For the Books"
            description="In the mean time, check out what our club has been up to on our socials"
          >
            <div className="grid gap-4">
              <div className="grassland rounded-[2rem]">
                <div className="swirl s1" />
                <div className="swirl s2" />
                <div className="spark a" />
                <div className="spark b" />
                <div className="spark c" />
                <div className="spark d" />
                <div className="spark e" />
                <div className="spark f" />
                <div className="shooting-spark s1" />
                <div className="shooting-spark s2" />
                <div className="shooting-spark s3" />
                <div className="campfire">
                  <div className="campfire-log log-a" />
                  <div className="campfire-log log-b" />
                  <div className="campfire-pit" />
                  <div className="campfire-flame" />
                </div>
                <div className="goose-mini" aria-hidden="true">
                  <div className="body" />
                  <div className="wing" />
                  <div className="neck" />
                  <div className="head" />
                  <div className="beak" />
                </div>
              </div>
              <div className="grid gap-4">
                {socials.map((social) => (
                  <SafeExternalLink
                    key={social.platform}
                    href={social.href}
                    className="data-card flex h-full flex-col rounded-[1.6rem] px-5 py-5 transition hover:-translate-y-0.5 hover:border-[rgba(254,211,76,0.34)]"
                  >
                    <p className="tiny-note text-[var(--grass)]">{social.platform}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--gold-soft)]">
                      {social.handle ?? social.platform}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-[var(--gold)]">
                      Jump in
                      <span aria-hidden="true" className="arrow-link">
                        &rarr;
                      </span>
                    </span>
                  </SafeExternalLink>
                ))}
              </div>
            </div>
          </Section>
        </section>

        <section className="grid gap-4">
          <Section
            id="contacts"
            eyebrow="Humans"
            title="Organizers, Contacts, and the People Behind the Curtain"
            description="More information will be provided closer to the tournament"
          >
            <div className="grid gap-4 xl:grid-cols-3">
              {contacts.map((contact, index) => (
                <article
                  key={`${contact.label}-${contact.role}-${index}`}
                  className="data-card flex flex-col gap-3 rounded-[1.6rem] px-5 py-4"
                >
                  <p className="tiny-note text-[var(--grass)]">{contact.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--gold-soft)]">
                    {contact.label}
                  </h3>
                  <div className="space-y-2 pt-1">
                    {contact.email ? (
                      <a
                        href={contact.href ?? `mailto:${contact.email}`}
                        className="contact-line text-sm font-bold leading-6 text-[var(--gold)]"
                      >
                        {contact.email}
                      </a>
                    ) : null}
                    {contact.discord ? (
                      <p className="contact-line text-sm font-semibold text-[var(--muted)]">
                        Discord: {contact.discord}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Section>
        </section>
      </main>
    </div>
  );
}

type SectionProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  eyebrow: string;
  id?: string;
};

function Section({ children, title, description, eyebrow, id }: SectionProps) {
  return (
    <section
      id={id}
      className="section-anchor ink-card rounded-[2.2rem] px-6 py-7 sm:px-8 sm:py-8"
    >
      <div className="mb-8 max-w-3xl space-y-3">
        <p className="tiny-note text-[var(--grass)]">{eyebrow}</p>
        <h2 className="section-title font-display text-5xl leading-tight text-[var(--gold)]">
          {title}
        </h2>
        <p className="text-base leading-8 text-[var(--muted)]">{description}</p>
      </div>
      {children}
    </section>
  );
}

function HeroStatusNote({ note }: { note: string }) {
  const separatorIndex = note.indexOf(":");

  if (separatorIndex === -1) {
    return (
      <div className="hero-note flex h-full items-center rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-[var(--muted)]">
        {note}
      </div>
    );
  }

  const label = note.slice(0, separatorIndex + 1).trim();
  const value = note.slice(separatorIndex + 1).trim();

  return (
    <div className="hero-note flex h-full min-w-0 flex-col justify-between rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-[var(--muted)]">
      <span className="pr-2 text-base leading-7">{label}</span>
      <span className="status-chip mt-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[var(--gold-soft)]">
        {value}
      </span>
    </div>
  );
}

function LinkCard({
  item,
}: {
  item: { label: string; description: string; href: string; status?: string };
}) {
  return (
    <SafeExternalLink
      href={item.href}
      className="data-card flex h-full flex-col rounded-[1.6rem] px-5 py-5 transition hover:-translate-y-0.5 hover:border-[rgba(254,211,76,0.34)]"
    >
      <div className="flex min-h-0 flex-1 flex-col gap-4">
        <div className="flex min-h-0 items-start justify-between gap-4">
          <p className="tiny-note text-[var(--grass)]">Link</p>
          {item.status ? (
            <span className="badge-chip shrink-0 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--gold)]">
              {item.status}
            </span>
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-semibold text-[var(--gold-soft)]">
            {item.label}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
        </div>
      </div>
      <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-[var(--gold)]">
        Open
        <span aria-hidden="true" className="arrow-link">
          &rarr;
        </span>
      </span>
    </SafeExternalLink>
  );
}

function DetailCard({
  item,
}: {
  item: { title: string; body: string };
}) {
  return (
    <article className="data-card flex h-full flex-col rounded-[1.6rem] px-5 py-5">
      <p className="tiny-note text-[var(--grass)]">Info</p>
      <h3 className="mt-2 text-2xl font-semibold text-[var(--gold-soft)]">
        {item.title}
      </h3>
      <p className="mt-3 text-base leading-8 text-[var(--muted)]">{item.body}</p>
    </article>
  );
}

function DetailRow({
  label,
  value,
  bulletize,
}: {
  label: string;
  value: string;
  bulletize?: boolean;
}) {
  const items = bulletize
    ? value
        .split(/(?<=[.?!])\s+(?=[A-Z])/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="data-card rounded-[1.6rem] px-5 py-5">
      <p className="tiny-note text-[var(--grass)]">{label}</p>
      {bulletize ? (
        <ul className="mt-3 space-y-3 text-base leading-8 text-[var(--muted)]">
          {items.map((item, index) => (
            <li key={`${label}-${index}`} className="flex gap-3">
              <span className="pt-1 text-[var(--gold)]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-base leading-8 text-[var(--muted)]">{value}</p>
      )}
    </div>
  );
}

function CAProfileCard({
  profile,
}: {
  profile: {
    name: string;
    title: string;
    pronouns?: string;
    archetype: string;
    bio: string;
    specialties: string[];
    accolades: string[];
    imageSrc: string;
    imageAlt: string;
  };
}) {
  return (
    <article className="ca-card h-full rounded-[1.8rem] p-4">
      <div className="ca-foil h-full rounded-[1.5rem] p-2">
        <div className="ca-portrait flex h-full flex-col rounded-[1.3rem] px-4 pb-4 pt-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="tiny-note text-[var(--grass)]">{profile.title}</p>
              <h3 className="mt-2 font-display text-3xl leading-tight text-[var(--gold)]">
                {profile.name}
              </h3>
            </div>
            <span className="badge-chip rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--gold)]">
              {profile.archetype}
            </span>
          </div>

          <div className="relative mb-4 overflow-hidden rounded-[1.2rem] border border-[rgba(254,211,76,0.24)] bg-[rgba(255,248,222,0.08)]">
            <div className="absolute left-3 top-3 z-10 rounded-full bg-[rgba(0,0,0,0.7)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--gold-soft)]">
              CA card
            </div>
            <div className="aspect-[4/5]">
              <Image
                src={profile.imageSrc}
                alt={profile.imageAlt}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col space-y-4">
            {profile.pronouns ? (
              <p className="tiny-note text-[var(--muted)]">{profile.pronouns}</p>
            ) : null}
            <p className="text-sm leading-7 text-[var(--muted)]">{profile.bio}</p>

            <div className="grid gap-3">
              <div className="ca-chip rounded-[1rem] px-4 py-3">
                <p className="tiny-note text-[var(--grass)]">Specialties</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.specialties.map((specialty, index) => (
                    <span
                      key={`${profile.name}-specialty-${index}`}
                      className="rounded-full border border-[rgba(254,211,76,0.18)] bg-[rgba(255,248,222,0.06)] px-3 py-1 text-xs font-bold text-[var(--gold-soft)]"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="ca-chip rounded-[1rem] px-4 py-3">
                <p className="tiny-note text-[var(--grass)]">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  {profile.accolades.map((accolade, index) => (
                    <li key={`${profile.name}-accolade-${index}`}>- {accolade}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function SafeExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const hasHref = href.trim().length > 0;

  return (
    <a
      href={hasHref ? href : undefined}
      target={hasHref ? "_blank" : undefined}
      rel={hasHref ? "noreferrer noopener" : undefined}
      aria-disabled={hasHref ? undefined : true}
      className={className}
    >
      {children}
    </a>
  );
}
