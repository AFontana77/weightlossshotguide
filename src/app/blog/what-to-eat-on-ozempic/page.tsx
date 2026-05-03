import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "What to Eat on Ozempic: The Muscle-Preserving Protein Strategy",
  description:
    "Muscle loss is the hidden risk of GLP-1 weight loss. Here's how to hit your protein target when you're barely hungry, practical meal strategies for Ozempic and Wegovy users.",
  alternates: { canonical: "https://www.weightlossshotguide.com/blog/what-to-eat-on-ozempic" },
};

export default function WhatToEatPage() {
  return (
    <>
      <ArticleSchema
        title="What to Eat on Ozempic: The Muscle-Preserving Protein Strategy"
        description="Muscle loss is the hidden risk of GLP-1 weight loss. Here's how to hit your protein target when you're barely hungry."
        url="https://www.weightlossshotguide.com/blog/what-to-eat-on-ozempic"
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
            Most people ask how much weight they lose on GLP-1 drugs. Few ask
            what kind. That question matters most.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Muscle Loss Problem Nobody Warns You About
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When you cut food, your body burns fat and muscle. The faster you
            lose weight, the more muscle goes. GLP-1 drugs cause very fast
            weight loss. Studies show 25-40% of weight lost on GLP-1s is
            muscle, not fat. That slows you down. It weakens your bones. The
            scale can look good while your body gets worse.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Two things stop muscle loss. Weight training is one. Enough protein
            is the other. You need both. Protein gives your muscles the tools
            to stay intact.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Protein Target: 1.2-1.6g Per Kilogram of Body Weight
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The normal protein goal is 0.8g per kg. On GLP-1 drugs, that jumps
            to 1.2-1.6g per kg. At 180 lbs (82 kg), that is 98-131g per day.
            At 220 lbs (100 kg), it is 120-160g.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            GLP-1 cuts hunger hard. You might feel full after just 300-400
            calories. Getting 100g+ of protein from that few calories is very
            hard. Regular food alone cannot do it.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Practical Protein Strategy for Low Hunger
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Put protein first at every meal. Use foods that pack a lot of
            protein per bite. When hunger is low, every calorie has to count.
          </p>

          <div className="bg-muted/50 border border-border rounded-lg p-5 space-y-3">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              High-Protein Foods for Low Hunger
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Greek yogurt (plain, 2%):</strong> 17-20g per cup, easy to eat in small amounts</li>
              <li><strong className="text-foreground">Cottage cheese:</strong> 25g per cup, very little food for that much protein</li>
              <li><strong className="text-foreground">Eggs:</strong> 6g each, fast to make, easy on GLP-1 users</li>
              <li><strong className="text-foreground">Canned tuna/salmon:</strong> 25-30g per can, zero prep</li>
              <li><strong className="text-foreground">Rotisserie chicken breast:</strong> 30-35g per serving, easy to find</li>
              <li><strong className="text-foreground">Fairlife Core Power Elite:</strong> 42g per bottle, no prep needed</li>
            </ul>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            When to Use Protein Shakes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Eat 1,000-1,200 calories per day. Pick high-protein foods. You
            might hit your goal from food alone. Most GLP-1 users cannot. When
            calories drop below 800-1,000, protein shakes are not a choice.
            They are the only real way to hit your target.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If nausea is a problem, start with ready-to-drink shakes. Fairlife
            Core Power Elite is a good pick. It is liquid and needs no prep.
            After 4-8 weeks, your body gets used to the drug. Whey powder is
            a better buy at that point.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Sample Day of Eating on GLP-1
          </h2>
          <div className="bg-muted/50 border border-border rounded-lg p-5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Morning: Greek yogurt (1 cup) + collagen powder (1 scoop)</span>
                <span className="font-medium text-foreground">~35g protein</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Midday: Canned tuna + crackers</span>
                <span className="font-medium text-foreground">~28g protein</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Afternoon: Fairlife Core Power Elite (on low-hunger days)</span>
                <span className="font-medium text-foreground">~42g protein</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Evening: 4 oz chicken breast + veggies</span>
                <span className="font-medium text-foreground">~35g protein</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">~140g protein</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            This day totals about 900-1,100 calories. Most GLP-1 users can hit
            that even when hunger is low. Adjust based on your weight and
            protein goal.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Find the Best Protein Options for GLP-1
          </h2>
          <p className="text-muted-foreground mb-4">
            We ranked protein shakes for how easy they are to use when hunger
            is low.
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
