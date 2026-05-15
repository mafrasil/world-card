# Wondr — Front End Exercise

World card component with four states + a `+pts` animation triggered from a Helpful reaction button. Built for the Wondr take-home assessment.

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

The project also runs cleanly with `pnpm` or `yarn` — no npm-specific configuration.

## Stack

- **Next.js 16** with App Router
- **React 19**
- **Tailwind CSS v4** with CSS-based `@theme` configuration
- **TypeScript** (strict)

## What the demo shows

Three World cards stacked in a 375px column:

1. **Top card** — starts in skeleton loading state; transitions to loaded after 2 seconds (auto, no interaction)
2. **Middle card** — default state on mount
3. **Bottom card** — pre-set to joined state

Below the cards, a **Helpful** reaction button. Each click spawns a `+8 pts` animation that floats above the button. Rapid clicks spawn independent instances.

## Interactions to try

- Wait 2 seconds for the top card to transition from skeleton to loaded — watch for zero layout shift
- Hover any card on desktop to see the lift and shadow intensify
- Click **Join World** to toggle the joined state; click again to unjoin
- Click **Helpful** repeatedly (slow and rapid bursts) to see independent animation instances

## Project structure

| File | Purpose |
|------|---------|
| `components/WorldCard.tsx` | Four states (default, skeleton, hover, joined) with entrance animations |
| `components/PointsAnimation.tsx` | Helpful trigger button + floating `+N pts` instances |
| `app/page.tsx` | Demo page wiring both components |
| `app/globals.css` | Design tokens, keyframes, and the two per-property transition utilities |

## Notes on decisions

A few choices worth flagging before review:

- **Tailwind v4 over v3.** The brief's example references `tailwind.config.js` (v3). v4 is what `create-next-app` ships in 2026 and replaces JS config with CSS-based `@theme` declarations. All spec tokens are present with the same values.
- **Pointer-fine hover gating.** The brief specifies hover as `(desktop)` explicitly — implemented via Tailwind's `pointer-fine:` variant so the lift only fires on precise-pointer devices. Avoids the sticky-hover problem on touch.
- **Always-on 1.5px transparent border** on the default Join button so the joined state's border doesn't introduce a 3px height shift on toggle. The skeleton block is sized to match (`h-[43px]`). Small fidelity deviation (43px vs literal 40px) for zero layout shift across skeleton-to-loaded and join-toggle transitions.
- **Per-property transitions** on the Join and Helpful buttons. The spec gives different timings for hover vs joined toggle (which share `bg-color`) — per-property resolves both spec values cleanly via two custom `@utility` declarations.
- **Label entrance overlaps the card fade** (150ms delay from start, not from completion). Smoother continuous motion at 550ms total than the 850ms staggered alternative.

A detailed walkthrough of the motion and state-handling decisions is in the accompanying Loom recording.
