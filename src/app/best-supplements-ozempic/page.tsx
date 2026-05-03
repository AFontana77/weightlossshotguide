import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BreadcrumbSchema,
  ItemListSchema,
  FAQSchema,
} from "@/components/schema/json-ld";
import { supplementProducts } from "@/data/products";
import { bestLink } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Best Supplements for Ozempic & GLP-1 Users (2026)",
  description:
    "Evidence-based supplement recommendations for GLP-1 medication users. Creatine for muscle preservation, probiotics for GI side effects, magnesium for deficiency, what actually works.",
  alternates: { canonical: "https://www.weightlossshotguide.com/best-supplements-ozempic" },
};

const faqs = [
  {
    question: "What supplements should I take on Ozempic?",
    answer:
      "At minimum: creatine monohydrate (5g daily for muscle preservation), a high-quality multi-strain probiotic (for GI side effects), and magnesium bisglycinate (for deficiency that accelerates during weight loss). Many users also benefit from B12 and Vitamin D supplementation, particularly if dietary intake is low due to suppressed appetite.",
  },
  {
    question: "Can I take vitamins with GLP-1 medications?",
    answer:
      "Yes. GLP-1 receptor agonists like semaglutide and tirzepatide do not interact with standard vitamins or mineral supplements. There are no pharmacological interactions to be concerned about. The bigger issue is that suppressed appetite means many GLP-1 users eat too little and develop nutritional gaps, supplementation helps close those gaps.",
  },
  {
    question: "Why is creatine important on GLP-1?",
    answer:
      "During rapid caloric restriction, the body breaks down both fat and muscle for energy. Creatine monohydrate has stronger clinical evidence for preserving lean muscle mass during a caloric deficit than any other supplement. Multiple studies show 5g per day maintains strength and muscle volume even during significant weight loss. On GLP-1 medications where rapid weight loss is common, creatine is the most important supplement to take.",
  },
  {
    question: "Are probiotics necessary on Wegovy?",
    answer:
      "Not mandatory, but 30-40% of GLP-1 users experience GI side effects including nausea, constipation, and digestive discomfort. Probiotics directly address these issues by supporting gut microbiome balance and motility. If you're in the 60-70% who tolerate GLP-1 GI effects well, probiotics are still beneficial but less urgent. If you're struggling with nausea or constipation, a high-quality multi-strain probiotic should be one of your first purchases.",
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

export default function SupplementsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.weightlossshotguide.com" },
          {
            name: "Best Supplements for Ozempic",
            url: "https://www.weightlossshotguide.com/best-supplements-ozempic",
          },
        ]}
      />
      <ItemListSchema
        name="Best Supplements for GLP-1 Users"
        items={supplementProducts.map((p, i) => ({
          name: p.name,
          url: `https://www.weightlossshotguide.com/best-supplements-ozempic#${p.slug}`,
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
          <span className="text-foreground">Best Supplements for Ozempic</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Best Supplements for Ozempic &amp; GLP-1 Users (2026)
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            GLP-1 medications change how you absorb and use nutrients. Rapid
            weight loss depletes magnesium faster. Suppressed appetite leads to
            nutritional gaps. Changed gut motility creates GI side effects that
            standard probiotic advice doesn&apos;t address. Generic supplement
            recommendations don&apos;t account for any of this. Here are the
            three supplements with the strongest evidence specifically for
            GLP-1 users, what they do, why they matter on these medications,
            and which brands meet the quality bar.
          </p>
        </header>

        {/* Evidence Priority */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Three Supplements With Real Evidence
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most GLP-1 supplement lists are generic health product roundups.
            These three are different. Each one has clinical data tied to the
            specific problems GLP-1 users face: muscle loss, GI side effects,
            and nutrient gaps from eating very little.
          </p>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Supplement</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">What It Fixes</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Creatine</td>
                  <td className="px-4 py-3 text-muted-foreground">Muscle loss during weight loss</td>
                  <td className="px-4 py-3 font-medium text-primary">#1, Start right away</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Probiotic</td>
                  <td className="px-4 py-3 text-muted-foreground">Nausea, bloating, constipation</td>
                  <td className="px-4 py-3 text-muted-foreground">#2, Start with the drug</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Magnesium</td>
                  <td className="px-4 py-3 text-muted-foreground">Low levels from eating less</td>
                  <td className="px-4 py-3 text-muted-foreground">#3, Add in first month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Creatine Dosing */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            How to Take Creatine on GLP-1
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Creatine is simple. Five grams per day. No loading phase. No cycling.
            Take it the same time each day. Mix it in water or a protein shake.
            It has no taste.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            One note: creatine pulls water into muscle cells. You may see the
            scale go up 1-2 lbs in the first week. That is water inside your
            muscles. It is not fat. Do not stop.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Common mistake:</strong> Taking
            creatine only on workout days. Muscle stores build over time. Take
            5g every day, including rest days.
          </div>
        </section>

        {/* When to Start */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            When to Start Each Supplement
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Do not start all three at once. If one causes a problem, you will
            not know which one it was.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary shrink-0 w-16">Week 1</span>
              <span>Start the probiotic. GI side effects hit hardest in the first few weeks. Get ahead of it.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary shrink-0 w-16">Week 2</span>
              <span>Add magnesium at night. Low food intake depletes it fast. It also helps with sleep.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary shrink-0 w-16">Week 4</span>
              <span>Add creatine. Your body has had time to adjust. Start 5g per day and keep it there.</span>
            </li>
          </ul>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-muted/50 border border-border rounded-lg p-4 mb-10 text-sm text-muted-foreground">
          <strong className="text-foreground">Affiliate Disclosure:</strong>{" "}
          This page contains affiliate links. We earn a commission when you
          purchase through our links, at no extra cost to you. This does not
          influence our rankings.
        </div>

        {/* Products */}
        <section className="space-y-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Our Top Picks
          </h2>

          {supplementProducts.map((product, index) => {
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
                        ${product.price}
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
                      Quick Specs
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
                  <div className="mt-5 bg-primary/5 border border-primary/20 rounded-lg p-4">
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
                      rel="noopener noreferrer nofollow sponsored"
                    >
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer"
                      >
                        {link.label}
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
            Also Read: Best Protein Powders for GLP-1 Users
          </h2>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Supplements and protein work together. See our ranked protein
            recommendations for Ozempic and Wegovy users.
          </p>
          <Link href="/best-protein-powder-glp1">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              See Protein Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}
