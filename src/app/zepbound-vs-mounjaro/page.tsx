import Link from "next/link";
import { Shield } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqQuestions = [
  {
    question: "Is Zepbound the same as Mounjaro?",
    answer:
      "Yes. Both contain tirzepatide made by Eli Lilly. They use the same doses, the same injection pen, and the same weekly schedule. The difference is FDA indication. Mounjaro is approved for type 2 diabetes. Zepbound is approved for chronic weight management. Same drug, two brand names, two regulatory pathways.",
  },
  {
    question: "Can a doctor prescribe Mounjaro for weight loss?",
    answer:
      "Yes. Prescribing Mounjaro off-label for weight loss is legal and common, especially when a patient has type 2 diabetes and obesity together. Some doctors also prescribe it off-label for patients without diabetes when Zepbound is not covered by their insurance. Talk to your doctor about which option applies to your situation.",
  },
  {
    question: "Which is covered by insurance, Zepbound or Mounjaro?",
    answer:
      "It depends on your diagnosis and your specific plan. Mounjaro is covered by most plans that cover type 2 diabetes medications. Zepbound is covered by plans that include obesity drugs, which is a smaller group. As of 2025, most Medicare Part D plans do not cover either for weight loss. Check your formulary and ask your prescriber which indication applies.",
  },
  {
    question: "Can I switch from Mounjaro to Zepbound?",
    answer:
      "Yes, because they contain the same active ingredient at the same doses. Switching is straightforward under physician supervision. Your doctor may keep you at the same dose or adjust based on how you have been tolerating the medication. Never change your prescription without your doctor's guidance.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: BASE },
  { name: "Zepbound vs Mounjaro", url: `${BASE}/zepbound-vs-mounjaro` },
];

export const metadata = {
  title: "Zepbound vs Mounjaro (2026): Same Drug, Different Insurance",
  description:
    "Zepbound and Mounjaro both contain tirzepatide. They differ in FDA indication and insurance coverage. Here is what that means for your prescription.",
};

export default function ZepboundVsMounjaroPage() {
  return (
    <>
      <ArticleSchema
        title="Zepbound vs Mounjaro (2026): Same Drug, Different Insurance"
        description="Zepbound and Mounjaro both contain tirzepatide. They differ in FDA indication and insurance coverage. Here is what that means for your prescription."
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        url={`${BASE}/zepbound-vs-mounjaro`}
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
          <span>Zepbound vs Mounjaro</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Zepbound vs Mounjaro (2026)</h1>

        {/* Quick Answer */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-1">Quick answer</p>
          <p className="text-blue-800 text-sm">
            Zepbound and Mounjaro contain the same drug: tirzepatide from Eli Lilly. The difference
            is FDA indication. Mounjaro is approved for type 2 diabetes. Zepbound is approved for
            weight loss. Which one your insurance covers depends on your diagnosis.
          </p>
        </div>

        {/* QuickVerdictBox */}
        <QuickVerdictBox
          winnerName="SHED MD"
          winnerCategory="GLP-1 Telehealth Program"
          dreamOutcomeChain="Get a licensed physician to evaluate which tirzepatide path makes sense for your insurance and diagnosis this week, so you start on the right prescription instead of the wrong one."
          proofPoint="Licensed physicians in most US states. Zepbound and Mounjaro evaluations. Starting at $149/mo."
          affiliateUrl="https://www.shedmd.com"
          ctaLabel="Get Evaluated by SHED MD"
          riskReversal="No long-term contract. Cancel any time."
        />

        {/* Comparison Table */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Zepbound vs Mounjaro: Side-by-Side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-3 py-2 border border-gray-200">Feature</th>
                <th className="text-left px-3 py-2 border border-gray-200">Zepbound</th>
                <th className="text-left px-3 py-2 border border-gray-200">Mounjaro</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Active ingredient", "Tirzepatide", "Tirzepatide"],
                ["Manufacturer", "Eli Lilly", "Eli Lilly"],
                ["FDA indication", "Weight management (obesity)", "Type 2 diabetes"],
                ["FDA approval year", "2023", "2022"],
                ["Available doses (mg)", "2.5, 5, 7.5, 10, 12.5, 15", "2.5, 5, 7.5, 10, 12.5, 15"],
                ["Dosing schedule", "Once weekly injection", "Once weekly injection"],
                ["Insurance pathway", "Obesity/weight-loss benefit", "Diabetes medication benefit"],
                ["Medicare Part D coverage", "Not covered for weight loss (2025)", "Covered for T2D"],
                ["List price without insurance", "~$1,060/mo", "~$1,060/mo"],
                ["Savings programs", "LillyDirect Zepbound savings card", "LillyDirect $25/mo for eligible T2D"],
              ].map(([feature, zep, moun]) => (
                <tr key={feature} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{feature}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{zep}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{moun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Same Drug Section */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Why There Are Two Names for the Same Drug</h2>
        <p className="mb-3">
          Eli Lilly developed tirzepatide as a type 2 diabetes drug first. The FDA approved it under
          the name Mounjaro in 2022.
        </p>
        <p className="mb-3">
          Clinical trials then showed tirzepatide also produced large weight loss in people with
          obesity. The FDA approved it for that indication in 2023 under the separate brand name
          Zepbound.
        </p>
        <p className="mb-6 text-gray-700">
          Having two brand names for the same compound is an insurance and regulatory strategy.
          Diabetes drugs and obesity drugs are covered under different insurance benefits. Separate
          brand names let insurers cover one but not the other. The molecule is identical.
        </p>

        {/* Insurance Implications */}
        <h2 className="text-2xl font-bold mt-10 mb-3">What This Means for Insurance Coverage</h2>
        <p className="mb-3">
          If you have type 2 diabetes, your prescriber may write for Mounjaro. Most commercial
          insurance plans that cover diabetes medications will cover it with prior authorization.
          Medicare Part D also covers Mounjaro for T2D.
        </p>
        <p className="mb-3">
          If you have obesity without T2D, your prescriber should write for Zepbound. Coverage
          depends on whether your plan includes obesity medications. Many plans do not include obesity
          drugs, which is why out-of-pocket costs are high for this group.
        </p>
        <p className="mb-3">
          Some doctors write Mounjaro off-label for weight loss when a patient does not have T2D but
          their insurance covers Mounjaro and not Zepbound. This is legal. Whether it works for your
          specific plan depends on how your insurer processes the claim.
        </p>
        <p className="mb-6 text-gray-700">
          The LillyDirect savings program can reduce Mounjaro to $25/month for commercially insured
          patients with T2D who meet eligibility criteria. Zepbound has a separate savings card.
          Check LillyDirect.com for current eligibility terms.
        </p>

        {/* Clinical Data */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Clinical Data: SURMOUNT vs SURPASS Trials</h2>
        <p className="mb-3">
          Tirzepatide has been studied in two large trial programs under both names.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800">
          <li>SURPASS trials (Mounjaro indication): average HbA1c reduction of 1.6-2.3% in T2D patients. Weight loss was a notable secondary endpoint averaging 7-12 kg.</li>
          <li>SURMOUNT trials (Zepbound indication): average body weight reduction of 15-22.5% in patients with obesity. This is the landmark weight loss data.</li>
          <li>SURMOUNT-1 showed 22.5% average weight loss at the maximum 15 mg dose over 72 weeks.</li>
        </ul>
        <p className="mb-6 text-gray-700">
          The same compound produces both effects. Whether a prescriber writes it for diabetes or
          weight loss does not change how tirzepatide works in your body.
        </p>

        {/* Side Effects */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Side Effects</h2>
        <p className="mb-3">
          The side effect profile is identical because the drug is identical.
        </p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-gray-800">
          <li>Nausea (most common, usually peaks during dose increases)</li>
          <li>Vomiting</li>
          <li>Diarrhea</li>
          <li>Constipation</li>
          <li>Decreased appetite</li>
          <li>Injection site reactions</li>
        </ul>
        <p className="mb-6 text-gray-700">
          Side effects are most common in the first 4 to 8 weeks and after each dose increase. Slow
          titration reduces severity. Most patients tolerate the drug well by the time they reach a
          stable maintenance dose.
        </p>

        {/* Who Should Choose Which */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Which Prescription Should You Ask About</h2>
        <p className="mb-3 font-medium">Ask your doctor about Zepbound if:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-gray-800">
          <li>You have obesity (BMI 30+) or overweight (BMI 27+) with a weight-related condition</li>
          <li>You do not have type 2 diabetes</li>
          <li>Your insurance includes obesity drug coverage</li>
        </ul>
        <p className="mb-3 font-medium">Ask your doctor about Mounjaro if:</p>
        <ul className="list-disc list-inside mb-6 space-y-1 text-gray-800">
          <li>You have type 2 diabetes</li>
          <li>Your plan covers diabetes drugs but not obesity drugs</li>
          <li>Your prescriber recommends the off-label weight loss route given your specific coverage</li>
        </ul>

        {/* Compounding Note */}
        <h2 className="text-2xl font-bold mt-10 mb-3">Compounded Tirzepatide</h2>
        <p className="mb-3">
          When the branded tirzepatide supply was on the FDA shortage list, licensed compounding
          pharmacies could legally compound tirzepatide at a fraction of the branded cost.
        </p>
        <p className="mb-3">
          Eli Lilly stated in late 2024 that Mounjaro and Zepbound supply had normalized. The FDA
          removed tirzepatide from the shortage list in early 2025. This means 503A compounding
          pharmacies lost the legal basis to compound tirzepatide for most patients.
        </p>
        <p className="mb-6 text-gray-700">
          Verify current FDA shortage status before ordering compounded tirzepatide. The regulatory
          situation can change. See our{" "}
          <Link href="/503a-vs-503b-pharmacies" className="text-blue-600 hover:underline">
            503A vs 503B explainer
          </Link>{" "}
          and{" "}
          <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
            FDA shortage status page
          </Link>{" "}
          for current information.
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
            Whether your prescription should be Zepbound or Mounjaro depends on your diagnosis,
            your insurance plan, and what your doctor recommends. Talk to your doctor before
            starting, changing, or stopping any medication.
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
            <Link href="/zepbound-vs-wegovy" className="text-blue-600 hover:underline">
              Zepbound vs Wegovy
            </Link>
          </li>
          <li>
            <Link href="/compounded-tirzepatide" className="text-blue-600 hover:underline">
              Compounded Tirzepatide
            </Link>
          </li>
          <li>
            <Link href="/503a-vs-503b-pharmacies" className="text-blue-600 hover:underline">
              503A vs 503B Pharmacies
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
