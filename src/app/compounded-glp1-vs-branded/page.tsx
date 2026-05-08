import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "Is compounded semaglutide the same as Wegovy?",
    answer:
      "Compounded semaglutide uses the same active ingredient as Wegovy. However, it is not FDA-approved. Branded Wegovy goes through FDA manufacturing review, clinical trials, and quality standards. Compounded versions are mixed by individual pharmacies and are not subject to the same level of FDA oversight. Efficacy should be similar at equivalent doses, but this is not confirmed in controlled trials for compounded versions specifically.",
  },
  {
    question: "Is compounded GLP-1 safe?",
    answer:
      "The FDA has raised concerns about quality control at some 503A compounding pharmacies, including incorrect dosing and contamination. 503B outsourcing facilities operate under stricter FDA oversight and are generally considered more reliable. Ask your telehealth platform which type of pharmacy they use and whether it is FDA-registered. See our 503A vs 503B guide for the difference.",
  },
  {
    question: "Why is compounded GLP-1 so much cheaper?",
    answer:
      "Branded GLP-1 drugs carry the full cost of clinical trials, FDA approval, manufacturing scale-up, patents, and marketing. Compounded versions skip all of that. A 503A pharmacy mixes the drug from raw active pharmaceutical ingredient (API) purchased from a bulk supplier. The API cost plus labor and overhead is far lower than the branded drug supply chain cost.",
  },
  {
    question: "Can I switch from compounded to branded GLP-1?",
    answer:
      "Yes. Switching from compounded semaglutide to Wegovy or from compounded tirzepatide to Zepbound is medically straightforward because the active ingredient is the same. Ask your prescriber to confirm the correct equivalent dose. If your compounded version included additives like B12 or L-carnitine, the branded drug will not include those. Talk to your doctor about any transitions.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "Compounded vs Branded GLP-1", url: `${BASE}/compounded-glp1-vs-branded` },
];

export const metadata = {
  title: "Compounded vs Branded GLP-1 (2026): Cost, Safety, and Differences",
  description:
    "Compounded semaglutide or tirzepatide vs Wegovy, Zepbound, Ozempic: what is the real difference in cost, safety, and effectiveness?",
};

export default function CompoundedGlp1VsBrandedPage() {
  return (
    <>
      <ArticleSchema
        title="Compounded vs Branded GLP-1 (2026): Cost, Safety, and Differences"
        description="Compounded semaglutide or tirzepatide vs Wegovy, Zepbound, Ozempic: what is the real difference in cost, safety, and effectiveness?"
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/compounded-glp1-vs-branded`}
      />
      <FAQSchema questions={faqQuestions} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* YMYL Medical Disclaimer */}
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <Shield className="text-amber-600 mt-0.5 shrink-0" size={20} />
          <p className="text-sm text-amber-900">
            This page is for informational purposes only. It is not medical advice. Talk to your
            doctor before starting, changing, or stopping any medication.
          </p>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8 text-sm text-amber-800">
          This page contains affiliate links. We earn a commission when you click through and
          purchase. This does not change our editorial rankings or opinions.
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Compounded vs Branded GLP-1</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Compounded vs Branded GLP-1 (2026)</h1>

        <p className="text-gray-600 mb-8">
          Branded Wegovy and Zepbound cost $1,000 to $1,350 per month. Compounded versions of the
          same drugs cost $99 to $500 per month. Here is what the difference actually means for
          your treatment, your safety, and your budget.
        </p>

        {/* QuickVerdictBox */}
        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="GLP-1 Telehealth Program"
          dreamOutcomeChain="Get evaluated for the most affordable legal GLP-1 option this week so you start treatment rather than spending more months at the wrong price point."
          proofPoint="Compounded semaglutide (while legally available) from $99/mo. Licensed physicians. Most US states."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="Get Evaluated by Henry Meds"
          riskReversal="Month-to-month. Cancel any time."
        />

        {/* Comparison Table */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Compounded vs Branded: Direct Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Factor</th>
                <th className="text-left px-3 py-2 border border-gray-200">Compounded GLP-1</th>
                <th className="text-left px-3 py-2 border border-gray-200">Branded GLP-1</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly cost", "$99-$500", "$900-$1,349"],
                ["Active ingredient", "Same (semaglutide or tirzepatide)", "Same"],
                ["FDA-approved", "No", "Yes"],
                ["FDA manufacturing oversight", "Less (503A); More (503B)", "Full"],
                ["Studied in clinical trials", "No (branded data used as proxy)", "Yes"],
                ["Legal availability", "Only when on FDA shortage list", "Always (when in supply)"],
                ["Insurance covered", "No", "Yes, with prior auth"],
                ["Pen device", "Vials + needles (usually)", "Auto-injector pen"],
                ["Cold chain shipping", "Required", "Required"],
                ["Additives possible", "Yes (B12, L-carnitine sometimes added)", "No"],
              ].map(([factor, comp, brand]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{comp}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{brand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why the Price Difference */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Why the Price Difference Is So Large</h2>
        <p className="mb-3">
          Branded GLP-1 drugs carry the full cost of clinical development. A single Phase 3 trial
          for a drug like Wegovy costs hundreds of millions of dollars. The FDA approval process,
          manufacturing validation, and post-market surveillance add more cost. Patents protect the
          manufacturer's investment for years.
        </p>
        <p className="mb-3">
          Compounding pharmacies skip all of that. They purchase raw active pharmaceutical
          ingredient (API) from bulk chemical suppliers, mix it with approved excipients, and
          dispense it. The API cost for compounded semaglutide is a small fraction of the Wegovy
          list price.
        </p>
        <p className="mb-6 text-gray-700">
          The tradeoff is oversight. Branded drugs go through FDA inspections at every manufacturing
          facility. Compounded drugs from 503A pharmacies face lighter oversight. 503B outsourcing
          facilities face more, but still less than a branded drug manufacturer.
        </p>

        {/* The Efficacy Question */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Does Compounded GLP-1 Work as Well?</h2>
        <p className="mb-3">
          No controlled clinical trial has compared compounded semaglutide to branded Wegovy in the
          same patients under the same conditions. The clinical evidence for weight loss comes from
          branded drug trials.
        </p>
        <p className="mb-3">
          The active ingredient is the same molecule. At the same dose, the mechanism of action
          should be the same. Most clinicians prescribing compounded GLP-1 medications use the
          branded drug trial data as a proxy for expected outcomes.
        </p>
        <p className="mb-6 text-gray-700">
          The practical concern is dosing accuracy. Compounded versions come as vials that patients
          draw into syringes. The branded auto-injector pens are factory-calibrated. Measurement
          error at the patient level is more likely with vials. This is a real difference in
          real-world use.
        </p>

        {/* Safety Concerns */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Safety: What the FDA Has Said</h2>
        <p className="mb-3">
          The FDA has issued multiple advisories warning consumers about compounded GLP-1
          medications. Key concerns include:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800">
          <li>Reports of dosing errors due to concentration differences between compounded products and branded pens</li>
          <li>Products marketed using the drug's salt form (semaglutide sodium, tirzepatide acetate) rather than the base molecule, which the FDA considers distinct compounds</li>
          <li>Inadequate labeling and patient instructions at some 503A pharmacies</li>
          <li>Contamination or stability issues at facilities without rigorous quality controls</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Not all compounding pharmacies have these issues. 503B outsourcing facilities are
          inspected by the FDA and operate under Current Good Manufacturing Practice (CGMP)
          standards. If you use a compounded GLP-1, ask your telehealth platform which pharmacy
          type they use and whether it is FDA-registered under 503B.
        </p>

        {/* When Compounded Makes Sense */}
        <h2 className="text-2xl font-bold mt-10 mb-3">When Compounded GLP-1 Is the Right Path</h2>
        <p className="mb-3">
          Compounded GLP-1 makes sense when all three conditions are met:
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-800">
          <li>The branded drug is on the current FDA shortage list (legal basis for compounding)</li>
          <li>You do not have insurance coverage for the branded drug</li>
          <li>The telehealth platform uses a licensed 503B or reputable 503A pharmacy</li>
        </ol>
        <p className="mb-6 text-gray-700">
          If the branded drug is off the shortage list, compounded versions lose legal standing for
          most patients. If you have insurance coverage for the branded drug, branded is the safer
          choice on quality. If the compounding pharmacy lacks FDA registration, the quality risk
          is not worth the price savings.
        </p>

        {/* When Branded Makes Sense */}
        <h2 className="text-2xl font-bold mt-10 mb-3">When Branded GLP-1 Is the Right Path</h2>
        <ul className="list-disc list-inside mb-6 space-y-1 text-gray-800">
          <li>Your insurance covers it with manageable prior authorization requirements</li>
          <li>The drug is off the FDA shortage list (compounding legally restricted)</li>
          <li>You want the auto-injector pen for dosing accuracy</li>
          <li>You want the full FDA-approved clinical profile with no additive uncertainty</li>
        </ul>

        {/* Cost Comparison Over Time */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Annual Cost Comparison</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Option</th>
                <th className="text-left px-3 py-2 border border-gray-200">Monthly cost</th>
                <th className="text-left px-3 py-2 border border-gray-200">Year 1 cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Branded Wegovy (no insurance)", "~$1,349", "~$16,188"],
                ["Branded Zepbound (no insurance)", "~$1,060", "~$12,720"],
                ["Compounded semaglutide (while legal)", "$99-$299", "$1,188-$3,588"],
                ["Compounded tirzepatide (while legal)", "$250-$500", "$3,000-$6,000"],
                ["Branded Wegovy (with insurance, low copay)", "$25-$200", "$300-$2,400"],
              ].map(([option, monthly, annual]) => (
                <tr key={option} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{option}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{monthly}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{annual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          Costs are estimates based on publicly advertised prices as of 2026. Insurance coverage
          and copay amounts vary widely. Annual savings card eligibility and manufacturer programs
          can reduce branded costs significantly for commercially insured patients.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {faqQuestions.map((item) => (
            <div key={item.question} className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-1">{item.question}</h3>
              <p className="text-gray-700 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Talk to Your Doctor Closer */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-700">
            The right GLP-1 path depends on your insurance coverage, the current FDA shortage
            status, and what your doctor recommends. Talk to your doctor before starting, changing,
            or stopping any weight loss medication.
          </p>
        </div>

        {/* Related Links */}
        <h2 className="text-xl font-bold mb-3">Related Pages</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <Link href="/503a-vs-503b-pharmacies" className="text-blue-600 hover:underline">
              503A vs 503B Compounding Pharmacies
            </Link>
          </li>
          <li>
            <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
              GLP-1 FDA Shortage Status
            </Link>
          </li>
          <li>
            <Link href="/compounded-semaglutide" className="text-blue-600 hover:underline">
              Compounded Semaglutide Guide
            </Link>
          </li>
          <li>
            <Link href="/compounded-tirzepatide" className="text-blue-600 hover:underline">
              Compounded Tirzepatide Guide
            </Link>
          </li>
          <li>
            <Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">
              Cheapest GLP-1 Options
            </Link>
          </li>
          <li>
            <Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">
              Compounding Pharmacy Directory
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
