import Link from "next/link";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Is Hallandale Pharmacy a 503A or 503B pharmacy?",
    answer:
      "Hallandale Pharmacy is primarily a 503A traditional compounding pharmacy located in Hallandale Beach, Florida. They specialize in compounded injectables, hormones, and GLP-1 medications for patients with valid prescriptions. 503A pharmacies operate under state pharmacy board oversight.",
  },
  {
    question: "Does Hallandale Pharmacy compound semaglutide?",
    answer:
      "Hallandale Pharmacy offered compounded semaglutide while semaglutide has been on the FDA shortage list. As of early 2026, semaglutide was still on shortage, so legal compounding continued. Verify current status directly with Hallandale Pharmacy or check the FDA shortage database before ordering.",
  },
  {
    question: "How do I get a prescription filled at Hallandale Pharmacy?",
    answer:
      "You need a prescription from a licensed physician. Some telehealth platforms have partnerships with Hallandale Pharmacy. You can also ask your own physician to send a prescription directly. Hallandale ships nationally to most US states. Contact them directly to verify your state and current medication availability.",
  },
  {
    question: "What makes Hallandale Pharmacy known for GLP-1 compounding?",
    answer:
      "Hallandale Pharmacy gained recognition in the GLP-1 space for offering compounded tirzepatide and semaglutide during the shortage period with telehealth integrations. They specialize in injectable compounding and serve many telehealth platforms. Their Florida location and established relationships with GLP-1 telehealth networks made them a notable pharmacy partner in this category.",
  },
];

export const metadata = {
  title: "Hallandale Pharmacy Review (2026): Compounded GLP-1 Injectables",
  description:
    "Hallandale Pharmacy review for compounded GLP-1 medications. Florida-based 503A compounding pharmacy, semaglutide availability, and how to access.",
};

export default function HallandalePharmacyReviewPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Hallandale Pharmacy Review", url: `${BASE}/hallandale-pharmacy-review` },
        ]}
      />
      <ArticleSchema
        title="Hallandale Pharmacy Review (2026): Compounded GLP-1 Injectables"
        description="Hallandale Pharmacy review for compounded GLP-1 medications. Florida-based 503A compounding pharmacy, semaglutide availability, and how to access."
        url={`${BASE}/hallandale-pharmacy-review`}
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
          <span>Hallandale Pharmacy Review</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">Hallandale Pharmacy Review (2026)</h1>
        <p className="text-gray-500 text-sm mb-6">
          Florida-based 503A compounding pharmacy | GLP-1 injectable specialist | Prescription required
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-900 mb-1">Key fact</p>
          <p className="text-blue-800 text-sm">
            A valid prescription from a licensed physician is required to fill any GLP-1
            prescription at Hallandale Pharmacy. Compounding availability depends on current
            FDA shortage status.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-4 mb-4">Hallandale Pharmacy at a Glance</h2>
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
                ["Location", "Hallandale Beach, Florida"],
                ["Specialties", "Injectable compounding, GLP-1, hormone therapy"],
                ["Semaglutide", "Available while on FDA shortage list"],
                ["Tirzepatide", "Not available for routine patients (shortage resolved 2025)"],
                ["Prescription required", "Yes"],
                ["Shipping", "Nationwide to most states"],
                ["Known for", "Telehealth platform partnerships, GLP-1 injectable specialization"],
              ].map(([factor, detail]) => (
                <tr key={factor} className="odd:bg-white even:bg-gray-50">
                  <td className="px-3 py-2 border border-gray-200 font-medium text-sm">{factor}</td>
                  <td className="px-3 py-2 border border-gray-200 text-sm">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-3">About Hallandale Pharmacy</h2>
        <p className="mb-3">
          Hallandale Pharmacy is a licensed 503A compounding pharmacy in Hallandale Beach, Florida.
          They built a reputation in the GLP-1 space during the peak shortage period by offering
          compounded tirzepatide and semaglutide at competitive prices through telehealth platform
          partnerships.
        </p>
        <p className="mb-3">
          Their focus on injectable compounding made them a natural partner for telehealth
          GLP-1 programs. Many platforms routed prescriptions through Hallandale during the period
          when both semaglutide and tirzepatide were in shortage.
        </p>
        <p className="mb-6 text-gray-700">
          As a 503A pharmacy, Hallandale operates under state pharmacy board oversight rather than
          full FDA CGMP manufacturing standards. This is the standard model for traditional
          compounding pharmacies. For patients weighing quality assurance on injectable medications,
          the distinction between 503A and 503B oversight matters.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Current Availability</h2>
        <p className="mb-3">
          Semaglutide compounding at Hallandale remains available while semaglutide is on the FDA
          shortage list. As of early 2026, the shortage was still active for semaglutide.
        </p>
        <p className="mb-6 text-gray-700">
          Tirzepatide was removed from the FDA shortage list in early 2025. Hallandale, like
          other 503A pharmacies, can no longer legally compound tirzepatide for routine patients.
          Verify shortage status at{" "}
          <a
            href="https://www.accessdata.fda.gov/scripts/drugshortages"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            accessdata.fda.gov
          </a>{" "}
          before any order.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle size={16} /> Pros
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Established GLP-1 injectable specialist</li>
              <li>Telehealth platform partnership network</li>
              <li>Florida-licensed, nationwide shipping</li>
              <li>Experience with compounded semaglutide at scale</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle size={16} /> Cons
            </h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>503A only (lighter FDA oversight than 503B)</li>
              <li>No tirzepatide (shortage resolved)</li>
              <li>Prescription required</li>
              <li>Quality assurance less robust than 503B options</li>
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
          <li><Link href="/olympia-pharmacy-review" className="text-blue-600 hover:underline">Olympia Pharmacy Review</Link></li>
          <li><Link href="/503a-vs-503b-pharmacies" className="text-blue-600 hover:underline">503A vs 503B Pharmacies</Link></li>
          <li><Link href="/fda-shortage-list-glp1" className="text-blue-600 hover:underline">GLP-1 FDA Shortage Status</Link></li>
          <li><Link href="/compounding-pharmacies" className="text-blue-600 hover:underline">Compounding Pharmacy Directory</Link></li>
        </ul>
      </main>
    </>
  );
}
