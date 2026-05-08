import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "Is Zepbound better than Wegovy?",
    answer:
      "In the SURMOUNT-5 head-to-head trial, Zepbound produced greater average weight loss than Wegovy — 20.2% versus 13.7%. Zepbound won on all primary endpoints in that trial. However, both drugs are effective, and the best choice depends on your insurance coverage, prescriber recommendation, and individual response. Talk to your doctor.",
  },
  {
    question: "Can you switch from Wegovy to Zepbound?",
    answer:
      "Yes. Switching between GLP-1 medications is possible under physician supervision. Your doctor will guide the transition, which usually involves stopping one drug and starting the other at a low dose before titrating up. Never switch without medical guidance.",
  },
  {
    question: "Does insurance cover both Zepbound and Wegovy?",
    answer:
      "Both require prior authorization from most insurers. Coverage varies widely by plan. Wegovy has historically had broader insurance coverage since it launched in 2021. Zepbound launched in 2023 and coverage is expanding. Check your specific plan formulary. Medicare Part D does not cover either for weight loss as of 2025.",
  },
  {
    question: "What is the cheapest way to get Zepbound or Wegovy?",
    answer:
      "If you have commercial insurance, prior authorization plus the manufacturer savings card is the cheapest route. Without insurance, compounded semaglutide or tirzepatide through licensed telehealth platforms is usually the most affordable option, often $99 to $400 per month depending on dose and provider. Check current FDA shortage status before ordering compounded versions.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "Zepbound vs Wegovy", url: `${BASE}/zepbound-vs-wegovy` },
];

export const metadata = {
  title: "Zepbound vs Wegovy (2026): Head-to-Head Clinical Data",
  description:
    "Zepbound and Wegovy compared side by side. SURMOUNT-5 results, cost, side effects, and who should choose which.",
};

export default function ZepboundVsWegovyPage() {
  return (
    <>
      <ArticleSchema
        title="Zepbound vs Wegovy (2026): Head-to-Head Clinical Data"
        description="Zepbound and Wegovy compared side by side. SURMOUNT-5 results, cost, side effects, and who should choose which."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/zepbound-vs-wegovy`}
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

        <BreadcrumbSchema items={breadcrumbItems} />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Zepbound vs Wegovy</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Zepbound vs Wegovy (2026)</h1>

        {/* Quick Answer */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
          <p className="text-blue-800 text-sm">
            In the SURMOUNT-5 head-to-head trial, Zepbound (tirzepatide) showed greater average
            weight loss than Wegovy (semaglutide). Both drugs are effective for weight loss. Zepbound
            won on all primary endpoints in that trial.
          </p>
        </div>

        {/* QuickVerdictBox */}
        <QuickVerdictBox
          winnerName="SHED MD"
          winnerCategory="GLP-1 Telehealth Program"
          dreamOutcomeChain="Get evaluated for Zepbound or Wegovy by a licensed physician this week, so the drug with the best clinical data for your situation starts working before you spend more time deciding."
          proofPoint="Licensed physicians in most US states. Zepbound and Wegovy evaluations. Starting at $149/mo."
          affiliateUrl="https://www.shedmd.com"
          ctaLabel="Get Evaluated by SHED MD"
          riskReversal="No long-term contract. Cancel any time."
        />

        {/* Comparison Table */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Zepbound vs Wegovy: Side-by-Side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Feature</th>
                <th className="text-left px-3 py-2 border border-gray-200">Zepbound</th>
                <th className="text-left px-3 py-2 border border-gray-200">Wegovy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Active ingredient", "Tirzepatide", "Semaglutide"],
                ["Drug class", "Dual GIP/GLP-1", "GLP-1 only"],
                ["FDA approval year", "2023", "2021"],
                ["Max dose", "15 mg/week", "2.4 mg/week"],
                ["Avg weight loss (clinical trial)", "20.9% (SURMOUNT-1)", "15-17% (STEP)"],
                ["Trial name", "SURMOUNT", "STEP"],
                ["Cost without insurance", "~$1,060/mo", "~$1,349/mo"],
                ["Insurance coverage", "Yes, with prior auth", "Yes, with prior auth"],
              ].map(([feature, zep, weg]) => (
                <tr key={feature} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium">{feature}</td>
                  <td className="px-3 py-2 border border-gray-200">{zep}</td>
                  <td className="px-3 py-2 border border-gray-200">{weg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SURMOUNT-5 Results */}
        <h2 className="text-2xl font-bold mt-10 mb-3">SURMOUNT-5: The Head-to-Head Trial</h2>
        <p className="mb-3">
          SURMOUNT-5 is the only published head-to-head trial comparing Zepbound and Wegovy
          directly in adults with obesity. Here are the key results:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800">
          <li>Zepbound average weight loss: 20.2%</li>
          <li>Wegovy average weight loss: 13.7%</li>
          <li>47% of Zepbound patients lost 25% or more of body weight</li>
          <li>27% of Wegovy patients lost 25% or more of body weight</li>
          <li>Zepbound won on all primary endpoints</li>
        </ul>
        <p className="mb-6 text-gray-700">
          These results do not mean Wegovy is a bad drug. 13.7% average weight loss is still a
          large clinical result. For context, most non-GLP-1 weight loss medications produce less
          than 5% average body weight loss.
        </p>

        {/* Mechanism */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Why Zepbound Shows Greater Weight Loss</h2>
        <p className="mb-3">
          Wegovy works by activating GLP-1 receptors. These receptors slow gastric emptying, reduce
          appetite, and improve insulin signaling.
        </p>
        <p className="mb-6">
          Zepbound adds GIP receptor activation on top of GLP-1 activity. GIP is a second gut
          hormone that also influences appetite and fat metabolism. The dual action of Zepbound is
          the leading explanation for why it produces greater weight loss in clinical trials.
        </p>

        {/* Side Effects */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Side Effect Comparison</h2>
        <p className="mb-3">
          Both drugs share a similar side effect profile because they work on overlapping receptors.
        </p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-gray-800">
          <li>Nausea (most common, especially at dose increases)</li>
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Constipation</li>
          <li>Injection site reactions</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Zepbound has a slightly higher nausea rate at maximum dose compared to Wegovy in trial
          data. Side effects typically improve after the first 4 to 8 weeks on a stable dose.
          Slow titration reduces severity.
        </p>

        {/* Cost and Insurance */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Cost and Insurance</h2>
        <p className="mb-3">
          Wegovy has historically had broader insurance coverage because it launched two years
          before Zepbound and has been on insurer formularies longer. Coverage for Zepbound is
          growing as it gains market share.
        </p>
        <p className="mb-3">
          Both Novo Nordisk (Wegovy) and Eli Lilly (Zepbound) offer manufacturer savings programs
          that can reduce out-of-pocket costs for commercially insured patients.
        </p>
        <p className="mb-6 text-gray-700">
          Compounded versions of both semaglutide and tirzepatide are available through licensed
          telehealth pharmacies when the branded drugs are on the FDA shortage list. Always verify
          current FDA shortage status before ordering compounded versions.
        </p>

        {/* Who Should Choose */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Who Should Choose Zepbound</h2>
        <ul className="list-disc list-inside mb-6 space-y-1 text-gray-800">
          <li>
            Those without insurance coverage who want the drug with the best head-to-head data
          </li>
          <li>Those whose insurance covers Zepbound on their formulary</li>
          <li>Those who have not responded well to GLP-1-only therapy</li>
          <li>Those who want the higher average weight loss ceiling</li>
        </ul>

        <h2 className="text-2xl font-bold mt-2 mb-3">Who Should Choose Wegovy</h2>
        <ul className="list-disc list-inside mb-6 space-y-1 text-gray-800">
          <li>Those whose insurance specifically covers Wegovy and not Zepbound</li>
          <li>Those who prefer the longer market track record since 2021</li>
          <li>Those who have already had success on semaglutide-based therapy</li>
        </ul>

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
            The right GLP-1 medication for you depends on your health history, insurance plan, and
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
            <Link href="/tirzepatide" className="text-blue-600 hover:underline">
              Tirzepatide Guide
            </Link>
          </li>
          <li>
            <Link href="/glp1-telehealth-guide" className="text-blue-600 hover:underline">
              GLP-1 Telehealth Guide
            </Link>
          </li>
          <li>
            <Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">
              Compounding Pharmacies
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
