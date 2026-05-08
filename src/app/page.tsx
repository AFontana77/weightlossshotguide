import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weight Loss Shot Guide — GLP-1 Protein, Supplements & Telehealth",
  description:
    "GLP-1 guide for Ozempic and Wegovy users. Find the best protein shakes, compare telehealth programs, and track body fat the right way.",
  alternates: { canonical: "https://www.weightlossshotguide.com" },
};
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSchema } from "@/components/schema/json-ld";

const categories = [
  {
    title: "Protein Shakes",
    description:
      "Which powders actually work with GLP-1 appetite suppression? RTD options, whey, and collagen, ranked for suppressed appetites.",
    href: "/best-protein-powder-glp1",
    badge: "Most Critical",
  },
  {
    title: "Supplements",
    description:
      "Creatine, probiotics, and magnesium: what's actually worth taking. Backed by clinical evidence, not marketing.",
    href: "/best-supplements-ozempic",
    badge: "Evidence-Based",
  },
  {
    title: "Telehealth Programs",
    description:
      "Compare programs by real cost, medical oversight quality, and state availability. Two programs cleared our bar.",
    href: "/glp1-telehealth-guide",
    badge: "Most Researched",
  },
  {
    title: "Body Monitors",
    description:
      "Track fat vs. muscle loss. The number on the scale does not tell the full story. Smart scales that matter.",
    href: "/best-body-composition-monitor",
    badge: "Essential Tool",
  },
];

const medicationHubs = [
  {
    title: "Zepbound",
    description:
      "FDA-approved tirzepatide for weight loss. SURMOUNT-1 data shows 20.9% average body weight loss. How it works, dosing schedule, and who qualifies.",
    href: "/zepbound",
    badge: "823K Searches/Mo",
  },
  {
    title: "Mounjaro",
    description:
      "Tirzepatide for type 2 diabetes. SURPASS trials show 25 lbs average loss at 15 mg. Lilly $25/month savings card explained.",
    href: "/mounjaro",
    badge: "673K Searches/Mo",
  },
  {
    title: "Tirzepatide",
    description:
      "The GIP + GLP-1 dual agonist behind both Mounjaro and Zepbound. How the mechanism works and what it means for weight loss vs semaglutide.",
    href: "/tirzepatide",
    badge: "673K Searches/Mo",
  },
  {
    title: "Compounding Pharmacies",
    description:
      "How to find a legitimate compounding pharmacy for GLP-1 medication. 503A vs 503B, what to verify, and which telehealth platforms we trust.",
    href: "/compounding-pharmacies",
    badge: "Directory",
  },
];

const featuredArticles = [
  {
    title: "What to Eat on Ozempic: The Muscle-Preserving Protein Strategy",
    description:
      "The hidden risk of GLP-1 weight loss is muscle loss. Here's how to hit 1.2-1.6g of protein per kg of body weight when you're barely hungry.",
    href: "/blog/what-to-eat-on-ozempic",
    category: "Nutrition",
  },
  {
    title: "5 Supplements Every GLP-1 User Should Know About",
    description:
      "Creatine is non-negotiable. Probiotics address the GI side effects nobody warns you about. Here's the full evidence-based list.",
    href: "/blog/glp1-supplements-guide",
    category: "Supplements",
  },
  {
    title: "Ozempic vs Wegovy vs Mounjaro: What's Actually Different?",
    description:
      "Two of these are the same molecule at different doses. One is a completely different drug with a different mechanism. Here's what that means for you.",
    href: "/blog/ozempic-vs-wegovy-vs-mounjaro",
    category: "Medications",
  },
  {
    title: "Why the Scale Lies on GLP-1: Track Body Composition Instead",
    description:
      "You can lose 20 lbs and gain body fat percentage at the same time. Here's how to track what actually matters.",
    href: "/blog/glp1-body-composition-tracking",
    category: "Tracking",
  },
];

export default function HomePage() {
  return (
    <>
      <ArticleSchema
        title="Weight Loss Shot Guide — GLP-1, Ozempic & Wegovy Product Reviews"
        description="Evidence-based product reviews for weight loss shot users. Best protein powders, supplements, telehealth programs, and body composition monitors."
        url="https://www.weightlossshotguide.com"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              REGISTERED-NURSE REVIEWED, PRESCRIBER VERIFIED
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Get a doctor-prescribed GLP-1 shipped this week
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Real telehealth reviews of compounded and brand semaglutide and tirzepatide. Picked by who has a US-licensed prescriber on staff, not who pays the highest commission.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/glp1-telehealth-guide">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer w-full sm:w-auto"
                >
                  Find a legitimate provider
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/best-protein-powder-glp1">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer w-full sm:w-auto"
                >
                  See All Reviews
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No fly-by-night clinics. Prescriber license confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            The Products That Actually Work on GLP-1
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl">
            Every review is written for GLP-1 users specifically. Generic supplement and nutrition advice does not apply here.
          </p>
        </div>

        <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
          {categories.map((cat, i) => (
            <Link key={cat.href} href={cat.href} className="group flex items-start gap-5 px-5 py-4 hover:bg-muted/40 transition-colors">
              <span className="text-2xl font-bold text-muted-foreground/25 tabular-nums shrink-0 mt-0.5 w-7">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full shrink-0">{cat.badge}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* Medications Hub */}
      <section className="bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              GLP-1 Medication Guides
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Clinical data, dosing schedules, and cost breakdowns for every major GLP-1 drug.
            </p>
          </div>

          <div className="divide-y divide-border border border-border rounded-xl overflow-hidden bg-card">
            {medicationHubs.map((med, i) => (
              <Link key={med.href} href={med.href} className="group flex items-start gap-5 px-5 py-4 hover:bg-muted/40 transition-colors">
                <span className="text-2xl font-bold text-muted-foreground/25 tabular-nums shrink-0 mt-0.5 w-7">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{med.title}</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full shrink-0">{med.badge}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{med.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                From the Blog
              </h2>
              <p className="mt-1 text-muted-foreground">
                GLP-1-specific nutrition, supplement, and tracking guides.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              All Articles
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredArticles.map((article) => (
              <Link key={article.href} href={article.href} className="group">
                <Card className="h-full hover:shadow-md transition-all duration-200 hover:border-primary/30">
                  <CardContent className="p-5">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-foreground mt-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Three Promises on Every Weight Loss Shot Guide Review</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <dt className="font-semibold text-foreground mb-2">No Pharma Sponsorships</dt>
            <dd className="text-muted-foreground leading-relaxed">All reviews are independent. We do not accept payment from telehealth providers for placement or higher ratings.</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground mb-2">GLP-1 Specific</dt>
            <dd className="text-muted-foreground leading-relaxed">Generic supplement advice does not apply on these medications. We focus on what is different about supplementing while on GLP-1 drugs.</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground mb-2">Updated Regularly</dt>
            <dd className="text-muted-foreground leading-relaxed">Drug approvals, program pricing, and research evolve fast. We update our reviews when things change.</dd>
          </div>
        </dl>
      </section>

      {/* Affiliate Disclosure */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            <strong>Affiliate Disclosure:</strong> Weight Loss Shot Guide is
            reader-supported. When you buy through links on our site, we may
            earn an affiliate commission at no extra cost to you. This helps us
            keep our research independent.{" "}
            <Link href="/about#affiliate-disclosure" className="underline">
              Learn more
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
