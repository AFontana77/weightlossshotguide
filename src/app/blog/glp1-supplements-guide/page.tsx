import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "5 Supplements Every GLP-1 User Should Take (Backed by Research)",
  description:
    "Creatine for muscle preservation, probiotics for GI side effects, magnesium for deficiency, B12, and Vitamin D — the evidence-based supplement list for Ozempic and Wegovy users.",
};

export default function SupplementsGuidePage() {
  return (
    <>
      <ArticleSchema
        title="5 Supplements Every GLP-1 User Should Take (Backed by Research)"
        description="The evidence-based supplement list for GLP-1 medication users — creatine, probiotics, magnesium, B12, and Vitamin D."
        url="https://www.weightlossshotguide.com/blog/glp1-supplements-guide"
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
          <span className="text-foreground">GLP-1 Supplements Guide</span>
        </nav>

        <header className="mb-10">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Supplements
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            5 Supplements Every GLP-1 User Should Take (Backed by Research)
          </h1>
          <p className="mt-3 text-muted-foreground">
            April 17, 2026 &middot; 8 min read
          </p>
        </header>

        <article className="space-y-6 text-foreground">
          <p className="text-lg text-muted-foreground leading-relaxed">
            GLP-1 medications create nutritional conditions that don&apos;t
            exist in normal dieting. Suppressed appetite leads to nutritional
            gaps. Rapid weight loss depletes certain minerals faster than usual.
            Changed gut motility creates side effects that require targeted
            support. Generic supplement advice doesn&apos;t account for any of
            this. Here are the five supplements with the strongest evidence
            specifically for people on semaglutide and tirzepatide.
          </p>

          {/* Supplement 1 */}
          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              1. Creatine Monohydrate — Non-Negotiable
            </h2>
            <p className="text-sm text-primary font-medium mb-3">5g daily</p>
            <p className="text-muted-foreground leading-relaxed">
              Creatine has more clinical evidence for muscle preservation during
              caloric restriction than any other supplement. Multiple
              randomized controlled trials show that 5g of creatine monohydrate
              daily maintains lean muscle mass and strength during significant
              weight loss. On GLP-1 medications — where rapid, large-volume
              weight loss is common — this matters more than in any other
              dietary context. Creatine is inexpensive, safe, and has a strong
              enough evidence base that it belongs in the same category as
              adequate protein: not optional.
            </p>
          </div>

          {/* Supplement 2 */}
          <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              2. Multi-Strain Probiotic — For GI Side Effects
            </h2>
            <p className="text-sm text-accent font-medium mb-3">50 billion+ CFU, 10+ strains</p>
            <p className="text-muted-foreground leading-relaxed">
              Between 30-40% of GLP-1 users experience significant GI side
              effects: nausea, constipation, diarrhea, or stomach discomfort.
              These side effects cause many people to discontinue treatment.
              GLP-1 medications work partly by slowing gastric emptying —
              which changes the entire gut environment. A high-quality
              multi-strain probiotic directly supports this environment. The
              evidence is strongest for probiotic strains that improve gut
              motility and reduce nausea. Look for at least 10 strains and 50
              billion CFU. Shelf-stable formulas are more practical than
              refrigerated ones.
            </p>
          </div>

          {/* Supplement 3 */}
          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              3. Magnesium Bisglycinate — Deficiency Accelerates on GLP-1
            </h2>
            <p className="text-sm text-primary font-medium mb-3">200-400mg before bed</p>
            <p className="text-muted-foreground leading-relaxed">
              Magnesium is the most commonly deficient mineral in Western diets.
              Rapid weight loss makes it worse — magnesium is stored partly in
              fat tissue and is excreted more rapidly during active weight loss.
              Deficiency shows up as poor sleep, muscle cramps, fatigue, and
              constipation. The form matters: magnesium oxide and citrate have
              laxative effects at therapeutic doses. Magnesium bisglycinate
              absorbs well without the digestive side effects, making it the
              right choice for GLP-1 users who already deal with GI sensitivity.
            </p>
          </div>

          {/* Supplement 4 */}
          <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              4. Vitamin B12 — Often Low After Dietary Changes
            </h2>
            <p className="text-sm text-accent font-medium mb-3">1,000mcg sublingual or methylcobalamin</p>
            <p className="text-muted-foreground leading-relaxed">
              B12 is found primarily in animal products. GLP-1 users who eat
              significantly less overall — and particularly those who reduce
              meat intake — commonly develop B12 insufficiency. Symptoms
              include fatigue, brain fog, and nerve tingling. Sublingual B12
              (dissolved under the tongue) absorbs better than standard
              swallowed tablets and doesn&apos;t require stomach acid for
              absorption — relevant for users with reduced gastric secretion
              from GLP-1 medications.
            </p>
          </div>

          {/* Supplement 5 */}
          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              5. Vitamin D3 + K2 — Foundation for Everything Else
            </h2>
            <p className="text-sm text-primary font-medium mb-3">2,000-5,000 IU D3 with K2</p>
            <p className="text-muted-foreground leading-relaxed">
              Vitamin D deficiency is extremely common and affects immune
              function, bone density, muscle function, and metabolic health.
              For GLP-1 users specifically: reduced food intake reduces
              dietary D intake, and rapid weight loss can temporarily reduce
              D absorption from fat tissue. D3 + K2 is the best combination —
              K2 ensures calcium goes to bones rather than arteries, which
              matters more when D levels are actively being corrected.
            </p>
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-5">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              What About a Multivitamin?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A basic multivitamin is a reasonable addition for GLP-1 users
              eating significantly less than normal. It won&apos;t replace
              the targeted supplements above — multivitamin doses are too
              low for magnesium and B12, and they don&apos;t include creatine
              or probiotic strains. Use it as insurance, not a substitute.
            </p>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            See Our Top-Rated GLP-1 Supplements
          </h2>
          <p className="text-muted-foreground mb-4">
            We reviewed the best creatine, probiotic, and magnesium products specifically for GLP-1 users.
          </p>
          <Link href="/best-supplements-ozempic">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              See Supplement Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
