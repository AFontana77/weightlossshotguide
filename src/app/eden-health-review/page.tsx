import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "What GLP-1 medications does Eden Health prescribe?",
    answer:
      "Eden Health typically offers compounded semaglutide and compounded tirzepatide when those drugs are on the FDA shortage list. Availability of specific medications and doses changes based on shortage status and pharmacy supply. Check their current formulary at the time you sign up.",
  },
  {
    question: "Is Eden Health a compounding pharmacy?",
    answer:
      "No. Eden Health is a telehealth platform. They partner with licensed compounding pharmacies to fulfill prescriptions. The telehealth physicians prescribe, and the pharmacy compounds and ships. This means your relationship is with both Eden and their pharmacy partner.",
  },
  {
    question: "What does Eden Health cost per month?",
    answer:
      "Eden Health pricing for GLP-1 programs typically ranges from $179 to $350 per month depending on the medication and dose tier. Check current pricing directly on their website as rates change.",
  },
  {
    question: "How does Eden Health compare to Henry Meds?",
    answer:
      "Both are telehealth platforms offering compounded GLP-1 access. Henry Meds typically has a slightly lower entry price for compounded semaglutide. Eden Health has a slightly different care model with more emphasis on clinical support. Both require medical evaluation before prescribing.",
  },
];

export const metadata = {
  title: "Eden Health Review (2026): GLP-1 Telehealth Pricing and Quality",
  description:
    "Honest Eden Health review covering GLP-1 pricing, prescriber model, pharmacy partners, pros and cons, and who this telehealth platform is right for.",
};

export default function EdenHealthReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Eden Health Review", url: `${BASE}/eden-health-review` },
        ]}
      />
      <ArticleSchema
        title="Eden Health Review (2026): GLP-1 Telehealth Pricing and Quality"
        description="Honest Eden Health review covering GLP-1 pricing, prescriber model, pharmacy partners, pros and cons, and who this telehealth platform is right for."
        url={`${BASE}/eden-health-review`}
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
          <span>Eden Health Review</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Eden Health Review (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">Telehealth GLP-1 platform | Compounded semaglutide and tirzepatide</p>

        <QuickVerdictBox
          winnerName="Eden Health"
          winnerCategory="GLP-1 Telehealth Program"
          dreamOutcomeChain="Get evaluated for compounded GLP-1 by a licensed physician this week so you start treatment at a fraction of the branded drug cost."
          proofPoint="Licensed physicians in most US states. Compounded semaglutide and tirzepatide when available. Medical supervision included."
          affiliateUrl="https://www.edenhealth.com"
          ctaLabel="Get Evaluated at Eden Health"
          riskReversal="Check current pricing and state availability at Eden Health before signing up."
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">Eden Health at a Glance</h2>
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
                ["Platform type", "Telehealth prescribing + pharmacy partner network"],
                ["Medications offered", "Compounded semaglutide, compounded tirzepatide (shortage-dependent)"],
                ["Prescriber model", "Licensed physicians and NPs"],
                ["Visit type", "Asynchronous intake + provider review (no live video required for most)"],
                ["Monthly cost", "~$179-$350 depending on medication and dose"],
                ["State availability", "Most US states (verify before signup)"],
                ["Cancellation policy", "Month-to-month, cancel any time"],
                ["503A or 503B pharmacy", "Partners with licensed compounding pharmacies (verify their partner's status)"],
                ["Best for", "Patients without insurance seeking compounded GLP-1 with medical supervision"],
              ].map(([factor, detail]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">What Eden Health Is</h2>
        <p className="mb-3">
          Eden Health is a telehealth platform that connects patients with licensed physicians for
          GLP-1 medication evaluations. They focus on weight management programs using compounded
          versions of semaglutide and tirzepatide.
        </p>
        <p className="mb-3">
          The model is asynchronous: you fill out a health intake form, a physician reviews your
          case, and if you qualify, a prescription is sent to their pharmacy partner. You do not
          need a live video appointment for most cases, though Eden may require one for complex
          health histories.
        </p>
        <p className="mb-6 text-gray-700">
          Eden Health is not a compounding pharmacy itself. They connect you to licensed
          pharmacies. The quality of the compounded medication depends on which pharmacy partner
          fills your prescription.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pricing</h2>
        <p className="mb-3">
          Eden Health pricing typically falls in the $179 to $350 per month range for compounded
          GLP-1 programs. Lower doses start at the lower end of the range. Higher maintenance
          doses cost more.
        </p>
        <p className="mb-6 text-gray-700">
          Pricing changes based on FDA shortage status, medication supply, and demand. The price
          you see when you sign up may differ from what is published here. Always verify current
          pricing on their website before making a decision.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle size={16} /> Pros
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>No live video required for most patients</li>
              <li>Month-to-month, no long-term contract</li>
              <li>Medical supervision included in monthly price</li>
              <li>Ships to most US states</li>
              <li>Multiple dose tiers available</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle size={16} /> Cons
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Not available in all states</li>
              <li>Compounded versions lose legal basis if shortage resolves</li>
              <li>Pharmacy partner quality varies</li>
              <li>Does not help navigate insurance for branded drugs</li>
              <li>Higher price than some competitors for equivalent doses</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Who Eden Health Is Right For</h2>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800">
          <li>Patients without insurance who want compounded GLP-1 with physician oversight</li>
          <li>Those whose primary care doctor will not prescribe GLP-1 medications</li>
          <li>Patients in states where Eden Health is licensed</li>
        </ul>

        <h2 className="text-2xl font-bold mt-2 mb-3">Who Should Look Elsewhere</h2>
        <ul className="list-disc list-inside mb-8 space-y-1 text-gray-800">
          <li>Patients who have insurance that covers Wegovy or Zepbound (branded is better)</li>
          <li>Those looking for the absolute lowest-cost option (Henry Meds typically starts lower)</li>
          <li>Patients who want a live video consultation as their primary preference</li>
        </ul>

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
          <li><Link href="/henry-meds-review" className="text-blue-600 hover:underline">Henry Meds Review</Link></li>
          <li><Link href="/ro-body-review" className="text-blue-600 hover:underline">Ro Body Review</Link></li>
          <li><Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">Compounding Pharmacy Directory</Link></li>
          <li><Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">GLP-1 FDA Shortage Status</Link></li>
          <li><Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">Cheapest GLP-1 Options</Link></li>
        </ul>
      </main>
    </>
  );
}
