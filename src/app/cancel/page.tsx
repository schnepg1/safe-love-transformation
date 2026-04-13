import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-ink)] px-6 py-16 text-[var(--color-cream)]">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Checkout paused
        </p>
        <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
          Take another look before you decide.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
          If now is not the moment, return to the page and review the method,
          the offer, and the work inside the container before completing your
          Stripe checkout.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#reserve"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-gold)] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-gold-soft)]"
          >
            Return to checkout
          </Link>
          <Link
            href="/#method"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.06]"
          >
            Review the method
          </Link>
        </div>
      </div>
    </main>
  );
}
