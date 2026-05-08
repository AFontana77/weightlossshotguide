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
  title: "Zepbound (Tirzepatide): Dosing, Results, Cost & How to Get It (2026)",
  description:
    "Zepbound is Lilly's tirzepatide for weight loss. FDA approved Nov 2023. Learn the full dosing schedule, SURMOUNT trial results, cost with and without insurance, and how to get a prescription.",
  alternates: { canonical: "https://www.weightlossshotguide.com/zepbound" },
};

const DATE = "2026-05-08";
const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "How much does Zepbound cost per month?",
    answer:
      "With insurance and the Lilly savings card, Zepbound costs as low as $550/month for eligible patients with commercial insurance. Without insurance, it runs approximately $1,060/month for a single auto-injector pen. Compounded tirzepatide from telehealth providers costs $200 to $600/month depending on dose and provider.",
  },
  {
    question: "How long does it take Zepbound to work?",
    answer:
      "Most people notice reduced appetite in the first 1 to 2 weeks. Measurable weight loss shows up by week 4. The SURMOUNT-1 trial ran 72 weeks to reach 20.9% average weight loss at the 15mg dose. Expect gradual, consistent progress rather than rapid early results.",
  },
  {
    question: "Is Zepbound better than Wegovy?",
    answer:
      "In the SURMOUNT-5 head-to-head trial, Zepbound outperformed Wegovy. Average weight loss was 20.2% on Zepbound vs 13.7% on Wegovy. And 47% of Zepbound patients lost more than 25% of body weight, compared to 27% on Wegovy.",
  },
  {
    question: "What is the difference between Zepbound and Mounjaro?",
    answer:
      "Same drug (tirzepatide), different FDA approval. Mounjaro is approved for type 2 diabetes. Zepbound is approved for chronic weight management in adults with obesity or overweight with a weight-related health condition. Insurance coverage differs. Zepbound is more likely to be covered for weight loss. Mounjaro typically requires a diabetes diagnosis.",
  },
  {
    question: "Can I get Zepbound online?",
    answer:
      "Yes, through licensed telehealth providers. A physician or nurse practitioner must evaluate you and write a prescription. Platforms like SHED MD operate in most US states. Some prescribe branded Zepbound. Many prescribe compounded tirzepatide as a lower-cost alternative when the branded drug is on shortage.",
  },
];

export default function ZepboundPage() {
  return (
    <>
      <ArticleSchema
        title="Zepbound (Tirzepatide): Dosing, Results, Cost & How to Get It (2026)"
        description="Zepbound is Lilly's tirzepatide for weight loss. FDA approved Nov 2023. Learn the full dosing schedule, SURMOUNT trial results, cost with and without insurance, and how to get a prescription."
        url={`${BASE}/zepbound`}
        datePublished={DATE}
        dateModified={DATE}
      />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Zepbound", url: `${BASE}/zepbound` },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Zepbound</span>
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
            Zepbound: What It Is, How It Works, and What the Trials Actually Show
          </h1>
          <QuickVerdictBox
            winnerName="SHED MD"
            winnerCategory="GLP-1 Telehealth Program"
            dreamOutcomeChain="Find out if you qualify for Zepbound this week through a licensed physician, so you can start the titration schedule that led to 20.9% average weight loss in the SURMOUNT-1 trial, so you stop waiting for the right time and start the program that has the best head-to-head data against Wegovy."
            proofPoint="Real physician review. GLP-1 prescriptions in most US states. Starting at $149/mo."
            affiliateUrl="https://www.shedmd.com"
            ctaLabel="Check Eligibility at SHED MD"
            riskReversal="No long-term contract. Cancel any time."
          />
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Zepbound is a weekly injection made by Eli Lilly. The FDA approved it for weight management on November 8, 2023. The active ingredient is tirzepatide. It is the same molecule as Mounjaro but approved for a different purpose.
          </p>
        </header>

        {/* Main content */}
        <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6">

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">What Is Zepbound?</h2>
            <p>
              Zepbound is a prescription medication for adults with obesity or overweight with at least one weight-related health condition. That includes high blood pressure, high cholesterol, type 2 diabetes, sleep apnea, or heart disease. The FDA approved it specifically for chronic weight management.
            </p>
            <p className="mt-3">
              The drug is a dual GIP and GLP-1 receptor agonist. GIP stands for glucose-dependent insulinotropic polypeptide. GLP-1 stands for glucagon-like peptide-1. Both are natural hormones your gut releases after eating. Zepbound mimics both at the same time.
            </p>
            <p className="mt-3">
              This dual action is what separates Zepbound from drugs like Wegovy or Ozempic. Those drugs target only GLP-1. Zepbound hits both receptors. Clinical data shows this combination produces greater weight loss on average.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">How Zepbound Works</h2>
            <p>
              When tirzepatide activates GLP-1 receptors, it slows digestion and reduces appetite. You feel full faster. You stay full longer. Calorie intake drops without constant willpower.
            </p>
            <p className="mt-3">
              GIP activation adds two effects. First, it boosts insulin release after meals. Blood sugar rises less after eating. Second, it suppresses glucagon, the hormone that raises blood sugar between meals. Together, the two mechanisms produce a stronger metabolic effect than either alone.
            </p>
            <p className="mt-3">
              The drug is injected once a week. It has a half-life of about 5 days. You inject it into the abdomen, thigh, or upper arm. Lilly provides single-dose auto-injector pens at each dose level.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Zepbound Dosing Schedule</h2>
            <p className="mb-4">
              The standard titration schedule starts low and moves up every 4 weeks. Slower titration means fewer side effects. Your doctor may adjust timing based on how you tolerate each dose.
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
                    <td className="p-3">Initiation dose only. Not for long-term use at this dose.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 text-foreground font-medium">Step 2</td>
                    <td className="p-3">5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">First maintenance dose. Some stay here if well tolerated.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground font-medium">Step 3</td>
                    <td className="p-3">7.5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Optional. Titrate up only if tolerating current dose.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 text-foreground font-medium">Step 4</td>
                    <td className="p-3">10 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Optional. Common stopping point for many patients.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground font-medium">Step 5</td>
                    <td className="p-3">12.5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Optional. Approach with caution if side effects increase.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 text-foreground font-medium">Max</td>
                    <td className="p-3 font-semibold text-foreground">15 mg/week</td>
                    <td className="p-3">Ongoing</td>
                    <td className="p-3">Maximum approved dose. Used in SURMOUNT-1 for peak results.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Clinical Trial Results</h2>
            <p>
              The SURMOUNT-1 trial enrolled 2,539 adults with obesity or overweight. Participants were not diabetic. The trial ran 72 weeks.
            </p>
            <p className="mt-3">
              At the 15mg dose, participants lost an average of 20.9% of their body weight. The placebo group lost 3.1%. That is a 17.8 percentage point difference. For a 250-pound person, 20.9% is about 52 pounds.
            </p>
            <p className="mt-3">
              The SURMOUNT-5 trial compared Zepbound directly to Wegovy (semaglutide 2.4mg). This was the first major head-to-head trial between the two drugs.
            </p>
            <p className="mt-3">
              Results: Zepbound produced 20.2% average weight loss vs 13.7% on Wegovy over 72 weeks. And 47% of Zepbound patients lost more than 25% of their body weight. Only 27% of Wegovy patients reached that mark. Zepbound won on every primary and secondary endpoint.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Side Effects</h2>
            <p>
              The most common side effects are gastrointestinal. They are most intense during dose titration and usually improve as your body adjusts.
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium mt-0.5">Nausea:</span>
                <span>Reported in about 30% of patients. Usually worst in the first few weeks of a new dose.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium mt-0.5">Diarrhea:</span>
                <span>About 23% of patients. Often early in titration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium mt-0.5">Vomiting:</span>
                <span>About 14% of patients. Less common than nausea.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-medium mt-0.5">Constipation:</span>
                <span>About 11% of patients. Slowed digestion affects bowel regularity.</span>
              </li>
            </ul>
            <p className="mt-4">
              Most side effects are manageable. Eating smaller meals, avoiding high-fat foods, and staying hydrated all help. If symptoms are severe, your doctor may slow the titration schedule.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Black Box Warning</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
              <p className="font-semibold text-red-900 mb-2">Important Safety Warning</p>
              <p className="text-red-800">
                Zepbound carries a black box warning for thyroid tumors. In animal studies, tirzepatide caused thyroid C-cell tumors. It is unknown whether this applies to humans. Zepbound is contraindicated in patients with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia type 2 (MEN2). Tell your doctor your full family history before starting.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Cost and Insurance Coverage</h2>
            <p>
              Zepbound costs approximately $1,060/month without insurance. That is the list price for a 4-week supply of the auto-injector pens.
            </p>
            <p className="mt-3">
              Many commercial insurance plans cover Zepbound with prior authorization. Your doctor must document your BMI and any qualifying weight-related conditions. Approval rates vary by plan.
            </p>
            <p className="mt-3">
              Eli Lilly offers a savings card for eligible patients. With commercial insurance and the savings card, out-of-pocket costs can be as low as $550/month. The savings card is not available to Medicare, Medicaid, or government-insured patients.
            </p>
            <p className="mt-3">
              Compounded tirzepatide from telehealth providers runs $200 to $600/month depending on dose. This is the most common route for people without insurance coverage or on high-deductible plans.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">How to Get a Zepbound Prescription</h2>
            <p>
              Zepbound requires a prescription from a licensed physician, nurse practitioner, or physician assistant. You cannot buy it over the counter.
            </p>
            <p className="mt-3">
              Your prescriber will check your BMI, weight-related health conditions, and medication history. They will also review the thyroid cancer contraindication and any personal or family history.
            </p>
            <p className="mt-3">
              Telehealth platforms can prescribe Zepbound or compounded tirzepatide. You complete an intake form, submit lab work if required, and connect with a licensed provider. Many telehealth platforms prescribe in most US states and ship medication to your door.
            </p>
            <p className="mt-3">
              SHED MD is the top-rated telehealth program on this site. Real physicians review every case. They prescribe in most US states and include ongoing monitoring with your membership.
            </p>
            <div className="mt-4">
              <a
                href="https://www.shedmd.com"
                target="_blank"
                rel="nofollow noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Check Eligibility at SHED MD
              </a>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Zepbound vs. Wegovy: A Quick Summary</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Factor</th>
                    <th className="text-left p-3 font-semibold text-foreground">Zepbound</th>
                    <th className="text-left p-3 font-semibold text-foreground">Wegovy</th>
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
                    <td className="p-3 font-medium text-foreground">Avg weight loss (trial)</td>
                    <td className="p-3 font-semibold text-foreground">20.9% (SURMOUNT-1)</td>
                    <td className="p-3">15% (STEP-1)</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">Head-to-head (SURMOUNT-5)</td>
                    <td className="p-3 font-semibold text-foreground">20.2%</td>
                    <td className="p-3">13.7%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">List price (no insurance)</td>
                    <td className="p-3">~$1,060/mo</td>
                    <td className="p-3">~$1,350/mo</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">Manufacturer</td>
                    <td className="p-3">Eli Lilly</td>
                    <td className="p-3">Novo Nordisk</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              <Link href="/mounjaro" className="text-sm text-primary hover:underline">
                Mounjaro (Tirzepatide for Diabetes): Full Guide
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
