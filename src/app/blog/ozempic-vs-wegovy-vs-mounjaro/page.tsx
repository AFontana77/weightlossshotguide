import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "Ozempic vs Wegovy vs Mounjaro: What's Actually Different?",
  description:
    "Ozempic and Wegovy are the same drug at different doses. Mounjaro is a different mechanism entirely. Here's what the differences mean for weight loss, side effects, and cost.",
};

export default function DrugComparisonPage() {
  return (
    <>
      <ArticleSchema
        title="Ozempic vs Wegovy vs Mounjaro: What's Actually Different?"
        description="The real differences between semaglutide and tirzepatide — drug mechanisms, approved uses, weight loss outcomes, and cost."
        url="https://www.glp1guide.com/blog/ozempic-vs-wegovy-vs-mounjaro"
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
          <span className="text-foreground">Ozempic vs Wegovy vs Mounjaro</span>
        </nav>

        <header className="mb-10">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Medications
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            Ozempic vs Wegovy vs Mounjaro: What&apos;s Actually Different?
          </h1>
          <p className="mt-3 text-muted-foreground">
            April 17, 2026 &middot; 9 min read
          </p>
        </header>

        <article className="space-y-6 text-foreground">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most people talking about &quot;GLP-1 medications&quot; are using
            three brand names interchangeably when the drugs are actually quite
            different from each other. Here&apos;s what you need to know.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Drug</th>
                  <th className="text-left p-3 font-semibold text-foreground">Active Ingredient</th>
                  <th className="text-left p-3 font-semibold text-foreground">FDA Approval</th>
                  <th className="text-left p-3 font-semibold text-foreground">Max Dose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium text-foreground">Ozempic</td>
                  <td className="p-3 text-muted-foreground">Semaglutide</td>
                  <td className="p-3 text-muted-foreground">Type 2 diabetes</td>
                  <td className="p-3 text-muted-foreground">2mg/week</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Wegovy</td>
                  <td className="p-3 text-muted-foreground">Semaglutide</td>
                  <td className="p-3 text-muted-foreground">Chronic weight management</td>
                  <td className="p-3 text-muted-foreground">2.4mg/week</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Mounjaro</td>
                  <td className="p-3 text-muted-foreground">Tirzepatide</td>
                  <td className="p-3 text-muted-foreground">Type 2 diabetes (Zepbound for weight)</td>
                  <td className="p-3 text-muted-foreground">15mg/week</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Ozempic and Wegovy: The Same Molecule, Different Doses
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ozempic and Wegovy are both semaglutide — the same active
            ingredient made by Novo Nordisk. The difference is the approved
            indication and the maximum dose. Ozempic is approved for type 2
            diabetes management, with a maximum dose of 2mg per week. Wegovy
            is approved specifically for chronic weight management (alongside
            diet and exercise) with a higher maximum dose of 2.4mg per week.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In practice, many doctors prescribe Ozempic off-label for weight
            loss. Most telehealth providers offering &quot;compounded
            semaglutide&quot; are using the same molecule at Wegovy-equivalent
            doses. The compound versus branded distinction is about regulatory
            status and price, not molecular difference.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Mounjaro: A Different Drug Entirely
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Mounjaro (tirzepatide, also sold as Zepbound for weight loss) is
            a different drug from a different company (Eli Lilly). While
            semaglutide activates only the GLP-1 receptor, tirzepatide
            activates two receptors: GLP-1 and GIP (glucose-dependent
            insulinotropic polypeptide). This dual mechanism produces
            meaningfully different results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-5">
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  Semaglutide (Ozempic/Wegovy)
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• GLP-1 receptor agonist only</li>
                  <li>• Average weight loss: 15-17% of body weight</li>
                  <li>• Weekly injection</li>
                  <li>• Lower cost when available as generic/compounded</li>
                  <li>• Longer track record and safety data</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  Tirzepatide (Mounjaro/Zepbound)
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Dual GLP-1 + GIP receptor agonist</li>
                  <li>• Average weight loss: 20-22% of body weight</li>
                  <li>• Weekly injection</li>
                  <li>• Higher cost, less widely available compounded</li>
                  <li>• Newer — less long-term safety data</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Cost: The Real Difference
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Without insurance, branded GLP-1 medications cost $800-$1,400 per
            month. Most insurance plans do not cover them for weight loss
            specifically (they may cover for diabetes). This is why the
            telehealth + compounded semaglutide market exists: it provides the
            same active molecule at a fraction of the cost, typically
            $99-$400/month depending on the provider.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Compounded tirzepatide is less widely available and costs more than
            compounded semaglutide, but still significantly less than branded
            Mounjaro or Zepbound.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Which Should You Choose?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For most people starting GLP-1 therapy: semaglutide (Wegovy or
            compounded semaglutide) is the right starting point. It has a
            longer safety track record, is more widely available through
            telehealth providers, and costs less. If you try semaglutide,
            achieve good results on GI tolerability, but want greater weight
            loss, tirzepatide is worth discussing with your provider as a
            step-up option.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Compare GLP-1 Telehealth Providers
          </h2>
          <p className="text-muted-foreground mb-4">
            See which providers offer semaglutide vs. tirzepatide, what they charge, and what kind of support is included.
          </p>
          <Link href="/glp1-telehealth-guide">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              Compare Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
