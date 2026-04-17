import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About GLP-1 Guide",
  description:
    "About GLP-1 Guide — who we are, who this site is for, and how we make money through affiliate partnerships.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          About GLP-1 Guide
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          The companion resource for people on GLP-1 medications.
        </p>
      </header>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Who This Site Is For
          </h2>
          <p>
            GLP-1 Guide exists for people who are on Ozempic, Wegovy, Mounjaro,
            or any other GLP-1 receptor agonist and want specific, evidence-based
            guidance on the products and strategies that matter for their
            situation. Generic supplement and nutrition advice doesn&apos;t account for
            the realities of GLP-1 use — suppressed appetite, changed gut motility,
            rapid weight loss, and the muscle preservation challenge that most
            people aren&apos;t warned about.
          </p>
          <p className="mt-3">
            We cover protein supplements, targeted supplements (creatine,
            probiotics, magnesium), telehealth programs, and body composition
            monitoring tools — specifically reviewed through the lens of what
            works differently and better for GLP-1 users.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            What We Don&apos;t Do
          </h2>
          <p>
            We don&apos;t provide medical advice, prescribe medications, or replace your
            relationship with your doctor. GLP-1 medications require medical
            oversight. Everything on this site is informational and supplemental
            to — not a substitute for — professional medical guidance.
          </p>
        </section>

        <section id="affiliate-disclosure">
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Affiliate Disclosure — How We Make Money
          </h2>
          <p>
            GLP-1 Guide earns revenue through affiliate partnerships. When you
            click a link on this site and make a purchase, we may earn a
            commission at no additional cost to you. This is how reader-supported
            sites like this one stay funded.
          </p>
          <p className="mt-3">
            The specific commissions we earn:
          </p>
          <ul className="mt-2 space-y-2 list-disc list-inside">
            <li>
              <strong className="text-foreground">Amazon Associates:</strong> 3-4% on qualifying purchases through Amazon links
            </li>
            <li>
              <strong className="text-foreground">SHED MD:</strong> $350 per qualified signup through our telehealth link
            </li>
            <li>
              <strong className="text-foreground">Direct Meds:</strong> $280 per qualified signup
            </li>
          </ul>
          <p className="mt-4">
            We disclose commission amounts because transparency matters,
            especially on high-commission pages like our telehealth guide. Our
            rankings are based on genuine quality assessments — we highlight
            cons as prominently as pros regardless of commission size. A product
            that pays us more doesn&apos;t get a higher rating.
          </p>
          <p className="mt-3">
            As required by the FTC, all affiliate links are clearly used
            throughout this site. The affiliate disclosure at the bottom of each
            page applies to all product links unless otherwise noted.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Contact
          </h2>
          <p>
            For questions about content, corrections, or affiliate partnerships,
            reach us at:{" "}
            <a
              href="mailto:hello@glp1guide.com"
              className="text-primary hover:underline"
            >
              hello@glp1guide.com
            </a>
          </p>
          <p className="mt-3">
            For content corrections or factual concerns, we take accuracy
            seriously and will review and update content when warranted.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Legal
          </h2>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
