import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "Is Mounjaro stronger than Ozempic?",
    answer:
      "Clinical trial data shows Mounjaro produces greater average weight loss and HbA1c reduction than Ozempic. Mounjaro uses dual GIP and GLP-1 receptor activation, while Ozempic is a GLP-1 agonist only. Head-to-head trials in the diabetes population are limited, but indirect comparisons favor tirzepatide (Mounjaro) for both blood sugar control and weight loss. Talk to your doctor.",
  },
  {
    question: "Can you take Ozempic and Mounjaro at the same time?",
    answer:
      "No. Ozempic and Mounjaro both activate GLP-1 receptors. Taking them together is not recommended and has not been studied. The combination would be expected to increase the risk of side effects, including low blood sugar, nausea, and vomiting, without a proven additional benefit. Never take two GLP-1 or dual agonist drugs simultaneously without explicit physician guidance.",
  },
  {
    question: "Does insurance cover Ozempic and Mounjaro?",
    answer:
      "Both are FDA-approved for type 2 diabetes and are more commonly covered by insurance for that indication. Coverage for off-label weight loss use is much harder to obtain. With insurance and a diabetes diagnosis, manufacturer savings cards can bring costs down to $25 per month. Without insurance, both cost between $935 and $1,060 per month at retail.",
  },
  {
    question: "What is the difference between Mounjaro and Zepbound?",
    answer:
      "Mounjaro and Zepbound contain the same active ingredient: tirzepatide. Mounjaro is FDA-approved for type 2 diabetes. Zepbound is FDA-approved for chronic weight management. The formulations are identical. The difference is the labeled indication, which affects insurance coverage and the prescribing rationale your doctor uses.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "Ozempic vs Mounjaro", url: `${BASE}/ozempic-vs-mounjaro` },
];

export const metadata = {
  title: "Ozempic vs Mounjaro (2026): Which Is Better?",
  description:
    "Ozempic vs Mounjaro compared. Active ingredients, weight loss data, cost, savings cards, and how to access each through telehealth.",
};

export default function OzempicVsMounjaroPage() {
  return (
    <>
      <ArticleSchema
        title="Ozempic vs Mounjaro (2026): Which Is Better?"
        description="Ozempic vs Mounjaro compared. Active ingredients, weight loss data, cost, savings cards, and how to access each through telehealth."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/ozempic-vs-mounjaro`}
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
          <span>Ozempic vs Mounjaro</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Ozempic vs Mounjaro (2026)</h1>

        {/* Quick Answer */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
          <p className="text-blue-800 text-sm">
            Ozempic is semaglutide, approved for type 2 diabetes. Mounjaro is tirzepatide, also
            approved for type 2 diabetes. Both cause significant weight loss as a side effect.
            Clinical data shows Mounjaro achieves greater average weight loss. Both require a
            prescription and physician oversight.
          </p>
        </div>

        {/* QuickVerdictBox */}
        <QuickVerdictBox
          winnerName="SHED MD"
          winnerCategory="GLP-1 Telehealth Program"
          dreamOutcomeChain="Get evaluated for Ozempic or Mounjaro by a licensed physician, so you access the drug your situation calls for at $149/mo for the telehealth consult instead of months on a waitlist for an endocrinology appointment."
          proofPoint="Licensed physicians. Ozempic and Mounjaro evaluations. GLP-1 programs from $149/mo."
          affiliateUrl="https://www.shedmd.com"
          ctaLabel="Get Evaluated by SHED MD"
          riskReversal="No long-term contract. Cancel any time."
        />

        {/* Comparison Table */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Ozempic vs Mounjaro: Side-by-Side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Feature</th>
                <th className="text-left px-3 py-2 border border-gray-200">Ozempic</th>
                <th className="text-left px-3 py-2 border border-gray-200">Mounjaro</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Active ingredient", "Semaglutide", "Tirzepatide"],
                ["Mechanism", "GLP-1 agonist", "GIP + GLP-1 dual agonist"],
                ["Max dose", "2 mg/week", "15 mg/week"],
                ["Avg HbA1c reduction", "1.8%", "2.07%"],
                ["Avg weight loss", "12-15 lbs", "~25 lbs"],
                ["Cost without insurance", "~$935/mo", "~$1,060/mo"],
                ["Savings program", "$25/mo co-pay (eligible)", "$25/mo co-pay (eligible)"],
              ].map(([feature, oz, mou]) => (
                <tr key={feature} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium">{feature}</td>
                  <td className="px-3 py-2 border border-gray-200">{oz}</td>
                  <td className="px-3 py-2 border border-gray-200">{mou}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Off-label weight loss note */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> Ozempic and Mounjaro are both FDA-approved for type 2
            diabetes, not weight loss. The weight loss versions of these drugs are Wegovy
            (semaglutide) and Zepbound (tirzepatide) respectively. Off-label prescribing for weight
            loss is common but insurance coverage is much harder to obtain without a diabetes
            diagnosis.
          </p>
        </div>

        {/* Clinical Data */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Clinical Comparison</h2>
        <p className="mb-3">
          No single large head-to-head trial has directly compared Ozempic and Mounjaro in the
          diabetes population as of mid-2025. SURPASS-CVOT studied Mounjaro versus placebo in high
          cardiovascular risk patients. Indirect comparisons across the SUSTAIN (Ozempic) and
          SURPASS (Mounjaro) programs consistently show tirzepatide producing greater weight loss
          and HbA1c reductions.
        </p>
        <p className="mb-6 text-gray-700">
          Mounjaro's dual GIP and GLP-1 mechanism is the likely driver of its advantage. GLP-1
          reduces appetite and slows gastric emptying. GIP adds complementary effects on fat
          metabolism and further appetite suppression. The combination appears to be additive.
        </p>

        {/* Which to Choose */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Which Should You Choose?</h2>
        <p className="mb-3">
          The best choice between Ozempic and Mounjaro depends on:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1 text-gray-800">
          <li>Your insurance formulary — whichever is covered costs far less</li>
          <li>Your prescriber's clinical preference and experience</li>
          <li>Your individual response to prior GLP-1 therapy, if any</li>
          <li>Side effect tolerance — both have similar profiles, Mounjaro slightly higher at max dose</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Both are excellent drugs for type 2 diabetes management. The weight loss advantage of
          Mounjaro is meaningful but does not make Ozempic a poor choice if it is better covered by
          your insurance.
        </p>

        {/* Access */}
        <h2 className="text-2xl font-bold mt-10 mb-3">How to Access Ozempic or Mounjaro</h2>
        <p className="mb-3">
          Both require a prescription from a licensed physician. Traditional endocrinology
          appointments can have long wait times. Telehealth platforms that specialize in GLP-1
          medications can evaluate and prescribe for eligible patients with shorter wait times.
        </p>
        <p className="mb-6 text-gray-700">
          Eligibility typically requires a type 2 diabetes diagnosis or relevant metabolic markers.
          The physician reviews your health history and prescribes the appropriate drug and starting
          dose.
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
            Choosing between Ozempic and Mounjaro is a decision for you and your doctor. Your
            insurance formulary, health history, and diabetes management goals all factor into the
            best choice. Talk to your doctor before starting, changing, or stopping any medication.
          </p>
        </div>

        {/* Related Links */}
        <h2 className="text-xl font-bold mb-3">Related Pages</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <Link href="/mounjaro" className="text-blue-600 hover:underline">
              Mounjaro Guide
            </Link>
          </li>
          <li>
            <Link href="/tirzepatide" className="text-blue-600 hover:underline">
              Tirzepatide Guide
            </Link>
          </li>
          <li>
            <Link href="/zepbound" className="text-blue-600 hover:underline">
              Zepbound Guide
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
