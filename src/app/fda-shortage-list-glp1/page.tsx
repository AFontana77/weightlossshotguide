import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "Is semaglutide currently on the FDA shortage list?",
    answer:
      "As of early 2026, semaglutide (Ozempic and Wegovy) had remained on the FDA drug shortage list longer than tirzepatide. Shortage status changes without notice. Always check the FDA drug shortage database at accessdata.fda.gov/scripts/drugshortages before ordering compounded versions. This page cannot reflect real-time FDA status.",
  },
  {
    question: "Is tirzepatide currently on the FDA shortage list?",
    answer:
      "Eli Lilly stated that Mounjaro and Zepbound supply normalized in late 2024. The FDA removed tirzepatide from the drug shortage list in early 2025. This means most 503A compounding pharmacies lost the legal authority to compound tirzepatide for routine patients. Some 503B outsourcing facilities can still compound for specific patient orders meeting narrow criteria. Verify current status before ordering.",
  },
  {
    question: "Why does the FDA shortage list matter for compounding?",
    answer:
      "Under federal law, 503A compounding pharmacies can compound a commercially available drug only under limited conditions, including when that drug appears on the FDA drug shortage list. When a drug is removed from the shortage list, 503A pharmacies lose the legal basis to compound it for most patients. Ordering or dispensing compounded versions of a non-shortage drug from a 503A pharmacy may violate federal law.",
  },
  {
    question: "What is the difference between a 503A and 503B compounding pharmacy?",
    answer:
      "503A pharmacies are traditional state-licensed compounding pharmacies. They can compound drugs on the FDA shortage list for patient-specific prescriptions. 503B outsourcing facilities are federally registered and inspected, and can compound in larger quantities. Both types of facilities have different rules for when they can compound tirzepatide or semaglutide. See our 503A vs 503B explainer for the full comparison.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "GLP-1 FDA Shortage List Status", url: `${BASE}/fda-shortage-list-glp1` },
];

export const metadata = {
  title: "GLP-1 FDA Shortage List Status (2026): Semaglutide and Tirzepatide",
  description:
    "Is semaglutide or tirzepatide on the FDA drug shortage list? Here is what the shortage list means, why it matters for compounding, and where to verify current status.",
};

export default function FdaShortageListGlp1Page() {
  return (
    <>
      <ArticleSchema
        title="GLP-1 FDA Shortage List Status (2026): Semaglutide and Tirzepatide"
        description="Is semaglutide or tirzepatide on the FDA drug shortage list? Here is what the shortage list means, why it matters for compounding, and where to verify current status."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/fda-shortage-list-glp1`}
      />
      <FAQSchema questions={faqQuestions} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* YMYL Medical Disclaimer */}
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <Shield className="text-amber-600 mt-0.5 shrink-0" size={20} />
          <p className="text-sm text-amber-900">
            This page is for informational purposes only. Shortage status changes without notice.
            Always verify current FDA drug shortage status at{" "}
            <a
              href="https://www.accessdata.fda.gov/scripts/drugshortages"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              accessdata.fda.gov
            </a>{" "}
            before ordering compounded GLP-1 medications.
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
          <span>GLP-1 FDA Shortage Status</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">GLP-1 FDA Drug Shortage Status (2026)</h1>

        <p className="text-gray-600 mb-8">
          Whether you can legally order compounded semaglutide or tirzepatide depends on whether
          those drugs are on the FDA drug shortage list. Here is what the list is, why it matters,
          and what the current status means for patients looking for affordable GLP-1 access.
        </p>

        {/* Status Summary Table */}
        <h2 className="text-2xl font-bold mt-4 mb-4">Current Status Summary</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Drug</th>
                <th className="text-left px-3 py-2 border border-gray-200">Brand names</th>
                <th className="text-left px-3 py-2 border border-gray-200">Shortage status (last updated May 2026)</th>
                <th className="text-left px-3 py-2 border border-gray-200">503A compounding legal?</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Semaglutide",
                  "Ozempic, Wegovy, Rybelsus",
                  "On shortage list as of early 2026",
                  "Yes, while on shortage list",
                ],
                [
                  "Tirzepatide",
                  "Mounjaro, Zepbound",
                  "Removed from shortage list (early 2025)",
                  "No, shortage resolved",
                ],
              ].map(([drug, brands, status, legal]) => (
                <tr key={drug} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{drug}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{brands}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{status}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{legal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-amber-900 font-medium mb-1">Important: This table reflects status as of May 2026.</p>
          <p className="text-sm text-amber-800">
            Shortage status changes without advance notice. Verify at the{" "}
            <a
              href="https://www.accessdata.fda.gov/scripts/drugshortages"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              FDA drug shortage database
            </a>{" "}
            before ordering any compounded GLP-1 product.
          </p>
        </div>

        {/* What the Shortage List Is */}
        <h2 className="text-2xl font-bold mt-10 mb-3">What the FDA Drug Shortage List Is</h2>
        <p className="mb-3">
          The FDA maintains a current list of drug products in shortage. A drug appears on the list
          when supply cannot meet medical demand. The FDA tracks this under the Federal Food, Drug,
          and Cosmetic Act.
        </p>
        <p className="mb-3">
          Manufacturers are required to notify the FDA when they anticipate a meaningful disruption
          in supply. The FDA then evaluates whether to post the drug on the shortage database and
          whether to request additional production.
        </p>
        <p className="mb-6 text-gray-700">
          The shortage list is public and searchable. It lists the drug name, manufacturer, reason
          for shortage, and whether the shortage is resolved. It updates frequently. One search
          on the official database is the only reliable way to check current status.
        </p>

        {/* Why It Matters for Compounding */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Why the Shortage List Controls Compounding Rights</h2>
        <p className="mb-3">
          503A compounding pharmacies are traditional state-licensed pharmacies that compound drugs
          for individual patient prescriptions. Under the Drug Quality and Security Act, 503A
          pharmacies cannot compound drugs that are essentially copies of commercially available
          FDA-approved products.
        </p>
        <p className="mb-3">
          There is one major exception: a 503A pharmacy can compound a drug that appears on the FDA
          drug shortage list because patient access is impaired. This is the legal basis for
          compounded semaglutide and tirzepatide during their respective shortage periods.
        </p>
        <p className="mb-6 text-gray-700">
          Once a drug is removed from the shortage list, the legal justification for 503A
          compounding disappears for most patients. Pharmacies that continue to dispense compounded
          versions of non-shortage drugs risk enforcement action from the FDA. Patients ordering
          them may receive products with no clear legal standing.
        </p>

        {/* Tirzepatide Shortage Timeline */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Tirzepatide: Shortage Resolved</h2>
        <p className="mb-3">
          Mounjaro (tirzepatide for T2D) first appeared on the FDA shortage list in 2022 as demand
          outpaced Eli Lilly production. Zepbound (tirzepatide for obesity) launched into an already
          strained supply in 2023.
        </p>
        <p className="mb-3">
          During the shortage, licensed compounding pharmacies offered compounded tirzepatide at
          $250 to $500 per month. Many patients used telehealth platforms to access it at a fraction
          of the branded cost.
        </p>
        <p className="mb-3">
          Eli Lilly significantly expanded manufacturing capacity through 2024. In a public
          statement in late 2024, Lilly declared supply normalized. The FDA removed tirzepatide
          from the shortage list in early 2025.
        </p>
        <p className="mb-6 text-gray-700">
          503A compounding pharmacies lost the legal basis to compound tirzepatide for routine
          prescriptions after the removal. Some 503B outsourcing facilities may still compound
          tirzepatide under narrow criteria for specific patient orders, but this does not apply
          to most patients seeking affordable access.
        </p>

        {/* Semaglutide Shortage Timeline */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Semaglutide: Shortage Ongoing as of Early 2026</h2>
        <p className="mb-3">
          Ozempic (semaglutide for T2D) and Wegovy (semaglutide for obesity) entered shortage as
          demand from off-label weight loss use exceeded Novo Nordisk production capacity.
        </p>
        <p className="mb-3">
          Novo Nordisk has expanded manufacturing, but the semaglutide shortage has been harder to
          resolve than the tirzepatide shortage. As of early 2026, semaglutide remained on the FDA
          drug shortage list, meaning 503A compounding pharmacies could still legally compound it.
        </p>
        <p className="mb-6 text-gray-700">
          This situation is subject to change at any time. Novo Nordisk has stated publicly that
          they continue to expand capacity. A shortage resolution announcement could come with short
          notice, immediately changing the legal landscape for compounded semaglutide.
        </p>

        {/* How to Verify */}
        <h2 className="text-2xl font-bold mt-10 mb-3">How to Verify Current Shortage Status</h2>
        <p className="mb-3">
          The FDA updates the drug shortage database in real time. This is the only authoritative
          source.
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-800">
          <li>
            Go to{" "}
            <a
              href="https://www.accessdata.fda.gov/scripts/drugshortages"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              accessdata.fda.gov/scripts/drugshortages
            </a>
          </li>
          <li>Search for "semaglutide" or "tirzepatide"</li>
          <li>Check whether the drug appears as "Current Shortage" or "Resolved"</li>
          <li>Note the date the status was last updated</li>
        </ol>
        <p className="mb-6 text-gray-700">
          Telehealth platforms that offer compounded GLP-1 medications are required to verify
          shortage status before dispensing. A reputable platform will cite current shortage status
          and update their messaging when the landscape changes. If a platform does not mention
          shortage status, ask them directly before ordering.
        </p>

        {/* What Happens to Programs When Shortage Resolves */}
        <h2 className="text-2xl font-bold mt-10 mb-3">What Happens to Telehealth Programs When a Shortage Resolves</h2>
        <p className="mb-3">
          When the FDA resolves a shortage, telehealth platforms offering compounded versions of
          that drug face a compliance deadline. The FDA typically provides a grace period before
          enforcement. During that period, platforms must transition patients to branded drugs or
          discontinue the compounded offering.
        </p>
        <p className="mb-3">
          For tirzepatide, the FDA gave compounding pharmacies a limited wind-down period after
          removal from the shortage list. Platforms that continued to sell compounded tirzepatide
          past that deadline risked FDA enforcement.
        </p>
        <p className="mb-6 text-gray-700">
          If you are currently on a compounded GLP-1 program and the shortage resolves, your
          platform should notify you. Ask your provider what happens to your prescription and
          pricing when the shortage status changes. Plan ahead.
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
            Drug shortage status changes frequently. Always verify current status at the FDA drug
            shortage database before ordering compounded GLP-1 medications. Talk to your doctor
            before starting, changing, or stopping any weight loss medication.
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
            <Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">
              Compounding Pharmacy Directory
            </Link>
          </li>
          <li>
            <Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">
              Cheapest GLP-1 Options
            </Link>
          </li>
          <li>
            <Link href="/glp1-without-insurance" className="text-blue-600 hover:underline">
              GLP-1 Without Insurance
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
