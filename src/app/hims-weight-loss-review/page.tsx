import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Hims Weight Loss Review (2026): GLP-1 Program Pricing and Honest Pros/Cons",
  description:
    "Honest Hims weight loss review covering pricing, medications offered, prescriber model, app features, and how Hims and Hers compare to Henry Meds and Ro Body for compounded semaglutide.",
  alternates: { canonical: "https://www.weightlossshotguide.com/hims-weight-loss-review" },
};

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Is Hims weight loss the same as Hers?",
    answer:
      "Same parent company, similar programs. Hims is marketed to men and Hers to women. The medication, pricing, and prescribing model are essentially the same across both platforms.",
  },
  {
    question: "What medication does Hims prescribe for weight loss?",
    answer:
      "Primarily compounded semaglutide. Some patients receive liraglutide, which is an older GLP-1 medication, or branded options depending on eligibility and the state where they live.",
  },
  {
    question: "How much does Hims weight loss cost?",
    answer:
      "Starting at $99 per month for lower starting doses. Most patients pay $149 to $299 per month at therapeutic doses. The total includes both medication and telehealth access in a single monthly subscription.",
  },
  {
    question: "Is Hims a legitimate telehealth provider?",
    answer:
      "Yes. Hims and Hers is a publicly traded company (NYSE: HIMS) with licensed physicians. They have issued millions of telehealth prescriptions across multiple categories. Their pharmacy partners are licensed compounding pharmacies.",
  },
];

export default function HimsWeightLossReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Hims Weight Loss Review", url: `${BASE}/hims-weight-loss-review` },
        ]}
      />
      <ArticleSchema
        title="Hims Weight Loss Review (2026): GLP-1 Program Pricing and Honest Pros/Cons"
        description="Honest Hims weight loss review covering pricing, medications offered, prescriber model, app features, and how Hims and Hers compare to Henry Meds and Ro Body for compounded semaglutide."
        url={`${BASE}/hims-weight-loss-review`}
        datePublished="2026-05-08"
        dateModified="2026-05-08"
      />
      <FAQSchema questions={faqs} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/compounding-pharmacies" className="hover:text-foreground transition-colors">
            Compounding Pharmacies
          </Link>
          <span>/</span>
          <span className="text-foreground">Hims Weight Loss Review</span>
        </nav>

        {/* YMYL Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3 text-sm">
          <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-amber-800">
            <strong>Medical Disclaimer:</strong> This page is for informational purposes only. It is not medical advice. Talk to your doctor before starting, changing, or stopping any medication.
          </p>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm">
          <p className="text-amber-800">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We earn commissions when you sign up through our links. This does not change our rankings or assessments.
          </p>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Hims Weight Loss Review (2026): A Large Brand at a Competitive Price
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hims and Hers added GLP-1 weight loss programs to their platform and quickly became one of the largest providers of compounded semaglutide by patient volume. Here is what you actually get and where the gaps are.
          </p>
        </header>

        <QuickVerdictBox
          winnerName="Hims Weight Loss"
          winnerCategory="Compounded Semaglutide Program"
          dreamOutcomeChain="Get compounded semaglutide from a large, established telehealth platform at $99 to $299 per month depending on dose, so you start a GLP-1 program from a provider with a track record of handling prescriptions at scale."
          proofPoint="Licensed prescribers. Large provider network. Compounded semaglutide from $99/mo."
          affiliateUrl="https://www.hims.com/weight-loss"
          ctaLabel="Check Eligibility at Hims"
          riskReversal="Cancel anytime. No long-term contract."
        />

        {/* What is Hims weight loss */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is Hims and Hers Weight Loss?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Hims and Hers Health is a publicly traded telehealth platform. Hims serves men. Hers serves women. The company expanded from hair loss and sexual health into weight management when GLP-1 demand surged.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Their weight loss program is subscription-based. One monthly fee covers both the medication and telehealth access. This bundled approach is simpler than Ro Body&apos;s program fee plus separate medication cost model.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The platform operates at scale. They have one of the largest provider networks in the telehealth GLP-1 space. This means faster approvals and wider state availability for most patients.
          </p>
        </section>

        {/* Medications */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Medications Offered
          </h2>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Price Range</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Compounded semaglutide</td>
                  <td className="px-4 py-3 text-muted-foreground">Compounded GLP-1</td>
                  <td className="px-4 py-3 text-muted-foreground">$99 to $299/mo</td>
                  <td className="px-4 py-3 text-muted-foreground">Primary offering, subject to shortage status</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Liraglutide</td>
                  <td className="px-4 py-3 text-muted-foreground">Older GLP-1 (generic)</td>
                  <td className="px-4 py-3 text-muted-foreground">Varies</td>
                  <td className="px-4 py-3 text-muted-foreground">Less potent than semaglutide, alternative if needed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            Prices as of 2026-05-08. Medication availability subject to FDA shortage status. Verify before signing up.
          </p>
        </section>

        {/* Subscription model */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            How the Hims Subscription Model Works
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Hims weight loss uses a simple monthly subscription. One price covers medication plus telehealth access. No separate program fee. No separate medication invoice. This is easier to understand and budget than providers who split the two costs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The subscription includes your prescription, the compounded semaglutide dose for that month, async provider access for questions and dose adjustments, and app-based tracking tools.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Lower doses start at $99 per month. Most patients titrate up to therapeutic doses in the $149 to $299 range within the first few months. The subscription adjusts as your dose increases.
          </p>
        </section>

        {/* What is included */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is Included With Hims Weight Loss
          </h2>
          <ul className="space-y-3">
            {[
              { title: "Async prescription access", desc: "Licensed physicians and NPs review your health intake and write your prescription without requiring a live visit." },
              { title: "Monthly medication shipment", desc: "Compounded semaglutide ships monthly as part of your subscription. Cold chain shipping where required." },
              { title: "Dose adjustments", desc: "Provider communication for titration changes and side effect questions through the app or messaging." },
              { title: "App tracking", desc: "Well-built mobile app for tracking weight, medication, and habits. One of the better apps in the category." },
              { title: "Cancel anytime", desc: "No long-term contract. Cancel or pause your subscription at any time." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">{item.title}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Hims Weight Loss Pros and Cons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">What Works Well</h3>
              <ul className="space-y-2">
                {[
                  "Competitive pricing at lower dose tiers",
                  "Large provider network, fast approvals",
                  "Simple bundled subscription (no hidden fees)",
                  "Well-built mobile app",
                  "Recognizable, established brand",
                  "Cancel anytime with no penalty",
                ].map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Where It Falls Short</h3>
              <ul className="space-y-2">
                {[
                  "Async only (no live video visits available)",
                  "Some users report generic side effect responses",
                  "No insurance navigation for branded drugs",
                  "Not ideal for complex health situations",
                  "Pharmacy partner details less prominently disclosed",
                  "Higher dose tiers cost $249 to $299/mo",
                ].map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hims vs Hers */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Hims vs Hers: What Is the Difference?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Hims and Hers are two brands under the same parent company. Hims targets men. Hers targets women. The GLP-1 weight loss programs are functionally the same.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Same medications. Same pricing structure. Same prescribing model. Same pharmacy partners. The branding, app design, and marketing messaging differ by audience. The clinical substance does not.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Choose based on which platform interface you prefer, not because the medications or care differ between them.
          </p>
        </section>

        {/* Who it is for */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Who Should Use Hims Weight Loss
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Good Fit</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Healthy adults who want a recognizable brand at a reasonable price
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who want a bundled subscription (no separate medication invoice)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who value a strong mobile app experience
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients comfortable with async-only care
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 border border-border rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Consider Alternatives If</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  Absolute lowest price is your top priority (see Henry Meds)
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You want insurance navigation for branded GLP-1s (see Ro Body)
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You have complex health history or want physician-only care (see Mochi Health)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-12 border-t border-border pt-8">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4">Related Pages</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              { href: "/compounding-pharmacies", label: "Compounding Pharmacies for GLP-1" },
              { href: "/compounded-semaglutide", label: "Compounded Semaglutide Guide" },
              { href: "/henry-meds-review", label: "Henry Meds Review" },
              { href: "/ro-body-review", label: "Ro Body Review" },
              { href: "/mochi-health-review", label: "Mochi Health Review" },
              { href: "/glp1-telehealth-guide", label: "GLP-1 Telehealth Guide" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary underline hover:text-primary/80">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </>
  );
}
