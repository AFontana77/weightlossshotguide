import type { Metadata } from "next";
import Link from "next/link";
import { Shield, AlertTriangle } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Compounded Tirzepatide (2026): Legal Status, Cost, Providers & What to Know",
  description:
    "Compounded tirzepatide at $200-600/month vs branded Zepbound at $1,060. Here is what compounded tirzepatide is, who can legally provide it, and what to check before ordering.",
  alternates: { canonical: "https://www.weightlossshotguide.com/compounded-tirzepatide" },
};

const DATE = "2026-05-08";
const BASE = "https://www.weightlossshotguide.com";

const faqs = [
  {
    question: "Is compounded tirzepatide legal in 2025?",
    answer:
      "It depends on the pharmacy type and current FDA shortage status. The FDA declared the tirzepatide shortage resolved in late 2024 to early 2025. After that, 503A compounding pharmacies face restrictions on compounding tirzepatide. 503B outsourcing facilities operate under different rules. Always verify current legal status with your telehealth provider before ordering.",
  },
  {
    question: "Is compounded tirzepatide the same as Zepbound or Mounjaro?",
    answer:
      "Not identical. Compounding pharmacies use tirzepatide salt forms (such as diacetate) as the active ingredient. The FDA considers these different from the base tirzepatide in Zepbound and Mounjaro. Most providers and patients report comparable appetite suppression and weight loss at equivalent doses, but no FDA-validated head-to-head comparison exists.",
  },
  {
    question: "How much does compounded tirzepatide cost?",
    answer:
      "Prices range from $199 to $600/month depending on provider, dose, and whether you are on a starting or therapeutic dose. Starting doses (2.5mg) typically run $199-299/month. Therapeutic doses (7.5mg-15mg) can reach $400-600/month. This compares to branded Zepbound at approximately $1,060/month without insurance.",
  },
  {
    question: "What should I ask before ordering compounded tirzepatide?",
    answer:
      "Ask your provider: Is compounded tirzepatide currently legal for your pharmacy to dispense? What pharmacy type are they using (503A or 503B)? What tirzepatide salt form is used? What third-party testing is done on each batch? Can you see a certificate of analysis?",
  },
  {
    question: "What happens if I am on compounded tirzepatide and the shortage ends?",
    answer:
      "Your provider should notify you. If the FDA declares the shortage resolved for 503A purposes, your pharmacy may need to stop compounding. Your provider will typically offer to transition you to branded Zepbound through insurance navigation, or to compounded semaglutide as an alternative.",
  },
];

const providers = [
  { name: "Henry Meds", compound: "Tirzepatide (when available)", price: "from $249/mo", url: "https://www.henrymeds.com" },
  { name: "Hims & Hers", compound: "Semaglutide primary; tirzepatide when available", price: "from $149/mo", url: "https://www.hims.com/weight-loss" },
  { name: "Mochi Health", compound: "Both, physician decision", price: "from $99/mo + medication", url: "https://www.joinfound.com" },
  { name: "Form Health", compound: "Both, insurance navigation first", price: "from $149/mo + medication", url: "https://www.formhealth.co" },
];

export default function CompoundedTirzepatidePage() {
  return (
    <>
      <ArticleSchema
        title="Compounded Tirzepatide (2026): Legal Status, Cost, Providers & What to Know"
        description="Compounded tirzepatide at $200-600/month vs branded Zepbound at $1,060. Legal status, providers, and what to verify before ordering."
        url={`${BASE}/compounded-tirzepatide`}
        datePublished={DATE}
        dateModified={DATE}
      />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: BASE },
          { name: "Compounding Pharmacies", url: `${BASE}/compounding-pharmacies` },
          { name: "Compounded Tirzepatide", url: `${BASE}/compounded-tirzepatide` },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/compounding-pharmacies" className="hover:text-foreground transition-colors">GLP-1 Providers</Link>
          <span>/</span>
          <span className="text-foreground">Compounded Tirzepatide</span>
        </nav>

        {/* Medical disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 text-sm flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="text-amber-900">Medical Disclaimer:</strong>{" "}
            <span className="text-amber-800">
              This page is for informational purposes only. It is not medical advice. Talk to your doctor before starting, changing, or stopping any medication.
            </span>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-sm">
          <strong className="text-amber-900">Affiliate Disclosure:</strong>{" "}
          <span className="text-amber-800">
            This page contains affiliate links. We earn a commission when you sign up through our links. This does not change our rankings or assessments.
          </span>
        </div>

        {/* Legal status alert */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 text-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="text-orange-900">Legal status notice:</strong>{" "}
            <span className="text-orange-800">
              The FDA declared the tirzepatide shortage resolved in late 2024 to early 2025. This affects whether 503A compounding pharmacies can legally compound tirzepatide. Always verify current status with your telehealth provider and check the FDA drug shortage database before ordering.
            </span>
          </div>
        </div>

        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Compounding Guide</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
            Compounded Tirzepatide: What It Is, What It Costs, and What to Verify
          </h1>

          <QuickVerdictBox
            winnerName="Henry Meds"
            winnerCategory="Compounded Tirzepatide Provider"
            dreamOutcomeChain="Access physician-supervised tirzepatide therapy at $249-400/month through the compounded route so Zepbound at $1,060/month stops being the only path to the drug that showed 20.9% average weight loss in SURMOUNT-1."
            proofPoint="Licensed physicians. Pharmacy partner documentation available. Compounded tirzepatide from $249/mo when legally available."
            affiliateUrl="https://www.henrymeds.com"
            ctaLabel="Check Henry Meds Tirzepatide Availability"
            riskReversal="No long-term contract. Cancel anytime."
          />

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Compounded tirzepatide is the lower-cost route to the active ingredient behind Zepbound and Mounjaro. Branded Zepbound costs about $1,060/month without insurance. Compounded versions run $200-600/month depending on dose and provider.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The catch: whether compounded tirzepatide is legal to dispense depends on whether tirzepatide is currently on the FDA drug shortage list. That status changed in late 2024 to early 2025. This page explains what that means and what to verify before ordering.
          </p>
        </header>

        <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6">

          <h2 className="font-heading text-2xl font-bold text-foreground">What is compounded tirzepatide?</h2>
          <p>
            Compounded tirzepatide is tirzepatide made by a compounding pharmacy from a raw active pharmaceutical ingredient (API). It is not manufactured by Eli Lilly. It is not FDA-approved.
          </p>
          <p>
            The active ingredient is tirzepatide, the same peptide in Zepbound and Mounjaro. Compounding pharmacies typically use a salt form: tirzepatide diacetate or another form. The FDA considers these different from the base tirzepatide used in Lilly's branded products.
          </p>
          <p>
            In practice, most patients and providers report comparable efficacy at equivalent doses. No FDA-validated head-to-head comparison has been published.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">Legal status: the shortage rule</h2>
          <p>
            Federal law allows compounding pharmacies to make copies of FDA-approved drugs only under specific conditions. For 503A pharmacies (traditional compounders), one key condition is that the branded drug is on the FDA drug shortage list.
          </p>
          <p>
            Tirzepatide (Mounjaro/Zepbound) was on the shortage list from 2023 through most of 2024. During that period, 503A compounding was widely available.
          </p>
          <p>
            The FDA declared the shortage resolved in late 2024 to early 2025. After that point, 503A pharmacies face restrictions. 503B outsourcing facilities operate under different rules and may have more flexibility.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm">
            <strong className="text-foreground">Check the FDA website.</strong>{" "}
            Visit the FDA drug shortage database at accessdata.fda.gov to see current tirzepatide shortage status. This is the authoritative source. Your telehealth provider should also be able to tell you their pharmacy's current legal standing.
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">Cost comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Option</th>
                  <th className="text-left p-3 font-semibold text-foreground">Monthly cost</th>
                  <th className="text-left p-3 font-semibold text-foreground">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 text-foreground">Branded Zepbound (no insurance)</td>
                  <td className="p-3 text-muted-foreground">~$1,060/mo</td>
                  <td className="p-3 text-muted-foreground">Always available with Rx</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 text-foreground">Branded Zepbound (with savings card)</td>
                  <td className="p-3 text-muted-foreground">$550/mo cap</td>
                  <td className="p-3 text-muted-foreground">Commercial insurance only</td>
                </tr>
                <tr>
                  <td className="p-3 text-foreground">Compounded tirzepatide (starting dose)</td>
                  <td className="p-3 text-muted-foreground">$199-299/mo</td>
                  <td className="p-3 text-muted-foreground">Subject to FDA shortage status</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 text-foreground">Compounded tirzepatide (therapeutic dose)</td>
                  <td className="p-3 text-muted-foreground">$350-600/mo</td>
                  <td className="p-3 text-muted-foreground">Subject to FDA shortage status</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">Which providers offer compounded tirzepatide</h2>
          <p>
            Availability changes with FDA shortage status. Here are providers that have offered compounded tirzepatide:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Provider</th>
                  <th className="text-left p-3 font-semibold text-foreground">Compounded options</th>
                  <th className="text-left p-3 font-semibold text-foreground">Starting price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {providers.map((p, i) => (
                  <tr key={p.name} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                    <td className="p-3">
                      <a href={p.url} target="_blank" rel="nofollow noopener noreferrer sponsored" className="text-primary hover:underline font-medium">
                        {p.name}
                      </a>
                    </td>
                    <td className="p-3 text-muted-foreground">{p.compound}</td>
                    <td className="p-3 text-muted-foreground">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            Check directly with each provider for current tirzepatide availability. Offerings change based on FDA shortage status.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-6">What to verify before ordering</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-foreground">Confirm current legal status.</strong>{" "}
              Ask your provider whether compounded tirzepatide is currently legal for their pharmacy to dispense. Get a clear yes with explanation.
            </li>
            <li>
              <strong className="text-foreground">Know the pharmacy type.</strong>{" "}
              Is it a 503A traditional compounding pharmacy or a 503B FDA-registered outsourcing facility? The rules differ.
            </li>
            <li>
              <strong className="text-foreground">Ask about the tirzepatide form.</strong>{" "}
              Is it tirzepatide diacetate or another salt form? This is different from the base form in Zepbound.
            </li>
            <li>
              <strong className="text-foreground">Request quality documentation.</strong>{" "}
              Ask for a certificate of analysis (COA) showing third-party potency testing. A good pharmacy provides this.
            </li>
            <li>
              <strong className="text-foreground">Confirm what happens if the shortage ends.</strong>{" "}
              Ask what your provider will do if the FDA removes tirzepatide from the shortage list mid-program.
            </li>
          </ol>

        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="font-heading font-bold text-base text-foreground mb-3">Related guides</h2>
          <ul className="space-y-2">
            <li><Link href="/compounded-semaglutide" className="text-sm text-primary hover:underline">Compounded Semaglutide Guide</Link></li>
            <li><Link href="/503a-vs-503b-pharmacies" className="text-sm text-primary hover:underline">503A vs 503B Pharmacies Explained</Link></li>
            <li><Link href="/tirzepatide" className="text-sm text-primary hover:underline">Tirzepatide: Mechanism, Dosing, and Clinical Data</Link></li>
            <li><Link href="/zepbound" className="text-sm text-primary hover:underline">Zepbound Review</Link></li>
            <li><Link href="/compounding-pharmacies" className="text-sm text-primary hover:underline">GLP-1 Compounding Pharmacy Directory</Link></li>
          </ul>
        </section>

        <div className="mt-8 bg-muted/50 border border-border rounded-lg p-4 text-sm text-muted-foreground">
          <strong className="text-foreground">Talk to your doctor.</strong>{" "}
          The information on this page is educational. A licensed physician or nurse practitioner should evaluate your full medical history before any GLP-1 prescription is written. Regulatory status of compounded tirzepatide changes. Your prescriber should confirm current legality before any order is placed.
        </div>
      </div>
    </>
  );
}
