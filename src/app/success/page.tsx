import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-ink)] px-6 py-16 text-[var(--color-cream)]">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Payment complete
        </p>
        <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
          You are in.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
          Your place inside Safe Love Transformation is secured. Check your
          inbox for access details and the next onboarding steps from Sonia.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-gold)] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-gold-soft)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
