import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Ro Body Review (2026): GLP-1 Weight Loss Program Pricing and Pros/Cons",
  description:
    "Honest Ro Body review covering how the program works, pricing, insurance navigation, coaching features, and how it compares to Henry Meds and other GLP-1 telehealth providers.",
  alternates: { canonical: "https://www.weightlossshotguide.com/ro-body-review" },
};

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "How much does Ro Body cost?",
    answer:
      "The Ro Body program fee starts at $99 per month. Medication cost is additional if not covered by insurance. Branded Wegovy can add $0 to $550 per month depending on your insurance plan. Compounded semaglutide through Ro adds a separate pharmacy cost. Total monthly costs vary widely based on insurance coverage.",
  },
  {
    question: "Does Ro Body accept insurance for Wegovy?",
    answer:
      "Ro navigates insurance coverage on your behalf. If your plan covers Wegovy or Ozempic, they help you access it at your copay. Not all insurance plans cover GLP-1 medications for weight loss. If not covered, they offer compounded semaglutide as an alternative.",
  },
  {
    question: "Is Ro Body safe?",
    answer:
      "Ro is a legitimate telehealth company with licensed physicians. GLP-1 medications have FDA-approved safety profiles with documented side effects. Your provider reviews your health history before prescribing. Ro Body follows standard telehealth medical practice.",
  },
  {
    question: "How does Ro compare to Henry Meds?",
    answer:
      "Ro focuses on getting you branded GLP-1s through insurance when possible and includes behavioral coaching. Henry Meds focuses on lowest-cost compounded access with less coaching. If insurance coverage is a priority, Ro's model makes sense. If lowest monthly cost matters more, Henry Meds is typically cheaper for compounded semaglutide.",
  },
];

export default function RoBodyReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Ro Body Review", url: `${BASE}/ro-body-review` },
        ]}
      />
      <ArticleSchema
        title="Ro Body Review (2026): GLP-1 Weight Loss Program Pricing and Pros/Cons"
        description="Honest Ro Body review covering how the program works, pricing, insurance navigation, coaching features, and how it compares to Henry Meds and other GLP-1 telehealth providers."
        url={`${BASE}/ro-body-review`}
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
          <span className="text-foreground">Ro Body Review</span>
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
            Ro Body Review (2026): The GLP-1 Program That Tries Insurance First
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ro Body is the weight loss program from Ro (Roman Health Ventures). It stands apart by trying to get you branded Wegovy through your insurance before defaulting to compounded alternatives. Here is an honest look at what that means for your costs and care.
          </p>
        </header>

        <QuickVerdictBox
          winnerName="Ro Body"
          winnerCategory="GLP-1 Weight Loss Program"
          dreamOutcomeChain="Start a GLP-1 program that tries to get you branded Wegovy through your insurance first, so if coverage comes through you pay as little as $0 per month for medication, so the weight loss that is clinically proven starts at the lowest possible cost to you."
          proofPoint="Branded GLP-1 insurance navigation included. Physician consultations. Program from $99/mo."
          affiliateUrl="https://www.ro.co/weight-loss"
          ctaLabel="See If Ro Body Covers You"
          riskReversal="Insurance check is free. No commitment before consultation."
        />

        {/* What is Ro Body */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is Ro Body?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Ro Body is the GLP-1 weight management program offered by Ro, previously known primarily for Roman Health (men&apos;s health) and Rory (women&apos;s health). Ro Body launched as a dedicated weight loss service.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The program is built around two things that most budget telehealth providers skip: insurance navigation and behavioral coaching. Ro checks whether your insurance covers Wegovy or Ozempic first. If it does, you access branded medication at your copay. If it does not, they offer compounded semaglutide as an alternative.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This model makes Ro Body the best fit for patients who have employer or commercial insurance that might cover GLP-1s. It is less compelling for patients who already know they are paying out of pocket and just want the cheapest compounded access.
          </p>
        </section>

        {/* Medications */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Medications Offered Through Ro Body
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
                  <td className="px-4 py-3 font-medium text-foreground">Wegovy (semaglutide)</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded, FDA-approved</td>
                  <td className="px-4 py-3 text-muted-foreground">When insurance covers it</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Ozempic (semaglutide)</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded, FDA-approved</td>
                  <td className="px-4 py-3 text-muted-foreground">When insurance covers it</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Compounded semaglutide</td>
                  <td className="px-4 py-3 text-muted-foreground">Compounded</td>
                  <td className="px-4 py-3 text-muted-foreground">When insurance does not cover branded</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Ro Body Pricing Explained
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Ro Body pricing has two components: the program fee and the medication cost. This is different from providers like Henry Meds where medication is bundled into one monthly price.
          </p>
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
                  <td className="px-4 py-3 font-medium text-foreground">Ro Body program fee</td>
                  <td className="px-4 py-3 text-muted-foreground">$99/month</td>
                  <td className="px-4 py-3 text-muted-foreground">Includes physician visits and coaching app</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Branded Wegovy (insurance)</td>
                  <td className="px-4 py-3 text-muted-foreground">$0 to $550/month</td>
                  <td className="px-4 py-3 text-muted-foreground">Varies widely by insurance plan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Compounded semaglutide (no insurance)</td>
                  <td className="px-4 py-3 text-muted-foreground">Separate pharmacy cost</td>
                  <td className="px-4 py-3 text-muted-foreground">Check current pricing at signup</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            If your insurance covers Wegovy at a low copay, the total monthly cost can be very reasonable. If you pay out of pocket for compounded plus the program fee, total costs may exceed Henry Meds or Hims for comparable medication.
          </p>
        </section>

        {/* What is included */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What the Ro Body Program Includes
          </h2>
          <ul className="space-y-3">
            {[
              { title: "Physician consultation", desc: "Licensed physicians review your case. Video visit option available, unlike most async-only competitors." },
              { title: "Insurance navigation", desc: "Ro checks your insurance for branded GLP-1 coverage and handles prior authorization paperwork." },
              { title: "Medication prescription", desc: "Ro prescribes the appropriate GLP-1 based on coverage and your health history." },
              { title: "Coaching app", desc: "App-based coaching for nutrition, activity, and habit tracking throughout the program." },
              { title: "Ongoing monitoring", desc: "Provider check-ins to monitor progress and adjust your plan as needed." },
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
            Ro Body Pros and Cons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Strengths</h3>
              <ul className="space-y-2">
                {[
                  "Insurance navigation for branded GLP-1s",
                  "Video physician visits available",
                  "Behavioral coaching app included",
                  "Strong brand with large patient volume",
                  "Transparent program structure",
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
                  "Program fee separate from medication cost",
                  "Total cost often higher than budget providers",
                  "Less transparent about specific pharmacy partner",
                  "Value depends heavily on your insurance situation",
                  "Compounded option is not lowest price available",
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
            Who Should Use Ro Body
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Good Fit</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients with commercial insurance that might cover GLP-1s
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who want live physician video options
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who value app-based behavioral coaching
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Patients who prefer a well-known brand
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 border border-border rounded-lg p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-3">Consider Alternatives If</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You already know insurance will not cover your GLP-1
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  Lowest monthly cost for compounded semaglutide is the priority
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  You want a fully bundled price with no surprise fees
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            For lowest-cost compounded semaglutide:{" "}
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
              { href: "/compounding-pharmacies", label: "Compounding Pharmacies for GLP-1" },
              { href: "/compounded-semaglutide", label: "Compounded Semaglutide Guide" },
              { href: "/henry-meds-review", label: "Henry Meds Review" },
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
