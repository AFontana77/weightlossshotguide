import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Does WeightWatchers Clinic prescribe GLP-1 medications?",
    answer:
      "Yes. WeightWatchers launched its clinical weight loss program (WeightWatchers Clinic) that combines the WW behavior-change program with telehealth prescribing for GLP-1 medications including Wegovy and Zepbound. Licensed physicians evaluate patients and can prescribe both branded and compounded GLP-1 options where available.",
  },
  {
    question: "How much does WeightWatchers Clinic cost?",
    answer:
      "WeightWatchers Clinic pricing starts around $49 per month for the base program plus medication costs. The medication itself (compounded or branded) is separate. Total monthly cost including compounded semaglutide typically runs $250 to $400 per month. Branded drugs through insurance follow standard prior authorization processes. Pricing changes, verify directly with WW Clinic.",
  },
  {
    question: "Is WeightWatchers Clinic the same as regular WeightWatchers?",
    answer:
      "No. WeightWatchers (now WW) has a traditional points-based behavioral program. WeightWatchers Clinic is a separate medical offering that adds telehealth physician access and GLP-1 prescribing on top of the standard WW program. You get both the behavioral support and the medication option in one program.",
  },
  {
    question: "Does WeightWatchers Clinic work with insurance?",
    answer:
      "WeightWatchers Clinic can help navigate insurance for branded GLP-1 medications. Prior authorization support is typically included. Some patients use insurance for branded drugs while others choose compounded versions when the shortage list permits. The program fee itself is not covered by insurance.",
  },
];

export const metadata = {
  title: "WeightWatchers Clinic Review (2026): GLP-1 + Behavior Change",
  description:
    "WeightWatchers Clinic review covering GLP-1 prescribing, pricing, behavior-change program, pros and cons, and who this program is right for.",
};

export default function WeightWatchersClinicReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "WeightWatchers Clinic Review", url: `${BASE}/weightwatchers-clinic-review` },
        ]}
      />
      <ArticleSchema
        title="WeightWatchers Clinic Review (2026): GLP-1 + Behavior Change"
        description="WeightWatchers Clinic review covering GLP-1 prescribing, pricing, behavior-change program, pros and cons, and who this program is right for."
        url={`${BASE}/weightwatchers-clinic-review`}
        datePublished="2026-05-08"
        dateModified="2026-05-08"
      />
      <FAQSchema questions={faqs} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <Shield className="text-amber-600 mt-0.5 shrink-0" size={20} />
          <p className="text-sm text-amber-900">
            Medical Disclaimer: This page is for informational purposes only. It is not medical
            advice. Talk to your doctor before starting, changing, or stopping any medication.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8 text-sm text-amber-800">
          This page contains affiliate links. We earn a commission when you click through and
          purchase. This does not change our editorial rankings or opinions.
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compounding-pharmacies">Compounding Pharmacies</Link>
          <span className="mx-2">/</span>
          <span>WeightWatchers Clinic Review</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">WeightWatchers Clinic Review (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">GLP-1 telehealth + WW behavior-change program | Branded and compounded options</p>

        <QuickVerdictBox
          winnerName="WeightWatchers Clinic"
          winnerCategory="GLP-1 + Behavior Change Program"
          dreamOutcomeChain="Get the medication that works and the behavior-change support that makes the results last, so you lose weight and keep it off instead of regaining it when you stop."
          proofPoint="Decades of WW behavior-change research combined with GLP-1 prescribing. Starting at ~$49/mo for the program."
          affiliateUrl="https://www.weightwatchers.com/clinic"
          ctaLabel="Explore WeightWatchers Clinic"
          riskReversal="Cancel any time. Medication cost separate from program fee."
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">WeightWatchers Clinic at a Glance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Factor</th>
                <th className="text-left px-3 py-2 border border-gray-200">Detail</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Program type", "Telehealth GLP-1 + WW behavior-change program"],
                ["Medications offered", "Branded GLP-1 (Wegovy, Zepbound) + compounded when available"],
                ["Prescriber model", "Licensed telehealth physicians"],
                ["Program fee", "~$49/mo (separate from medication cost)"],
                ["Medication cost", "Branded through insurance or compounded at program pricing"],
                ["Behavior support", "WW coaching, community, and tracking app included"],
                ["State availability", "Most US states"],
                ["Best for", "Patients who want both medication and a structured behavior-change program"],
              ].map(([factor, detail]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">What WeightWatchers Clinic Is</h2>
        <p className="mb-3">
          WeightWatchers (now branded WW) entered the medical weight loss market by combining their
          decades-old behavior change program with telehealth GLP-1 prescribing. The result is a
          hybrid: you get the behavioral tools WW is known for plus a licensed physician who can
          prescribe Wegovy, Zepbound, or compounded alternatives.
        </p>
        <p className="mb-3">
          The core WW model focuses on habit change, food tracking, and community support. Adding
          GLP-1 medication on top of that framework is a real clinical advantage. GLP-1 drugs
          produce greater weight loss than behavior change alone. Pairing them with a structured
          lifestyle program improves long-term maintenance.
        </p>
        <p className="mb-6 text-gray-700">
          The WW brand is a significant trust asset. Patients who tried WW in the past and saw
          results often find the clinical version easier to commit to than a purely medication-based
          program.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pricing Breakdown</h2>
        <p className="mb-3">
          WeightWatchers Clinic separates the program fee from the medication cost. The program
          starts around $49 per month. Medication costs are on top:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800">
          <li>Branded Wegovy or Zepbound through insurance: depends on your plan copay</li>
          <li>Branded drugs without insurance: $900-$1,349/mo on top of the $49 program fee</li>
          <li>Compounded semaglutide (while available): program pricing for the drug separately</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Total monthly cost is higher than pure compounded platforms like Henry Meds when paying
          out of pocket. The advantage is the behavior-change layer included in the program fee.
          For patients who want that support, it is worth the premium.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle size={16} /> Pros
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>WW behavior-change program built in</li>
              <li>Licensed physicians for GLP-1 prescribing</li>
              <li>Both branded and compounded options available</li>
              <li>Strong brand trust and community support</li>
              <li>Can help with insurance prior authorization</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle size={16} /> Cons
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Higher total cost than pure compounded programs</li>
              <li>Program fee required even if you have insurance for medication</li>
              <li>Compounded availability tied to FDA shortage status</li>
              <li>WW behavior program may feel redundant for experienced users</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {faqs.map((item) => (
            <div key={item.question} className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-1">{item.question}</h3>
              <p className="text-gray-700 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-700">
            GLP-1 medication eligibility depends on your health history and what your doctor
            recommends. Talk to your doctor before starting, changing, or stopping any weight
            loss medication.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-3">Related Pages</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><Link href="/noom-med-review" className="text-blue-600 hover:underline">Noom Med Review</Link></li>
          <li><Link href="/henry-meds-review" className="text-blue-600 hover:underline">Henry Meds Review</Link></li>
          <li><Link href="/mochi-health-review" className="text-blue-600 hover:underline">Mochi Health Review</Link></li>
          <li><Link href="/glp1-telehealth-guide" className="text-blue-600 hover:underline">GLP-1 Telehealth Guide</Link></li>
          <li><Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">Cheapest GLP-1 Options</Link></li>
        </ul>
      </main>
    </>
  );
}
