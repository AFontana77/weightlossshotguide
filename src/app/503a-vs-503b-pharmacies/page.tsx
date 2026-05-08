import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "503A vs 503B Compounding Pharmacies for GLP-1 (2026) | WeightLossShotGuide",
  description:
    "The difference between 503A and 503B compounding pharmacies, why it matters for semaglutide and tirzepatide quality, and how to verify a pharmacy before ordering.",
  alternates: { canonical: "https://www.weightlossshotguide.com/503a-vs-503b-pharmacies" },
};

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Is 503A or 503B compounding better for GLP-1?",
    answer:
      "503B facilities have stricter FDA oversight and cGMP manufacturing standards. They are generally considered higher quality for GLP-1 compounding. 503A pharmacies can still produce good product, but quality varies more. If your telehealth provider uses a 503B facility, that is a positive sign.",
  },
  {
    question: "Can 503A pharmacies still compound semaglutide?",
    answer:
      "It depends on current FDA shortage status. When branded semaglutide (Ozempic and Wegovy) is on the shortage list, yes. When Novo Nordisk supplies enough to end the shortage, 503A pharmacies must stop. Check current FDA shortage status before ordering.",
  },
  {
    question: "What is PCAB accreditation?",
    answer:
      "PCAB stands for Pharmacy Compounding Accreditation Board. It is a voluntary accreditation program that verifies compounding pharmacies meet quality, safety, and sterility standards. Not all good pharmacies are PCAB-accredited, but accreditation is a positive indicator when evaluating a pharmacy.",
  },
  {
    question: "Can a 503B facility compound tirzepatide?",
    answer:
      "The rules are complex. The FDA declared the tirzepatide shortage resolved in late 2024 and early 2025. After that point, whether 503B facilities can still compound tirzepatide depends on specific FDA guidance. Check the FDA website or consult with your prescriber for the current status.",
  },
  {
    question: "What should I ask a compounding pharmacy before ordering?",
    answer:
      "Ask: Are you a licensed 503A or 503B facility? What third-party testing do you run on your batches? Can you share a certificate of analysis? What is your beyond-use dating? Do you ship under cold chain where required? A good pharmacy answers all of these questions clearly and promptly.",
  },
];

export default function Pharmacies503aVs503bPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "503A vs 503B Pharmacies", url: `${BASE}/503a-vs-503b-pharmacies` },
        ]}
      />
      <ArticleSchema
        title="503A vs 503B Compounding Pharmacies for GLP-1 (2026)"
        description="The difference between 503A and 503B compounding pharmacies, why it matters for semaglutide and tirzepatide quality, and how to verify a pharmacy before ordering."
        url={`${BASE}/503a-vs-503b-pharmacies`}
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
          <span className="text-foreground">503A vs 503B</span>
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
            503A vs 503B Compounding Pharmacies: What the Difference Means for GLP-1 Quality
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When you order compounded semaglutide or tirzepatide through a telehealth platform, the quality of what you receive depends on which type of pharmacy made it. The 503A vs 503B distinction is the most important regulatory difference you need to understand.
          </p>
        </header>

        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="Compounded GLP-1 Telehealth Platform"
          dreamOutcomeChain="Work with a telehealth provider that partners with accredited pharmacies so you know the compounded tirzepatide or semaglutide you receive meets documented quality standards, rather than gambling on an unknown online seller."
          proofPoint="Licensed physician oversight. Pharmacy partner accreditation disclosed. $197 to $299/mo range."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="See Henry Meds Pharmacy Partners"
          riskReversal="Pharmacy details disclosed before purchase."
        />

        {/* 503A */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is a 503A Pharmacy?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A 503A pharmacy is a traditional compounding pharmacy. It makes medications for individual patients with a valid prescription. The pharmacy is regulated primarily by the state pharmacy board, not by the FDA.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            503A pharmacies can produce high-quality medication. Many do. But their standards and inspection frequency are set by the state, not the federal government. That means quality varies more across 503A pharmacies than across 503B facilities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When semaglutide was on the FDA shortage list, most telehealth platforms used 503A pharmacies. It was the most accessible and cost-effective option.
          </p>
        </section>

        {/* 503B */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is a 503B Outsourcing Facility?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A 503B outsourcing facility is a higher-standard compounding operation registered with the FDA. It can compound in bulk without patient-specific prescriptions. It must follow cGMP (current Good Manufacturing Practice) standards. It is subject to FDA inspections.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            This is the same manufacturing standard used by large pharmaceutical companies. 503B facilities produce more consistent, better-documented product than 503A pharmacies in most cases.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            503B facilities cost more to operate. Medications from them may cost slightly more. But the quality documentation and oversight is stronger.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            503A vs 503B: Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">503A Pharmacy</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">503B Outsourcing Facility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">FDA oversight</td>
                  <td className="px-4 py-3 text-muted-foreground">Limited (state-primary)</td>
                  <td className="px-4 py-3 text-muted-foreground">Full FDA registration and inspection</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Batch production</td>
                  <td className="px-4 py-3 text-muted-foreground">Not allowed without Rx</td>
                  <td className="px-4 py-3 text-muted-foreground">Allowed in bulk</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Patient-specific Rx required</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes, for each order</td>
                  <td className="px-4 py-3 text-muted-foreground">Not always required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">cGMP compliance</td>
                  <td className="px-4 py-3 text-muted-foreground">Not required</td>
                  <td className="px-4 py-3 text-muted-foreground">Required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">FDA inspection</td>
                  <td className="px-4 py-3 text-muted-foreground">Not routine</td>
                  <td className="px-4 py-3 text-muted-foreground">Regular inspections</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Common for GLP-1s</td>
                  <td className="px-4 py-3 text-muted-foreground">Yes, most telehealth platforms</td>
                  <td className="px-4 py-3 text-muted-foreground">Less common, higher cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why it matters */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Why This Matters for GLP-1 Compounding
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            GLP-1 medications are injected drugs. Dosing accuracy matters. If a batch is dosed at 70% of labeled strength, you get subtherapeutic results. If it is dosed at 130%, side effects get worse.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            503B facilities must run third-party testing and document batch quality. 503A pharmacies should do this too, but it is not federally mandated. Ask your telehealth provider what testing their pharmacy partner runs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The practical answer: 503B is better on paper. 503A from a PCAB-accredited pharmacy is usually acceptable. An unaccredited 503A pharmacy with no documented testing is the scenario to avoid.
          </p>
        </section>

        {/* Current legal landscape */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Current Legal Landscape for Compounding GLP-1s
          </h2>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Important:</strong> Shortage status changes. The rules described here reflect the situation as of 2026-05-08. Verify current status with your provider or on the FDA website at accessdata.fda.gov before ordering.
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            When a branded drug is on the FDA shortage list, both 503A and 503B facilities can compound it legally.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            When the shortage ends, 503A pharmacies must stop compounding that drug. 503B outsourcing facilities may have slightly more flexibility under different provisions, but they are not automatically exempt.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The FDA declared branded semaglutide shortage status resolved in early 2025. This restricted 503A semaglutide compounding. Tirzepatide followed a similar path. The legal picture continues to evolve. Your telehealth provider should track this for you.
          </p>
        </section>

        {/* How to verify */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            How to Verify a Compounding Pharmacy
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">PCAB accreditation:</strong> Check the Pharmacy Compounding Accreditation Board directory at pcab.org. Accredited pharmacies meet voluntary quality standards.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">FDA 503B registry:</strong> The FDA lists all registered 503B outsourcing facilities at accessdata.fda.gov. If your pharmacy claims to be 503B, verify it there.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">State pharmacy board:</strong> Each state regulates 503A pharmacies. You can verify license status through the state board website.</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Certificate of analysis:</strong> Ask the pharmacy for COA documentation for their semaglutide or tirzepatide batches. A good pharmacy shares this without hesitation.</span>
            </li>
          </ul>

          <h3 className="font-heading text-lg font-semibold text-foreground mt-6 mb-3">Red Flags to Avoid</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <span>No state pharmacy license or FDA registration</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <span>Ships medication without requiring a prescription</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <span>Claims "FDA-approved compounded semaglutide" (no such approval exists)</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <span>Very low prices with no quality documentation available</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <span>No PCAB accreditation and no third-party testing disclosed</span>
            </li>
          </ul>
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
