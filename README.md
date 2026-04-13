# Safe Love Transformation

Landing page and Stripe purchase entry point for Sonia's `Safe Love Transformation` group coaching offer.

## Local development

1. Install dependencies:

```bash
pnpm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Set `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` to the Stripe Payment Link URL.

4. Start the app:

```bash
pnpm dev
```

## Deployment

The site is built for Vercel. Add `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` in the Vercel project settings before deploying so the purchase CTA opens the live Stripe checkout.
