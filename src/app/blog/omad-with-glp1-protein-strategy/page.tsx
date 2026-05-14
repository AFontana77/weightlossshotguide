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

const URL = "https://www.weightlossshotguide.com/blog/omad-with-glp1-protein-strategy";
const TITLE = "Hitting 170g Protein on OMAD With a GLP-1: My Egg-White Protocol";
const DESCRIPTION =
  "First-person plan. How I hit 170 to 200 grams of protein on one meal a day while on Zepbound. Real foods, real numbers, real macros.";

const faqs = [
  {
    question: "Can you do OMAD on a GLP-1 drug?",
    answer:
      "Yes. The shot makes one meal a day easy. The hard part is hitting protein. Plan the meal around protein first.",
  },
  {
    question: "How much protein do I need on OMAD?",
    answer:
      "Aim for 0.8 to 1.0 gram per pound of goal body weight. For a 200 pound goal, that is 160 to 200 grams a day.",
  },
  {
    question: "What is the easiest high-protein food for OMAD?",
    answer:
      "Liquid egg whites. One cup gives 26 grams of protein. The carton is pasteurized so you can drink it cold.",
  },
  {
    question: "Do I drink egg whites plain?",
    answer:
      "No. I mix them with sugar-free chocolate syrup. The drink hits 100 grams of protein in two cups with about 200 calories.",
  },
  {
    question: "Will the GLP-1 make me too full to eat that much?",
    answer:
      "Some days, yes. On full days, I drop solid food and drink more egg whites. Liquid sits easier than meat.",
  },
];

export default function OmadProteinPage() {
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
          { name: "OMAD With GLP-1 Protein Plan", url: URL },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">OMAD Protein Plan</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Nutrition
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            Hitting 170g Protein on OMAD With a GLP-1: My Egg-White Protocol
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
            OMAD plus a GLP-1 makes weight loss fast. The risk is
            muscle loss. The fix is protein. Here is how I hit
            170 to 200 grams in one sit.
          </p>

          <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-4">
            &ldquo;OMAD without tirzepatide produces confusion and
            lightheadedness. OMAD with t does not.&rdquo;
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Why Protein Comes First
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Fast weight loss can burn muscle. Studies show 25 to
            40 percent of the weight lost on a GLP-1 can be lean
            mass. Protein is the brake on that loss.
            <FootnoteRef id="1" />
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            My Daily Plate
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Food</th>
                  <th className="text-left p-3 font-semibold text-foreground">Amount</th>
                  <th className="text-left p-3 font-semibold text-foreground">Protein</th>
                  <th className="text-left p-3 font-semibold text-foreground">Kcal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium text-foreground">Chicken breast</td>
                  <td className="p-3 text-muted-foreground">10 oz</td>
                  <td className="p-3 text-muted-foreground">70 g</td>
                  <td className="p-3 text-muted-foreground">450</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Egg-white drink</td>
                  <td className="p-3 text-muted-foreground">2 cups</td>
                  <td className="p-3 text-muted-foreground">52 g</td>
                  <td className="p-3 text-muted-foreground">240</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Greek yogurt</td>
                  <td className="p-3 text-muted-foreground">1 cup</td>
                  <td className="p-3 text-muted-foreground">25 g</td>
                  <td className="p-3 text-muted-foreground">150</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Whey shake</td>
                  <td className="p-3 text-muted-foreground">1 scoop</td>
                  <td className="p-3 text-muted-foreground">25 g</td>
                  <td className="p-3 text-muted-foreground">120</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Veg + olive oil</td>
                  <td className="p-3 text-muted-foreground">2 cups</td>
                  <td className="p-3 text-muted-foreground">5 g</td>
                  <td className="p-3 text-muted-foreground">300</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Day total</td>
                  <td className="p-3 text-muted-foreground">—</td>
                  <td className="p-3 text-foreground font-semibold">177 g</td>
                  <td className="p-3 text-foreground font-semibold">1,260</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Egg-White Drink
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Buy a carton of liquid egg whites. The carton says
            pasteurized, which means safe to drink cold. Pour
            two cups in a shaker. Add two tablespoons of sugar-
            free chocolate syrup. Shake. Drink.
            <FootnoteRef id="2" />
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Two cups give 52 grams of protein for 240 kcal.
            Sweet, cold, easy. Best of all, it sits easy when
            the gut is slow from the shot.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            What To Skip
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Skip greasy meat at the OMAD meal. The shot slows
            the gut. Fat sits for hours and feels rough. Lean
            cuts, fish, and egg whites work better.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            What I Track
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I track grams of protein each day, not calories. As
            long as protein hits 170 grams, the rest sorts out.
            The shot caps how much food I want.
          </p>

          <FootnoteList
            notes={[
              {
                id: "1",
                label: "NIH review: muscle loss on GLP-1 receptor agonists",
                url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10543698/",
              },
              {
                id: "2",
                label: "USDA food data: liquid egg whites, raw, pasteurized",
                url: "https://fdc.nal.usda.gov/fdc-app.html#/food-details/172183/nutrients",
              },
            ]}
          />
        </article>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Best Protein Powders for GLP-1 Users
          </h2>
          <p className="text-muted-foreground mb-4">
            See the protein powders that mix cold, sit easy on a
            slow gut, and pack 25 grams in a small scoop.
          </p>
          <Link href="/best-protein-powder-glp1">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              See Protein Powder Picks
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
