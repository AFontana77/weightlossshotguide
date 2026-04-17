import Link from "next/link";
import { ArrowRight, Dumbbell, Pill, Stethoscope, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSchema } from "@/components/schema/json-ld";

const categories = [
  {
    title: "Protein Shakes",
    description:
      "Which powders actually work with GLP-1 appetite suppression? RTD options, whey, and collagen — ranked for suppressed appetites.",
    href: "/best-protein-powder-glp1",
    icon: Dumbbell,
    badge: "Most Critical",
  },
  {
    title: "Supplements",
    description:
      "Creatine, probiotics, and magnesium: what's actually worth taking. Backed by clinical evidence, not marketing.",
    href: "/best-supplements-ozempic",
    icon: Pill,
    badge: "Evidence-Based",
  },
  {
    title: "Telehealth Programs",
    description:
      "Compare programs by real cost, support quality, and state availability. We show you the affiliate commissions too.",
    href: "/glp1-telehealth-guide",
    icon: Stethoscope,
    badge: "High CPA",
  },
  {
    title: "Body Monitors",
    description:
      "Track fat vs. muscle loss — the number on the scale doesn't tell the full story. Smart scales that matter.",
    href: "/best-body-composition-monitor",
    icon: Scale,
    badge: "Essential Tool",
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
        title="GLP-1 Guide — Products & Reviews for Ozempic, Wegovy & Mounjaro Users"
        description="Evidence-based product reviews for GLP-1 medication users. Best protein powders, supplements, telehealth programs, and body composition monitors."
        url="https://www.glp1guide.com"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Evidence-Based Product Reviews
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              The Companion Guide for{" "}
              <span className="text-primary">GLP-1 Users</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We review protein powders, supplements, telehealth programs, and
              body monitors specifically for people on Ozempic, Wegovy, and
              Mounjaro. No generic advice — only what works differently on
              GLP-1.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/glp1-telehealth-guide">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer w-full sm:w-auto"
                >
                  Find a Telehealth Program
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/best-protein-powder-glp1">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer w-full sm:w-auto"
                >
                  Browse All Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            What We Review
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Every review is written for GLP-1 users specifically. Generic
            supplement and nutrition advice doesn&apos;t apply — we cover
            what&apos;s different about supplementing and eating on these
            medications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.href} href={cat.href} className="group">
                <Card className="h-full hover:shadow-md transition-all duration-200 hover:border-primary/30">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        {cat.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                    <p className="mt-3 text-sm font-medium text-primary flex items-center gap-1">
                      Read Reviews
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Why Trust GLP-1 Guide?
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-foreground mb-1">
                No Pharma Sponsorships
              </p>
              <p className="text-muted-foreground">
                All reviews are independent. We don&apos;t accept payment from
                telehealth providers for placement or higher ratings.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                GLP-1 Specific
              </p>
              <p className="text-muted-foreground">
                Generic supplement advice doesn&apos;t apply on these
                medications. We focus on what&apos;s different about
                supplementing while on GLP-1 drugs.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                Updated Regularly
              </p>
              <p className="text-muted-foreground">
                Drug approvals, program pricing, and research evolve fast. We
                update our reviews when things change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            <strong>Affiliate Disclosure:</strong> GLP-1 Guide is
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
