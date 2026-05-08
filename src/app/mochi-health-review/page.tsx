import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Mochi Health Review (2026): Physician-Led GLP-1 Program Pricing and Pros/Cons",
  description:
    "Honest Mochi Health review covering the physician-led model, metabolic health approach, pricing, who it is right for, and how it compares to Henry Meds and Hims for GLP-1 treatment.",
  alternates: { canonical: "https://www.weightlossshotguide.com/mochi-health-review" },
};

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "What makes Mochi Health different from other GLP-1 telehealth providers?",
    answer:
      "Mochi uses board-certified physicians rather than NPs or PAs for primary prescribing decisions. They take a whole-metabolic-health approach, not just prescription access. This means more personalization but also more process and typically higher total cost.",
  },
  {
    question: "How much does Mochi Health cost?",
    answer:
      "The program fee is typically $99 per month. Medication cost is additional. If insurance covers Wegovy or Ozempic, you pay the copay. If not covered, compounded options run $200 to $400 per month. Total all-in is usually $300 to $600 per month depending on your situation.",
  },
  {
    question: "Does Mochi Health accept insurance?",
    answer:
      "Mochi helps navigate insurance coverage for branded GLP-1 medications. Not all insurance plans cover weight management medications. If uncovered, they offer compounded alternatives at lower cost.",
  },
  {
    question: "Is Mochi Health worth the higher price?",
    answer:
      "For patients with complex health histories or co-occurring conditions like hypertension, high cholesterol, or insulin resistance, yes. The physician-led model and metabolic framing justify the premium. For otherwise healthy adults who need access to compounded semaglutide at low cost, budget providers like Henry Meds or Hims cost significantly less.",
  },
];

export default function MochiHealthReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Mochi Health Review", url: `${BASE}/mochi-health-review` },
        ]}
      />
      <ArticleSchema
        title="Mochi Health Review (2026): Physician-Led GLP-1 Program Pricing and Pros/Cons"
        description="Honest Mochi Health review covering the physician-led model, metabolic health approach, pricing, who it is right for, and how it compares to Henry Meds and Hims for GLP-1 treatment."
        url={`${BASE}/mochi-health-review`}
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
          <span className="text-foreground">Mochi Health Review</span>
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
            Mochi Health Review (2026): The Physician-Led GLP-1 Program for Serious Metabolic Work
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mochi Health takes a different approach to GLP-1 prescribing. Board-certified physicians. Full metabolic health evaluation. Treatment of the conditions driving weight gain, not just access to a medication. Here is who that is right for and what it costs.
          </p>
        </header>

        {/* TODO: Verify Mochi Health affiliate URL and program — may require direct outreach */}
        <QuickVerdictBox
          winnerName="Mochi Health"
          winnerCategory="Physician-Led GLP-1 Program"
          dreamOutcomeChain="Work with a board-certified physician who treats weight as a medical condition, so your GLP-1 prescription comes with a real metabolic health plan instead of a questionnaire and a shipment, so the weight you lose stays off because the conditions driving it are addressed."
          proofPoint="Board-certified physicians. Holistic metabolic approach. GLP-1 plus lifestyle support."
          affiliateUrl="https://www.joinfound.com"
          ctaLabel="Learn More About Mochi Health"
          riskReversal="Physician review before any prescription."
        />

        {/* What is Mochi Health */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is Mochi Health?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Mochi Health is a physician-led metabolic health platform. It is built on the premise that weight gain is often a medical condition with underlying causes, not just a behavior problem. Their program is designed to identify and treat those causes alongside prescribing GLP-1 medications.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Unlike budget telehealth providers that focus on fast, low-cost access to compounded semaglutide, Mochi takes more time upfront. They assess your metabolic health picture fully. That means more clinical work before your first prescription, and more clinical involvement throughout the program.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The result is a program that costs more but delivers more for patients who need it. For simple cases, that extra cost is not necessary. For patients with multiple metabolic conditions, it may be the better investment.
          </p>
        </section>

        {/* Prescriber model */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Sets the Mochi Prescriber Model Apart
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Most GLP-1 telehealth platforms use NPs or PAs as their primary prescribers. Mochi uses board-certified physicians for core clinical decisions. This is not a marketing distinction. It affects what happens when your case is complicated.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Board-certified physicians have deeper training in differential diagnosis and metabolic medicine. When a patient has hypertension, insulin resistance, and high triglycerides alongside obesity, a physician is better positioned to manage the full picture than an NP working through a rapid async intake.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mochi also includes nutrition counseling and lifestyle coaching as part of the program, not as an add-on. The clinical team works together on your case rather than in silos.
          </p>
        </section>

        {/* Medications */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Medications Offered Through Mochi Health
          </h2>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">When Used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Wegovy / Ozempic (semaglutide)</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded, FDA-approved</td>
                  <td className="px-4 py-3 text-muted-foreground">When insurance covers it</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Mounjaro / Zepbound (tirzepatide)</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded, FDA-approved</td>
                  <td className="px-4 py-3 text-muted-foreground">When insurance covers it</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Compounded semaglutide</td>
                  <td className="px-4 py-3 text-muted-foreground">Compounded</td>
                  <td className="px-4 py-3 text-muted-foreground">When branded is not covered</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Non-GLP-1 medications</td>
                  <td className="px-4 py-3 text-muted-foreground">Metformin, bupropion/naltrexone, etc.</td>
                  <td className="px-4 py-3 text-muted-foreground">When clinically appropriate for the patient</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Mochi&apos;s willingness to prescribe non-GLP-1 medications sets it apart from GLP-1-only platforms. A physician who considers multiple treatment options is more likely to find what actually works for your specific situation.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Mochi Health Pricing
          </h2>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Cost Component</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Amount</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Mochi program fee</td>
                  <td className="px-4 py-3 text-muted-foreground">~$99/month</td>
                  <td className="px-4 py-3 text-muted-foreground">Includes physician visits, nutrition, coaching</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Branded GLP-1 (with insurance)</td>
                  <td className="px-4 py-3 text-muted-foreground">$0 to copay amount</td>
                  <td className="px-4 py-3 text-muted-foreground">Varies by insurance plan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Compounded GLP-1 (no insurance)</td>
                  <td className="px-4 py-3 text-muted-foreground">$200 to $400/month</td>
                  <td className="px-4 py-3 text-muted-foreground">Subject to FDA shortage status</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Total all-in estimate</td>
                  <td className="px-4 py-3 text-muted-foreground">$300 to $600/month</td>
                  <td className="px-4 py-3 text-muted-foreground">Varies widely by insurance and medication</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            Prices as of 2026-05-08. Verify current pricing at the time you sign up.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Mochi Health Pros and Cons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Strengths</h3>
              <ul className="space-y-2">
                {[
                  "Board-certified physician prescribers (not NPs/PAs)",
                  "Holistic metabolic health approach",
                  "Nutrition counseling included",
                  "Multiple medication options (not just GLP-1s)",
                  "Insurance navigation for branded drugs",
                  "Better for complex health histories",
                ].map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Limitations</h3>
              <ul className="space-y-2">
                {[
                  "Higher total cost than budget providers",
                  "Slower approval process than async-only platforms",
                  "Not ideal if fast, cheap access is the only goal",
                  "Program fee plus medication cost adds up",
                  "Overkill for simple, healthy-adult cases",
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

        {/* Who it is for */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Who Mochi Health Is Best For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Good Fit</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients with hypertension, high cholesterol, or insulin resistance alongside weight concerns
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who want a real physician managing their full metabolic picture
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who have tried GLP-1s before and want a more personalized approach
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who want nutrition and lifestyle support integrated into their care
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 border border-border rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Consider Alternatives If</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You are otherwise healthy and want the lowest monthly cost
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You want fast approval and next-week shipment
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  Budget is the primary driver and you do not need comprehensive metabolic care
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            For lowest-cost access:{" "}
            <Link href="/henry-meds-review" className="text-primary underline hover:text-primary/80">
              Henry Meds Review
            </Link>{" "}
            or{" "}
            <Link href="/hims-weight-loss-review" className="text-primary underline hover:text-primary/80">
              Hims Weight Loss Review
            </Link>
          </p>
        </section>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Mochi Health vs Other GLP-1 Providers
          </h2>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Platform</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Starting Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Physician Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Nutrition Support</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Mochi Health</td>
                  <td className="px-4 py-3 text-muted-foreground">$99/mo + medication</td>
                  <td className="px-4 py-3 text-muted-foreground">Board-certified MDs</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes, included</td>
                  <td className="px-4 py-3 text-muted-foreground">Complex cases</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Henry Meds</td>
                  <td className="px-4 py-3 text-muted-foreground">$197/mo all-in</td>
                  <td className="px-4 py-3 text-muted-foreground">Physicians and NPs</td>
                  <td className="px-4 py-3 text-muted-foreground">No</td>
                  <td className="px-4 py-3 text-muted-foreground">Lowest cost</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Ro Body</td>
                  <td className="px-4 py-3 text-muted-foreground">$99/mo + medication</td>
                  <td className="px-4 py-3 text-muted-foreground">Physicians</td>
                  <td className="px-4 py-3 text-muted-foreground">App-based coaching</td>
                  <td className="px-4 py-3 text-muted-foreground">Insurance navigation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Hims and Hers</td>
                  <td className="px-4 py-3 text-muted-foreground">$99/mo all-in</td>
                  <td className="px-4 py-3 text-muted-foreground">Physicians and NPs</td>
                  <td className="px-4 py-3 text-muted-foreground">App-based only</td>
                  <td className="px-4 py-3 text-muted-foreground">Simple access, strong app</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What patients report */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Patients Report About Mochi Health
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Patients with complex medical histories consistently report feeling more seen and heard by Mochi than by faster, cheaper platforms. The physician involvement is real, not just a label.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The most common feedback is that the onboarding takes longer than budget providers. Patients who wanted fast access found the intake and review process slower than Henry Meds or Hims. Patients who had tried other platforms and been frustrated by generic responses found Mochi to be a meaningful upgrade.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Patients with insulin resistance or who had plateaued on other medications noted that Mochi&apos;s multi-medication approach led to protocol changes that worked when simpler programs had not.
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
              { href: "/compounding-pharmacies", label: "Compounding Pharmacies for GLP-1" },
              { href: "/compounded-semaglutide", label: "Compounded Semaglutide Guide" },
              { href: "/henry-meds-review", label: "Henry Meds Review" },
              { href: "/ro-body-review", label: "Ro Body Review" },
              { href: "/hims-weight-loss-review", label: "Hims Weight Loss Review" },
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
