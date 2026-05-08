import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "Is GLP-1 available by telehealth in all 50 states?",
    answer:
      "Most major telehealth GLP-1 platforms operate in 40+ states. Coverage gaps are most common in certain states where telehealth prescribing laws for controlled substances or weight management medications are more restrictive. Henry Meds, Ro Body, and Hims Weight Loss each list their covered states on their websites. Check before signing up.",
  },
  {
    question: "Can I get compounded semaglutide shipped to any state?",
    answer:
      "Compounded drugs can be dispensed across state lines when prescribed by a licensed physician in the patient's state. The pharmacy must hold appropriate licensure in the state where the patient resides or the shipping destination. Reputable telehealth platforms handle this automatically. The drug must also be on the FDA shortage list at the time of dispensing. Verify current status.",
  },
  {
    question: "Which states have the best GLP-1 insurance coverage?",
    answer:
      "Several states mandate insurance coverage for obesity treatment including medications. States with active mandates or stronger coverage requirements as of 2025 include Massachusetts, New York (state employee plans), Illinois, and Oregon. State Medicaid plans vary widely. Check your specific plan's formulary regardless of state mandate.",
  },
  {
    question: "What if no telehealth GLP-1 platform covers my state?",
    answer:
      "Your primary care physician or an endocrinologist or obesity medicine specialist in your area can prescribe GLP-1 medications. In-person prescriptions are available in all states. Telehealth coverage gaps do not mean GLP-1 access is unavailable, just that specific platforms may not serve your state.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "GLP-1 Pharmacy by State", url: `${BASE}/glp1-pharmacy-by-state` },
];

export const metadata = {
  title: "GLP-1 Access by State (2026): Telehealth Coverage and Prescribing",
  description:
    "Where can you get GLP-1 medications in your state? Telehealth platform coverage, compounding pharmacy access, and insurance coverage by state.",
};

const TOP_METRO_DATA = [
  { state: "California", metros: "Los Angeles, San Francisco, San Diego", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Covered (limited)", notes: "Large compounding pharmacy network in CA" },
  { state: "Texas", metros: "Houston, Dallas, Austin, San Antonio", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Limited coverage", notes: "Large population, strong telehealth access" },
  { state: "Florida", metros: "Miami, Orlando, Tampa, Jacksonville", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Limited coverage", notes: "High demand, many compounding pharmacies" },
  { state: "New York", metros: "New York City, Buffalo, Albany", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Covered (state employee plans)", notes: "State mandate for some plans" },
  { state: "Pennsylvania", metros: "Philadelphia, Pittsburgh", platforms: "Henry Meds, Ro Body, Hims, Mochi", medicaid: "Limited coverage", notes: "Check platform availability by zip" },
  { state: "Illinois", metros: "Chicago, Springfield", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Some coverage", notes: "Active obesity treatment mandate discussions" },
  { state: "Ohio", metros: "Columbus, Cleveland, Cincinnati", platforms: "Henry Meds, Ro Body, Hims, Mochi", medicaid: "Limited coverage", notes: "Growing telehealth access" },
  { state: "Georgia", metros: "Atlanta, Savannah", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Limited coverage", notes: "High obesity rate, growing demand" },
  { state: "North Carolina", metros: "Charlotte, Raleigh, Durham", platforms: "Henry Meds, Ro Body, Hims, Mochi", medicaid: "Limited coverage", notes: "Expanded Medicaid in 2023" },
  { state: "Michigan", metros: "Detroit, Grand Rapids", platforms: "Henry Meds, Ro Body, Hims, Mochi", medicaid: "Limited coverage", notes: "Check specific platform availability" },
  { state: "New Jersey", metros: "Newark, Jersey City", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Some coverage", notes: "Near NY metro, strong telehealth" },
  { state: "Virginia", metros: "Virginia Beach, Richmond, Arlington", platforms: "Henry Meds, Ro Body, Hims, Mochi", medicaid: "Limited coverage", notes: "Growing telehealth market" },
  { state: "Washington", metros: "Seattle, Spokane", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Some coverage", notes: "Strong tech-sector insurance coverage" },
  { state: "Arizona", metros: "Phoenix, Tucson", platforms: "Henry Meds, Ro Body, Hims, Mochi", medicaid: "Limited coverage", notes: "Active telehealth market" },
  { state: "Massachusetts", metros: "Boston, Worcester", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Stronger coverage", notes: "State mandate history; better plan coverage" },
  { state: "Tennessee", metros: "Nashville, Memphis", platforms: "Henry Meds, Ro Body, Hims", medicaid: "Limited coverage", notes: "Verify platform availability" },
  { state: "Indiana", metros: "Indianapolis, Fort Wayne", platforms: "Henry Meds, Ro Body, Hims", medicaid: "Limited coverage", notes: "Check platform state lists" },
  { state: "Missouri", metros: "St. Louis, Kansas City", platforms: "Henry Meds, Ro Body, Hims, Mochi", medicaid: "Limited coverage", notes: "Mid-tier telehealth access" },
  { state: "Maryland", metros: "Baltimore, Rockville", platforms: "Henry Meds, Ro Body, Hims, Mochi, Form Health", medicaid: "Some coverage", notes: "Near DC metro, strong coverage" },
  { state: "Colorado", metros: "Denver, Colorado Springs", platforms: "Henry Meds, Ro Body, Hims, Mochi", medicaid: "Some coverage", notes: "Active telehealth ecosystem" },
];

export default function Glp1PharmacyByStatePage() {
  return (
    <>
      <ArticleSchema
        title="GLP-1 Access by State (2026): Telehealth Coverage and Prescribing"
        description="Where can you get GLP-1 medications in your state? Telehealth platform coverage, compounding pharmacy access, and insurance coverage by state."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/glp1-pharmacy-by-state`}
      />
      <FAQSchema questions={faqQuestions} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* YMYL Medical Disclaimer */}
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <Shield className="text-amber-600 mt-0.5 shrink-0" size={20} />
          <p className="text-sm text-amber-900">
            This page is for informational purposes only. Platform availability and insurance
            coverage change frequently. Verify current platform coverage on each provider's
            website before signing up.
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
          <span>GLP-1 Access by State</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">GLP-1 Access by State (2026)</h1>

        <p className="text-gray-600 mb-8">
          GLP-1 prescribing availability varies by where you live. Telehealth platforms serve most
          but not all states. Medicaid and state insurance mandates differ widely. This page covers
          the top 20 US metros so you can find out what is available where you are.
        </p>

        {/* Overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-1">Quick summary</p>
          <p className="text-blue-800 text-sm">
            Most major telehealth GLP-1 platforms (Henry Meds, Ro Body, Hims Weight Loss, Mochi
            Health, Form Health) serve 40 or more states. Coverage gaps are most common in rural
            states and states with stricter telehealth prescribing laws. All states have in-person
            prescribing options through primary care or specialist physicians.
          </p>
        </div>

        {/* State Table */}
        <h2 className="text-2xl font-bold mt-6 mb-4">GLP-1 Access by State: Top 20 Metros</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">State</th>
                <th className="text-left px-3 py-2 border border-gray-200">Key metros</th>
                <th className="text-left px-3 py-2 border border-gray-200">Telehealth platforms</th>
                <th className="text-left px-3 py-2 border border-gray-200">Medicaid</th>
                <th className="text-left px-3 py-2 border border-gray-200">Notes</th>
              </tr>
            </thead>
            <tbody>
              {TOP_METRO_DATA.map(({ state, metros, platforms, medicaid, notes }, idx) => (
                <tr key={state} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{state}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{metros}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{platforms}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{medicaid}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs text-gray-600">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          Platform availability may change. Verify current coverage on each platform's website.
          Medicaid coverage status is approximate and varies by plan type and formulary.
        </p>

        {/* How to Find GLP-1 in Your State */}
        <h2 className="text-2xl font-bold mt-10 mb-3">How to Find GLP-1 Access in Your State</h2>
        <p className="mb-3 font-medium">Step 1: Check telehealth platform coverage</p>
        <p className="mb-3">
          Each platform lists its covered states on its website. Henry Meds, Ro Body, and Hims
          Weight Loss each have a "state availability" page or a signup flow that asks for your
          state upfront.
        </p>
        <p className="mb-3 font-medium">Step 2: Check your insurance formulary</p>
        <p className="mb-3">
          Log in to your insurance portal and search for "semaglutide" or "tirzepatide" in the drug
          lookup. Look for whether the drug requires prior authorization and what tier it falls under.
        </p>
        <p className="mb-3 font-medium">Step 3: Check FDA shortage status if considering compounded</p>
        <p className="mb-6 text-gray-700">
          Verify that the drug you want compounded is on the current FDA shortage list at{" "}
          <a
            href="https://www.accessdata.fda.gov/scripts/drugshortages"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            accessdata.fda.gov
          </a>
          . See our{" "}
          <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
            GLP-1 shortage status page
          </Link>{" "}
          for context.
        </p>

        {/* What If Your State Has No Coverage */}
        <h2 className="text-2xl font-bold mt-10 mb-3">What If No Telehealth Platform Covers Your State</h2>
        <p className="mb-3">
          GLP-1 medications are available in every US state through in-person prescribing. Your
          options:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800">
          <li>Ask your primary care physician about GLP-1 eligibility</li>
          <li>Ask for a referral to an endocrinologist or obesity medicine specialist</li>
          <li>Check whether any telehealth platform recently expanded to your state</li>
          <li>Use GoodRx or manufacturer savings cards to reduce cost on branded drugs</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Telehealth gaps affect convenience, not access entirely. A local prescriber who is
          familiar with GLP-1 protocols can be just as effective as a telehealth physician.
        </p>

        {/* State Medicaid Context */}
        <h2 className="text-2xl font-bold mt-10 mb-3">State Medicaid and GLP-1 Coverage</h2>
        <p className="mb-3">
          Federal Medicare Part D does not cover GLP-1 medications for weight loss as of 2025.
          State Medicaid plans vary widely.
        </p>
        <p className="mb-3">
          Some states have carved out coverage for obesity treatment medications in their Medicaid
          formularies. Massachusetts and New York have been among the more aggressive states in
          expanding coverage. Most states provide limited or no Medicaid coverage for GLP-1 drugs
          prescribed for weight loss (as opposed to diabetes treatment).
        </p>
        <p className="mb-6 text-gray-700">
          If you are on Medicaid, call your plan's pharmacy benefit line and ask specifically about
          "tirzepatide" and "semaglutide" coverage for weight management. Coverage can differ
          between Medicaid managed care plans within the same state.
        </p>

        {/* Telehealth Platform Links */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Telehealth Platform Reviews</h2>
        <p className="mb-4">Full reviews of each platform with pricing, state availability, and prescriber model:</p>
        <ul className="list-disc list-inside mb-8 space-y-1 text-sm">
          <li><Link href="/henry-meds-review" className="text-blue-600 hover:underline">Henry Meds Review</Link></li>
          <li><Link href="/ro-body-review" className="text-blue-600 hover:underline">Ro Body Review</Link></li>
          <li><Link href="/hims-weight-loss-review" className="text-blue-600 hover:underline">Hims Weight Loss Review</Link></li>
          <li><Link href="/mochi-health-review" className="text-blue-600 hover:underline">Mochi Health Review</Link></li>
          <li><Link href="/form-health-review" className="text-blue-600 hover:underline">Form Health Review</Link></li>
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
            GLP-1 medication eligibility depends on your health history, your state, and your
            insurance plan. Talk to your doctor before starting any weight loss medication.
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
            <Link href="/glp1-without-insurance" className="text-blue-600 hover:underline">
              GLP-1 Without Insurance
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
          <li>
            <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
              GLP-1 FDA Shortage Status
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
