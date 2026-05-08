import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Is Olympia Pharmacy a 503A or 503B pharmacy?",
    answer:
      "Olympia Pharmacy (Olympia Pharmaceuticals) is primarily a 503A traditional compounding pharmacy based in Orlando, Florida. They have telehealth partnerships and specialize in compounded hormone therapy and GLP-1 medications. 503A pharmacies compound for patient-specific prescriptions and operate under state pharmacy board oversight.",
  },
  {
    question: "Does Olympia Pharmacy compound semaglutide?",
    answer:
      "Olympia Pharmacy compounded semaglutide while it has remained on the FDA shortage list. As of early 2026, semaglutide remained on shortage, so compounding was still legal. Verify current FDA shortage status before requesting a semaglutide prescription through Olympia or any other compounding pharmacy.",
  },
  {
    question: "How is Olympia Pharmacy different from Empower Pharmacy?",
    answer:
      "Empower Pharmacy holds 503B outsourcing facility status, which requires stricter FDA manufacturing standards. Olympia is primarily a 503A traditional compounding pharmacy, which operates under state pharmacy board oversight with lighter federal oversight. Both require a prescription from a licensed physician. For GLP-1 compounding, 503B pharmacies generally provide a higher quality control guarantee.",
  },
  {
    question: "How do I get a prescription filled at Olympia Pharmacy?",
    answer:
      "You need a prescription from a licensed physician. Some telehealth platforms work specifically with Olympia. You can also ask your own doctor to send a prescription to them directly. Olympia ships to most US states. Contact them directly to confirm shipping to your state and current medication availability.",
  },
];

export const metadata = {
  title: "Olympia Pharmacy GLP-1 Review (2026): Compounded Semaglutide",
  description:
    "Olympia Pharmacy review for compounded GLP-1 medications. 503A status, semaglutide availability, telehealth partnerships, and how to access.",
};

export default function OlympiaPharmacyReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Olympia Pharmacy Review", url: `${BASE}/olympia-pharmacy-review` },
        ]}
      />
      <ArticleSchema
        title="Olympia Pharmacy GLP-1 Review (2026): Compounded Semaglutide"
        description="Olympia Pharmacy review for compounded GLP-1 medications. 503A status, semaglutide availability, telehealth partnerships, and how to access."
        url={`${BASE}/olympia-pharmacy-review`}
        datePublished="2026-05-08"
        dateModified="2026-05-08"
      />
      <FAQSchema questions={faqs} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <Shield className="text-amber-600 mt-0.5 shrink-0" size={20} />
          <p className="text-sm text-amber-900">
            Medical Disclaimer: This page is for informational purposes only. Compounding
            availability is subject to FDA shortage status. Verify before ordering.
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
          <span>Olympia Pharmacy Review</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Olympia Pharmacy Review (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">
          Florida-based 503A compounding pharmacy | GLP-1 and hormone therapies | Prescription required
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-1">Key fact</p>
          <p className="text-blue-800 text-sm">
            Olympia Pharmacy requires a valid prescription from a licensed physician. You cannot
            order GLP-1 medications directly. Access through a telehealth platform or your
            own physician.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-4 mb-4">Olympia Pharmacy at a Glance</h2>
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
                ["Pharmacy type", "503A traditional compounding pharmacy"],
                ["Location", "Orlando, Florida"],
                ["Shipping", "Nationwide (cold chain for injectables)"],
                ["Semaglutide compounding", "Yes, while on FDA shortage list"],
                ["Tirzepatide compounding", "No longer available for routine patients (shortage resolved 2025)"],
                ["Prescription required", "Yes"],
                ["Specialties", "GLP-1 injectables, hormone therapy, peptides"],
                ["State licensing", "Florida-licensed, ships to most states"],
              ].map(([factor, detail]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">About Olympia Pharmacy</h2>
        <p className="mb-3">
          Olympia Pharmacy (formally Olympia Pharmaceuticals) is a licensed 503A compounding
          pharmacy based in Orlando, Florida. They specialize in compounded hormone therapy and
          GLP-1 injectable medications.
        </p>
        <p className="mb-3">
          As a 503A pharmacy, Olympia compounds drugs for individual patient prescriptions under
          physician oversight. They do not sell directly to consumers without a prescription.
          They have established telehealth partnerships through which patients access GLP-1
          medications.
        </p>
        <p className="mb-6 text-gray-700">
          503A pharmacies operate under state pharmacy board oversight. They do not face the same
          level of FDA manufacturing inspection as 503B facilities. This is an important
          consideration when choosing between compounding pharmacies for injectable GLP-1 products.
          For the highest quality assurance on injectables, 503B facilities like Empower Pharmacy
          offer stricter oversight.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">GLP-1 Access Through Olympia</h2>
        <p className="mb-3">
          Semaglutide compounding through Olympia remains available while semaglutide is on the
          FDA shortage list. As of early 2026, the shortage was still active.
        </p>
        <p className="mb-6 text-gray-700">
          Tirzepatide was removed from the FDA shortage list in early 2025. Olympia, like other
          503A pharmacies, cannot legally compound tirzepatide for routine patients under current
          shortage regulations. Verify shortage status before requesting tirzepatide from any
          compounding pharmacy.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle size={16} /> Pros
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Established Florida-based compounding pharmacy</li>
              <li>Telehealth platform partnerships for easy access</li>
              <li>Ships nationally with cold chain capability</li>
              <li>GLP-1 and hormone specialization</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle size={16} /> Cons
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>503A (not 503B) — lighter FDA manufacturing oversight</li>
              <li>Requires prescription, no direct ordering</li>
              <li>Tirzepatide no longer available</li>
              <li>Quality assurance less rigorous than 503B facilities</li>
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
            Compounding pharmacy availability changes with FDA shortage status. Verify before
            ordering. Talk to your doctor before starting any medication.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-3">Related Pages</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><Link href="/empower-pharmacy-review" className="text-blue-600 hover:underline">Empower Pharmacy Review</Link></li>
          <li><Link href="/503a-vs-503b-pharmacies" className="text-blue-600 hover:underline">503A vs 503B Pharmacies</Link></li>
          <li><Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">GLP-1 FDA Shortage Status</Link></li>
          <li><Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">Compounding Pharmacy Directory</Link></li>
          <li><Link href="/compounded-semaglutide" className="text-blue-600 hover:underline">Compounded Semaglutide Guide</Link></li>
        </ul>
      </main>
    </>
  );
}
