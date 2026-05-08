import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "What is Noom Med?",
    answer:
      "Noom Med is the clinical medication offering from Noom, the behavior-change weight loss app. It adds GLP-1 prescribing through telehealth physicians to Noom's existing psychology-based coaching program. Patients get medication access combined with Noom's behavior-change curriculum.",
  },
  {
    question: "How much does Noom Med cost?",
    answer:
      "Noom Med pricing typically bundles the coaching program and medical supervision. As of 2026 pricing runs approximately $169 to $299 per month, which includes the Noom app, coaching, and physician oversight. The medication itself (compounded or branded) may be included at certain tiers or priced separately. Verify current pricing on Noom's website.",
  },
  {
    question: "Does Noom Med prescribe Wegovy or Zepbound?",
    answer:
      "Noom Med physicians can prescribe branded GLP-1 medications including Wegovy and Zepbound, as well as compounded versions when available. Their emphasis is on behavioral change first, with medication as a support tool rather than the primary focus. Some patients start on behavioral tools and add medication later.",
  },
  {
    question: "Is Noom Med worth it if I just want the medication?",
    answer:
      "If your only goal is the lowest-cost medication access, Noom Med is probably not the right platform. Henry Meds and other platforms offer compounded GLP-1 at lower monthly costs with less behavioral overhead. Noom Med's value comes from the combination of psychology-based coaching and medication. Patients who engage with the behavioral program alongside the medication see better long-term results.",
  },
];

export const metadata = {
  title: "Noom Med Review (2026): Behavior Change + GLP-1 Medications",
  description:
    "Noom Med review covering GLP-1 prescribing, behavior-change coaching, pricing, pros and cons, and who this program is right for.",
};

export default function NoomMedReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Noom Med Review", url: `${BASE}/noom-med-review` },
        ]}
      />
      <ArticleSchema
        title="Noom Med Review (2026): Behavior Change + GLP-1 Medications"
        description="Noom Med review covering GLP-1 prescribing, behavior-change coaching, pricing, pros and cons, and who this program is right for."
        url={`${BASE}/noom-med-review`}
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
          <span>Noom Med Review</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Noom Med Review (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">Behavior-first weight loss + GLP-1 prescribing | Monthly subscription</p>

        <QuickVerdictBox
          winnerName="Noom Med"
          winnerCategory="Behavior-Change GLP-1 Program"
          dreamOutcomeChain="Get the medication working and the psychology behind your eating addressed at the same time so you lose weight and understand why you overeat instead of just suppressing appetite temporarily."
          proofPoint="Noom's psychology-based program combined with telehealth GLP-1 prescribing. Starting at ~$169/mo."
          affiliateUrl="https://www.noom.com/programs/weight-loss-medication/"
          ctaLabel="Explore Noom Med"
          riskReversal="Cancel any time. Medication availability subject to FDA shortage status."
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">Noom Med at a Glance</h2>
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
                ["Program type", "Psychology-based behavioral coaching + GLP-1 prescribing"],
                ["Medications offered", "Branded GLP-1 (insurance route) + compounded when available"],
                ["Prescriber model", "Licensed telehealth physicians"],
                ["Monthly cost", "~$169-$299 including program (medication may be separate)"],
                ["Coaching type", "App-based psychology lessons + human coaching available"],
                ["State availability", "Most US states"],
                ["Cancellation", "Cancel any time"],
                ["Best for", "Patients who want to change eating behaviors alongside medication"],
              ].map(([factor, detail]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">What Noom Med Is</h2>
        <p className="mb-3">
          Noom started as a behavior-change app that used psychological principles to help users
          eat better. The core program focuses on why you eat what you eat, not just calorie counting.
          Noom Med adds GLP-1 medication access to that existing platform.
        </p>
        <p className="mb-3">
          The behavior-change approach has real clinical value alongside GLP-1 therapy. GLP-1
          medications suppress appetite and reduce cravings. Behavioral coaching teaches patients
          to manage emotional eating, food environment, and long-term habits. The combination
          produces better maintenance outcomes than medication alone in many patients.
        </p>
        <p className="mb-6 text-gray-700">
          The downside is cost. If you want the cheapest compounded GLP-1 access without coaching,
          Noom Med is not the right platform. The behavior layer adds to the monthly price.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">The Noom Coaching Model</h2>
        <p className="mb-3">
          Noom's app delivers daily lessons on topics like food psychology, stress eating, habit
          formation, and motivation. Lessons take 5 to 10 minutes per day.
        </p>
        <p className="mb-3">
          Human coaches are available for scheduled check-ins and messaging. The coaching is not
          1-on-1 intensive therapy, but it is more structured than most telehealth GLP-1 platforms
          that focus only on medication management.
        </p>
        <p className="mb-6 text-gray-700">
          Patients who engage actively with the Noom curriculum alongside GLP-1 therapy report
          better long-term results when they eventually taper the medication. This is Noom Med's
          clearest advantage over pure-medication platforms.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle size={16} /> Pros
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Behavior-change foundation is clinically valuable</li>
              <li>GLP-1 prescribing by licensed physicians</li>
              <li>App-based daily lessons, low time commitment</li>
              <li>Good for patients who want to understand their eating</li>
              <li>Branded and compounded options available</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle size={16} /> Cons
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Higher cost than pure compounded platforms</li>
              <li>Coaching quality varies by assigned coach</li>
              <li>Behavior curriculum may feel slow for some patients</li>
              <li>Compounded availability tied to shortage status</li>
              <li>Not the cheapest path to GLP-1 medication</li>
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
          <li><Link href="/mochi-health-review" className="text-blue-600 hover:underline">Mochi Health Review</Link></li>
          <li><Link href="/weightwatchers-clinic-review" className="text-blue-600 hover:underline">WeightWatchers Clinic Review</Link></li>
          <li><Link href="/henry-meds-review" className="text-blue-600 hover:underline">Henry Meds Review</Link></li>
          <li><Link href="/glp1-telehealth-guide" className="text-blue-600 hover:underline">GLP-1 Telehealth Guide</Link></li>
          <li><Link href="/cheapest-glp1-options" className="text-blue-600 hover:underline">Cheapest GLP-1 Options</Link></li>
        </ul>
      </main>
    </>
  );
}
