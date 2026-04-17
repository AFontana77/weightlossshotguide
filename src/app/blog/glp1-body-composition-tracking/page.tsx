import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "Why the Scale Lies on GLP-1: Track Body Composition Instead",
  description:
    "Scale weight on GLP-1 medications hides whether you're losing fat or muscle. Here's how to track what actually matters — fat mass, lean mass, and visceral fat — and which tools make it practical.",
};

export default function BodyCompositionPage() {
  return (
    <>
      <ArticleSchema
        title="Why the Scale Lies on GLP-1: Track Body Composition Instead"
        description="How to track fat vs. muscle loss during GLP-1 medication weight loss — tools, metrics, and why scale weight is misleading."
        url="https://www.glp1guide.com/blog/glp1-body-composition-tracking"
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
            Imagine two people, both on Ozempic for six months. Both lost 30
            lbs. One has a flatter stomach, more energy, and stronger legs.
            The other looks similar to before — just smaller — and feels
            fatigued and weaker. The scale showed the same result. The
            outcomes were completely different. The difference was body
            composition: what type of weight they lost.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Problem With Scale Weight
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your scale weight is a single number that includes fat mass, lean
            muscle mass, water weight, bone density, and organ mass. Losing 1
            lb of fat and gaining 1 lb of muscle shows as zero change on the
            scale — even though your body composition improved significantly.
            Losing 1 lb of muscle and gaining 0.5 lbs of fat shows as -0.5 lbs
            on the scale — even though your health got worse.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            GLP-1 medications make this problem worse because they drive such
            rapid weight loss. Clinical studies on semaglutide show that
            25-40% of weight lost may come from lean mass without deliberate
            intervention. That means someone who lost 30 lbs might have lost
            18-22 lbs of fat and 8-12 lbs of muscle. The scale shows the
            same number either way.
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
                The most important metric. This should decrease over time on
                GLP-1. If it stays flat or increases, you&apos;re losing muscle
                at a faster rate than fat. Healthy ranges: men 10-20%, women
                20-30% for general fitness.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                Lean Muscle Mass
              </h3>
              <p className="text-sm text-muted-foreground">
                Should stay stable or decrease only slightly. A significant
                drop in lean mass is a warning sign — increase protein intake
                and add resistance training immediately.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                Visceral Fat
              </h3>
              <p className="text-sm text-muted-foreground">
                The fat around your organs. GLP-1 medications are particularly
                effective at reducing visceral fat, which is the most
                metabolically dangerous type. Tracking this shows one of the
                best health outcomes of GLP-1 treatment.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                Metabolic Rate (Basal Metabolic Rate)
              </h3>
              <p className="text-sm text-muted-foreground">
                Metabolic rate can decrease when muscle is lost. Some smart
                scales estimate BMR based on body composition. If BMR drops
                significantly, it&apos;s a signal that muscle preservation
                needs more attention.
              </p>
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Gold Standard vs. Practical Tools
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The gold standard for body composition measurement is DEXA
            (dual-energy X-ray absorptiometry) scanning. A DEXA scan gives you
            precise measurements of fat, lean mass, and bone density throughout
            your entire body. Cost: $50-$150 per scan at dedicated facilities.
            Frequency: every 3-6 months is sufficient for tracking GLP-1
            progress.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For daily tracking between DEXA scans, a smart scale with
            bioelectrical impedance analysis (BIA) is practical and affordable.
            BIA is not as accurate as DEXA — it can be off by 3-5% in
            absolute measurements. But it&apos;s accurate enough to track
            trends over time, which is all you need. If your body fat
            percentage trends down 2-3% over 6 months while your lean mass
            stays stable, you know you&apos;re losing fat. The absolute number
            doesn&apos;t need to be exact.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            A Practical Tracking Protocol
          </h2>
          <div className="bg-muted/50 border border-border rounded-lg p-5">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Daily:</strong> Weigh on
                your smart scale at the same time (morning, before eating).
                Track the trend, not individual readings.
              </li>
              <li>
                <strong className="text-foreground">Weekly:</strong> Review
                the 7-day average. Focus on body fat % and lean mass trends,
                not total weight.
              </li>
              <li>
                <strong className="text-foreground">Monthly:</strong> Take
                progress photos. Visual changes often show more than numbers.
              </li>
              <li>
                <strong className="text-foreground">Every 3-6 months:</strong>{" "}
                Consider a DEXA scan for precision measurements to calibrate
                your smart scale readings.
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            If your body fat percentage is increasing while you&apos;re losing
            weight — the muscle loss warning sign — two interventions help
            immediately: increase protein intake to 1.2-1.6g/kg body weight
            daily, and add resistance training (weight lifting, resistance
            bands) at least 2-3 times per week. Creatine supplementation
            (5g/day) has direct clinical evidence for preserving muscle during
            caloric restriction.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            See Our Top-Rated Smart Scales for GLP-1 Users
          </h2>
          <p className="text-muted-foreground mb-4">
            We reviewed both premium and budget body composition monitors for Ozempic and Wegovy users.
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
