import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, CheckCircle, XCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BreadcrumbSchema,
  ItemListSchema,
  FAQSchema,
} from "@/components/schema/json-ld";
import { telehealthPrograms } from "@/data/products";
import { bestLink } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "GLP-1 Telehealth Programs Compared (2026) — Ozempic & Semaglutide Online",
  description:
    "Compare GLP-1 telehealth providers by cost, medical oversight quality, state availability, and what 'generic semaglutide' actually means. Honest comparison with affiliate commissions disclosed.",
};

const faqs = [
  {
    question: "Is it safe to get GLP-1 prescriptions online?",
    answer:
      "Yes, as long as the telehealth provider is licensed and operating legally. Look for: a real medical consultation (not just an automated questionnaire), licensed physicians or nurse practitioners reviewing your case, proper follow-up monitoring, and clear disclosure of what drug you're being prescribed. Avoid providers who promise prescriptions without any medical review.",
  },
  {
    question: "What's the difference between branded and compounded semaglutide?",
    answer:
      "Branded semaglutide is FDA-approved Ozempic (for diabetes) or Wegovy (for weight loss). Compounded semaglutide is made by compounding pharmacies using semaglutide as an active ingredient — these are legal when branded versions are on the FDA shortage list but are not FDA-approved themselves. The cost difference is significant: branded GLP-1 drugs cost $800-$1,400/month without insurance; compounded versions run $99-$400/month. Quality compounding pharmacies produce safe, effective product, but you should verify the pharmacy is accredited.",
  },
  {
    question: "How much does GLP-1 telehealth cost per month?",
    answer:
      "Budget providers start around $99-149/month for the telehealth service plus medication. Premium providers with comprehensive monitoring can run $299-400+/month. The medication cost varies by provider — some include it, some bill separately. Always ask about total monthly cost including medication before signing up.",
  },
  {
    question: "Which GLP-1 telehealth provider is best?",
    answer:
      "It depends on your needs. SHED MD is the best choice for users who want real medical oversight, nutrition coaching, and ongoing monitoring — worth the higher price if you have other health conditions or are concerned about side effects. Direct Meds is the better choice for healthy adults who primarily need straightforward prescription access at lower cost. Compare state availability before choosing — not all providers serve all states.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-muted"
          }`}
        />
      ))}
      <span className="text-sm font-medium text-foreground ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function TelehealthGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.glp1guide.com" },
          {
            name: "GLP-1 Telehealth Guide",
            url: "https://www.glp1guide.com/glp1-telehealth-guide",
          },
        ]}
      />
      <ItemListSchema
        name="Best GLP-1 Telehealth Programs"
        items={telehealthPrograms.map((p, i) => ({
          name: p.name,
          url: `https://www.glp1guide.com/glp1-telehealth-guide#${p.slug}`,
          position: i + 1,
        }))}
      />
      <FAQSchema questions={faqs} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">GLP-1 Telehealth Guide</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            GLP-1 Telehealth Programs Compared (2026)
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The telehealth GLP-1 market has exploded — and not all providers are
            equal. Some offer genuine medical oversight with monitoring,
            nutrition support, and follow-up care. Others are prescription mills
            that rubber-stamp a questionnaire and send you a medication without
            real review. The difference matters: GLP-1 medications carry real
            side effects (nausea, GI issues, potential cardiovascular concerns in
            some patients) that require competent medical oversight to manage
            safely. Here is how to evaluate any GLP-1 telehealth provider: Do
            they do a real medical consultation, or just an automated form? Do
            they monitor for side effects? What drug are they actually prescribing
            — branded or compounded? What does the real monthly cost look like
            when medication is included? We reviewed two of the strongest options
            on both ends of the market.
          </p>
        </header>

        {/* What to look for */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                What to Look For in a GLP-1 Telehealth Provider
              </h2>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Real medical consultation — not an automated questionnaire</li>
                <li>• Licensed physicians or NPs reviewing your case</li>
                <li>• Ongoing monitoring for side effects</li>
                <li>• Clear disclosure of the drug (branded vs. compounded)</li>
                <li>• Transparent total monthly cost including medication</li>
                <li>• State availability clearly listed before you sign up</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-sm">
          <strong className="text-amber-900">Full Affiliate Disclosure:</strong>{" "}
          <span className="text-amber-800">
            This page contains affiliate links with significant commissions. SHED
            MD pays us $350 for qualified signups. Direct Meds pays $280. These
            are among the highest affiliate commissions on this site. We disclose
            this because you deserve to know. Our rankings reflect genuine quality
            differences — we highlight cons as prominently as pros regardless of
            commission size.
          </span>
        </div>

        {/* Products */}
        <section className="space-y-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Our Top Picks
          </h2>

          {telehealthPrograms.map((product, index) => {
            const link = bestLink(product);
            return (
              <Card
                key={product.slug}
                id={product.slug}
                className="border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          #{index + 1}
                        </span>
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {product.name}
                        </h3>
                      </div>
                      <StarRating rating={product.rating} />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">
                        from ${product.price}/mo
                      </p>
                      <p className="text-xs font-medium text-accent">
                        {product.specs["Affiliate CPA"]} affiliate commission
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Pros
                      </p>
                      <ul className="space-y-1.5">
                        {product.pros.map((pro) => (
                          <li
                            key={pro}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Cons
                      </p>
                      <ul className="space-y-1.5">
                        {product.cons.map((con) => (
                          <li
                            key={con}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="mt-5 bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Program Details
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key}>
                          <p className="text-xs text-muted-foreground">{key}</p>
                          <p className="text-sm font-medium text-foreground">
                            {val}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verdict */}
                  <div className="mt-5 border-l-4 border-primary pl-4">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Our Verdict
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.verdict}
                    </p>
                  </div>

                  <div className="mt-5">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer"
                      >
                        Visit {product.brand}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Started a GLP-1 Program? Get Your Supplements Right.
          </h2>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Creatine, probiotics, and protein supplements are non-negotiable for
            anyone on GLP-1 medications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/best-supplements-ozempic">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                See Supplement Reviews
              </Button>
            </Link>
            <Link href="/best-protein-powder-glp1">
              <Button variant="outline" size="lg" className="cursor-pointer">
                See Protein Reviews
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
