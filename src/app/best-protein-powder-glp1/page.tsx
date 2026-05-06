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
import { QuickVerdictBox } from "@/components/ui/quick-verdict-box";

export const metadata: Metadata = {
  title: "Best Protein Powders for GLP-1 Users (2026)",
  description:
    "The best protein supplements specifically for Ozempic, Wegovy, and Mounjaro users. Ranked for absorption, tolerability, and hitting the 1.2-1.6g/kg protein target on a suppressed appetite.",
  alternates: { canonical: "https://www.weightlossshotguide.com/best-protein-powder-glp1" },
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
      "Yes. Protein powder is food, concentrated food protein, and does not interact with semaglutide, tirzepatide, or any other GLP-1 medication. It is safe to use. The practical consideration is tolerability: some users find protein powder causes bloating during the initial GLP-1 adjustment period. If this affects you, start with ready-to-drink options like Fairlife Core Power.",
  },
  {
    question: "Should I use whey or plant protein on Ozempic?",
    answer:
      "Whey protein is the better choice for muscle preservation because it has a higher leucine content than plant proteins. Leucine is the specific amino acid that triggers muscle protein synthesis. If you're dairy-free, look for a pea + rice protein blend which comes closest to the amino acid profile of whey.",
  },
  {
    question: "What if protein powder makes me nauseous on GLP-1?",
    answer:
      "Try ready-to-drink liquid proteins first, particularly Fairlife Core Power Elite. Liquid protein with no mixing, no powder texture, and no prep is much easier on a GLP-1-suppressed stomach. If even RTD proteins cause nausea, try collagen peptides first (they dissolve invisibly in any beverage and are very gentle) and slowly build tolerance before moving to whey.",
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

          <QuickVerdictBox
            winnerName="Fairlife Core Power Elite"
            winnerCategory="GLP-1 Protein Supplement"
            dreamOutcomeChain="Hit your daily protein target on GLP-1 even when your stomach wants nothing, so you keep the muscle the drug helps you lose, so the weight that comes off stays off."
            proofPoint="42g protein per bottle. Casein plus whey blend. Zero prep. Available at Walmart, Costco, and Amazon."
            affiliateUrl="https://www.amazon.com/dp/B07WLRG765?tag=weightlossshotguide-20"
            ctaLabel="Check Price on Amazon"
            riskReversal="30-day Amazon returns. Prime shipping."
          />

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Protein is the single most important nutritional variable for anyone
            on Ozempic, Wegovy, or Mounjaro. GLP-1 medications suppress appetite
            so effectively that most users eat too little protein, and the body
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

        {/* Protein Target Section */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Your Protein Target on GLP-1
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The standard protein goal is 0.8g per kg of body weight. On GLP-1
            drugs, that number goes up to 1.2-1.6g per kg. The reason is
            simple. Fast weight loss burns muscle. More protein slows that down.
          </p>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Body Weight</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Min Daily Protein</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Max Daily Protein</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["140 lbs (64 kg)", "77g", "102g"],
                  ["160 lbs (73 kg)", "88g", "117g"],
                  ["180 lbs (82 kg)", "98g", "131g"],
                  ["200 lbs (91 kg)", "109g", "146g"],
                  ["220 lbs (100 kg)", "120g", "160g"],
                  ["240 lbs (109 kg)", "131g", "174g"],
                ].map(([weight, min, max]) => (
                  <tr key={weight}>
                    <td className="px-4 py-3 font-medium text-foreground">{weight}</td>
                    <td className="px-4 py-3 text-muted-foreground">{min}</td>
                    <td className="px-4 py-3 text-muted-foreground">{max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            GLP-1 cuts hunger hard. Most users eat 800-1,200 calories per day.
            Hitting 100g+ of protein from food alone at that calorie level is
            very hard. Protein shakes fill the gap.
          </p>
        </section>

        {/* Whey vs Plant */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Whey vs Plant Protein on GLP-1
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Whey is the better pick for muscle. It has more leucine than plant
            protein. Leucine is the amino acid that tells your muscles to hold
            on. More leucine means more muscle kept during weight loss.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Dairy-free? Use a pea and rice blend. This mix comes closest to
            whey&apos;s amino acid profile. Pea alone is not enough.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Collagen protein is a third option. It does not build muscle on its
            own. But it is the easiest to tolerate. No texture. No powder clump.
            Dissolves in hot or cold liquid. Good for early GLP-1 use when
            nausea is still a problem.
          </p>
        </section>

        {/* RTD vs Powder */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Ready-to-Drink vs Powder: Which to Start With
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            In the first 4-8 weeks on GLP-1, nausea is common. Mixing powder
            takes effort. The smell of powder can make nausea worse. Start
            with ready-to-drink (RTD) shakes. No prep. No smell. Easy to
            sip small amounts.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Once your body adjusts to the drug, switch to powder. Powder is
            cheaper per gram of protein. You have more control over what goes
            in it. A 5 lb bag of whey costs about $0.50-0.80 per serving.
            RTD shakes cost $2-3 each.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Rule of thumb:</strong> Start
            with RTD shakes. Use powder after 6-8 weeks when your stomach
            has settled. Keep RTD on hand for high-nausea days.
          </div>
        </section>

        {/* How we ranked */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            How We Ranked These
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            We did not rank by taste or marketing. We ranked by what matters
            on GLP-1. Four things drove every pick:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary shrink-0">1.</span>
              <span><strong className="text-foreground">Protein per serving.</strong> We want 25g or more. Below that, you need too many servings to hit your daily goal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary shrink-0">2.</span>
              <span><strong className="text-foreground">GI tolerance.</strong> Anything that causes more nausea or bloating on top of GLP-1 side effects is out.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary shrink-0">3.</span>
              <span><strong className="text-foreground">Leucine content.</strong> For whey products, we checked leucine levels. High leucine = better muscle signal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary shrink-0">4.</span>
              <span><strong className="text-foreground">Ease of use.</strong> When hunger is low, prep friction matters. We favored options that take under 60 seconds to prepare.</span>
            </li>
          </ul>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-muted/50 border border-border rounded-lg p-4 mb-10 text-sm text-muted-foreground">
          <strong className="text-foreground">Affiliate Disclosure:</strong> This
          page contains affiliate links. We earn a commission when you purchase
          through our links, at no extra cost to you. This does not influence our
          rankings, we highlight cons as prominently as pros.
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
