import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Weight Loss Shot Guide privacy policy — how we collect, use, and protect your information.",
  alternates: { canonical: "https://www.weightlossshotguide.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-muted-foreground">Last updated: April 17, 2026</p>
      </header>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Information We Collect
          </h2>
          <p>
            Weight Loss Shot Guide collects limited information to operate the site and
            improve content. This includes:
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Standard web server logs (IP address, browser type, pages visited)</li>
            <li>Analytics data through third-party tools (Google Analytics)</li>
            <li>Email addresses if you voluntarily subscribe to our newsletter</li>
          </ul>
          <p className="mt-3">
            We do not collect sensitive personal information, health information,
            or payment information through this site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Cookies
          </h2>
          <p>
            This site uses cookies for analytics (Google Analytics) and to
            enable affiliate tracking when you click product links. Affiliate
            cookies allow us to receive commissions when you purchase through
            our links. You can disable cookies in your browser settings, but
            this may affect site functionality.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Third-Party Links
          </h2>
          <p>
            This site contains links to third-party websites including Amazon,
            telehealth providers, and supplement retailers. We are not
            responsible for the privacy practices of these sites. Review their
            privacy policies before providing personal information.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Affiliate Tracking
          </h2>
          <p>
            When you click affiliate links on this site, tracking cookies may
            be set by the destination site (Amazon, telehealth providers, etc.)
            to attribute your purchase to Weight Loss Shot Guide. This is standard
            affiliate marketing practice. We earn commissions when you make
            qualifying purchases through these links.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Data Retention
          </h2>
          <p>
            Analytics data is retained according to the retention settings of
            our analytics providers (typically 26 months for Google Analytics).
            Email subscriber data is retained until you unsubscribe.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Your Rights
          </h2>
          <p>
            You have the right to request access to, correction of, or deletion
            of personal data we hold about you. To exercise these rights,
            contact us at{" "}
            <a href="mailto:hello@weightlossshotguide.com" className="text-primary hover:underline">
              hello@weightlossshotguide.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy periodically. Changes will be
            posted on this page with an updated date. Continued use of the site
            after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Contact
          </h2>
          <p>
            Questions about this privacy policy:{" "}
            <a href="mailto:hello@weightlossshotguide.com" className="text-primary hover:underline">
              hello@weightlossshotguide.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
