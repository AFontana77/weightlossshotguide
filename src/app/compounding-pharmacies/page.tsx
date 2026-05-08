import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Compounding Pharmacies for GLP-1 Medications (2026) | WeightLossShotGuide",
  description:
    "What a compounding pharmacy is for GLP-1 drugs, how they compare to branded Ozempic and Wegovy, and the top telehealth platforms that use them. Prices, legal status, and FAQs included.",
  alternates: { canonical: "https://www.weightlossshotguide.com/compounding-pharmacies" },
};

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Are compounded GLP-1 medications safe?",
    answer:
      "Compounded medications from accredited pharmacies can be effective and safe. Quality control varies by pharmacy. Look for PCAB-accredited pharmacies or FDA-registered 503B outsourcing facilities. Ask your telehealth provider which pharmacy they use and what quality testing they run on each batch.",
  },
  {
    question: "How much does compounded semaglutide cost?",
    answer:
      "Prices vary by provider and dose. Budget providers start around $99 to $149 per month for low starting doses. Most programs run $197 to $400 per month at therapeutic doses. Premium programs with full monitoring cost $299 to $600 per month.",
  },
  {
    question: "Is it legal to order compounded GLP-1 medications?",
    answer:
      "Only when the branded drug is on the FDA drug shortage list. Compounded semaglutide was on shortage for an extended period. Compounded tirzepatide became legally restricted for 503A pharmacies after the FDA declared the shortage resolved in late 2024 and early 2025. Always check current status with your provider before ordering.",
  },
  {
    question: "Do I need a prescription for compounded semaglutide?",
    answer:
      "Yes. Federal law requires a prescription from a licensed prescriber. Telehealth platforms facilitate this through physician or NP consultations. No legitimate pharmacy will dispense compounded semaglutide without a valid prescription.",
  },
  {
    question: "What is the difference between a telehealth provider and a compounding pharmacy?",
    answer:
      "A telehealth provider connects you with a doctor who writes the prescription. The compounding pharmacy fills it. Some platforms are vertically integrated and run both functions in house. Others partner separately. Always verify both the prescriber's credentials and the pharmacy's accreditation status before ordering.",
  },
];

export default function CompoundingPharmaciesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies for GLP-1", url: `${BASE}/compounding-pharmacies` },
        ]}
      />
      <ArticleSchema
        title="Compounding Pharmacies for GLP-1 Medications (2026)"
        description="What a compounding pharmacy is for GLP-1 drugs, how they compare to branded Ozempic and Wegovy, and the top telehealth platforms that use them."
        url={`${BASE}/compounding-pharmacies`}
        datePublished="2026-05-08"
        dateModified="2026-05-08"
      />
      <FAQSchema questions={faqs} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Compounding Pharmacies for GLP-1</span>
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
            Compounding Pharmacies for GLP-1 Medications (2026)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Branded GLP-1 drugs like Ozempic and Wegovy cost $900 to $1,400 per month without insurance. Compounding pharmacies can make the same active ingredient for $99 to $400 per month. Here is what that means, how it works, and which telehealth platforms do it right.
          </p>
        </header>

        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="Compounded GLP-1 Provider"
          dreamOutcomeChain="Get compounded semaglutide or tirzepatide from a physician-supervised program so you access GLP-1 therapy at $199 to $299 per month instead of $1,000 plus, so cost stops being the reason you have not started."
          proofPoint="Licensed telehealth physicians. 503A-partnered pharmacies. Compounded semaglutide from $197/mo."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="See Current Pricing at Henry Meds"
          riskReversal="No long-term subscription required."
        />

        {/* What is a compounding pharmacy */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is a Compounding Pharmacy for GLP-1?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A compounding pharmacy makes medications from raw ingredients. Instead of buying a finished product from Novo Nordisk or Eli Lilly, the pharmacist starts with the active ingredient and builds the drug to the prescribed dose and formulation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            For GLP-1 medications, this means making semaglutide or tirzepatide from the raw API (active pharmaceutical ingredient). The result is a drug that works the same way as Ozempic or Zepbound, at a much lower cost.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Compounded GLP-1s are not FDA-approved branded products. They are legal under specific conditions. Quality depends on the pharmacy. The telehealth platform you use determines which pharmacy fills your prescription.
          </p>
        </section>

        {/* Why people use them */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Why People Use Compounding Pharmacies for GLP-1
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Cost is the main reason. The price gap is significant:
          </p>
          <div className="overflow-x-auto border border-border rounded-lg mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Drug</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Branded Price (No Insurance)</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Compounded Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Ozempic (semaglutide)</td>
                  <td className="px-4 py-3 text-muted-foreground">~$935/month</td>
                  <td className="px-4 py-3 text-muted-foreground">$99 to $400/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Wegovy (semaglutide)</td>
                  <td className="px-4 py-3 text-muted-foreground">~$1,349/month</td>
                  <td className="px-4 py-3 text-muted-foreground">$99 to $400/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Mounjaro / Zepbound (tirzepatide)</td>
                  <td className="px-4 py-3 text-muted-foreground">~$1,000 to $1,200/month</td>
                  <td className="px-4 py-3 text-muted-foreground">$249 to $600/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            For most people paying out of pocket, compounding is the only option that makes financial sense.
          </p>
        </section>

        {/* Legal Status */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Is Compounding GLP-1 Medications Legal?
          </h2>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Current legal status note:</strong> Compounding is legal only when the FDA has declared a drug shortage for the branded version. Always verify current shortage status before ordering. Shortage status can change.
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Ozempic and Wegovy were on the FDA shortage list for an extended period through 2024. During that time, compounding was legal and widely available.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            In early 2025, the FDA declared the branded semaglutide shortage resolved. This restricted 503A pharmacies from compounding it. Rules for 503B outsourcing facilities differ. Tirzepatide shortage status followed a similar path.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The rules change. Your telehealth provider should stay current on shortage status and notify you if your medication is affected. Ask them directly before your first order.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            For a deeper look at pharmacy types:{" "}
            <Link href="/503a-vs-503b-pharmacies" className="text-primary underline hover:text-primary/80">
              503A vs 503B Pharmacies Explained
            </Link>
          </p>
        </section>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Top Telehealth and Compounding Pharmacy Platforms Compared
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These are the major platforms offering compounded GLP-1 programs as of 2026. Prices and availability change. Verify current pricing before signing up.
          </p>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Platform</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Drug Offered</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Monthly Price Range</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Prescriber Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">503A or 503B</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Henry Meds</td>
                  <td className="px-4 py-3 text-muted-foreground">Compounded semaglutide, tirzepatide</td>
                  <td className="px-4 py-3 text-muted-foreground">$197 to $299</td>
                  <td className="px-4 py-3 text-muted-foreground">Physicians and NPs</td>
                  <td className="px-4 py-3 text-muted-foreground">503A partners</td>
                  <td className="px-4 py-3 text-muted-foreground">Lowest cost, fast approval</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Ro Body</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded (insurance) or compounded semaglutide</td>
                  <td className="px-4 py-3 text-muted-foreground">$99 + medication</td>
                  <td className="px-4 py-3 text-muted-foreground">Physicians</td>
                  <td className="px-4 py-3 text-muted-foreground">503A partners</td>
                  <td className="px-4 py-3 text-muted-foreground">Insurance navigation + coaching</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Hims and Hers</td>
                  <td className="px-4 py-3 text-muted-foreground">Compounded semaglutide, liraglutide</td>
                  <td className="px-4 py-3 text-muted-foreground">$99 to $299</td>
                  <td className="px-4 py-3 text-muted-foreground">Physicians and NPs</td>
                  <td className="px-4 py-3 text-muted-foreground">503A partners</td>
                  <td className="px-4 py-3 text-muted-foreground">Large network, strong app</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Mochi Health</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded or compounded, multi-drug options</td>
                  <td className="px-4 py-3 text-muted-foreground">$99 program + medication</td>
                  <td className="px-4 py-3 text-muted-foreground">Board-certified physicians</td>
                  <td className="px-4 py-3 text-muted-foreground">Varies by partner</td>
                  <td className="px-4 py-3 text-muted-foreground">Complex health histories</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Form Health</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded and compounded GLP-1s</td>
                  <td className="px-4 py-3 text-muted-foreground">$99 to $199 program</td>
                  <td className="px-4 py-3 text-muted-foreground">Physicians and dietitians</td>
                  <td className="px-4 py-3 text-muted-foreground">Varies</td>
                  <td className="px-4 py-3 text-muted-foreground">Nutrition-first approach</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            Prices as of 2026-05-08. Verify before ordering. Medication availability subject to FDA shortage status.
          </p>
        </section>

        {/* What to look for */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            How to Choose a Compounding Pharmacy Platform
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Not all compounding platforms are the same. Here is what to verify before you sign up.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Pharmacy accreditation:</strong> Ask if their partner pharmacy is PCAB-accredited or FDA-registered as a 503B outsourcing facility.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Real prescribers:</strong> A licensed physician or NP must review your health history. Avoid platforms with fully automated approval.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Shortage status awareness:</strong> Your provider should know the current FDA shortage status for your medication and be able to tell you what changes if it shifts.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Total cost transparency:</strong> Know the all-in monthly cost before you commit. Some platforms charge a program fee plus a separate medication cost.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Red flags:</strong> No state license, no PCAB, ships without a prescription, claims "FDA-approved compounded semaglutide" (no such thing exists), or very low prices with no quality documentation.</span>
            </li>
          </ul>
        </section>

        {/* Why Henry Meds */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Why Henry Meds Leads for Compounded GLP-1 Access
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Henry Meds combines low prices with physician oversight. Compounded semaglutide starts at $197 per month. Tirzepatide starts at $249 per month (subject to FDA shortage status). Both are prescribed by licensed physicians and NPs, not automated systems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The asynchronous model means you submit your health history, a physician reviews it, and the prescription goes to the pharmacy if you qualify. Most patients get approved within 1 to 3 business days.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For patients without insurance coverage who want a legitimate, supervised GLP-1 program at the lowest reasonable price, Henry Meds is the strongest option in the category right now.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            See the full review:{" "}
            <Link href="/henry-meds-review" className="text-primary underline hover:text-primary/80">
              Henry Meds Review
            </Link>
          </p>
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
              { href: "/503a-vs-503b-pharmacies", label: "503A vs 503B Pharmacies" },
              { href: "/compounded-semaglutide", label: "Compounded Semaglutide Guide" },
              { href: "/compounded-tirzepatide", label: "Compounded Tirzepatide Guide" },
              { href: "/henry-meds-review", label: "Henry Meds Review" },
              { href: "/ro-body-review", label: "Ro Body Review" },
              { href: "/hims-weight-loss-review", label: "Hims Weight Loss Review" },
              { href: "/mochi-health-review", label: "Mochi Health Review" },
              { href: "/form-health-review", label: "Form Health Review" },
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
