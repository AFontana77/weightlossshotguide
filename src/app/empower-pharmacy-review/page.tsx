import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Is Empower Pharmacy a 503A or 503B pharmacy?",
    answer:
      "Empower Pharmacy operates as both a 503A traditional compounding pharmacy and a 503B outsourcing facility. The 503B facility operates under FDA Current Good Manufacturing Practice standards and can compound larger batches for patient-specific orders with broader distribution. This dual status makes Empower one of the more rigorously regulated compounding facilities available.",
  },
  {
    question: "Does Empower Pharmacy compound tirzepatide?",
    answer:
      "Empower Pharmacy compounded tirzepatide while it was on the FDA shortage list. Eli Lilly stated that tirzepatide supply normalized in late 2024, and the FDA removed tirzepatide from the shortage list in early 2025. As a result, compounding tirzepatide for most patients is no longer legally supported. Verify current status directly with Empower before requesting a tirzepatide prescription.",
  },
  {
    question: "Does Empower Pharmacy compound semaglutide?",
    answer:
      "Yes, as of early 2026, semaglutide remains on the FDA shortage list, and Empower Pharmacy continues to compound semaglutide for eligible patients. Prescriptions from licensed physicians are required. You cannot order directly from Empower without a prescription.",
  },
  {
    question: "How do I get a prescription filled at Empower Pharmacy?",
    answer:
      "Empower works through licensed physicians and telehealth platforms. You need a valid prescription from a licensed provider. Many GLP-1 telehealth platforms (Henry Meds, Eden Health, etc.) use or work with Empower or similar 503B pharmacies. Some physicians may write prescriptions specifically to Empower. Contact Empower directly or ask your telehealth platform which pharmacy they use.",
  },
];

export const metadata = {
  title: "Empower Pharmacy GLP-1 Review (2026): 503B Compounding and Semaglutide",
  description:
    "Empower Pharmacy review for GLP-1 compounding. 503A and 503B status, semaglutide and tirzepatide availability, how to access, and quality standards.",
};

export default function EmpowerPharmacyReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Empower Pharmacy Review", url: `${BASE}/empower-pharmacy-review` },
        ]}
      />
      <ArticleSchema
        title="Empower Pharmacy GLP-1 Review (2026): 503B Compounding and Semaglutide"
        description="Empower Pharmacy review for GLP-1 compounding. 503A and 503B status, semaglutide and tirzepatide availability, how to access, and quality standards."
        url={`${BASE}/empower-pharmacy-review`}
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
            Compounding pharmacy availability subject to FDA shortage status.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8 text-sm text-amber-800">
          This page is informational. We earn a commission on some referrals. This does not
          change our editorial rankings or opinions.
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/compounding-pharmacies">Compounding Pharmacies</Link>
          <span className="mx-2">/</span>
          <span>Empower Pharmacy Review</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Empower Pharmacy Review (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">
          Texas-based 503A/503B compounding pharmacy | Prescription required | Nationwide shipping
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-1">Key fact</p>
          <p className="text-blue-800 text-sm">
            Empower Pharmacy requires a valid prescription from a licensed physician. You cannot
            order GLP-1 medications directly. Use a telehealth platform or ask your doctor to
            send a prescription to Empower.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-4 mb-4">Empower Pharmacy at a Glance</h2>
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
                ["Pharmacy type", "503A and 503B (dual status)"],
                ["Location", "Houston, Texas"],
                ["Shipping", "Nationwide (cold chain for GLP-1 injectables)"],
                ["Semaglutide compounding", "Yes, while on FDA shortage list"],
                ["Tirzepatide compounding", "No longer available for routine patients (shortage resolved early 2025)"],
                ["Prescription required", "Yes, from a licensed physician"],
                ["Direct to patient", "Yes, with valid prescription"],
                ["FDA inspected", "Yes (503B facility)"],
                ["PCAB accredited", "Yes"],
              ].map(([factor, detail]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">Why Empower Matters</h2>
        <p className="mb-3">
          Empower Pharmacy is one of the largest 503B outsourcing facilities in the United States.
          Their 503B status means they operate under FDA Current Good Manufacturing Practice
          standards, which are much stricter than what most 503A compounding pharmacies follow.
        </p>
        <p className="mb-3">
          Many GLP-1 telehealth platforms route prescriptions through pharmacies like Empower
          precisely because of the higher quality control. If your telehealth platform says they
          use a 503B partner pharmacy, there is a good chance it is Empower or a similar facility.
        </p>
        <p className="mb-6 text-gray-700">
          The practical implication for patients is that compounded semaglutide from Empower is
          more likely to meet dose accuracy and contamination standards than products from a small
          503A pharmacy that does not face the same level of oversight.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Current GLP-1 Availability</h2>
        <p className="mb-3">
          Semaglutide has remained on the FDA shortage list as of early 2026, meaning Empower can
          legally compound semaglutide-based products. This covers the active ingredient in both
          Ozempic and Wegovy.
        </p>
        <p className="mb-3">
          Tirzepatide was removed from the shortage list in early 2025. Empower, like other
          compounding pharmacies, lost the legal basis to compound tirzepatide for routine patients
          at that point. Compounded tirzepatide is no longer available from Empower for standard
          prescriptions.
        </p>
        <p className="mb-6 text-gray-700">
          Verify current availability directly with Empower or through your telehealth platform.
          Shortage status changes. See our{" "}
          <Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">
            GLP-1 FDA shortage status page
          </Link>{" "}
          for context.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">How to Access Empower Pharmacy</h2>
        <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-800">
          <li>
            Get a prescription from a licensed telehealth physician or your own doctor. Many
            telehealth platforms (Henry Meds, Eden Health, and others) route prescriptions
            to Empower automatically.
          </li>
          <li>
            If your physician is willing, they can send the prescription directly to Empower.
            Ask your doctor if they are familiar with Empower or if they work with compounding
            pharmacies.
          </li>
          <li>
            Verify that the drug you are being prescribed (semaglutide or tirzepatide) is
            currently on the FDA shortage list before proceeding.
          </li>
          <li>
            Empower ships nationwide with appropriate cold chain packaging for injectable
            medications.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle size={16} /> Pros
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>503B status, stricter FDA manufacturing standards</li>
              <li>PCAB accredited</li>
              <li>Ships nationwide</li>
              <li>Preferred by many telehealth platforms</li>
              <li>Established track record with large volume</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle size={16} /> Cons
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Requires prescription, no direct ordering</li>
              <li>Tirzepatide no longer available (shortage resolved)</li>
              <li>Must use via telehealth platform or your own MD</li>
              <li>Pricing depends on platform or prescriber relationship</li>
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
            Compounding pharmacy availability changes with FDA shortage status. Verify current
            availability before making any prescribing or ordering decisions. Talk to your doctor
            before starting any medication.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-3">Related Pages</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><Link href="/503a-vs-503b-pharmacies" className="text-blue-600 hover:underline">503A vs 503B Pharmacies Explained</Link></li>
          <li><Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">GLP-1 FDA Shortage Status</Link></li>
          <li><Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">Compounding Pharmacy Directory</Link></li>
          <li><Link href="/henry-meds-review" className="text-blue-600 hover:underline">Henry Meds Review</Link></li>
          <li><Link href="/compounded-semaglutide" className="text-blue-600 hover:underline">Compounded Semaglutide Guide</Link></li>
        </ul>
      </main>
    </>
  );
}
