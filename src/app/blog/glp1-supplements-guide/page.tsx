import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "5 Supplements Every GLP-1 User Should Take (Backed by Research)",
  description:
    "Creatine for muscle loss, probiotics for stomach problems, magnesium, B12, and Vitamin D. The supplement list built for Ozempic and Wegovy users.",
  alternates: { canonical: "https://www.weightlossshotguide.com/blog/glp1-supplements-guide" },
};

export default function SupplementsGuidePage() {
  return (
    <>
      <ArticleSchema
        title="5 Supplements Every GLP-1 User Should Take (Backed by Research)"
        description="The supplement list for GLP-1 users: creatine, probiotics, magnesium, B12, and Vitamin D."
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
            GLP-1 drugs are different from a regular diet. They kill your
            hunger. You eat less. You miss key vitamins and minerals. Fast
            weight loss drains certain minerals even faster. Regular pill advice
            does not cover this. These five have the most research for Ozempic,
            Wegovy, and Mounjaro users.
          </p>

          {/* Supplement 1 */}
          <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              1. Creatine Monohydrate: Non-Negotiable
            </h2>
            <p className="text-sm text-primary font-medium mb-3">5g daily</p>
            <p className="text-muted-foreground leading-relaxed">
              Creatine has more research for keeping muscle than any other
              product. Studies show 5g per day keeps lean muscle and strength.
              Muscle breaks down when you lose weight fast. GLP-1s speed that
              up. Creatine is cheap and safe. Treat it like protein: not
              optional.
            </p>
          </div>

          {/* Supplement 2 */}
          <div className="bg-accent/5 border border-accent/20 p-5 rounded-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              2. Multi-Strain Probiotic: For Stomach Side Effects
            </h2>
            <p className="text-sm text-accent font-medium mb-3">50 billion+ CFU, 10+ strains</p>
            <p className="text-muted-foreground leading-relaxed">
              30 to 40% of GLP-1 users get stomach problems. Nausea is the
              most common. Diarrhea and constipation are close behind. Many quit
              their meds because of this. GLP-1 drugs slow digestion. That
              changes your gut. A good probiotic helps. Look for 10+ strains and
              50 billion CFU. Pick a shelf-stable brand, not one that needs a
              fridge.
            </p>
          </div>

          {/* Supplement 3 */}
          <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              3. Magnesium Bisglycinate: Levels Drop Fast on GLP-1
            </h2>
            <p className="text-sm text-primary font-medium mb-3">200-400mg before bed</p>
            <p className="text-muted-foreground leading-relaxed">
              Most people are already low in magnesium. Fast weight loss makes
              it worse. You lose magnesium fast when you lose fat. Low
              magnesium causes bad sleep, muscle cramps, and constipation. The
              type matters. Oxide and citrate can cause diarrhea. Bisglycinate
              absorbs well. It will not upset your stomach. That is the form to
              buy.
            </p>
          </div>

          {/* Supplement 4 */}
          <div className="bg-accent/5 border border-accent/20 p-5 rounded-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              4. Vitamin B12: Often Low on GLP-1
            </h2>
            <p className="text-sm text-accent font-medium mb-3">1,000mcg sublingual or methylcobalamin</p>
            <p className="text-muted-foreground leading-relaxed">
              B12 comes mainly from meat, fish, and eggs. GLP-1 users eat
              less overall. Many eat less meat. That leads to low B12 fast.
              Signs of low B12: tiredness, brain fog, and hand or foot
              tingling. Get the sublingual kind. It dissolves under your tongue.
              It absorbs better than a pill. GLP-1 drugs slow your stomach
              acid. Sublingual B12 skips that issue.
            </p>
          </div>

          {/* Supplement 5 */}
          <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              5. Vitamin D3 + K2: The Base Layer
            </h2>
            <p className="text-sm text-primary font-medium mb-3">2,000-5,000 IU D3 with K2</p>
            <p className="text-muted-foreground leading-relaxed">
              Most people are short on vitamin D. It helps your bones, muscles,
              and immune system. GLP-1 users eat less. They get less D from
              food. Fast weight loss lowers how much your body holds. Take D3
              with K2. K2 sends calcium to your bones, not your arteries. This
              matters most when you are raising your D levels.
            </p>
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-5">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              What about a multivitamin?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A basic multivitamin is fine to add. But it is no swap for the
              five above. Multivitamins are low in magnesium. They are low in
              B12. They have no creatine or probiotic strains. Use it as a
              backup. Not a swap.
            </p>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            See Our Top-Rated GLP-1 Supplements
          </h2>
          <p className="text-muted-foreground mb-4">
            We reviewed the best creatine, probiotic, and magnesium products for GLP-1 users.
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
