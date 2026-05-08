import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";
import { TopPickHighlight } from "@/components/effects/top-pick-highlight";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "What is the cheapest GLP-1 medication?",
    answer:
      "Compounded semaglutide through a licensed telehealth platform is the cheapest route for most people without insurance. Prices range from $99 to $299 per month depending on dose and provider. Henry Meds starts at around $197 per month. Hims offers low starter doses from $99 per month. These are only legally available when the branded drug is on the FDA shortage list.",
  },
  {
    question: "How do GLP-1 savings cards work?",
    answer:
      "Manufacturer savings cards reduce your out-of-pocket co-pay at the pharmacy. Novo Nordisk offers a $25 per month co-pay card for Ozempic and a separate savings program for Wegovy. Eli Lilly offers a $25 co-pay card for Mounjaro and a $550 maximum monthly cap for Zepbound. These cards require commercial insurance. They do not work for Medicare or Medicaid patients.",
  },
  {
    question: "Is compounded semaglutide the same quality as Ozempic?",
    answer:
      "Compounded semaglutide uses the same active ingredient but is produced in compounding pharmacies rather than by Novo Nordisk. FDA-registered compounding pharmacies follow strict quality standards but compounded drugs do not go through the same FDA approval process as branded drugs. Compounding is legal when the branded drug is on the FDA shortage list. Always use a licensed, FDA-registered 503B pharmacy.",
  },
  {
    question: "Can I get a GLP-1 free through insurance?",
    answer:
      "Some insurance plans cover GLP-1 medications with a zero-dollar co-pay after meeting your deductible, but this varies widely. Most require prior authorization and a documented diagnosis. For weight loss, many plans require BMI of 30 or higher, or BMI of 27 or higher with a qualifying condition like type 2 diabetes or hypertension. Check your plan's formulary and prior authorization requirements.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "Cheapest GLP-1 Options", url: `${BASE}/cheapest-glp1-options` },
];

export const metadata = {
  title: "Cheapest GLP-1 Options in 2026: From $99/mo to Branded",
  description:
    "Ranked by monthly cost: compounded semaglutide, savings cards, and branded GLP-1 medications. How to get the lowest price on Ozempic, Wegovy, Mounjaro, and Zepbound.",
};

export default function CheapestGlp1OptionsPage() {
  return (
    <>
      <ArticleSchema
        title="Cheapest GLP-1 Options in 2026: From $99/mo to Branded"
        description="Ranked by monthly cost: compounded semaglutide, savings cards, and branded GLP-1 medications. How to get the lowest price on Ozempic, Wegovy, Mounjaro, and Zepbound."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/cheapest-glp1-options`}
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
          <span>Cheapest GLP-1 Options</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Cheapest GLP-1 Options in 2026</h1>
        <p className="text-gray-600 mb-8">
          GLP-1 medications ranked from least to most expensive per month, with every cost-reduction
          strategy explained.
        </p>

        {/* QuickVerdictBox */}
        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="Budget GLP-1 Program"
          dreamOutcomeChain="Start physician-supervised compounded semaglutide at one of the lowest prices in the telehealth GLP-1 market, so the monthly cost stays under your budget, so you stay on the medication long enough to see the full result."
          proofPoint="Licensed physicians. Compounded semaglutide from $197/mo. No hidden fees."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="Check Henry Meds Pricing"
          riskReversal="No long-term contract. Cancel anytime."
        />

        {/* Ranked Options */}
        <h2 className="text-2xl font-bold mt-10 mb-4">GLP-1 Options Ranked by Monthly Cost</h2>

        {/* Option 1 */}
        <div className="border border-gray-200 rounded-lg p-5 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">
              CHEAPEST
            </span>
            <h3 className="font-bold text-lg">Compounded Semaglutide via Telehealth</h3>
          </div>
          <p className="text-2xl font-bold text-green-700 mb-2">$99 to $299/mo</p>
          <p className="text-sm text-gray-700 mb-2">
            Compounded semaglutide from a licensed 503B compounding pharmacy, prescribed through a
            telehealth platform. Available when the branded drug (Ozempic/Wegovy) is on the FDA
            shortage list. Dose varies by platform.
          </p>
          <p className="text-sm text-gray-500">
            Examples: Hims (~$99/mo, low doses), Henry Meds (~$197/mo), various telehealth platforms
            ($150-299/mo depending on dose).
          </p>
        </div>

        {/* Option 2 */}
        <div className="border border-gray-200 rounded-lg p-5 mb-4">
          <h3 className="font-bold text-lg mb-2">Compounded Tirzepatide via Telehealth</h3>
          <p className="text-2xl font-bold text-green-700 mb-2">$199 to $400/mo</p>
          <p className="text-sm text-gray-700 mb-2">
            Compounded tirzepatide (the active ingredient in Mounjaro and Zepbound) from licensed
            compounding pharmacies. Higher cost than compounded semaglutide due to the active
            ingredient cost. Check current FDA shortage status — availability changes.
          </p>
          <p className="text-sm text-gray-500">
            Various telehealth platforms offer compounded tirzepatide when legally available.
          </p>
        </div>

        {/* Option 3 */}
        <div className="border border-gray-200 rounded-lg p-5 mb-4">
          <h3 className="font-bold text-lg mb-2">Branded GLP-1 with Insurance + Savings Card</h3>
          <p className="text-2xl font-bold text-yellow-700 mb-2">$25 to $550/mo</p>
          <p className="text-sm text-gray-700 mb-2">
            If your insurance covers a GLP-1 medication, adding the manufacturer savings card on
            top can reduce your monthly out-of-pocket cost dramatically. Results vary based on your
            plan tier, deductible, and which drug is covered.
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Ozempic: $25/mo co-pay card (eligible commercial insured)</li>
            <li>Mounjaro: $25/mo co-pay card (eligible commercial insured)</li>
            <li>Wegovy: savings program, variable</li>
            <li>Zepbound: $550 maximum per month cap</li>
          </ul>
        </div>

        {/* Option 4 */}
        <div className="border border-gray-200 rounded-lg p-5 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded">
              MOST EXPENSIVE
            </span>
            <h3 className="font-bold text-lg">Branded GLP-1 Without Insurance</h3>
          </div>
          <p className="text-2xl font-bold text-red-700 mb-2">$935 to $1,349/mo</p>
          <p className="text-sm text-gray-700">
            Full retail cost of branded GLP-1 medications without any insurance or discount:
            Ozempic ~$935/mo, Mounjaro ~$1,060/mo, Zepbound ~$1,060/mo, Wegovy ~$1,349/mo.
          </p>
        </div>

        {/* How to Get the Cheapest Option */}
        <h2 className="text-2xl font-bold mt-10 mb-4">How to Get the Cheapest Option</h2>
        <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-800">
          <li>
            <span className="font-semibold">Check your insurance first.</span> Log into your plan
            portal or call member services. Ask which GLP-1 medications are on the formulary and
            what tier they are.
          </li>
          <li>
            <span className="font-semibold">If covered:</span> Request the formulary drug with the
            best tier. Apply for the manufacturer savings card on top of your insurance co-pay.
          </li>
          <li>
            <span className="font-semibold">If not covered:</span> Explore telehealth platforms
            offering compounded semaglutide. This is the lowest cost route without insurance. Henry
            Meds starts at $197/mo, Hims at $99/mo for lower starter doses.
          </li>
        </ol>

        {/* Manufacturer Savings Programs */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Manufacturer Savings Programs</h2>
        <TopPickHighlight hue={213} ariaLabel="GLP-1 manufacturer savings programs comparison">
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Drug</th>
                <th className="text-left px-3 py-2 border border-gray-200">Maker</th>
                <th className="text-left px-3 py-2 border border-gray-200">Program</th>
                <th className="text-left px-3 py-2 border border-gray-200">Medicare eligible?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ozempic", "Novo Nordisk", "$25/mo co-pay card", "No"],
                ["Wegovy", "Novo Nordisk", "Wegovy savings card", "No"],
                ["Mounjaro", "Eli Lilly", "$25/mo co-pay card", "No"],
                ["Zepbound", "Eli Lilly", "$550 monthly max", "No"],
              ].map(([drug, maker, program, medicare]) => (
                <tr key={drug} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium">{drug}</td>
                  <td className="px-3 py-2 border border-gray-200">{maker}</td>
                  <td className="px-3 py-2 border border-gray-200">{program}</td>
                  <td className="px-3 py-2 border border-gray-200">{medicare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </TopPickHighlight>

        {/* GoodRx Note */}
        <h2 className="text-2xl font-bold mt-10 mb-3">GoodRx and Discount Cards</h2>
        <p className="mb-6 text-gray-700">
          GoodRx and similar prescription discount programs can reduce the retail cost of branded
          GLP-1 medications but typically not below $700 per month. For those without insurance,
          the compounded telehealth route is usually a lower monthly cost than GoodRx on branded
          drugs.
        </p>

        {/* Compounding Note */}
        <h2 className="text-2xl font-bold mt-10 mb-3">The Compounding Pharmacy Route</h2>
        <p className="mb-3">
          Compounding pharmacies can legally produce semaglutide and tirzepatide when the branded
          version is on the FDA drug shortage list. The FDA shortage status of these drugs changes
          over time.
        </p>
        <p className="mb-6 text-gray-700">
          If the FDA removes a drug from the shortage list, compounding pharmacies have a wind-down
          period before they must stop producing that compound. Always check current shortage status
          at the FDA website or ask your telehealth provider.
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
            Cost matters, but so does safety. Whatever route you choose, make sure a licensed
            physician supervises your GLP-1 use. Talk to your doctor before starting, changing, or
            stopping any medication.
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
            <Link href="/compounded-semaglutide" className="text-blue-600 hover:underline">
              Compounded Semaglutide Guide
            </Link>
          </li>
          <li>
            <Link href="/henry-meds-review" className="text-blue-600 hover:underline">
              Henry Meds Review
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
