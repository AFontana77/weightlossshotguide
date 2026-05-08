import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "What is the cheapest alternative to Wegovy?",
    answer:
      "Compounded semaglutide is the cheapest option, typically $99 to $299 per month through licensed telehealth platforms. However, compounded semaglutide is only legal when branded semaglutide is on the FDA shortage list. Verify current shortage status before ordering. If shortages are resolved, compounded versions lose their legal basis.",
  },
  {
    question: "Is Zepbound better than Wegovy?",
    answer:
      "In the SURMOUNT-5 head-to-head trial, Zepbound produced greater average weight loss than Wegovy: 20.2% versus 13.7%. Zepbound won on all primary endpoints. Both are effective. The best choice depends on your insurance coverage and what your doctor recommends.",
  },
  {
    question: "Can I get Wegovy alternatives without insurance?",
    answer:
      "Yes. Several telehealth platforms offer GLP-1 access without insurance. Compounded semaglutide (when legally available) and Zepbound manufacturer savings cards are the main paths. Telehealth programs like Henry Meds, Ro Body, and Hims Weight Loss provide access to licensed physicians who can prescribe GLP-1 medications with or without insurance.",
  },
  {
    question: "Is Ozempic the same as Wegovy?",
    answer:
      "Both contain semaglutide from Novo Nordisk. They differ in dose and FDA indication. Ozempic max dose is 2 mg weekly, approved for type 2 diabetes. Wegovy max dose is 2.4 mg weekly, approved for chronic weight management. Some doctors prescribe Ozempic off-label for weight loss when Wegovy is not covered. Same drug class, different regulatory pathway.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "Wegovy Alternatives", url: `${BASE}/wegovy-alternatives` },
];

export const metadata = {
  title: "Wegovy Alternatives (2026): Cost, Effectiveness, and Coverage",
  description:
    "Wegovy too expensive or not covered? Compare every alternative: Zepbound, compounded semaglutide, Ozempic off-label, Saxenda, and telehealth GLP-1 programs.",
};

export default function WegovyAlternativesPage() {
  return (
    <>
      <ArticleSchema
        title="Wegovy Alternatives (2026): Cost, Effectiveness, and Coverage"
        description="Wegovy too expensive or not covered? Compare every alternative: Zepbound, compounded semaglutide, Ozempic off-label, Saxenda, and telehealth GLP-1 programs."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/wegovy-alternatives`}
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
          <span>Wegovy Alternatives</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Wegovy Alternatives (2026)</h1>

        <p className="text-gray-600 mb-8">
          Wegovy costs about $1,349 per month without insurance. Many plans do not cover it. If
          cost, coverage denial, or shortage pushed you to look for alternatives, here is what works,
          what it costs, and what your doctor needs to prescribe it.
        </p>

        {/* QuickVerdictBox */}
        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="GLP-1 Telehealth Program"
          dreamOutcomeChain="Get a licensed provider to evaluate you for the most affordable GLP-1 option this week so you stop waiting and start on the drug that fits your budget."
          proofPoint="Compounded semaglutide and tirzepatide starting at $99/mo. Licensed physicians. Most US states."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="Get Evaluated by Henry Meds"
          riskReversal="Month-to-month. Cancel any time."
        />

        {/* Alternatives Overview Table */}
        <h2 className="text-2xl font-bold mt-10 mb-4">All Wegovy Alternatives Compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Alternative</th>
                <th className="text-left px-3 py-2 border border-gray-200">Drug class</th>
                <th className="text-left px-3 py-2 border border-gray-200">Avg weight loss</th>
                <th className="text-left px-3 py-2 border border-gray-200">Monthly cost</th>
                <th className="text-left px-3 py-2 border border-gray-200">Prescription</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wegovy (reference)", "GLP-1 (semaglutide)", "15-17%", "~$1,349", "Yes"],
                ["Zepbound (tirzepatide)", "Dual GIP/GLP-1", "20-22%", "~$1,060", "Yes"],
                ["Compounded semaglutide", "GLP-1 (compounded)", "Similar to Wegovy*", "$99-$299", "Yes, via telehealth"],
                ["Ozempic off-label", "GLP-1 (semaglutide)", "Lower at 2 mg dose", "~$900-$1,000", "Yes, off-label"],
                ["Saxenda (liraglutide)", "GLP-1 (older)", "~5-8%", "~$1,400", "Yes"],
                ["Contrave", "Naltrexone/bupropion", "~5%", "~$99-$200", "Yes"],
                ["Qsymia", "Phentermine/topiramate", "~7-9%", "~$100-$200", "Yes"],
              ].map(([alt, cls, loss, cost, rx]) => (
                <tr key={alt} className={alt === "Wegovy (reference)" ? "bg-gray-100" : "odd:bg-white even:bg-gray-50"}>
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{alt}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{cls}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{loss}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{cost}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{rx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          *Compounded semaglutide uses the same active ingredient as Wegovy. Clinical trial data for
          branded Wegovy is not directly transferable to compounded versions. Weight loss results
          should be similar when the dose is equivalent, but this has not been studied in controlled
          trials for the compounded form specifically.
        </p>

        {/* Alternative 1: Zepbound */}
        <h2 className="text-2xl font-bold mt-10 mb-3">1. Zepbound (Tirzepatide)</h2>
        <p className="mb-3">
          Zepbound is the best clinical alternative to Wegovy. It costs less at list price, and in
          the SURMOUNT-5 head-to-head trial it produced greater average weight loss: 20.2% versus
          13.7% for Wegovy.
        </p>
        <p className="mb-3">
          Zepbound is a dual GIP/GLP-1 agonist. Adding GIP receptor activity on top of GLP-1 is
          the leading reason for the higher weight loss ceiling.
        </p>
        <p className="mb-6 text-gray-700">
          Insurance coverage for Zepbound is growing but still lags Wegovy because Wegovy launched
          two years earlier. Check your formulary. If your plan covers one and not the other, that
          is a stronger driver than trial data for most patients.
        </p>

        {/* Alternative 2: Compounded Semaglutide */}
        <h2 className="text-2xl font-bold mt-10 mb-3">2. Compounded Semaglutide</h2>
        <p className="mb-3">
          When branded semaglutide (Wegovy and Ozempic) is on the FDA drug shortage list, licensed
          compounding pharmacies can legally prepare compounded semaglutide. Telehealth platforms
          typically offer this at $99 to $299 per month.
        </p>
        <p className="mb-3">
          Compounded semaglutide uses the same active ingredient but is not FDA-approved. It is
          mixed by a 503A or 503B pharmacy under state and federal guidelines.
        </p>
        <p className="mb-6 text-gray-700">
          The legal right to compound disappears when the shortage ends. Semaglutide has remained
          in shortage longer than tirzepatide. Verify current FDA shortage status before ordering
          compounded versions. See our{" "}
          <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
            GLP-1 shortage status page
          </Link>{" "}
          for current information.
        </p>

        {/* Alternative 3: Ozempic off-label */}
        <h2 className="text-2xl font-bold mt-10 mb-3">3. Ozempic Off-Label</h2>
        <p className="mb-3">
          Ozempic contains semaglutide at a maximum dose of 2 mg weekly. Wegovy doses go to
          2.4 mg weekly. Some doctors prescribe Ozempic off-label for weight loss, especially for
          patients who have type 2 diabetes and obesity together.
        </p>
        <p className="mb-3">
          The lower maximum dose means slightly lower average weight loss than Wegovy in practice.
          Insurance coverage for Ozempic (type 2 diabetes indication) is broader than for Wegovy
          (weight loss indication) on most plans.
        </p>
        <p className="mb-6 text-gray-700">
          Some patients use Ozempic for weight management when it is covered by their diabetes
          benefit and Wegovy is not. Talk to your prescriber about whether this path applies to
          your situation.
        </p>

        {/* Alternative 4: Saxenda */}
        <h2 className="text-2xl font-bold mt-10 mb-3">4. Saxenda (Liraglutide)</h2>
        <p className="mb-3">
          Saxenda was the first injectable GLP-1 approved specifically for weight loss, in 2014.
          It is also made by Novo Nordisk. It uses liraglutide instead of semaglutide, which is a
          shorter-acting GLP-1 agonist that requires daily rather than weekly injection.
        </p>
        <p className="mb-3">
          Average weight loss in clinical trials was 5 to 8 percent of body weight. That is well
          below what Wegovy or Zepbound produce. It is also more expensive per unit of weight loss
          because it requires daily dosing.
        </p>
        <p className="mb-6 text-gray-700">
          Saxenda makes sense in limited cases: patients who cannot tolerate weekly injections, or
          those whose insurance covers it when Wegovy is not on formulary. For most patients,
          Zepbound is a better alternative on both efficacy and cost.
        </p>

        {/* Non-GLP-1 options */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Non-GLP-1 Alternatives</h2>
        <p className="mb-3">
          Several FDA-approved weight loss medications work through different mechanisms and cost
          far less. They also produce less weight loss.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 text-gray-800">
          <li>
            <span className="font-medium">Contrave</span> (naltrexone/bupropion): FDA-approved for
            chronic weight management. Average 5% body weight loss. Around $99 to $200 per month
            with a GoodRx coupon. Once-daily oral pill. No injection required.
          </li>
          <li>
            <span className="font-medium">Qsymia</span> (phentermine/topiramate): Average 7 to 9%
            body weight loss in clinical trials. Monthly cost varies widely, often $100 to $200 with
            discount cards. Requires REMS program enrollment due to topiramate birth defect risk.
          </li>
          <li>
            <span className="font-medium">Phentermine</span>: Generic, cheap, and only approved for
            short-term use (up to 12 weeks). Most effective for jumpstarting loss. Not a long-term
            solution.
          </li>
        </ul>
        <p className="mb-6 text-gray-700">
          Non-GLP-1 options are viable for patients who cannot tolerate injections, are not
          candidates for GLP-1 therapy, or need to stay in a much lower price range. They are not
          equivalent in efficacy to the current GLP-1 class.
        </p>

        {/* Telehealth access */}
        <h2 className="text-2xl font-bold mt-10 mb-3">How to Access GLP-1 Alternatives Without a Primary Care Visit</h2>
        <p className="mb-3">
          Telehealth platforms have made GLP-1 access much faster. Most can evaluate and prescribe
          within one to three days without an in-person visit.
        </p>
        <p className="mb-3">
          The main platforms we cover:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800 text-sm">
          <li><Link href="/henry-meds-review" className="text-blue-600 hover:underline">Henry Meds</Link> — compounded GLP-1 from $99/mo</li>
          <li><Link href="/ro-body-review" className="text-blue-600 hover:underline">Ro Body</Link> — branded and compounded options</li>
          <li><Link href="/hims-weight-loss-review" className="text-blue-600 hover:underline">Hims Weight Loss</Link> — subscription model, lower entry cost</li>
          <li><Link href="/mochi-health-review" className="text-blue-600 hover:underline">Mochi Health</Link> — provider-led, holistic approach</li>
          <li><Link href="/form-health-review" className="text-blue-600 hover:underline">Form Health</Link> — physician-supervised, diet coaching included</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Compare programs on price per month, prescriber model (MD vs NP), and whether they
          prescribe branded or compounded GLP-1 medications. All should require a medical
          evaluation before prescribing.
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
            The right weight loss medication depends on your health history, insurance coverage, and
            what your doctor recommends. Talk to your doctor before starting, changing, or stopping
            any weight loss medication.
          </p>
        </div>

        {/* Related Links */}
        <h2 className="text-xl font-bold mb-3">Related Pages</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <Link href="/zepbound" className="text-blue-600 hover:underline">
              Zepbound Guide
            </Link>
          </li>
          <li>
            <Link href="/zepbound-vs-wegovy" className="text-blue-600 hover:underline">
              Zepbound vs Wegovy: Head-to-Head Data
            </Link>
          </li>
          <li>
            <Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">
              Cheapest GLP-1 Options
            </Link>
          </li>
          <li>
            <Link href="/compounded-semaglutide" className="text-blue-600 hover:underline">
              Compounded Semaglutide Guide
            </Link>
          </li>
          <li>
            <Link href="/glp1-without-insurance" className="text-blue-600 hover:underline">
              GLP-1 Without Insurance
            </Link>
          </li>
          <li>
            <Link href="/glp1-telehealth-guide" className="text-blue-600 hover:underline">
              GLP-1 Telehealth Guide
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
