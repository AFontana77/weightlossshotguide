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
import { proteinShakes } from "@/data/products";
import { bestLink } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Best Protein Powders for GLP-1 Users (2026)",
  description:
    "The best protein supplements specifically for Ozempic, Wegovy, and Mounjaro users. Ranked for absorption, tolerability, and hitting the 1.2-1.6g/kg protein target on a suppressed appetite.",
};

const faqs = [
  {
    question: "How much protein do you need on Ozempic?",
    answer:
      "The clinical recommendation for GLP-1 users is 1.2-1.6g of protein per kilogram of body weight daily. At 180 lbs (82 kg), that's 98-131g of protein per day. This is significantly higher than the standard 0.8g/kg recommendation and is necessary to preserve lean muscle mass during rapid weight loss.",
  },
  {
    question: "Is it safe to use protein powder on GLP-1 medications?",
    answer:
      "Yes. Protein powder is food — concentrated food protein — and does not interact with semaglutide, tirzepatide, or any other GLP-1 medication. It is safe to use. The practical consideration is tolerability: some users find protein powder causes bloating during the initial GLP-1 adjustment period. If this affects you, start with ready-to-drink options like Fairlife Core Power.",
  },
  {
    question: "Should I use whey or plant protein on Ozempic?",
    answer:
      "Whey protein is the better choice for muscle preservation because it has a higher leucine content than plant proteins. Leucine is the specific amino acid that triggers muscle protein synthesis. If you're dairy-free, look for a pea + rice protein blend which comes closest to the amino acid profile of whey.",
  },
  {
    question: "What if protein powder makes me nauseous on GLP-1?",
    answer:
      "Try ready-to-drink liquid proteins first — particularly Fairlife Core Power Elite. Liquid protein with no mixing, no powder texture, and no prep is much easier on a GLP-1-suppressed stomach. If even RTD proteins cause nausea, try collagen peptides first (they dissolve invisibly in any beverage and are very gentle) and slowly build tolerance before moving to whey.",
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

export default function ProteinPowderPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.weightlossshotguide.com" },
          {
            name: "Best Protein Powders for GLP-1 Users",
            url: "https://www.weightlossshotguide.com/best-protein-powder-glp1",
          },
        ]}
      />
      <ItemListSchema
        name="Best Protein Powders for GLP-1 Users"
        items={proteinShakes.map((p, i) => ({
          name: p.name,
          url: `https://www.weightlossshotguide.com/best-protein-powder-glp1#${p.slug}`,
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
          <span className="text-foreground">Best Protein Powders for GLP-1</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Best Protein Powders for GLP-1 Users (2026)
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Protein is the single most important nutritional variable for anyone
            on Ozempic, Wegovy, or Mounjaro. GLP-1 medications suppress appetite
            so effectively that most users eat too little protein — and the body
            responds by breaking down muscle, not just fat. The clinical target
            is 1.2-1.6g of protein per kilogram of body weight daily. At average
            body weights, that means 100-140g of protein every day from a stomach
            that barely wants to eat. Protein supplements are not optional for
            most GLP-1 users. The question is which ones work best with suppressed
            appetite, potential nausea, and the practical reality of eating far
            less than usual. We ranked these specifically for GLP-1 tolerability,
            protein density, and real-world ease of use.
          </p>
        </header>

        {/* Affiliate Disclosure */}
        <div className="bg-muted/50 border border-border rounded-lg p-4 mb-10 text-sm text-muted-foreground">
          <strong className="text-foreground">Affiliate Disclosure:</strong> This
          page contains affiliate links. We earn a commission when you purchase
          through our links, at no extra cost to you. This does not influence our
          rankings — we highlight cons as prominently as pros.
        </div>

        {/* Products */}
        <section className="space-y-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Our Top Picks
          </h2>

          {proteinShakes.map((product, index) => {
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
                      <p className="text-xs text-muted-foreground">per pack</p>
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
            Looking for a GLP-1 Prescription?
          </h2>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Compare telehealth programs by cost, support quality, and state
            availability.
          </p>
          <Link href="/glp1-telehealth-guide">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer"
            >
              Compare Telehealth Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}
