import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "What to Eat on Ozempic: The Muscle-Preserving Protein Strategy",
  description:
    "Muscle loss is the hidden risk of GLP-1 weight loss. Here's how to hit the 1.2-1.6g/kg protein target when you're barely hungry — practical meal strategies for Ozempic and Wegovy users.",
};

export default function WhatToEatPage() {
  return (
    <>
      <ArticleSchema
        title="What to Eat on Ozempic: The Muscle-Preserving Protein Strategy"
        description="Muscle loss is the hidden risk of GLP-1 weight loss. Here's how to hit the 1.2-1.6g/kg protein target when you're barely hungry."
        url="https://www.glp1guide.com/blog/what-to-eat-on-ozempic"
        datePublished="2026-04-17"
        dateModified="2026-04-17"
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">What to Eat on Ozempic</span>
        </nav>

        <header className="mb-10">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Nutrition
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            What to Eat on Ozempic: The Muscle-Preserving Protein Strategy
          </h1>
          <p className="mt-3 text-muted-foreground">
            April 17, 2026 &middot; 7 min read
          </p>
        </header>

        <article className="prose-like space-y-6 text-foreground">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everyone focuses on how much weight they lose on GLP-1 medications.
            Very few people talk about what kind of weight they lose. This
            difference is the most important thing to understand about nutrition
            on Ozempic, Wegovy, or Mounjaro.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Muscle Loss Problem Nobody Warns You About
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            During caloric restriction, your body breaks down both fat and lean
            muscle for energy. The faster the weight loss, the more muscle
            tends to go. GLP-1 medications create very fast weight loss. Some
            clinical studies show that 25-40% of weight lost on GLP-1s comes
            from lean mass — not fat. Losing that much muscle has real
            consequences: slower metabolism, weaker bones, reduced strength,
            and a body composition that looks worse than the scale suggests.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The only two things that reliably prevent muscle loss during rapid
            weight loss are resistance training and adequate protein intake.
            You need both. Protein is the primary driver — it provides the
            amino acids that signal muscle protein synthesis and prevent
            breakdown.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Protein Target: 1.2-1.6g Per Kilogram of Body Weight
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The standard protein recommendation is 0.8g per kilogram of body
            weight. During weight loss — especially rapid weight loss on GLP-1
            medications — the clinical recommendation jumps to 1.2-1.6g per
            kilogram. At 180 lbs (82 kg), that means 98-131g of protein daily.
            At 220 lbs (100 kg), it means 120-160g.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The problem: GLP-1 suppresses appetite so effectively that most
            users struggle to eat enough to hit this target. You might feel
            full after 300-400 calories. Getting 100g+ of protein from 300-400
            calories is essentially impossible with whole food alone.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Practical Protein Strategy on Suppressed Appetite
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The key insight is to protein-front your meals and use high-density
            protein sources. When you can only eat a small amount, every calorie
            should carry as much protein as possible.
          </p>

          <div className="bg-muted/50 border border-border rounded-lg p-5 space-y-3">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              High-Protein Foods for Limited Appetite
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Greek yogurt (plain, 2%):</strong> 17-20g protein per cup, easy to eat small amounts</li>
              <li><strong className="text-foreground">Cottage cheese:</strong> 25g protein per cup, very low volume for the protein content</li>
              <li><strong className="text-foreground">Eggs:</strong> 6g each, fast to prepare, tolerated well by most GLP-1 users</li>
              <li><strong className="text-foreground">Canned tuna/salmon:</strong> 25-30g per can, zero prep required</li>
              <li><strong className="text-foreground">Rotisserie chicken breast:</strong> 30-35g per serving, widely available</li>
              <li><strong className="text-foreground">Fairlife Core Power Elite:</strong> 42g per bottle, ready-to-drink, no prep</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            When to Use Protein Supplements
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you can eat 1,000-1,200 calories per day and prioritize
            high-protein foods, you might be able to hit your targets through
            food alone. Most GLP-1 users cannot. When food intake drops below
            800-1,000 calories, protein supplements are not optional — they are
            the only practical way to get enough protein without overeating by
            volume.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Start with ready-to-drink options like Fairlife Core Power Elite if
            nausea is an issue. The liquid format and zero prep requirement make
            it easy to consume even on bad days. Once you've adjusted to the
            medication (typically 4-8 weeks), move to whey protein powder which
            offers better value.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Sample Day of Eating on GLP-1
          </h2>
          <div className="bg-muted/50 border border-border rounded-lg p-5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Morning: Greek yogurt (1 cup) + collagen peptides (1 scoop)</span>
                <span className="font-medium text-foreground">~35g protein</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Midday: Canned tuna + handful of crackers</span>
                <span className="font-medium text-foreground">~28g protein</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Afternoon: Fairlife Core Power Elite (on days appetite is low)</span>
                <span className="font-medium text-foreground">~42g protein</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Evening: 4 oz chicken breast + vegetables</span>
                <span className="font-medium text-foreground">~35g protein</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">~140g protein</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            This day totals roughly 900-1,100 calories depending on exact
            portions — achievable even with significant appetite suppression.
            Adjust based on your specific protein target and body weight.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Find the Best Protein Options for GLP-1
          </h2>
          <p className="text-muted-foreground mb-4">
            We ranked protein supplements specifically for tolerability and ease of use on a suppressed appetite.
          </p>
          <Link href="/best-protein-powder-glp1">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              See Protein Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
