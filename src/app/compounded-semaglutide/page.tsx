import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Compounded Semaglutide: What It Is, Cost, and Where to Get It (2026)",
  description:
    "What compounded semaglutide is, how it compares to branded Ozempic and Wegovy, current FDA status, dosing, and the top telehealth providers that offer it.",
  alternates: { canonical: "https://www.weightlossshotguide.com/compounded-semaglutide" },
};

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Does compounded semaglutide work the same as Ozempic?",
    answer:
      "Most patients and providers report comparable appetite suppression and weight loss at equivalent doses. Compounded semaglutide uses the same active ingredient. It is not FDA-approved as a branded drug. Quality depends on the compounding pharmacy. No head-to-head FDA trial exists comparing branded to compounded semaglutide.",
  },
  {
    question: "What dose of compounded semaglutide should I start at?",
    answer:
      "Standard starting dose is 0.25mg once weekly for 4 weeks, then 0.5mg. Titrate up every 4 weeks as tolerated. Your prescribing physician sets your dose schedule. Do not self-titrate without guidance from your provider.",
  },
  {
    question: "How is compounded semaglutide administered?",
    answer:
      "Subcutaneous injection, typically once weekly. Most providers ship vials with syringes. Some use auto-injector pens. Your provider explains administration before your first shipment arrives. Injection sites include the abdomen, upper thigh, or upper arm.",
  },
  {
    question: "Is compounded semaglutide with B12 better?",
    answer:
      "Some compounding pharmacies add vitamin B12 or other compounds to semaglutide. There is no clinical evidence that B12 addition improves weight loss outcomes. It may reduce certain side effects for some patients. Ask your provider what their formulation includes and why they use it.",
  },
  {
    question: "What happens if the FDA shortage ends?",
    answer:
      "If the FDA removes branded semaglutide from the shortage list, 503A compounding pharmacies must stop compounding it. 503B outsourcing facilities may continue under different rules. If you are mid-program, your provider should communicate your options. This is why monitoring FDA status matters when you are on a compounded GLP-1 program.",
  },
];

export default function CompoundedSemaglutidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Compounded Semaglutide", url: `${BASE}/compounded-semaglutide` },
        ]}
      />
      <ArticleSchema
        title="Compounded Semaglutide: What It Is, Cost, and Where to Get It (2026)"
        description="What compounded semaglutide is, how it compares to branded Ozempic and Wegovy, current FDA status, dosing, and the top telehealth providers that offer it."
        url={`${BASE}/compounded-semaglutide`}
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
          <span className="text-foreground">Compounded Semaglutide</span>
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
            Compounded Semaglutide: What It Is, What It Costs, and Where to Get It (2026)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Branded semaglutide (Ozempic and Wegovy) costs $935 to $1,349 per month without insurance. Compounded semaglutide made by a licensed pharmacy costs $99 to $400 per month. Here is what the difference actually means.
          </p>
        </header>

        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="Compounded Semaglutide Provider"
          dreamOutcomeChain="Get physician-supervised compounded semaglutide at $197 to $299 per month so the cost of GLP-1 treatment becomes manageable, so you stop comparing Wegovy at $1,349 per month to your grocery budget."
          proofPoint="Licensed physicians. Partner pharmacies disclose quality testing. Compounded semaglutide from $197/mo."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="Check Eligibility at Henry Meds"
          riskReversal="No long-term contract required."
        />

        {/* What is it */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            What Is Compounded Semaglutide?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Compounded semaglutide is semaglutide made by a compounding pharmacy from the raw active pharmaceutical ingredient (API). Instead of buying finished Ozempic or Wegovy from Novo Nordisk, a licensed pharmacist builds the drug to the prescribed dose.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The active ingredient is the same. The mechanism of action is the same. The way it works in your body is the same. What differs is the manufacturing process, regulatory status, and cost.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Compounded semaglutide is not FDA-approved. It is legal when branded semaglutide is on the FDA drug shortage list. It is made by a pharmacy, not a pharmaceutical manufacturer.
          </p>
        </section>

        {/* Why it exists */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Why Compounded Semaglutide Exists
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The branded drug shortage is one reason. When Novo Nordisk could not supply enough Ozempic and Wegovy to meet demand, the FDA shortage list opened the door for compounding pharmacies to fill the gap.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The cost gap is the bigger reason most patients seek it out. Here is the comparison:
          </p>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Drug</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Monthly Cost (No Insurance)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Ozempic</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded (FDA-approved)</td>
                  <td className="px-4 py-3 text-muted-foreground">~$935</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Wegovy</td>
                  <td className="px-4 py-3 text-muted-foreground">Branded (FDA-approved)</td>
                  <td className="px-4 py-3 text-muted-foreground">~$1,349</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Compounded semaglutide</td>
                  <td className="px-4 py-3 text-muted-foreground">Compounded (not FDA-approved)</td>
                  <td className="px-4 py-3 text-muted-foreground">$99 to $400</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            For most people paying out of pocket, compounded is the only financially viable option.
          </p>
        </section>

        {/* Is it the same */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Is Compounded Semaglutide the Same as Ozempic or Wegovy?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Not identical. Ozempic and Wegovy are manufactured by Novo Nordisk to NDA (New Drug Application) standards with consistent batch quality enforced by the FDA. Compounded semaglutide is made from raw API by a compounding pharmacy.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The mechanism is the same. It binds to GLP-1 receptors and slows gastric emptying, reduces appetite, and promotes insulin release. At equivalent doses, most patients and providers report similar results.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Some compounding pharmacies add B12 or other compounds to their semaglutide formulation. This is a marketing choice. There is no clinical evidence that additives improve weight loss outcomes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The key variable is the quality of the compounding pharmacy. A well-run, accredited pharmacy produces a reliable product. An unaccredited pharmacy with no documented testing is a different story.
          </p>
        </section>

        {/* Legal status */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Current FDA Status (as of 2026-05-08)
          </h2>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Important:</strong> The FDA declared branded semaglutide shortage status resolved in early 2025. After this date, 503A pharmacies face restrictions on compounding semaglutide. Verify current legal status with your telehealth provider before ordering.
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            When Ozempic and Wegovy were on the FDA shortage list, compounding was legal for both 503A and 503B pharmacies. After the shortage ended for branded semaglutide, the legal situation changed for 503A pharmacies.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            503B outsourcing facilities may have different flexibility under separate FDA provisions. The rules are complex and continue to evolve through 2025 and 2026.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Your telehealth provider should know the current status and tell you what medication they are actually prescribing. If they cannot answer clearly, that is a problem.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            See:{" "}
            <Link href="/503a-vs-503b-pharmacies" className="text-primary underline hover:text-primary/80">
              503A vs 503B Pharmacies Explained
            </Link>
          </p>
        </section>

        {/* Dosing */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Dosing Protocol for Compounded Semaglutide
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Dosing for compounded semaglutide typically follows the same titration schedule used for branded Wegovy:
          </p>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Weeks</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Dose</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Weeks 1 to 4</td>
                  <td className="px-4 py-3 font-medium text-foreground">0.25mg weekly</td>
                  <td className="px-4 py-3 text-muted-foreground">Tolerance building</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Weeks 5 to 8</td>
                  <td className="px-4 py-3 font-medium text-foreground">0.5mg weekly</td>
                  <td className="px-4 py-3 text-muted-foreground">Initial therapeutic dose</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Weeks 9 to 12</td>
                  <td className="px-4 py-3 font-medium text-foreground">1.0mg weekly</td>
                  <td className="px-4 py-3 text-muted-foreground">Increased effect</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Weeks 13 to 16</td>
                  <td className="px-4 py-3 font-medium text-foreground">1.7mg weekly</td>
                  <td className="px-4 py-3 text-muted-foreground">Higher therapeutic dose</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-muted-foreground">Week 17 and beyond</td>
                  <td className="px-4 py-3 font-medium text-foreground">2.4mg weekly</td>
                  <td className="px-4 py-3 text-muted-foreground">Maintenance dose (max)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Your prescribing physician sets your specific dose schedule. Do not self-titrate. Some patients stay at lower doses due to effective response or side effects.
          </p>
        </section>

        {/* Providers */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Which Telehealth Providers Offer Compounded Semaglutide
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Henry Meds</strong>
                <p className="text-muted-foreground mt-1">Lowest price point in the category at $197 to $299 per month. Async consultation with licensed physicians. Fast approval for most patients.{" "}
                  <Link href="/henry-meds-review" className="text-primary underline hover:text-primary/80">Read the full review.</Link>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Ro Body</strong>
                <p className="text-muted-foreground mt-1">Tries insurance for branded first. Uses compounded semaglutide as alternative. Includes behavioral coaching app.{" "}
                  <Link href="/ro-body-review" className="text-primary underline hover:text-primary/80">Read the full review.</Link>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Hims and Hers</strong>
                <p className="text-muted-foreground mt-1">Compounded semaglutide starting at $99 per month. Large network, strong app, no live visits by default.{" "}
                  <Link href="/hims-weight-loss-review" className="text-primary underline hover:text-primary/80">Read the full review.</Link>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Mochi Health</strong>
                <p className="text-muted-foreground mt-1">Physician-only prescribing model. More clinical oversight. Higher total cost. Best for patients with complex medical histories.{" "}
                  <Link href="/mochi-health-review" className="text-primary underline hover:text-primary/80">Read the full review.</Link>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Form Health</strong>
                <p className="text-muted-foreground mt-1">Nutrition-focused approach. Physician plus registered dietitian team. Good for patients who want lifestyle counseling alongside their prescription.</p>
              </div>
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
              { href: "/503a-vs-503b-pharmacies", label: "503A vs 503B Pharmacies" },
              { href: "/henry-meds-review", label: "Henry Meds Review" },
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
