import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Form Health Review (2026) — Physician-Supervised GLP-1 Weight Loss",
  description:
    "Form Health pairs you with a physician and registered dietitian for GLP-1 weight management. Our honest review covers pricing, prescriber model, medications offered, and who it is best for.",
  alternates: { canonical: "https://www.weightlossshotguide.com/form-health-review" },
};

const DATE = "2026-05-08";
const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "How much does Form Health cost?",
    answer:
      "Form Health charges a monthly program fee typically around $149/month that includes physician visits and dietitian coaching. Medication cost is separate. If insurance covers a branded GLP-1, you pay your plan copay. Compounded semaglutide through Form adds roughly $200-350/month. Total monthly all-in runs $350-500+ depending on medication.",
  },
  {
    question: "What makes Form Health different from other GLP-1 providers?",
    answer:
      "Form Health requires a registered dietitian as part of every program, not just a physician. You get both medical management of the prescription and behavioral/nutrition coaching built in. Most budget telehealth providers skip the dietitian entirely.",
  },
  {
    question: "Does Form Health prescribe branded Ozempic or Zepbound?",
    answer:
      "Form Health navigates insurance coverage for branded GLP-1s when possible. If your plan covers Wegovy, Zepbound, or Ozempic, Form helps you access it. When not covered, they use compounded semaglutide or tirzepatide through pharmacy partners.",
  },
  {
    question: "Is Form Health worth the higher cost?",
    answer:
      "For patients who want structured accountability alongside the prescription, yes. The dietitian integration is genuinely different from pure prescription platforms. For otherwise healthy adults who just want the medication at the lowest price, Henry Meds or Hims costs significantly less.",
  },
];

const pros = [
  "Registered dietitian included in every program",
  "Physician-only prescribers for GLP-1 decisions",
  "Insurance navigation for branded GLP-1s",
  "Structured accountability beyond just the prescription",
  "Good fit for patients with complex metabolic histories",
];

const cons = [
  "Higher total monthly cost than budget competitors",
  "Slower onboarding than async-only platforms",
  "Dietitian sessions are asynchronous, not live video by default",
];

export default function FormHealthReviewPage() {
  return (
    <>
      <ArticleSchema
        title="Form Health Review (2026) — Physician-Supervised GLP-1 Weight Loss"
        description="Form Health pairs you with a physician and registered dietitian for GLP-1 weight management. Honest review with pricing, prescriber model, and who it is best for."
        url={`${BASE}/form-health-review`}
        datePublished={DATE}
        dateModified={DATE}
      />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Form Health Review", url: `${BASE}/form-health-review` },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/compounding-pharmacies" className="hover:text-foreground transition-colors">GLP-1 Providers</Link>
          <span>/</span>
          <span className="text-foreground">Form Health Review</span>
        </nav>

        {/* Medical disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 text-sm flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="text-amber-900">Medical Disclaimer:</strong>{" "}
            <span className="text-amber-800">
              This page is for informational purposes only. It is not medical advice. Talk to your doctor before starting, changing, or stopping any medication.
            </span>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm">
          <strong className="text-amber-900">Affiliate Disclosure:</strong>{" "}
          <span className="text-amber-800">
            This page contains affiliate links. We earn a commission when you sign up through our links. This does not change our rankings or assessments.
          </span>
        </div>

        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Provider Review</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Form Health Review (2026)
          </h1>

          <QuickVerdictBox
            winnerName="Form Health"
            winnerCategory="Physician-Led GLP-1 Program"
            dreamOutcomeChain="Get physician-prescribed GLP-1 medication paired with a registered dietitian who builds a real eating plan around your medication, so you lose weight AND keep it off because the habits are built alongside the drug, not as an afterthought."
            proofPoint="Physician prescribers. Registered dietitian included. Insurance navigation for branded GLP-1s."
            affiliateUrl="https://www.formhealth.co"
            ctaLabel="Learn More at Form Health"
            riskReversal="Physician review before any prescription."
          />
          {/* TODO: Verify Form Health affiliate program — may require direct outreach via Impact or CJ */}

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Form Health stands apart from most GLP-1 telehealth platforms in one way: every patient gets a registered dietitian alongside the physician.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Most telehealth GLP-1 providers focus on getting you a prescription fast and cheap. Form Health focuses on the full picture: the medication, the food plan, and the behavioral change that makes weight loss last.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            That changes the cost calculation. Form charges more. For some patients, it is worth it. For others, a budget provider makes more sense.
          </p>
        </header>

        <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6">

          <h2 className="font-heading text-2xl font-bold text-foreground">How Form Health works</h2>
          <p>
            You start with an intake questionnaire. A board-certified physician reviews your health history and determines whether a GLP-1 medication is appropriate. If you qualify, they write a prescription.
          </p>
          <p>
            At the same time, a registered dietitian (RD) is assigned to your program. The RD builds a nutrition plan that accounts for the appetite suppression effects of GLP-1 medication. They work with you on protein intake, meal timing, and the caloric adjustments that prevent muscle loss during rapid weight loss.
          </p>
          <p>
            Ongoing communication happens through the Form platform. Both physician and dietitian are available via messaging. Progress is tracked monthly. Medication dose is adjusted by the physician based on results and side effects.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">Medications offered</h2>
          <p>
            Form Health prescribes GLP-1 medications based on your situation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Branded Wegovy or Ozempic through insurance when covered</li>
            <li>Branded Zepbound or Mounjaro through insurance when covered</li>
            <li>Compounded semaglutide when branded is not covered or on shortage</li>
            <li>Compounded tirzepatide when legally available (subject to FDA shortage status)</li>
          </ul>
          <p>
            Form also prescribes older medications (metformin, topiramate, naltrexone/bupropion) when appropriate for patients who are not candidates for GLP-1s.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">Pricing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Cost component</th>
                  <th className="text-left p-3 font-semibold text-foreground">Monthly range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 text-foreground">Program fee (physician + dietitian)</td>
                  <td className="p-3 text-muted-foreground">~$149/mo</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 text-foreground">Compounded semaglutide (no insurance)</td>
                  <td className="p-3 text-muted-foreground">~$200-350/mo</td>
                </tr>
                <tr>
                  <td className="p-3 text-foreground">Branded Wegovy with insurance copay</td>
                  <td className="p-3 text-muted-foreground">$0-550/mo</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 text-foreground font-semibold">Total all-in (typical)</td>
                  <td className="p-3 text-muted-foreground font-semibold">$350-500+/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">Pros and cons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Pros</p>
              <ul className="space-y-2">
                {pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Cons</p>
              <ul className="space-y-2">
                {cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" aria-hidden="true" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">Who Form Health is best for</h2>
          <p>
            Form Health is the right choice if you want medical supervision and behavioral coaching in one place. It fits patients who:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Have tried GLP-1 medications before and struggled with the lifestyle component</li>
            <li>Have other health conditions (insulin resistance, PCOS, thyroid issues) where a dietitian adds real value</li>
            <li>Want to make sure they build habits that last beyond the medication</li>
            <li>Are not purely price-sensitive</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">Who should look elsewhere</h2>
          <p>
            If your primary goal is the lowest monthly cost for compounded semaglutide, Form Health is not your best option. Henry Meds starts around $197/month all-in. Hims starts at $99/month for low doses. Both skip the dietitian.
          </p>
          <p>
            If you want live video appointments rather than asynchronous messaging, Form's model may feel impersonal. Mochi Health offers more hands-on physician interaction for complex cases.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">State availability</h2>
          <p>
            Form Health operates in most US states. Check their website for the current list before signing up. Availability can change as they expand or as state telehealth regulations shift.
          </p>

        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="font-heading font-bold text-base text-foreground mb-3">Compare other GLP-1 providers</h2>
          <ul className="space-y-2">
            <li><Link href="/henry-meds-review" className="text-sm text-primary hover:underline">Henry Meds Review</Link></li>
            <li><Link href="/ro-body-review" className="text-sm text-primary hover:underline">Ro Body Review</Link></li>
            <li><Link href="/hims-weight-loss-review" className="text-sm text-primary hover:underline">Hims Weight Loss Review</Link></li>
            <li><Link href="/mochi-health-review" className="text-sm text-primary hover:underline">Mochi Health Review</Link></li>
            <li><Link href="/compounding-pharmacies" className="text-sm text-primary hover:underline">GLP-1 Compounding Pharmacy Directory</Link></li>
            <li><Link href="/glp1-telehealth-guide" className="text-sm text-primary hover:underline">GLP-1 Telehealth Programs Compared</Link></li>
          </ul>
        </section>

        <div className="mt-8 bg-muted/50 border border-border rounded-lg p-4 text-sm text-muted-foreground">
          <strong className="text-foreground">Talk to your doctor.</strong>{" "}
          The information on this page is educational. A licensed physician or nurse practitioner should evaluate your full medical history before any GLP-1 prescription is written.
        </div>
      </div>
    </>
  );
}
