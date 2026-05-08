import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Does Sesame Care prescribe GLP-1 medications?",
    answer:
      "Yes. Sesame Care connects patients with board-certified physicians who can evaluate and prescribe GLP-1 medications for weight loss. Sesame uses a pay-per-visit model, so you pay for each appointment rather than a monthly subscription. Some physicians on Sesame also prescribe compounded GLP-1 medications through telehealth.",
  },
  {
    question: "How much does a GLP-1 consultation cost on Sesame Care?",
    answer:
      "A GLP-1 or weight loss consultation on Sesame Care typically costs $80 to $200 per visit depending on the physician and visit type. This is lower than a traditional specialist visit. You pay separately for the medication through the pharmacy. There is no monthly platform fee.",
  },
  {
    question: "Is Sesame Care better than Henry Meds for GLP-1?",
    answer:
      "It depends on what you need. Sesame is pay-per-visit with no subscription, which costs less if you only need occasional consultations. Henry Meds includes ongoing monitoring in their monthly price. If you want more frequent check-ins, Henry Meds may be more cost-effective. If you only need a prescription and your own pharmacy, Sesame is more flexible.",
  },
  {
    question: "Does Sesame Care work with compounding pharmacies?",
    answer:
      "Physicians on Sesame can write prescriptions that patients can fill at compounding pharmacies of their choice. Sesame itself does not have an exclusive pharmacy partnership. You would need to find a compounding pharmacy that accepts external prescriptions, which some do and some do not.",
  },
];

export const metadata = {
  title: "Sesame Care GLP-1 Review (2026): Pay-Per-Visit Weight Loss Prescriptions",
  description:
    "Sesame Care review for GLP-1 weight loss prescriptions. Pay-per-visit model, board-certified physicians, and no subscription fee. Who it is right for.",
};

export default function SesameCareGlp1ReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Sesame Care GLP-1 Review", url: `${BASE}/sesame-care-glp1-review` },
        ]}
      />
      <ArticleSchema
        title="Sesame Care GLP-1 Review (2026): Pay-Per-Visit Weight Loss Prescriptions"
        description="Sesame Care review for GLP-1 weight loss prescriptions. Pay-per-visit model, board-certified physicians, and no subscription fee. Who it is right for."
        url={`${BASE}/sesame-care-glp1-review`}
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
          <span>Sesame Care GLP-1 Review</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Sesame Care GLP-1 Review (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">Pay-per-visit telehealth | Board-certified physicians | No subscription</p>

        <QuickVerdictBox
          winnerName="Sesame Care"
          winnerCategory="Pay-Per-Visit GLP-1 Telehealth"
          dreamOutcomeChain="Get a GLP-1 evaluation from a board-certified physician without a monthly subscription fee so you pay for care only when you need it."
          proofPoint="Board-certified physicians available in most US states. No monthly platform fee. $80-$200 per visit."
          affiliateUrl="https://sesamecare.com"
          ctaLabel="Book a GLP-1 Evaluation on Sesame"
          riskReversal="Pay per visit. No subscription required. Cancel any time."
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">Sesame Care at a Glance</h2>
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
                ["Model", "Pay-per-visit marketplace (not a subscription)"],
                ["Physicians", "Board-certified MDs and DOs"],
                ["Visit types", "Video, phone, or messaging depending on physician"],
                ["Consultation cost", "~$80-$200 per GLP-1 visit"],
                ["Monthly subscription", "None required"],
                ["Medications prescribed", "Can prescribe branded and compounded GLP-1 (physician-dependent)"],
                ["Pharmacy", "You fill the prescription at your pharmacy of choice"],
                ["State availability", "Most US states"],
                ["Best for", "Patients who need a prescription but not ongoing monthly monitoring"],
              ].map(([factor, detail]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">What Makes Sesame Different</h2>
        <p className="mb-3">
          Most GLP-1 telehealth platforms charge a monthly subscription that bundles the
          physician consultation with medication access. Sesame is a marketplace where you pay
          per appointment, and you fill your prescription separately.
        </p>
        <p className="mb-3">
          This model works well if you already have a preferred pharmacy or compounding pharmacy
          that accepts external prescriptions. You pay for the physician visit, get your
          prescription, and handle the rest yourself.
        </p>
        <p className="mb-6 text-gray-700">
          The tradeoff is that you manage more of the process yourself. You find the pharmacy,
          verify shortage status, and compare compounded medication prices independently. Platforms
          like Henry Meds handle all of that within one monthly price.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">How to Use Sesame for GLP-1</h2>
        <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-800">
          <li>Search Sesame for "weight loss" or "GLP-1" providers in your state</li>
          <li>Filter by appointment type (video, phone, messaging)</li>
          <li>Book with a physician who lists GLP-1 or weight management as a specialty</li>
          <li>At the appointment, discuss your health history and GLP-1 options</li>
          <li>If prescribed, take the prescription to a compounding pharmacy or use a GoodRx coupon at a retail pharmacy for branded versions</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle size={16} /> Pros
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>No monthly subscription required</li>
              <li>Board-certified physicians, not NPs only</li>
              <li>Choose your own pharmacy</li>
              <li>Transparent per-visit pricing</li>
              <li>Wide physician specialties available</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle size={16} /> Cons
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>You handle pharmacy logistics yourself</li>
              <li>No built-in compounding pharmacy discount</li>
              <li>Physician quality varies by individual doctor</li>
              <li>No monthly medication monitoring included in price</li>
              <li>Less structured weight loss support than full programs</li>
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
          <li><Link href="/henry-meds-review" className="text-blue-600 hover:underline">Henry Meds Review</Link></li>
          <li><Link href="/ro-body-review" className="text-blue-600 hover:underline">Ro Body Review</Link></li>
          <li><Link href="/glp1-telehealth-guide" className="text-blue-600 hover:underline">GLP-1 Telehealth Guide</Link></li>
          <li><Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">Cheapest GLP-1 Options</Link></li>
          <li><Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">Compounding Pharmacy Directory</Link></li>
        </ul>
      </main>
    </>
  );
}
