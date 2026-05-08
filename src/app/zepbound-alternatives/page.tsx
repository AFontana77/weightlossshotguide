import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "What is the cheapest alternative to Zepbound?",
    answer:
      "Compounded tirzepatide is the cheapest option when legally available, typically $250 to $500 per month through licensed telehealth platforms. However, Eli Lilly stated that tirzepatide supply normalized in late 2024, and the FDA removed it from the shortage list in early 2025. Compounding pharmacies lost the legal basis to compound tirzepatide for most patients after that. Verify current FDA shortage status before ordering. Compounded semaglutide may still be available if semaglutide remains on shortage.",
  },
  {
    question: "Is Wegovy a good alternative to Zepbound?",
    answer:
      "Wegovy (semaglutide) works well as an alternative. In the SURMOUNT-5 head-to-head trial, Zepbound produced greater weight loss (20.2% versus 13.7%). But Wegovy is still highly effective. If your insurance covers Wegovy and not Zepbound, Wegovy is the right clinical choice for your situation. Talk to your doctor.",
  },
  {
    question: "Can I use Mounjaro instead of Zepbound?",
    answer:
      "Mounjaro and Zepbound contain the same drug: tirzepatide at the same doses. Mounjaro is FDA-approved for type 2 diabetes. Some doctors prescribe it off-label for weight loss. If you have type 2 diabetes and obesity, your prescriber may write for Mounjaro if it has better insurance coverage in your plan. The molecule is identical.",
  },
  {
    question: "Does insurance cover Zepbound alternatives?",
    answer:
      "Coverage varies by drug and plan. Wegovy requires prior authorization on most plans. Mounjaro (for T2D) is covered more broadly because diabetes drugs are covered more often than obesity drugs. Compounded options are not covered by insurance. GLP-1 telehealth programs typically do not bill insurance, but some work with your insurer for prior authorization on branded drugs.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "Zepbound Alternatives", url: `${BASE}/zepbound-alternatives` },
];

export const metadata = {
  title: "Zepbound Alternatives (2026): Cheaper Paths to Tirzepatide",
  description:
    "Zepbound not covered by insurance? Compare every alternative: compounded tirzepatide, Wegovy, Mounjaro off-label, compounded semaglutide, and telehealth GLP-1 programs.",
};

export default function ZepboundAlternativesPage() {
  return (
    <>
      <ArticleSchema
        title="Zepbound Alternatives (2026): Cheaper Paths to Tirzepatide"
        description="Zepbound not covered by insurance? Compare every alternative: compounded tirzepatide, Wegovy, Mounjaro off-label, compounded semaglutide, and telehealth GLP-1 programs."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/zepbound-alternatives`}
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
          <span>Zepbound Alternatives</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Zepbound Alternatives (2026)</h1>

        <p className="text-gray-600 mb-8">
          Zepbound costs about $1,060 per month without insurance. Many plans do not cover obesity
          medications. If cost or coverage is the barrier, these are your real options and what each
          one actually costs.
        </p>

        {/* QuickVerdictBox */}
        <QuickVerdictBox
          winnerName="Henry Meds"
          winnerCategory="GLP-1 Telehealth Program"
          dreamOutcomeChain="Get a licensed provider to evaluate you for the most affordable tirzepatide or semaglutide path this week so you start treatment instead of waiting another month."
          proofPoint="GLP-1 programs starting at $99/mo. Licensed physicians. Most US states."
          affiliateUrl="https://www.henrymeds.com"
          ctaLabel="Get Evaluated by Henry Meds"
          riskReversal="Month-to-month. Cancel any time."
        />

        {/* Overview Table */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Zepbound Alternatives Compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Alternative</th>
                <th className="text-left px-3 py-2 border border-gray-200">Active drug</th>
                <th className="text-left px-3 py-2 border border-gray-200">Avg weight loss</th>
                <th className="text-left px-3 py-2 border border-gray-200">Monthly cost</th>
                <th className="text-left px-3 py-2 border border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Zepbound (reference)", "Tirzepatide", "20-22%", "~$1,060", "FDA-approved (obesity)"],
                ["Compounded tirzepatide", "Tirzepatide (compounded)", "Similar to Zepbound*", "$250-$500", "Legal only during FDA shortage"],
                ["Mounjaro off-label", "Tirzepatide", "Same as Zepbound", "~$1,060", "Approved (T2D); off-label for weight loss"],
                ["Wegovy", "Semaglutide", "15-17%", "~$1,349", "FDA-approved (obesity)"],
                ["Compounded semaglutide", "Semaglutide (compounded)", "Similar to Wegovy*", "$99-$299", "Legal only during FDA shortage"],
                ["Ozempic off-label", "Semaglutide", "Lower at 2 mg", "~$900-$1,000", "Approved (T2D); off-label for weight loss"],
              ].map(([alt, drug, loss, cost, status]) => (
                <tr key={alt} className={alt === "Zepbound (reference)" ? "bg-gray-100" : "odd:bg-white even:bg-gray-50"}>
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{alt}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{drug}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{loss}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{cost}</td>
                  <td className="px-3 py-2 border border-gray-200 text-xs">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          *Compounded versions use the same active ingredient. Clinical trial data from branded
          drugs is not directly transferable to compounded forms. Weight loss results should be
          similar at equivalent doses, but this has not been studied in controlled trials for
          compounded versions specifically.
        </p>

        {/* Alternative 1: Compounded Tirzepatide */}
        <h2 className="text-2xl font-bold mt-10 mb-3">1. Compounded Tirzepatide</h2>
        <p className="mb-3">
          Compounded tirzepatide was the cheapest path to tirzepatide during the Mounjaro/Zepbound
          drug shortage. Telehealth platforms offered it at $250 to $500 per month.
        </p>
        <p className="mb-3">
          Eli Lilly stated that tirzepatide supply had normalized by late 2024. The FDA officially
          removed tirzepatide from the drug shortage list in early 2025.
        </p>
        <p className="mb-6 text-gray-700">
          This matters because 503A compounding pharmacies can only compound a drug when it is on
          the FDA shortage list. Once removed, they lose the legal basis to compound it for most
          patients. As of this writing, compounded tirzepatide from 503A pharmacies is no longer
          legally available for routine prescriptions. Some 503B outsourcing facilities may still
          compound it for patient-specific orders meeting specific criteria, but this is narrowly
          applicable. Verify current FDA shortage status before ordering. See our{" "}
          <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
            GLP-1 shortage status page
          </Link>.
        </p>

        {/* Alternative 2: Mounjaro Off-Label */}
        <h2 className="text-2xl font-bold mt-10 mb-3">2. Mounjaro Off-Label</h2>
        <p className="mb-3">
          Mounjaro and Zepbound contain identical tirzepatide at identical doses. Mounjaro is
          FDA-approved for type 2 diabetes. Some doctors prescribe it off-label for weight loss.
        </p>
        <p className="mb-3">
          The list price is the same as Zepbound at about $1,060 per month. The advantage comes from
          insurance: diabetes drugs are covered more broadly than obesity drugs on most commercial
          plans and Medicare Part D.
        </p>
        <p className="mb-6 text-gray-700">
          If you have type 2 diabetes and obesity together, your prescriber may write for Mounjaro
          under the diabetes indication. If you have obesity only, this path requires a prescriber
          willing to write off-label and an insurer that will process the claim.
        </p>

        {/* Alternative 3: Wegovy */}
        <h2 className="text-2xl font-bold mt-10 mb-3">3. Wegovy (Semaglutide)</h2>
        <p className="mb-3">
          Wegovy is the main clinical alternative to Zepbound. It uses semaglutide rather than
          tirzepatide. In the SURMOUNT-5 head-to-head trial, Wegovy produced 13.7% average weight
          loss compared to 20.2% for Zepbound.
        </p>
        <p className="mb-3">
          Wegovy costs more at about $1,349 per month without insurance. However, it has been on
          market since 2021 and has broader insurance coverage than Zepbound on many plans.
        </p>
        <p className="mb-6 text-gray-700">
          If your plan covers Wegovy and not Zepbound, Wegovy is the right practical choice. Talk
          to your prescriber about prior authorization requirements.
        </p>

        {/* Alternative 4: Compounded Semaglutide */}
        <h2 className="text-2xl font-bold mt-10 mb-3">4. Compounded Semaglutide</h2>
        <p className="mb-3">
          Compounded semaglutide remains the cheapest option in the GLP-1 category when it is
          legally available. Telehealth platforms price it at $99 to $299 per month.
        </p>
        <p className="mb-3">
          Semaglutide has remained in shortage longer than tirzepatide. As of early 2025,
          semaglutide was still on the FDA shortage list, which means 503A pharmacies could still
          legally compound it for many patients.
        </p>
        <p className="mb-6 text-gray-700">
          Compounded semaglutide loses its legal basis the moment the FDA shortage resolves.
          Verify current status before committing to a program. The regulatory situation changes
          faster than this page can update. See{" "}
          <Link href="/compounded-semaglutide" className="text-blue-600 hover:underline">
            our full compounded semaglutide guide
          </Link>{" "}
          and the{" "}
          <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
            current shortage status page
          </Link>.
        </p>

        {/* Alternative 5: Ozempic Off-Label */}
        <h2 className="text-2xl font-bold mt-10 mb-3">5. Ozempic Off-Label</h2>
        <p className="mb-3">
          Ozempic uses semaglutide at a maximum dose of 2 mg weekly, approved for type 2 diabetes.
          Some doctors prescribe it off-label for weight loss in patients with T2D.
        </p>
        <p className="mb-3">
          Average weight loss is lower than Zepbound because the maximum semaglutide dose is lower
          than Wegovy and much lower than Zepbound. Insurance coverage follows the diabetes
          indication, which can make it more accessible for patients with T2D.
        </p>
        <p className="mb-6 text-gray-700">
          Not the best alternative on efficacy, but a viable option when it is the only one your
          insurance covers.
        </p>

        {/* Telehealth Access */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Telehealth Programs for GLP-1 Access</h2>
        <p className="mb-3">
          Several telehealth platforms can connect you with a licensed prescriber for a GLP-1
          evaluation within one to three days.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800 text-sm">
          <li><Link href="/henry-meds-review" className="text-blue-600 hover:underline">Henry Meds</Link> — compounded GLP-1 from $99/mo</li>
          <li><Link href="/ro-body-review" className="text-blue-600 hover:underline">Ro Body</Link> — branded and compounded options</li>
          <li><Link href="/hims-weight-loss-review" className="text-blue-600 hover:underline">Hims Weight Loss</Link> — subscription, lower entry cost</li>
          <li><Link href="/mochi-health-review" className="text-blue-600 hover:underline">Mochi Health</Link> — provider-led, holistic support</li>
          <li><Link href="/form-health-review" className="text-blue-600 hover:underline">Form Health</Link> — physician-supervised, coaching included</li>
        </ul>
        <p className="mb-8 text-gray-700">
          Compare programs on price per month, whether they work with your insurance, and whether
          they prescribe branded or compounded GLP-1 medications.
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
            The right medication depends on your health history, insurance coverage, and what your
            doctor recommends. Talk to your doctor before starting, changing, or stopping any
            weight loss medication.
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
            <Link href="/zepbound-vs-mounjaro" className="text-blue-600 hover:underline">
              Zepbound vs Mounjaro: Same Drug, Different Insurance
            </Link>
          </li>
          <li>
            <Link href="/compounded-tirzepatide" className="text-blue-600 hover:underline">
              Compounded Tirzepatide Guide
            </Link>
          </li>
          <li>
            <Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">
              Cheapest GLP-1 Options
            </Link>
          </li>
          <li>
            <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
              GLP-1 FDA Shortage Status
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
