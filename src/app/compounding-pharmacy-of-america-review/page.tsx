import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "What is the Compounding Pharmacy of America?",
    answer:
      "The Compounding Pharmacy of America (CPA) is a licensed 503A traditional compounding pharmacy that offers compounded medications including GLP-1 injectables for patients with valid prescriptions. They operate as a patient-direct pharmacy with online ordering capabilities through their platform.",
  },
  {
    question: "Does the Compounding Pharmacy of America compound semaglutide?",
    answer:
      "The Compounding Pharmacy of America offered compounded semaglutide while it has been on the FDA shortage list. As of early 2026, semaglutide remained on shortage. Verify current availability directly with CPA before placing an order, as shortage status can change.",
  },
  {
    question: "Is the Compounding Pharmacy of America legitimate?",
    answer:
      "CPA is a licensed state pharmacy. They compound medications for patients with valid prescriptions from licensed physicians. They are not a black-market or foreign supplier. That said, as a 503A pharmacy, they face lighter FDA manufacturing oversight than 503B outsourcing facilities. Always verify state licensing and accreditation before using any compounding pharmacy.",
  },
  {
    question: "How do I order from the Compounding Pharmacy of America?",
    answer:
      "You need a prescription from a licensed physician. CPA has an online ordering platform that accepts electronic prescriptions. Some telehealth platforms route prescriptions to CPA. You can also have your own physician send a prescription directly. CPA ships to most US states.",
  },
];

export const metadata = {
  title: "Compounding Pharmacy of America Review (2026): GLP-1 Compounding",
  description:
    "Compounding Pharmacy of America review for GLP-1 medications. 503A status, semaglutide availability, how to order, and quality considerations.",
};

export default function CompoundingPharmacyOfAmericaReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Compounding Pharmacy of America Review", url: `${BASE}/compounding-pharmacy-of-america-review` },
        ]}
      />
      <ArticleSchema
        title="Compounding Pharmacy of America Review (2026): GLP-1 Compounding"
        description="Compounding Pharmacy of America review for GLP-1 medications. 503A status, semaglutide availability, how to order, and quality considerations."
        url={`${BASE}/compounding-pharmacy-of-america-review`}
        datePublished="2026-05-08"
        dateModified="2026-05-08"
      />
      <FAQSchema questions={faqs} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex gap-3 items-start bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
          <Shield className="text-amber-600 mt-0.5 shrink-0" size={20} />
          <p className="text-sm text-amber-900">
            Medical Disclaimer: This page is informational. Verify FDA shortage status and
            pharmacy licensing before ordering any compounded GLP-1 medication.
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
          <span>Compounding Pharmacy of America Review</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Compounding Pharmacy of America Review (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">
          503A compounding pharmacy | GLP-1 injectables | Prescription required | Nationwide shipping
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-1">Key fact</p>
          <p className="text-blue-800 text-sm">
            A valid prescription from a licensed physician is required. Compounding availability
            depends on FDA shortage status. Verify both before ordering.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-4 mb-4">Compounding Pharmacy of America at a Glance</h2>
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
                ["Semaglutide", "Available while on FDA shortage list"],
                ["Tirzepatide", "Not available for routine patients (shortage resolved 2025)"],
                ["Ordering", "Online ordering with electronic prescription"],
                ["Prescription required", "Yes"],
                ["Shipping", "Nationwide with appropriate cold chain"],
                ["Best for", "Patients with a prescription looking for a direct-to-patient compounding option"],
              ].map(([factor, detail]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">About CPA</h2>
        <p className="mb-3">
          The Compounding Pharmacy of America is a licensed 503A compounding pharmacy that
          provides patient-direct compounded medications. They have built an online platform
          that makes it easy to upload a prescription and order compounded GLP-1 medications
          when shortage conditions allow.
        </p>
        <p className="mb-3">
          As a 503A pharmacy, CPA compounds for individual patients based on physician
          prescriptions. This is the traditional compounding model. They do not produce in
          bulk for broader distribution like 503B outsourcing facilities.
        </p>
        <p className="mb-6 text-gray-700">
          The key quality consideration: 503A pharmacies face state pharmacy board oversight, not
          the full FDA CGMP oversight that 503B facilities face. For injectable GLP-1 medications,
          the quality standards of the pharmacy matter more than for oral medications because
          contamination or dosing errors in injectables carry higher risk.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle size={16} /> Pros
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Online ordering platform is easy to use</li>
              <li>Accepts electronic prescriptions</li>
              <li>Nationwide shipping</li>
              <li>GLP-1 specialist compounding experience</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle size={16} /> Cons
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>503A only (lighter oversight than 503B)</li>
              <li>No tirzepatide (shortage resolved)</li>
              <li>Quality control less rigorous than 503B facilities</li>
              <li>Prescription required, no direct telehealth integration</li>
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
            Verify FDA shortage status before ordering any compounded GLP-1 medication. Talk
            to your doctor before starting any medication.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-3">Related Pages</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><Link href="/empower-pharmacy-review" className="text-blue-600 hover:underline">Empower Pharmacy Review</Link></li>
          <li><Link href="/hallandale-pharmacy-review" className="text-blue-600 hover:underline">Hallandale Pharmacy Review</Link></li>
          <li><Link href="/503a-vs-503b-pharmacies" className="text-blue-600 hover:underline">503A vs 503B Pharmacies</Link></li>
          <li><Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">GLP-1 FDA Shortage Status</Link></li>
          <li><Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">Compounding Pharmacy Directory</Link></li>
        </ul>
      </main>
    </>
  );
}
