import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "How much does Ozempic cost without insurance?",
    answer:
      "Ozempic without insurance costs approximately $935 per month at retail pharmacies. The price can vary slightly by pharmacy. GoodRx discounts can bring this to approximately $700 to $900 per month. Without insurance, compounded semaglutide through a licensed telehealth platform ($99 to $299/mo) is typically a far cheaper alternative, provided it is legally available through a licensed 503B compounding pharmacy.",
  },
  {
    question: "Does GoodRx work for GLP-1 medications?",
    answer:
      "Yes, GoodRx can reduce the retail cost of branded GLP-1 medications at participating pharmacies. However, GLP-1 drugs remain expensive even with GoodRx — typically $700 to $900 per month for Ozempic and Wegovy. GoodRx discounts generally cannot be combined with manufacturer savings cards or insurance. For uninsured patients, compounded telehealth platforms often offer lower monthly costs.",
  },
  {
    question: "How do I get compounded semaglutide without insurance?",
    answer:
      "Telehealth platforms like Henry Meds, Hims, and similar services offer compounded semaglutide without insurance requirements. You complete an online intake and are evaluated by a licensed physician. If eligible, the physician prescribes compounded semaglutide from a licensed 503B compounding pharmacy, which ships directly to you. This is legally available when Ozempic or Wegovy is on the FDA shortage list.",
  },
  {
    question: "Who qualifies for Novo Nordisk patient assistance programs?",
    answer:
      "Novo Nordisk offers patient assistance programs for uninsured or underinsured patients who meet income and eligibility requirements. Generally, applicants must be US residents, not have insurance coverage for the drug, and meet household income thresholds. You apply directly through Novo Nordisk's patient assistance portal or with help from your physician's office. Program terms and income limits change — check the Novo Nordisk website for current requirements.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "GLP-1 Without Insurance", url: `${BASE}/glp1-without-insurance` },
];

export const metadata = {
  title: "How to Get GLP-1 Medications Without Insurance in 2026",
  description:
    "Every option for getting Ozempic, Wegovy, Mounjaro, or Zepbound without insurance: savings cards, compounding pharmacies, patient assistance programs, and telehealth.",
};

export default function Glp1WithoutInsurancePage() {
  return (
    <>
      <ArticleSchema
        title="How to Get GLP-1 Medications Without Insurance in 2026"
        description="Every option for getting Ozempic, Wegovy, Mounjaro, or Zepbound without insurance: savings cards, compounding pharmacies, patient assistance programs, and telehealth."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/glp1-without-insurance`}
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
          <span>GLP-1 Without Insurance</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">GLP-1 Medications Without Insurance (2026)</h1>
        <p className="text-lg text-gray-600 mb-8">
          The full retail cost of GLP-1 medications without insurance ranges from $935 to $1,349 per
          month. Here are all your options to reduce that.
        </p>

        {/* QuickVerdictBox */}
        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="GLP-1 Without Insurance"
          dreamOutcomeChain="Access physician-supervised GLP-1 treatment for $197/month through the compounded semaglutide route, so the insurance you don't have stops blocking the treatment that has been shown to produce 15-20% body weight loss in clinical trials."
          proofPoint="No insurance required. Licensed physician prescription. Compounded semaglutide from $197/mo."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="Check Henry Meds Pricing"
          riskReversal="No long-term contract. Cancel anytime."
        />

        {/* Option 1: Manufacturer Savings Cards */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Option 1: Manufacturer Savings Cards</h2>
        <p className="mb-3 text-gray-700">
          All four major GLP-1 manufacturers offer savings programs, but most require commercial
          insurance:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">
          <li>
            <strong>Ozempic (semaglutide):</strong> Novo Nordisk $25/mo co-pay card for commercially
            insured patients with a diabetes diagnosis.
          </li>
          <li>
            <strong>Wegovy (semaglutide):</strong> Novo Nordisk coupon program, varies by plan.
            Requires commercial insurance.
          </li>
          <li>
            <strong>Mounjaro (tirzepatide):</strong> Eli Lilly $25/mo co-pay card for commercially
            insured diabetes patients.
          </li>
          <li>
            <strong>Zepbound (tirzepatide):</strong> Eli Lilly savings card with $550 per month
            maximum for eligible commercial insured patients.
          </li>
        </ul>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-sm text-yellow-900">
          <strong>Important:</strong> Manufacturer savings cards do not work for Medicare or
          Medicaid patients. If you have government insurance, skip to Option 4 (patient assistance)
          or Option 3 (compounding).
        </div>

        {/* Option 2: GoodRx */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Option 2: GoodRx and Discount Programs</h2>
        <p className="mb-3 text-gray-700">
          GoodRx and similar pharmacy discount programs can reduce the retail cost of branded GLP-1
          medications. Typical GoodRx prices for branded GLP-1 drugs range from $700 to $900 per
          month.
        </p>
        <p className="mb-6 text-gray-700">
          GoodRx discounts generally cannot be combined with manufacturer savings cards or
          insurance. For many uninsured patients, this option is still expensive. It is most useful
          as a bridge when switching insurance or waiting for prior authorization.
        </p>

        {/* Option 3: Compounded Semaglutide */}
        <h2 className="text-2xl font-bold mt-10 mb-3">
          Option 3: Compounded Semaglutide via Telehealth
        </h2>
        <p className="mb-3 text-gray-700">
          Compounded semaglutide is the lowest-cost option for most uninsured patients. Monthly
          costs range from $99 to $400 depending on dose and provider.
        </p>
        <p className="mb-3 text-gray-700">
          It is legally available when Ozempic or Wegovy is on the FDA shortage list, produced by
          licensed 503B compounding pharmacies. The process:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-800">
          <li>Complete an online intake with a telehealth platform.</li>
          <li>A licensed physician reviews your health history and determines eligibility.</li>
          <li>If approved, the physician prescribes compounded semaglutide.</li>
          <li>The pharmacy ships the medication directly to you.</li>
        </ol>

        {/* Option 4: Compounded Tirzepatide */}
        <h2 className="text-2xl font-bold mt-10 mb-3">
          Option 4: Compounded Tirzepatide via Telehealth
        </h2>
        <p className="mb-6 text-gray-700">
          Compounded tirzepatide (the active ingredient in Mounjaro and Zepbound) follows the same
          legal framework as compounded semaglutide. Monthly costs range from $200 to $600 depending
          on dose and provider. Check the current FDA shortage status for Mounjaro and Zepbound
          before seeking compounded tirzepatide.
        </p>

        {/* Option 5: Get Insurance Coverage */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Option 5: Get Insurance Coverage</h2>
        <p className="mb-3 text-gray-700">
          If you are uninsured or underinsured, securing insurance coverage that includes GLP-1
          medications can dramatically reduce your monthly cost.
        </p>
        <p className="mb-3 text-gray-700">
          Prior authorization requirements typically include:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4 text-gray-800">
          <li>BMI of 30 or higher, OR</li>
          <li>BMI of 27 or higher with a qualifying condition (type 2 diabetes, hypertension, sleep apnea, or cardiovascular disease)</li>
          <li>Documentation of prior weight loss attempts</li>
          <li>Physician letter of medical necessity</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Your physician's office can help with the prior authorization paperwork. Denials can be
          appealed. Many patients succeed on a second or third appeal with additional documentation.
        </p>

        {/* Option 6: Patient Assistance Programs */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Option 6: Patient Assistance Programs</h2>
        <p className="mb-3 text-gray-700">
          Both Novo Nordisk and Eli Lilly offer patient assistance programs for qualifying
          low-income patients who lack insurance coverage. These programs can provide medication at
          no cost or low cost.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-800">
          <li>Novo Nordisk: Cornerstones4Care patient assistance for Ozempic and Wegovy</li>
          <li>Eli Lilly: Lilly Cares Foundation for Mounjaro and Zepbound</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Eligibility is income-based. Apply directly through each company's patient assistance
          portal or ask your prescriber's office to help with the application.
        </p>

        {/* Decision Guide */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Which Option to Pursue Based on Your Situation</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Your Situation</th>
                <th className="text-left px-3 py-2 border border-gray-200">Best Option</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Have commercial insurance",
                  "Try prior auth + manufacturer savings card first",
                ],
                [
                  "Have Medicare",
                  "Compounded route or patient assistance program (manufacturer cards don't work with Medicare)",
                ],
                [
                  "No insurance at all",
                  "Compounded semaglutide via telehealth ($99-$299/mo) is lowest cost",
                ],
                [
                  "Low income, no insurance",
                  "Patient assistance programs from Novo Nordisk or Eli Lilly",
                ],
                [
                  "Short-term gap (switching plans)",
                  "GoodRx as a bridge while awaiting new coverage",
                ],
              ].map(([situation, option]) => (
                <tr key={situation} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200">{situation}</td>
                  <td className="px-3 py-2 border border-gray-200">{option}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
            The right path forward depends on your health history, insurance situation, and goals.
            Talk to your doctor before starting, changing, or stopping any GLP-1 medication. A
            physician can also help with prior authorization paperwork and patient assistance
            program applications.
          </p>
        </div>

        {/* Related Links */}
        <h2 className="text-xl font-bold mb-3">Related Pages</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
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
          <li>
            <Link href="/henry-meds-review" className="text-blue-600 hover:underline">
              Henry Meds Review
            </Link>
          </li>
          <li>
            <Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">
              Cheapest GLP-1 Options
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
