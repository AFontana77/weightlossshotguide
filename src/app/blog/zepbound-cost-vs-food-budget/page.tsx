import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import {
  ArticleByline,
  FootnoteList,
  FootnoteRef,
} from "@/components/ui/article-byline";

const URL = "https://www.weightlossshotguide.com/blog/zepbound-cost-vs-food-budget";
const TITLE = "How I Reframed $450/Month Zepbound Against My Old Food Budget";
const DESCRIPTION =
  "First-person Zepbound cost math. How $450 per month feels less harsh when food spend drops by half. Real numbers from my own week.";

const faqs = [
  {
    question: "How much does Zepbound cost out of pocket?",
    answer:
      "Self-pay list runs $1,000 to $1,400 per month. With the Lilly Card or a coupon, the cost can drop to about $450 a month. With insurance, it can be as low as $25 a month.",
  },
  {
    question: "Can lower food spend really offset the drug cost?",
    answer:
      "In part, yes. My old food spend was about $400 a month. On Zepbound, I eat once or twice a day. My food spend dropped to about $180. That saves $220 a month.",
  },
  {
    question: "What is the LillyDirect vial price for Zepbound?",
    answer:
      "LillyDirect sells vials for $299 to $449 a month. The vial price skips the pen. You draw the dose with a syringe.",
  },
  {
    question: "Is it cheaper to get Zepbound from a compound pharmacy?",
    answer:
      "It was. The FDA took tirzepatide off the shortage list in late 2024. Compound supply is now legal-risky and watched. Branded or LillyDirect is the safe path now.",
  },
  {
    question: "Should I budget the drug cost the same as food?",
    answer:
      "I do. The drug cuts food. Food cuts the drug cost on paper. Move the money from food to drug and the gap is small.",
  },
];

export default function CostVsFoodPage() {
  return (
    <>
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-14"
        dateModified="2026-05-14"
        author={{ name: "Anthony Fontana", title: "Active tirzepatide patient" }}
        reviewer={{ name: "Pending" }}
      />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.weightlossshotguide.com" },
          { name: "Blog", url: "https://www.weightlossshotguide.com/blog" },
          { name: "Zepbound Cost vs Food Budget", url: URL },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Zepbound Cost vs Food</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Cost &amp; Insurance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            How I Reframed $450/Month Zepbound Against My Old Food Budget
          </h1>
          <ArticleByline
            author="Anthony Fontana"
            authorTitle="Active tirzepatide patient"
            medicallyReviewedBy="Pending"
            lastReviewed="2026-05-14"
            datePublished="2026-05-14"
            dateModified="2026-05-14"
          />
        </header>

        <article className="space-y-6 text-foreground">
          <p className="text-lg text-muted-foreground leading-relaxed">
            $450 a month for a shot feels steep. Then I ran the food
            math. The gap got small fast.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Sticker Shock
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Zepbound lists at $1,060 a month. With the Lilly Card
            for self-pay, my cost drops to about $450 a month.
            <FootnoteRef id="1" />
          </p>
          <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-4">
            &ldquo;Lunch $6, breakfast $3, snack $3.&rdquo;
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That was my old day. Three food stops. Twelve bucks
            in a day. Times 30. That is $360 a month on small
            stuff. Not the big food bill.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Real Food Drop
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            On Zepbound I eat one or two times a day. No snacks.
            Lunch is small. My grocery and quick-food spend went
            from $400 a month to about $180.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Line Item</th>
                  <th className="text-left p-3 font-semibold text-foreground">Before</th>
                  <th className="text-left p-3 font-semibold text-foreground">On Zepbound</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium text-foreground">Groceries</td>
                  <td className="p-3 text-muted-foreground">$280</td>
                  <td className="p-3 text-muted-foreground">$140</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Quick food</td>
                  <td className="p-3 text-muted-foreground">$120</td>
                  <td className="p-3 text-muted-foreground">$40</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Food total</td>
                  <td className="p-3 text-muted-foreground">$400</td>
                  <td className="p-3 text-muted-foreground">$180</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Net food drop</td>
                  <td className="p-3 text-muted-foreground">—</td>
                  <td className="p-3 text-foreground font-semibold">$220 saved</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Real Net Cost
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            $450 drug, less $220 food drop, nets to $230 a month.
            That is the true cost of the shot for me. Less than a
            phone bill plus a tank of gas.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            What This Does Not Cover
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This math is just food. It does not count the gain in
            health, work hours, or mood. I am not adding those.
            The bare cash gap is the point.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Cheaper Paths
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            LillyDirect sells vials for $299 to $449 a month. If
            your plan covers the drug, the copay can be as low as
            $25 a month. Check the formulary first.
            <FootnoteRef id="2" />
          </p>

          <FootnoteList
            notes={[
              {
                id: "1",
                label: "Lilly Zepbound Savings Card terms",
                url: "https://zepbound.lilly.com/savings",
              },
              {
                id: "2",
                label: "LillyDirect self-pay vial pricing",
                url: "https://lillydirect.lilly.com/",
              },
            ]}
          />
        </article>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Find Your Cheapest GLP-1 Path
          </h2>
          <p className="text-muted-foreground mb-4">
            See the lowest-cost ways to get a GLP-1 script, from
            flat-fee visits to LillyDirect vials.
          </p>
          <Link href="/cheapest-glp1-options">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              See Cheapest Options
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
