import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "GLP-1 Guide terms of service.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Terms of Service
        </h1>
        <p className="mt-2 text-muted-foreground">Last updated: April 17, 2026</p>
      </header>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Acceptance of Terms
          </h2>
          <p>
            By accessing and using GLP-1 Guide (glp1guide.com), you accept and
            agree to be bound by these Terms of Service. If you do not agree,
            please do not use this site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Not Medical Advice
          </h2>
          <p>
            The content on GLP-1 Guide is for informational purposes only and
            does not constitute medical advice, diagnosis, or treatment. Always
            consult a qualified healthcare provider before starting, stopping,
            or changing any medication or supplement regimen. GLP-1 medications
            require a prescription and medical oversight — this site does not
            provide either.
          </p>
          <p className="mt-3">
            Product reviews and recommendations on this site reflect our
            assessment of products based on publicly available information,
            user reports, and independent research. Individual results vary.
            We do not guarantee any specific outcomes from using products
            reviewed on this site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Affiliate Relationships
          </h2>
          <p>
            This site participates in affiliate programs. We earn commissions
            when you purchase through our links. These relationships are
            disclosed on each relevant page and in our footer. Our editorial
            content is independent of these commercial relationships.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Intellectual Property
          </h2>
          <p>
            All content on GLP-1 Guide — including text, graphics, and code —
            is owned by GLP-1 Guide or its content providers and is protected
            by copyright. You may not reproduce, distribute, or create
            derivative works without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Limitation of Liability
          </h2>
          <p>
            GLP-1 Guide is provided &quot;as is&quot; without warranties of any kind.
            We are not liable for any damages arising from use of this site or
            reliance on its content. This includes but is not limited to
            damages arising from health decisions made based on content
            published on this site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Third-Party Sites
          </h2>
          <p>
            Links to third-party websites are provided for convenience. We do
            not endorse or take responsibility for the content, products, or
            services of any third-party site. Your use of third-party sites
            is governed by their respective terms and privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Changes
            are effective when posted. Continued use of the site after changes
            constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">
            Contact
          </h2>
          <p>
            Questions about these terms:{" "}
            <a href="mailto:hello@glp1guide.com" className="text-primary hover:underline">
              hello@glp1guide.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
