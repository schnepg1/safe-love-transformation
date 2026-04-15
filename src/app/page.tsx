import Image from "next/image";

const outcomes = [
  "See the difference between chemistry, trauma bonding, and genuine steadiness.",
  "Interrupt the inherited loyalties that keep unsafe love feeling familiar.",
  "Read a new connection quickly, calmly, and without overriding your body.",
];

const pillars = [
  {
    index: "01",
    title: "Reset the body-level signal",
    description:
      "Identify where your intuition has been trained to normalize volatility, inconsistency, and emotional scarcity.",
  },
  {
    index: "02",
    title: "Map the lineage underneath the pattern",
    description:
      "Trace the romantic loyalties running through home, ancestry, and family myth so the pattern loses its invisibility.",
  },
  {
    index: "03",
    title: "Cut cords to outdated survival love",
    description:
      "Use guided practices to release subconscious agreements with inherited relationship pain and reclaim clean discernment.",
  },
  {
    index: "04",
    title: "Scan for harmony in real time",
    description:
      "Learn a clear relational scan so you can read emotional safety, reciprocity, and capacity within moments.",
  },
];

const offer = [
  "Live group coaching and guided integration sessions with Sonia",
  "The Safe Love diagnostic for spotting toxic familiarity before attachment lands",
  "A digital lineage workbook with prompts, practices, and partner scan notes",
  "Audio rituals for cord cutting, nervous system settling, and intuition recalibration",
];

const questions = [
  {
    prompt: "Who is this for?",
    answer:
      "Women who keep noticing the same unsafe dynamic in different faces and want a grounded way to change the pattern at its root.",
  },
  {
    prompt: "Is this therapy?",
    answer:
      "No. It is an educational coaching program designed to support awareness, discernment, and behavioral change. It does not replace therapy, legal guidance, or crisis support.",
  },
  {
    prompt: "How do I join?",
    answer:
      "Reserve your place through the secure Stripe checkout. You will receive the next-step materials immediately after payment.",
  },
];

const defaultCheckoutLink = "https://buy.stripe.com/fZubJ0aCwfqg4icaLj7bW00";

const checkoutLink =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK?.trim() || defaultCheckoutLink;

export default function Home() {
  const checkoutReady = checkoutLink !== "#reserve";

  return (
    <main className="bg-[var(--color-ink)] text-[var(--color-cream)]">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80"
            alt="Woman standing near the shoreline at dusk."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(17,12,14,0.92)_10%,rgba(17,12,14,0.66)_48%,rgba(17,12,14,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,161,128,0.32),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(160,91,91,0.22),transparent_26%)]" />
        </div>

        <div className="absolute -left-24 top-28 h-64 w-64 rounded-full border border-white/14 blur-[1px] float-slow" />
        <div className="absolute left-[8%] top-[20%] h-3 w-3 rounded-full bg-[var(--color-gold)] glow-pulse" />
        <div className="absolute right-[18%] top-[24%] h-44 w-44 rounded-full border border-white/12 float-delayed" />

        <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 pb-14 pt-6 sm:px-10 lg:px-14">
          <header className="fade-rise flex items-center justify-between border-b border-white/10 pb-5 text-sm uppercase tracking-[0.26em] text-white/72 [--delay:0ms]">
            <span className="font-sans">Sonia</span>
            <a href="#reserve" className="transition hover:text-white">
              Join the next circle
            </a>
          </header>

          <div className="grid flex-1 items-end gap-12 py-14 lg:grid-cols-[minmax(0,640px)_1fr] lg:gap-8 lg:py-16">
            <div className="max-w-xl">
              <p className="fade-rise text-sm uppercase tracking-[0.3em] text-[var(--color-gold)] [--delay:120ms]">
                Group coaching for women
              </p>
              <h1 className="fade-rise mt-4 max-w-[12ch] font-serif text-5xl leading-[0.93] text-balance text-white sm:text-6xl lg:text-8xl [--delay:220ms]">
                Safe Love
                <br />
                Transformation
              </h1>
              <p className="fade-rise mt-6 max-w-xl text-lg leading-8 text-white/80 sm:text-xl [--delay:320ms]">
                Learn to walk away from unsafe relationships, dissolve the
                lineage that made them feel normal, and rebuild an intuition
                that recognizes harmony in seconds.
              </p>

              <div className="fade-rise mt-8 flex flex-col gap-4 sm:flex-row [--delay:420ms]">
                <a
                  href={checkoutLink}
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-gold)] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-gold-soft)]"
                >
                  Reserve your place - EUR 1
                </a>
                <a
                  href="#method"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.06]"
                >
                  See the method
                </a>
              </div>

              <div className="fade-rise mt-12 grid gap-5 border-t border-white/14 pt-8 text-sm text-white/74 sm:grid-cols-3 [--delay:520ms]">
                <div>
                  <p className="font-sans uppercase tracking-[0.24em] text-white/48">
                    Format
                  </p>
                  <p className="mt-2 text-base text-white/82">
                    Digital workbook + live group coaching
                  </p>
                </div>
                <div>
                  <p className="font-sans uppercase tracking-[0.24em] text-white/48">
                    Focus
                  </p>
                  <p className="mt-2 text-base text-white/82">
                    Unsafe love patterns, lineage, intuition reset
                  </p>
                </div>
                <div>
                  <p className="font-sans uppercase tracking-[0.24em] text-white/48">
                    Access
                  </p>
                  <p className="mt-2 text-base text-white/82">
                    One secure Stripe payment of EUR 1
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-rise lg:justify-self-end [--delay:620ms]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-black/20 p-6 backdrop-blur-sm sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,161,128,0.22),transparent_48%)]" />
                <div className="relative flex flex-col gap-8">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-gold)]">
                      What changes first
                    </p>
                    <p className="text-2xl font-serif leading-tight text-white sm:text-3xl">
                      You stop calling danger familiar just because it feels
                      like home.
                    </p>
                  </div>

                  <div className="grid gap-4 text-sm leading-7 text-white/76">
                    {outcomes.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.07]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="method"
        className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:px-14 lg:py-28"
      >
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
            The method
          </p>
          <h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-tight text-balance text-white sm:text-5xl">
            Rebuild discernment at the root.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/72">
            This work does not only look at the household you grew up in. It
            reaches into the stories, loyalties, and adaptations passed through
            the women before you so your body no longer confuses pain with
            love.
          </p>
        </div>

        <div className="grid gap-5">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.index}
              className="group grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-6 transition duration-300 hover:-translate-y-1 hover:border-white/18 sm:grid-cols-[88px_1fr] sm:items-start sm:px-8 sm:py-8"
            >
              <div className="font-serif text-5xl text-white/28">{pillar.index}</div>
              <div>
                <h3 className="text-2xl font-serif text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  {pillar.description}
                </p>
                {index === 0 ? (
                  <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,rgba(214,161,128,0.8),rgba(214,161,128,0))]" />
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[var(--color-cream)] text-[var(--color-ink)]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
              alt="Woman writing in a journal near soft window light."
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,8,10,0.04),rgba(11,8,10,0.5))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="max-w-sm font-serif text-3xl leading-tight text-white sm:text-4xl">
                You are not here to become better at enduring chaos.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-clay)]">
              Inside the container
            </p>
            <h2 className="mt-4 max-w-[11ch] font-serif text-4xl leading-tight text-balance sm:text-5xl">
              A clear path from inherited pain to calm selection.
            </h2>
            <div className="mt-8 space-y-5">
              {offer.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-[var(--color-line)] pb-5 text-base leading-8 text-[var(--color-ink-muted)]"
                >
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="reserve"
        className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-28"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Reserve
          </p>
          <h2 className="mt-4 max-w-[11ch] font-serif text-4xl leading-tight text-balance text-white sm:text-5xl">
            Step into a different relational future.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/72">
            A single payment secures access to the digital program and the next
            onboarding details for the group coaching experience.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Safe Love Transformation
              </p>
              <p className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                EUR 1
              </p>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/64">
              For women ready to leave unsafe bonds, reset inherited attraction
              patterns, and choose partnership from clarity.
            </p>
          </div>

          <div className="mt-6 grid gap-3 text-sm leading-7 text-white/72 sm:grid-cols-2">
            <div className="border border-white/10 px-4 py-4">Secure Stripe checkout</div>
            <div className="border border-white/10 px-4 py-4">Digital access after purchase</div>
            <div className="border border-white/10 px-4 py-4">Live group coaching support</div>
            <div className="border border-white/10 px-4 py-4">Grounded, lineage-aware methodology</div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={checkoutLink}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-gold)] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-gold-soft)]"
            >
              Buy now
            </a>
            <a
              href="#method"
               className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.06]"
            >
              Review the framework
            </a>
          </div>

          {!checkoutReady ? (
            <p className="mt-5 text-sm leading-7 text-[var(--color-gold)]">
              Stripe checkout goes live as soon as the payment link is attached
              to <code>NEXT_PUBLIC_STRIPE_PAYMENT_LINK</code>.
            </p>
          ) : null}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Questions
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {questions.map((item) => (
              <article
                key={item.prompt}
                className="rounded-[1.8rem] border border-white/10 px-6 py-6"
              >
                <h3 className="font-serif text-2xl text-white">{item.prompt}</h3>
                <p className="mt-4 text-base leading-8 text-white/72">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
