# WeightLossShotGuide

Informational guides on GLP-1 weight loss medications (semaglutide, tirzepatide, Wegovy, Ozempic, Mounjaro, Zepbound). YMYL content with medical reviewer scaffold.

**Live:** https://www.weightlossshotguide.com
**Repo:** AFontana77/weightlossshotguide
**Stack:** Next.js 16 (App Router) · Tailwind v4 · TypeScript strict · Vercel · Anvil Road LLC publisher.

## Quality gates

**Pre-Launch SEMrush Gate:** Closed 2026-05-15 (Sites S14). Gate artifact at `research/keywords/weightlossshotguide/semrush_pre_launch_2026-05-15.md` in the Anvil Road portfolio. Per `feedback_pre_launch_semrush_gate.md` rule.

**YMYL:** Medical reviewer scaffold lives at `src/components/ui/article-byline.tsx`. `medicallyReviewedBy="Pending"` swap pattern in place. Phase D publication blocked on reviewer contract.

## Local development

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # static prerender check
```

## Deploy

Pushes to `master` auto-deploy via Vercel.
