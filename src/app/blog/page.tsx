import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "GLP-1 Blog — Nutrition, Supplements & Tracking Guides",
  description:
    "Evidence-based articles for GLP-1 medication users. Protein strategy, supplement guides, drug comparisons, and body composition tracking for Ozempic, Wegovy, and Mounjaro users.",
};

const articles = [
  {
    title: "What to Eat on Ozempic: The Muscle-Preserving Protein Strategy",
    description:
      "The hidden risk of GLP-1 weight loss is muscle loss, not just fat. Here's how to hit your protein targets when you're barely hungry — and which foods and supplements make it achievable.",
    href: "/blog/what-to-eat-on-ozempic",
    category: "Nutrition",
    readTime: "7 min read",
  },
  {
    title: "5 Supplements Every GLP-1 User Should Take (Backed by Research)",
    description:
      "Creatine is non-negotiable. Probiotics address the GI side effects nobody warns you about. Magnesium deficiency gets worse during rapid weight loss. Here's the complete evidence-based list.",
    href: "/blog/glp1-supplements-guide",
    category: "Supplements",
    readTime: "8 min read",
  },
  {
    title: "Ozempic vs Wegovy vs Mounjaro: What's Actually Different?",
    description:
      "Two of these are the same molecule at different doses. One uses a completely different mechanism. Here's what the differences mean for weight loss outcomes, side effects, and cost.",
    href: "/blog/ozempic-vs-wegovy-vs-mounjaro",
    category: "Medications",
    readTime: "9 min read",
  },
  {
    title: "Why the Scale Lies on GLP-1: Track Body Composition Instead",
    description:
      "You can lose 30 lbs and end up with a higher body fat percentage. Here's how to track what actually matters — fat mass, lean mass, and visceral fat — and what tools make it practical.",
    href: "/blog/glp1-body-composition-tracking",
    category: "Tracking",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
          GLP-1 Guide Blog
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Nutrition, Supplements &amp; Tracking Guides
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Written specifically for GLP-1 medication users. No generic advice —
          only what&apos;s different about nutrition and supplementing on these
          medications.
        </p>
      </header>

      {/* Articles */}
      <div className="space-y-5">
        {articles.map((article) => (
          <Link key={article.href} href={article.href} className="group block">
            <Card className="hover:shadow-md transition-all duration-200 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
                <p className="mt-3 text-sm font-medium text-primary flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
