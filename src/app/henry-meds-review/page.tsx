import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Henry Meds Review (2026): Pricing, Quality, and Who It Is Right For",
  description:
    "Honest Henry Meds review covering pricing, prescriber model, pharmacy partners, pros and cons, and who should (and should not) use this GLP-1 telehealth service.",
  alternates: { canonical: "https://www.weightlossshotguide.com/henry-meds-review" },
};

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "How does Henry Meds work?",
    answer:
      "Submit a health intake form. A licensed physician or NP reviews your case. If you qualify, a prescription is sent to their pharmacy partner. Medication ships to you. The process usually takes 1 to 3 business days from approval. No live video visit is required for most patients.",
  },
  {
    question: "Is Henry Meds legitimate?",
    answer:
      "Henry Meds is a licensed telehealth company with real physicians. They have processed tens of thousands of GLP-1 prescriptions. They are not the same as random online peptide sellers. Verify their pharmacy partners' accreditation before ordering.",
  },
  {
    question: "How much does Henry Meds cost per month?",
    answer:
      "Compounded semaglutide starts around $197 per month. Compounded tirzepatide starts around $249 per month, subject to FDA shortage status. Prices may vary by dose tier. Check their current pricing at the time you sign up, as prices change.",
  },
  {
    question: "Does Henry Meds offer branded Ozempic or Zepbound?",
    answer:
      "Henry Meds focuses primarily on compounded GLP-1 formulations rather than insurance navigation for branded drugs. Some telehealth platforms help patients access branded GLP-1s through insurance. Check their current offerings at the time you visit their site.",
  },
];

export default function HenryMedsReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Henry Meds Review", url: `${BASE}/henry-meds-review` },
        ]}
      />
      <ArticleSchema
        title="Henry Meds Review (2026): Pricing, Quality, and Who It Is Right For"
        description="Honest Henry Meds review covering pricing, prescriber model, pharmacy partners, pros and cons, and who should (and should not) use this GLP-1 telehealth service."
        url={`${BASE}/henry-meds-review`}
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
          <span className="text-foreground">Henry Meds Review</span>
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
            Henry Meds Review (2026): Is It the Best Value GLP-1 Telehealth Service?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Henry Meds offers compounded semaglutide and tirzepatide at some of the lowest prices in the telehealth GLP-1 category. Here is what you actually get for that price.
          </p>
        </header>

        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="GLP-1 Telehealth Provider"
          dreamOutcomeChain="Start a physician-supervised compounded GLP-1 program at one of the lowest monthly prices in the category, so the medication that averaged 15% or more body weight loss in clinical data becomes financially sustainable for you."
          proofPoint="Licensed physicians and NPs. Compounded semaglutide from $197/mo. Available in most US states."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="Check Eligibility at Henry Meds"
          riskReversal="No long-term contract. Cancel anytime."
        />

        {/* What is Henry Meds */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is Henry Meds?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Henry Meds is a telehealth company founded in Utah. It specializes in GLP-1 medications and metabolic health. The focus is on making compounded semaglutide and tirzepatide accessible at prices most people can afford without insurance coverage.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Henry Meds connects patients with licensed physicians and NPs through an asynchronous consultation model. You submit a health intake form. A provider reviews it. If appropriate, they write a prescription. The prescription goes to their pharmacy partner. Medication ships to your door.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The platform is not designed for complex metabolic cases. It is designed for otherwise healthy adults who want straightforward access to a compounded GLP-1 at a low monthly cost.
          </p>
        </section>

        {/* Medications and pricing */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Medications Offered and Pricing
          </h2>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Medication</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Starting Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Compounded semaglutide</td>
                  <td className="px-4 py-3 text-muted-foreground">From $197/month</td>
                  <td className="px-4 py-3 text-muted-foreground">Subject to FDA shortage status</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Compounded tirzepatide</td>
                  <td className="px-4 py-3 text-muted-foreground">From $249/month</td>
                  <td className="px-4 py-3 text-muted-foreground">Subject to FDA shortage status</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            Prices as of 2026-05-08. Prices and availability change. Verify before signing up. Medication availability depends on current FDA shortage status.
          </p>
        </section>

        {/* Prescriber model */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Prescriber Model: How the Process Works
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Henry Meds uses an asynchronous consultation model. You fill out a detailed health intake. A licensed physician or NP reviews it. They write a prescription if you qualify or ask follow-up questions if they need more information.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Most patients get a response within 24 hours. Prescription fulfillment and shipping takes an additional 1 to 5 business days depending on your location.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Follow-up check-ins are included. You have a dedicated provider for your care. For most patients, this model is fast and frictionless. Patients who want live video visits by default should look at Mochi Health or Ro Body instead.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Henry Meds Pros and Cons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">What Henry Meds Does Well</h3>
              <ul className="space-y-2">
                {[
                  "Lowest price point in the category",
                  "Fast async approval process",
                  "No long-term contract",
                  "Dedicated provider per patient",
                  "Available in most US states",
                  "Simple, straightforward program",
                ].map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Limitations to Know</h3>
              <ul className="space-y-2">
                {[
                  "Async only (no live video by default)",
                  "Less hands-on than physician-supervised programs",
                  "B12 may be added to formulations (transparency varies)",
                  "Not ideal for complex medical histories",
                  "No insurance navigation for branded drugs",
                  "Medication subject to FDA shortage status changes",
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

        {/* State availability */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            State Availability and Shipping
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Henry Meds is available in most US states. Check their website for the current state list before you start the intake process. State availability can change as they expand.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Medication ships to most states. Temperature-sensitive formulations ship under cold chain conditions. Shipping times vary by location.
          </p>
        </section>

        {/* Who it is for */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Who Henry Meds Is Best For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Good Fit</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Otherwise healthy adults without complex medication interactions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Cost-conscious patients without GLP-1 insurance coverage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who want fast online access without long waitlists
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients comfortable with async medical communication
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 border border-border rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Look Elsewhere If</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You have complex health history or multiple comorbidities
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You want live physician video visits
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You want insurance navigation for branded Wegovy or Zepbound
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You want nutrition or behavioral coaching included
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* YMYL note */}
        <div className="bg-muted/50 border border-border rounded-lg p-4 mb-10 text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> Henry Meds is a telehealth service, not a pharmacy. Always verify your prescriber&apos;s license and your pharmacy&apos;s accreditation status before starting any medication program.
        </div>

        {/* Customer experience */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Patients Report
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Henry Meds is rated positively on third-party review platforms. Common feedback from patients includes fast approval times, competitive pricing, and straightforward communication from providers.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Some patients note that medication arrives in vials with syringes rather than auto-injector pens. This is common for compounded GLP-1s and is expected with this price point.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Some patients report that responses to detailed side effect questions are more generic than they would get from a primary care physician. For most low-risk patients, this is acceptable. For patients with complex situations, a more hands-on provider is worth the extra cost.
          </p>
        </section>

        {/* Compare */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            How Henry Meds Compares to Other Providers
          </h2>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Platform</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Starting Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Live Visits</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Coaching</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Insurance Nav</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Henry Meds</td>
                  <td className="px-4 py-3 text-muted-foreground">$197/mo</td>
                  <td className="px-4 py-3 text-muted-foreground">No (async only)</td>
                  <td className="px-4 py-3 text-muted-foreground">No</td>
                  <td className="px-4 py-3 text-muted-foreground">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Hims and Hers</td>
                  <td className="px-4 py-3 text-muted-foreground">$99/mo</td>
                  <td className="px-4 py-3 text-muted-foreground">No (async only)</td>
                  <td className="px-4 py-3 text-muted-foreground">App-based</td>
                  <td className="px-4 py-3 text-muted-foreground">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Ro Body</td>
                  <td className="px-4 py-3 text-muted-foreground">$99/mo + medication</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes (available)</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Mochi Health</td>
                  <td className="px-4 py-3 text-muted-foreground">$99/mo + medication</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes</td>
                </tr>
              </tbody>
            </table>
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
              { href: "/ro-body-review", label: "Ro Body Review" },
              { href: "/hims-weight-loss-review", label: "Hims Weight Loss Review" },
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
