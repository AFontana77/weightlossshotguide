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
import { bodyMonitors } from "@/data/products";
import { bestLink } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Best Body Composition Monitors for GLP-1 Users (2026)",
  description:
    "Track fat mass vs. lean muscle during GLP-1 weight loss. Smart scales and body composition monitors reviewed for Ozempic, Wegovy, and Mounjaro users who need more than scale weight.",
  alternates: { canonical: "https://www.weightlossshotguide.com/best-body-composition-monitor" },
};

const faqs = [
  {
    question: "Why is regular scale weight misleading on GLP-1?",
    answer:
      "Scale weight measures total mass, fat, muscle, water, bone, and organs combined. On GLP-1 medications, rapid weight loss often includes a significant portion of lean muscle mass, especially without adequate protein and resistance training. You can lose 20 lbs and actually increase your body fat percentage if most of that loss came from muscle. A body composition monitor gives you the full picture: are you losing fat, or are you losing muscle?",
  },
  {
    question: "How accurate are smart scales for body composition?",
    answer:
      "Smart scales use bioelectrical impedance analysis (BIA), a weak electrical current that measures resistance through body tissue. They are not as accurate as DEXA scans (the gold standard) or hydrostatic weighing. However, they are accurate enough to track trends over time, which is all most GLP-1 users need. If your fat percentage is trending down while lean mass stays stable, you're on the right track, regardless of whether the absolute number is off by 1-2%.",
  },
  {
    question: "What metrics matter most on GLP-1?",
    answer:
      "The four most important metrics are: body fat percentage (trending down is the goal), lean muscle mass (should stay stable or only decrease slightly), visceral fat (should decrease significantly on GLP-1), and metabolic rate (can decrease with muscle loss, important to monitor). Weight is the least informative number. Track it, but don't obsess over it.",
  },
  {
    question: "When should I weigh myself on GLP-1?",
    answer:
      "Weigh at the same time every day, ideally morning, after using the bathroom, before eating or drinking. Body weight fluctuates 2-5 lbs throughout the day based on hydration, food, and other factors. The daily number matters less than the weekly average trend. Smart scales with companion apps (like Withings or Renpho) track these trends automatically.",
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

export default function BodyMonitorPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.weightlossshotguide.com" },
          {
            name: "Best Body Composition Monitors",
            url: "https://www.weightlossshotguide.com/best-body-composition-monitor",
          },
        ]}
      />
      <ItemListSchema
        name="Best Body Composition Monitors for GLP-1 Users"
        items={bodyMonitors.map((p, i) => ({
          name: p.name,
          url: `https://www.weightlossshotguide.com/best-body-composition-monitor#${p.slug}`,
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
          <span className="text-foreground">Best Body Composition Monitors</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Best Body Composition Monitors for GLP-1 Users (2026)
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The number on the scale is the most misleading metric you can track
            on GLP-1 medications. Rapid weight loss without enough protein and
            resistance training leads to muscle loss, and scale weight cannot
            tell you whether you lost fat or muscle. Two people can both lose 30
            lbs on Ozempic. One preserved 28 lbs of that as fat loss with only
            2 lbs of muscle lost. The other lost 20 lbs of fat and 10 lbs of
            muscle. The scale shows the same number. Their health outcomes are
            completely different. A body composition monitor gives you the actual
            data: body fat percentage, lean mass, visceral fat, and metabolic
            rate. That&apos;s the information that tells you whether your
            GLP-1 journey is going well or whether you need to change your
            protein intake or exercise routine.
          </p>
        </header>

        {/* The Four Metrics */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            The Four Numbers That Matter on GLP-1
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Scale weight tells you almost nothing on GLP-1. These four numbers
            tell you what is really happening.
          </p>
          <div className="overflow-x-auto border border-border rounded-lg mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Metric</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">What to Watch For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Body Fat %</td>
                  <td className="px-4 py-3 text-muted-foreground">Should trend down. This is the goal.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Lean Muscle Mass</td>
                  <td className="px-4 py-3 text-muted-foreground">Should stay stable. Big drops mean too little protein.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Visceral Fat</td>
                  <td className="px-4 py-3 text-muted-foreground">Should drop fast on GLP-1. This is the dangerous fat around organs.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Metabolic Rate</td>
                  <td className="px-4 py-3 text-muted-foreground">Can fall with muscle loss. Creatine and protein help keep it up.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Smart Scale vs DEXA */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Smart Scale vs DEXA Scan
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A DEXA scan is the gold standard. It is accurate to within 1-2%.
            It costs $50-150 and requires a clinic visit. Most people get one
            or two per year, not weekly.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A smart scale is less exact. It can be off by 3-5% on any single
            reading. But it gives you data every day. The trend matters more
            than any one number. If your fat percentage drops over 12 weeks
            while lean mass stays flat, that is real progress, even if the
            scale is off by a few points.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Best approach:</strong> Use a
            smart scale weekly. Get a DEXA scan every 3-4 months to check
            accuracy. The scale tells you the trend. The DEXA tells you the truth.
          </div>
        </section>

        {/* Tracking Protocol */}
        <section className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            A Simple Tracking Routine
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Weigh at the same time every day. Morning works best. Use the
            bathroom first. Do not eat or drink yet. Same clothes, or none.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Do not react to any single day. Body weight swings 2-5 lbs just
            from water and food. Look at the 7-day average instead. Most smart
            scale apps show this. That weekly average is the real signal.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Check your fat percent and lean mass once per week, not daily.
            Daily changes are noise. Weekly changes are data.
          </p>
        </section>

        {/* Affiliate Disclosure */}
        <div className="bg-muted/50 border border-border rounded-lg p-4 mb-10 text-sm text-muted-foreground">
          <strong className="text-foreground">Affiliate Disclosure:</strong>{" "}
          This page contains affiliate links. We earn a commission when you
          purchase through our links, at no extra cost to you.
        </div>

        {/* Products */}
        <section className="space-y-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Our Top Picks
          </h2>

          {bodyMonitors.map((product, index) => {
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
            Protect the Muscle You&apos;re Tracking
          </h2>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Creatine is the most effective supplement for preserving lean muscle
            on GLP-1 medications. See our full supplement guide.
          </p>
          <Link href="/best-supplements-ozempic">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer"
            >
              See Supplement Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}
