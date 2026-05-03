import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "Why the Scale Lies on GLP-1: Track Body Composition Instead",
  description:
    "Scale weight on GLP-1 medications hides whether you're losing fat or muscle. Here's how to track what actually matters and which tools make it easy.",
  alternates: { canonical: "https://www.weightlossshotguide.com/blog/glp1-body-composition-tracking" },
};

export default function BodyCompositionPage() {
  return (
    <>
      <ArticleSchema
        title="Why the Scale Lies on GLP-1: Track Body Composition Instead"
        description="How to track fat vs. muscle loss during GLP-1 medication weight loss, tools, metrics, and why scale weight is misleading."
        url="https://www.weightlossshotguide.com/blog/glp1-body-composition-tracking"
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
          <span className="text-foreground">GLP-1 Body Composition Tracking</span>
        </nav>

        <header className="mb-10">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Tracking
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            Why the Scale Lies on GLP-1: Track Body Composition Instead
          </h1>
          <p className="mt-3 text-muted-foreground">
            April 17, 2026 &middot; 6 min read
          </p>
        </header>

        <article className="space-y-6 text-foreground">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Two people on Ozempic for six months. Both lost 30 lbs. One has a
            flatter stomach and more energy. The other feels weak and tired.
            The scale showed the same result. The outcomes were not. The
            difference was what type of weight they lost.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Problem With Scale Weight
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your scale number includes fat, muscle, water, bone, and organs.
            Lose 1 lb of fat and gain 1 lb of muscle: the scale shows zero.
            But your body got better. Lose 1 lb of muscle and gain 0.5 lbs of
            fat: the scale shows -0.5 lbs. But your health got worse.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            GLP-1 drugs make this worse. They cause very fast weight loss.
            Studies on semaglutide show 25-40% of weight lost may be muscle,
            not fat. Someone who lost 30 lbs might have lost 18-22 lbs of fat
            and 8-12 lbs of muscle. The scale shows the same number either way.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Metrics That Actually Matter
          </h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                Body Fat Percentage
              </h3>
              <p className="text-sm text-muted-foreground">
                This is the most important number. It should go down over time
                on GLP-1. If it stays flat or goes up, you are losing muscle
                faster than fat. Healthy ranges: men 10-20%, women 20-30%.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                Lean Muscle Mass
              </h3>
              <p className="text-sm text-muted-foreground">
                This should stay stable or drop only a little. A big drop is a
                warning. Eat more protein and add weight training right away.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                Visceral Fat
              </h3>
              <p className="text-sm text-muted-foreground">
                This is the fat around your organs. It is the most harmful
                type. GLP-1 drugs are very good at reducing it. Tracking it
                shows one of the best health wins of GLP-1 use.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                Metabolic Rate (BMR)
              </h3>
              <p className="text-sm text-muted-foreground">
                Your metabolic rate drops when you lose muscle. Some smart
                scales track this. If it falls a lot, you need to focus more
                on keeping your muscle.
              </p>
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Best Tool vs. Practical Tool
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The best test is a DEXA scan. It is an X-ray that shows exact fat,
            muscle, and bone numbers for your whole body. Cost: $50-$150 per
            scan. Get one every 3-6 months to track your GLP-1 progress.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For daily tracking, use a smart scale with BIA. BIA sends a small
            signal through your body to measure fat and muscle. It can be off
            by 3-5% from exact values. But it is good enough to track trends.
            If your body fat drops 2-3% over 6 months and your muscle stays
            stable, you are on track. Exact numbers are not required.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            A Practical Tracking Protocol
          </h2>
          <div className="bg-muted/50 border border-border rounded-lg p-5">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Daily:</strong> Weigh on
                your smart scale at the same time each morning. Track the
                trend, not each single reading.
              </li>
              <li>
                <strong className="text-foreground">Weekly:</strong> Check
                your 7-day average. Focus on body fat % and muscle, not total
                weight.
              </li>
              <li>
                <strong className="text-foreground">Monthly:</strong> Take
                progress photos. Visual changes often show more than numbers.
              </li>
              <li>
                <strong className="text-foreground">Every 3-6 months:</strong>{" "}
                Get a DEXA scan to check your smart scale readings.
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            If your body fat goes up while your weight goes down, you are
            losing muscle. Fix it fast. Eat 1.2-1.6g of protein per kg of body
            weight per day. Add weight training at least 2-3 times per week.
            Creatine (5g per day) has strong research behind it for keeping
            muscle during weight loss.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            See Our Top-Rated Smart Scales for GLP-1 Users
          </h2>
          <p className="text-muted-foreground mb-4">
            We reviewed both premium and budget body monitors for Ozempic and
            Wegovy users.
          </p>
          <Link href="/best-body-composition-monitor">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              See Body Monitor Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
