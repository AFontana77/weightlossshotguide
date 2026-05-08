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
  title: "Tirzepatide: How It Works, Branded vs Compounded, Dosing & Legal Status (2026)",
  description:
    "Tirzepatide is the active ingredient in Mounjaro and Zepbound. Learn how it works, how it differs from semaglutide, current compounding legal status, and how to access it.",
  alternates: { canonical: "https://www.weightlossshotguide.com/tirzepatide" },
};

const DATE = "2026-05-08";
const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Is tirzepatide the same as semaglutide?",
    answer:
      "No. Both are injectable drugs used for weight loss and diabetes, but they work differently. Semaglutide (sold as Ozempic and Wegovy) activates only GLP-1 receptors. Tirzepatide (sold as Mounjaro and Zepbound) activates both GIP and GLP-1 receptors. Clinical data shows tirzepatide achieves greater average weight loss.",
  },
  {
    question: "Is compounded tirzepatide safe?",
    answer:
      "Compounded tirzepatide from an accredited 503B outsourcing facility or licensed 503A pharmacy can be effective. Quality control varies by pharmacy. Look for PCAB accreditation or FDA-registered outsourcing facility status. Note that the active ingredient form in compounded versions (such as tirzepatide diacetate) may differ from the base form used in Mounjaro and Zepbound. Ask your provider which pharmacy they use and how it is tested.",
  },
  {
    question: "Is compounded tirzepatide still legal?",
    answer:
      "It depends on current FDA shortage status. When tirzepatide was on the FDA drug shortage list, 503A pharmacies could legally compound it. The FDA declared the tirzepatide shortage resolved in late 2024 and early 2025. After that declaration, 503A compounding became restricted for most cases. 503B outsourcing facilities operate under different federal rules and may continue compounding under certain conditions. Always check with your telehealth provider and the FDA shortage database for the most current status.",
  },
  {
    question: "How long does tirzepatide take to work?",
    answer:
      "Appetite reduction starts within 1 to 2 weeks for most people. Measurable weight loss typically shows by week 4. The full effect builds over months of consistent use. Clinical trials in the SURMOUNT program ran 40 to 72 weeks to capture maximum weight loss results.",
  },
  {
    question: "What is the maximum dose of tirzepatide?",
    answer:
      "15mg once weekly. Most people titrate up over 20 or more weeks, starting at 2.5mg and adding 2.5mg every 4 weeks as tolerated. Some patients reach their goals before the maximum dose and stay at a lower maintenance dose.",
  },
];

export default function TirzepatidePage() {
  return (
    <>
      <ArticleSchema
        title="Tirzepatide: How It Works, Branded vs Compounded, Dosing & Legal Status (2026)"
        description="Tirzepatide is the active ingredient in Mounjaro and Zepbound. Learn how it works, how it differs from semaglutide, current compounding legal status, and how to access it."
        url={`${BASE}/tirzepatide`}
        datePublished={DATE}
        dateModified={DATE}
      />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Tirzepatide", url: `${BASE}/tirzepatide` },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Tirzepatide</span>
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
            Tirzepatide: The Active Ingredient in Mounjaro and Zepbound, Explained
          </h1>
          <QuickVerdictBox
            winnerName="SHED MD"
            winnerCategory="Tirzepatide Telehealth Provider"
            dreamOutcomeChain="Work with a licensed physician to find out if tirzepatide is appropriate for your goals, so you access the drug with the strongest head-to-head weight loss data in the GLP-1 class, so the decision about branded vs compounded is made by a real doctor who knows current shortage status."
            proofPoint="Licensed physicians in most US states. Both branded and compounded options discussed. Starting at $149/mo."
            affiliateUrl="https://www.shedmd.com"
            ctaLabel="Get Evaluated Today"
            riskReversal="No long-term contract. Cancel any time."
          />
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Tirzepatide is a molecule, not a brand name. Eli Lilly sells it as Mounjaro for type 2 diabetes and as Zepbound for weight management. The same active ingredient powers both drugs. Compounding pharmacies also make tirzepatide when the branded versions are on the FDA shortage list, though legal status has changed.
          </p>
        </header>

        {/* Main content */}
        <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6">

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">What Is Tirzepatide?</h2>
            <p>
              Tirzepatide is a synthetic peptide drug. It was developed by Eli Lilly to treat type 2 diabetes. It was the first FDA-approved drug to activate both GIP and GLP-1 receptors simultaneously.
            </p>
            <p className="mt-3">
              GIP stands for glucose-dependent insulinotropic polypeptide. GLP-1 stands for glucagon-like peptide-1. Both are hormones your small intestine releases after a meal. They signal the pancreas to produce insulin and tell the brain you are full. Tirzepatide mimics both of these signals at once.
            </p>
            <p className="mt-3">
              The drug is injected once a week. It has a half-life of approximately 5 days. This means it stays active in your body between weekly injections.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">How Tirzepatide Works: GIP and GLP-1</h2>
            <p>
              GLP-1 was already well understood before tirzepatide. Drugs like Ozempic (semaglutide) had been activating it for years. GLP-1 slows gastric emptying. It reduces appetite. It signals the pancreas to release insulin when blood sugar rises.
            </p>
            <p className="mt-3">
              GIP adds more to the picture. It enhances insulin secretion after meals, just like GLP-1 does. It also suppresses glucagon, the hormone that raises blood sugar between meals. In fat tissue, GIP may improve how the body stores and uses energy. The combined effect of activating both receptors appears to be greater than activating either one alone.
            </p>
            <p className="mt-3">
              This explains why clinical data consistently shows tirzepatide producing more weight loss than semaglutide-only drugs, even at equivalent doses.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Tirzepatide Dosing Schedule</h2>
            <p className="mb-4">
              Both Mounjaro and Zepbound use the same titration schedule. You start at the lowest dose. You move up every 4 weeks if the current dose is tolerated. Maximum dose is 15mg once weekly.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Dose</th>
                    <th className="text-left p-3 font-semibold text-foreground">Duration</th>
                    <th className="text-left p-3 font-semibold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium text-foreground">2.5 mg/week</td>
                    <td className="p-3">4 weeks</td>
                    <td className="p-3">Initiation. Reduces GI side effects on entry.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">First therapeutic dose. Many patients see meaningful results here.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">7.5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Optional increase. Move up only if tolerating well.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">10 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Mid-range maintenance dose used in SURPASS trials.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">12.5 mg/week</td>
                    <td className="p-3">4+ weeks</td>
                    <td className="p-3">Optional. Evaluate tolerability carefully.</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground font-semibold">15 mg/week</td>
                    <td className="p-3">Ongoing</td>
                    <td className="p-3">Maximum dose. Highest weight loss results in SURMOUNT-1.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Clinical Trial Summary</h2>
            <p>
              Two major clinical programs studied tirzepatide. SURPASS studied it in type 2 diabetes. SURMOUNT studied it for weight loss.
            </p>
            <p className="mt-3">
              SURPASS results: tirzepatide reduced HbA1c by up to 2.07% at the 15mg dose. Patients also lost 17.8 to 25.2 pounds on average, depending on dose, at 40 weeks. These results beat all comparison drugs including semaglutide and dulaglutide.
            </p>
            <p className="mt-3">
              SURMOUNT-1 results: in adults with obesity and no diabetes, the 15mg dose produced an average of 20.9% body weight reduction at 72 weeks. The placebo group lost 3.1%. The highest responder group saw losses above 25% of body weight.
            </p>
            <p className="mt-3">
              SURMOUNT-5 was the head-to-head trial comparing tirzepatide to semaglutide for weight loss. Tirzepatide: 20.2% average weight loss. Semaglutide: 13.7%. Tirzepatide won on every endpoint measured.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Tirzepatide vs. Semaglutide: Key Differences</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Factor</th>
                    <th className="text-left p-3 font-semibold text-foreground">Tirzepatide</th>
                    <th className="text-left p-3 font-semibold text-foreground">Semaglutide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium text-foreground">Brand names</td>
                    <td className="p-3">Mounjaro, Zepbound</td>
                    <td className="p-3">Ozempic, Wegovy, Rybelsus</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">Mechanism</td>
                    <td className="p-3">GIP + GLP-1 dual agonist</td>
                    <td className="p-3">GLP-1 agonist only</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">Half-life</td>
                    <td className="p-3">~5 days</td>
                    <td className="p-3">~7 days</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 font-medium text-foreground">Max avg weight loss</td>
                    <td className="p-3 font-semibold text-foreground">20.9% (SURMOUNT-1)</td>
                    <td className="p-3">15% (STEP-1)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">Head-to-head winner</td>
                    <td className="p-3 font-semibold text-foreground">Yes (SURMOUNT-5)</td>
                    <td className="p-3">Lost SURMOUNT-5</td>
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

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Branded Tirzepatide vs. Compounded Tirzepatide</h2>
            <p>
              Branded tirzepatide is sold as Mounjaro (for diabetes) and Zepbound (for weight loss). Both are manufactured by Eli Lilly and FDA-approved. These use tirzepatide base as the active ingredient.
            </p>
            <p className="mt-3">
              Compounded tirzepatide is made by compounding pharmacies. These pharmacies use tirzepatide salt forms, most commonly tirzepatide diacetate, rather than the base form. This is a different chemical form. The FDA has noted this distinction. Some pharmacies argue the clinical activity is equivalent. The FDA has not agreed with that position.
            </p>
            <p className="mt-3">
              Compounded versions are not FDA-approved. They are also not counterfeit or inherently unsafe. Quality compounding pharmacies run batch testing and use pharmaceutical-grade ingredients. The risk is variability, not automatically dangerous product.
            </p>
            <p className="mt-3">
              When choosing a compounding pharmacy, look for PCAB (Pharmacy Compounding Accreditation Board) accreditation or FDA-registered outsourcing facility status (503B). These are the two highest standards in compounding quality.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Compounded Tirzepatide: Current Legal Status</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
              <p className="font-semibold text-amber-900 mb-2">Check Current Status Before Ordering</p>
              <p className="text-amber-800">
                Always confirm the current FDA shortage status with your telehealth provider and pharmacy before ordering compounded tirzepatide. The FDA shortage list changes. Legal access to compounded versions depends entirely on whether branded tirzepatide is currently listed as in shortage.
              </p>
            </div>
            <p className="mt-4">
              Here is how the compounding rules work:
            </p>
            <p className="mt-3">
              When the FDA places a drug on its drug shortage list, 503A compounding pharmacies (the standard retail compounding pharmacies) can legally prepare compounded versions for individual patients. This is because FDA shortage status creates a specific legal carve-out.
            </p>
            <p className="mt-3">
              The FDA declared the tirzepatide shortage resolved in late 2024 and early 2025. When that happened, 503A pharmacies lost their legal basis to compound tirzepatide for most use cases. Some 503A pharmacies stopped. Others claimed exemptions. This created confusion in the market.
            </p>
            <p className="mt-3">
              503B outsourcing facilities operate under different federal rules. They can compound drugs for office stock rather than individual prescriptions. Their legal authority to compound tirzepatide post-shortage is a separate legal question from 503A pharmacies. Some 503B facilities continued compounding under their own legal interpretation.
            </p>
            <p className="mt-3">
              The situation has been contested. Legal challenges and FDA enforcement actions have continued since the shortage ended. Before ordering, ask your telehealth provider specifically whether the pharmacy they use is a 503A or 503B facility and what their legal basis is for compounding tirzepatide in the current environment.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">How to Access Tirzepatide</h2>
            <p>
              Tirzepatide requires a prescription. It is not available over the counter in any form, branded or compounded.
            </p>
            <p className="mt-3">
              For branded Mounjaro or Zepbound, you need a prescription from a licensed physician, NP, or PA. This can happen through your primary care doctor, a specialist, or a telehealth provider. Insurance coverage depends on your diagnosis and plan.
            </p>
            <p className="mt-3">
              For compounded tirzepatide, most patients go through telehealth platforms. The platform connects you with a licensed prescriber who evaluates your case, writes a prescription, and works with a compounding pharmacy to fill it. Many telehealth platforms handle shipping directly to your door.
            </p>
            <p className="mt-3">
              SHED MD is the highest-rated telehealth program on this site. They use licensed physicians, operate in most US states, and discuss both branded and compounded options based on your situation and current pharmacy availability.
            </p>
            <div className="mt-4">
              <a
                href="https://www.shedmd.com"
                target="_blank"
                rel="nofollow noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Evaluated Today
              </a>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Side Effects and Safety</h2>
            <p>
              Tirzepatide's side effect profile is consistent across both Mounjaro and Zepbound. The most common effects are gastrointestinal: nausea, diarrhea, vomiting, and constipation. These are most intense during dose titration and usually ease with time.
            </p>
            <p className="mt-3">
              Both branded tirzepatide drugs carry a black box warning for thyroid C-cell tumors observed in animal studies. The drug is contraindicated in patients with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia type 2 (MEN2). Tell your doctor your full family history before starting.
            </p>
            <p className="mt-3">
              Other reported side effects include injection site reactions, decreased appetite (expected), fatigue, and in rare cases, pancreatitis or gallbladder issues. Your prescriber should review these risks with you before starting.
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
              <Link href="/zepbound" className="text-sm text-primary hover:underline">
                Zepbound (Tirzepatide for Weight Loss): Full Guide
              </Link>
            </li>
            <li>
              <Link href="/mounjaro" className="text-sm text-primary hover:underline">
                Mounjaro (Tirzepatide for Diabetes): Full Guide
              </Link>
            </li>
            <li>
              <Link href="/glp1-telehealth-guide" className="text-sm text-primary hover:underline">
                GLP-1 Telehealth Programs Compared
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
