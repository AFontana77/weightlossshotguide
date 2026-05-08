import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import {
  ArticleSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Mounjaro (Tirzepatide) for Diabetes: Dosing, Weight Loss, Cost & Savings Card (2026)",
  description:
    "Mounjaro is Lilly's tirzepatide for type 2 diabetes. FDA approved May 2022. Covers SURPASS trial results, dosing schedule, $25/month savings card, and how it compares to Ozempic.",
  alternates: { canonical: "https://www.weightlossshotguide.com/mounjaro" },
};

const DATE = "2026-05-08";
const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Is Mounjaro the same as Zepbound?",
    answer:
      "Same drug (tirzepatide made by Eli Lilly), different FDA indication. Mounjaro is approved for type 2 diabetes. Zepbound is approved for weight management. The dosing schedule is identical. Insurance coverage differs significantly. Mounjaro typically requires a diabetes diagnosis. Zepbound is covered for obesity and weight-related conditions.",
  },
  {
    question: "How much does Mounjaro cost?",
    answer:
      "With insurance and the Lilly savings card, eligible patients with commercial insurance and a type 2 diabetes diagnosis pay as low as $25/month. Without insurance or for off-label use, the list price runs approximately $1,060/month. Compounded tirzepatide from telehealth providers costs $200 to $600/month depending on dose.",
  },
  {
    question: "Does Mounjaro cause weight loss?",
    answer:
      "Yes. Weight loss is a documented effect in its diabetes trials and the primary reason it is used off-label. SURPASS clinical trials showed an average of 17.8 to 25.2 pounds lost depending on dose at 40 weeks. Zepbound, the same drug approved specifically for weight loss, showed 20.9% average body weight loss in the SURMOUNT-1 trial.",
  },
  {
    question: "What is the Mounjaro savings card?",
    answer:
      "Eli Lilly offers a co-pay savings card that caps monthly costs at $25 for eligible patients with commercial insurance and a type 2 diabetes diagnosis. It is valid for up to 1 year. The savings card is not available for off-label weight loss use. It is also not available to Medicare, Medicaid, or other government-insured patients.",
  },
  {
    question: "How does Mounjaro compare to Ozempic for weight loss?",
    answer:
      "Both cause weight loss, but Mounjaro's dual GIP and GLP-1 mechanism appears more potent. Clinical data shows Mounjaro achieves greater average weight loss than semaglutide-based drugs including Ozempic in head-to-head comparisons. The SURMOUNT-5 trial, which compared the weight loss versions of these drugs, showed 20.2% average loss on tirzepatide vs 13.7% on semaglutide.",
  },
];

export default function MounjaroPage() {
  return (
    <>
      <ArticleSchema
        title="Mounjaro (Tirzepatide) for Diabetes: Dosing, Weight Loss, Cost & Savings Card (2026)"
        description="Mounjaro is Lilly's tirzepatide for type 2 diabetes. FDA approved May 2022. Covers SURPASS trial results, dosing schedule, $25/month savings card, and how it compares to Ozempic."
        url={`${BASE}/mounjaro`}
        datePublished={DATE}
        dateModified={DATE}
      />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Mounjaro", url: `${BASE}/mounjaro` },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Mounjaro</span>
        </nav>

        {/* Medical disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-sm flex items-start gap-3">
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
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Mounjaro: Tirzepatide for Type 2 Diabetes, Dosing, Trial Results, and What It Costs
          </h1>
          <QuickVerdictBox
            winnerName="SHED MD"
            winnerCategory="GLP-1 Telehealth Program"
            dreamOutcomeChain="Connect with a physician who can evaluate whether Mounjaro is the right medication for your situation, so the drug that achieved 2.07% HbA1c reduction and 25 pounds average weight loss at 15mg has a chance to work for you, without the months-long wait for an in-person endocrinology appointment."
            proofPoint="Licensed physicians. GLP-1 and Mounjaro evaluations. Starting at $149/mo."
            affiliateUrl="https://www.shedmd.com"
            ctaLabel="Get Evaluated by SHED MD"
            riskReversal="No long-term contract. Cancel any time."
          />
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Mounjaro is a weekly injection for adults with type 2 diabetes. The FDA approved it on May 13, 2022. The active ingredient is tirzepatide. It is the same molecule as Zepbound. The difference is the FDA indication. Mounjaro is for blood sugar control. Zepbound is for weight loss.
          </p>
        </header>

        {/* Main content */}
        <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6">

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">What Is Mounjaro?</h2>
            <p>
              Mounjaro is a prescription medication made by Eli Lilly. It lowers blood sugar in adults with type 2 diabetes. It is used along with diet and exercise, not as a replacement for them.
            </p>
            <p className="mt-3">
              The drug targets two hormone receptors at once. GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 (glucagon-like peptide-1). Both are gut hormones that regulate blood sugar and appetite. Mounjaro was the first FDA-approved drug to activate both at the same time.
            </p>
            <p className="mt-3">
              Significant weight loss is a well-documented side effect. This is why Mounjaro is frequently prescribed off-label for people with obesity who do not have type 2 diabetes. Insurance rarely covers this use. For weight loss with FDA approval, the same molecule is sold as Zepbound.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">How Mounjaro Works</h2>
            <p>
              When you eat, your gut releases GIP and GLP-1. These hormones signal the pancreas to release insulin. Insulin moves sugar from the blood into cells.
            </p>
            <p className="mt-3">
              Mounjaro mimics both hormones. It increases insulin release when blood sugar is high. It suppresses glucagon, the hormone that raises blood sugar between meals. It also slows how fast food leaves the stomach. This smooths out blood sugar spikes after meals.
            </p>
            <p className="mt-3">
              The GLP-1 component also reduces appetite. Patients feel full faster and eat less. This is why weight loss is a consistent finding in every Mounjaro clinical trial.
            </p>
            <p className="mt-3">
              Mounjaro is injected once a week. The half-life is approximately 5 days. You can inject into the abdomen, thigh, or upper arm.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Mounjaro Dosing Schedule</h2>
            <p className="mb-4">
              The titration schedule is the same as Zepbound. You start at the lowest dose and move up every 4 weeks as tolerated. Slower titration means fewer GI side effects.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Phase</th>
                    <th className="text-left p-3 font-semibold text-foreground">Dose</th>
                    <th className="text-left p-3 font-semibold text-foreground">Duration</th>
                    <th className="text-left p-3 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 text-foreground font-medium">Start</td>
                    <td className="p-3">2.5 mg/week</td>
                    <td className="p-3">4 weeks</td>
                    <td className="p-3">Initiation only. Not a therapeutic dose.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 text-foreground font-medium">Step 2</td>
                    <td className="p-3">5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">First maintenance dose.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground font-medium">Step 3</td>
                    <td className="p-3">7.5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Optional. Move up only if current dose is well tolerated.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 text-foreground font-medium">Step 4</td>
                    <td className="p-3">10 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Used in SURPASS trials for HbA1c reduction data.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground font-medium">Step 5</td>
                    <td className="p-3">12.5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Optional. Use only if lower doses are not meeting goals.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 text-foreground font-medium">Max</td>
                    <td className="p-3 font-semibold text-foreground">15 mg/week</td>
                    <td className="p-3">Ongoing</td>
                    <td className="p-3">Maximum approved dose. Best HbA1c and weight loss results.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">SURPASS Clinical Trial Results</h2>
            <p>
              The SURPASS program was a series of phase 3 clinical trials for Mounjaro. It tested the drug against placebo and against other diabetes medications.
            </p>
            <p className="mt-3">
              For blood sugar control, Mounjaro reduced HbA1c by an average of 1.87% at the 10mg dose and 2.07% at the 15mg dose. A reduction of 1% or more is considered clinically significant. These results beat every comparison drug in the trials.
            </p>
            <p className="mt-3">
              For weight loss, the results were equally strong. At 40 weeks, patients lost an average of 17.8 pounds on the 5mg dose, 21.1 pounds on the 10mg dose, and 25.2 pounds on the 15mg dose.
            </p>
            <p className="mt-3">
              Head-to-head comparisons showed Mounjaro outperformed Trulicity (dulaglutide), Ozempic (semaglutide 1mg), and Bydureon (exenatide) on both HbA1c reduction and weight loss in the SURPASS trials.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Mounjaro vs. Ozempic</h2>
            <p>
              Ozempic contains semaglutide. It targets GLP-1 receptors only. Mounjaro contains tirzepatide. It targets both GIP and GLP-1. The dual mechanism produces stronger results in clinical data.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Factor</th>
                    <th className="text-left p-3 font-semibold text-foreground">Mounjaro</th>
                    <th className="text-left p-3 font-semibold text-foreground">Ozempic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium text-foreground">Active ingredient</td>
                    <td className="p-3">Tirzepatide</td>
                    <td className="p-3">Semaglutide</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">Mechanism</td>
                    <td className="p-3">GIP + GLP-1 dual agonist</td>
                    <td className="p-3">GLP-1 agonist only</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">HbA1c reduction</td>
                    <td className="p-3 font-semibold text-foreground">Up to 2.07%</td>
                    <td className="p-3">Up to 1.45%</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">Avg weight loss (40 wks)</td>
                    <td className="p-3 font-semibold text-foreground">Up to 25.2 lbs</td>
                    <td className="p-3">~13 lbs</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">Manufacturer</td>
                    <td className="p-3">Eli Lilly</td>
                    <td className="p-3">Novo Nordisk</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">List price (no insurance)</td>
                    <td className="p-3">~$1,060/mo</td>
                    <td className="p-3">~$935/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Side Effects</h2>
            <p>
              Mounjaro's side effect profile matches Zepbound. GI effects are the most common. They peak during dose titration and usually ease with time.
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium mt-0.5">Nausea:</span>
                <span>Most common. Worst when starting a new dose level. Usually improves within 1 to 2 weeks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium mt-0.5">Diarrhea:</span>
                <span>Second most common. Managed with hydration and smaller meals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium mt-0.5">Vomiting:</span>
                <span>Less common than nausea. More likely at higher doses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium mt-0.5">Constipation:</span>
                <span>Slowed digestion can cause irregularity. Fiber and fluids help.</span>
              </li>
            </ul>
            <p className="mt-4">
              Mounjaro also carries the same black box warning as Zepbound. It is contraindicated in patients with personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia type 2.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Cost and the Lilly Savings Card</h2>
            <p>
              Without insurance, Mounjaro costs approximately $1,060/month. This is the list price for a 4-week supply.
            </p>
            <p className="mt-3">
              For patients with type 2 diabetes and commercial insurance, Eli Lilly offers a savings card that caps the monthly cost at $25 for the first year. This is one of the most generous savings programs in the drug category.
            </p>
            <p className="mt-3">
              The savings card does not apply to off-label weight loss use. It is also not valid for Medicare, Medicaid, or other government-sponsored insurance programs.
            </p>
            <p className="mt-3">
              Most commercial insurance plans cover Mounjaro for type 2 diabetes with prior authorization. Your doctor must document your diagnosis and that other treatments have been tried or are not appropriate.
            </p>
            <p className="mt-3">
              For off-label weight loss use without coverage, compounded tirzepatide from a licensed telehealth pharmacy runs $200 to $600/month. Your provider can discuss whether this is an appropriate option.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Mounjaro vs. Zepbound: Which Should You Ask About?</h2>
            <p>
              If you have type 2 diabetes and want the $25/month savings card, ask about Mounjaro. If you have obesity but not diabetes, Zepbound is the FDA-approved option for your indication and may be covered differently.
            </p>
            <p className="mt-3">
              The molecule is the same. The titration schedule is the same. The side effects are the same. The difference that matters is insurance coverage. Your prescriber and your insurance plan determine which version makes financial sense.
            </p>
            <div className="mt-4">
              <a
                href="https://www.shedmd.com"
                target="_blank"
                rel="nofollow noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Evaluated by SHED MD
              </a>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">How to Get a Mounjaro Prescription</h2>
            <p>
              Mounjaro requires a prescription. It is not available over the counter.
            </p>
            <p className="mt-3">
              For type 2 diabetes, your primary care doctor, endocrinologist, or a telehealth provider can prescribe it. You will need to document your diabetes diagnosis and any prior medications.
            </p>
            <p className="mt-3">
              For off-label weight loss, telehealth platforms can evaluate you and prescribe tirzepatide. Some prescribe branded Mounjaro. Many prescribe compounded tirzepatide as a lower-cost alternative when supply or coverage is an issue.
            </p>
            <p className="mt-3">
              SHED MD evaluates patients for GLP-1 medications including tirzepatide. They operate in most US states and include physician oversight in their program.
            </p>
          </section>

        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Common Questions</h2>
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

        {/* Related guides */}
        <section className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="font-heading font-bold text-base text-foreground mb-3">Related guides</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/glp1-telehealth-guide" className="text-sm text-primary hover:underline">
                GLP-1 Telehealth Programs Compared
              </Link>
            </li>
            <li>
              <Link href="/zepbound" className="text-sm text-primary hover:underline">
                Zepbound (Tirzepatide for Weight Loss): Full Guide
              </Link>
            </li>
            <li>
              <Link href="/tirzepatide" className="text-sm text-primary hover:underline">
                Tirzepatide Explained: Branded vs Compounded
              </Link>
            </li>
            <li>
              <Link href="/best-supplements-ozempic" className="text-sm text-primary hover:underline">
                Best Supplements to Take on GLP-1 Medications
              </Link>
            </li>
            <li>
              <Link href="/best-protein-powder-glp1" className="text-sm text-primary hover:underline">
                Best Protein Powders for GLP-1 Users
              </Link>
            </li>
          </ul>
        </section>

        {/* Talk to your doctor closer */}
        <div className="mt-8 bg-muted/50 border border-border rounded-lg p-4 text-sm text-muted-foreground">
          <strong className="text-foreground">Talk to your doctor.</strong> The information on this page is educational. A licensed physician or nurse practitioner should evaluate your full medical history before any GLP-1 prescription is written.
        </div>
      </div>
    </>
  );
}
