import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ozempic vs Wegovy vs Mounjaro: Key Differences",
  description:
    "Ozempic and Wegovy are the same drug at different doses. Mounjaro is a different drug. Here is what that means for weight loss and cost.",
  alternates: { canonical: "https://www.weightlossshotguide.com/blog/ozempic-vs-wegovy-vs-mounjaro" },
};

export default function DrugComparisonPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-foreground">Drug Comparison</span>
      </nav>

      <header className="mb-10">
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          Medications
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
          Ozempic vs Wegovy vs Mounjaro
        </h1>
        <p className="mt-3 text-muted-foreground">
          April 17, 2026 &middot; 9 min read
        </p>
      </header>

      <article className="space-y-6 text-foreground">
        <p className="text-lg text-muted-foreground leading-relaxed">
          These three drug names are not the same thing. Two are the same
          drug at different doses. One is a different drug. Here is the
          quick breakdown.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Drug</th>
                <th className="text-left p-3 font-semibold text-foreground">Use</th>
                <th className="text-left p-3 font-semibold text-foreground">Max Dose</th>
                <th className="text-left p-3 font-semibold text-foreground">Avg Weight Loss</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-medium text-foreground">Ozempic</td>
                <td className="p-3 text-muted-foreground">Diabetes</td>
                <td className="p-3 text-muted-foreground">2mg/wk</td>
                <td className="p-3 text-muted-foreground">15-17%</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="p-3 font-medium text-foreground">Wegovy</td>
                <td className="p-3 text-muted-foreground">Weight loss</td>
                <td className="p-3 text-muted-foreground">2.4mg/wk</td>
                <td className="p-3 text-muted-foreground">15-17%</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Mounjaro</td>
                <td className="p-3 text-muted-foreground">Diabetes / Weight</td>
                <td className="p-3 text-muted-foreground">15mg/wk</td>
                <td className="p-3 text-muted-foreground">20-22%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground">
          Ozempic and Wegovy Are the Same Drug
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Same drug. Same company. Different dose and different label. Ozempic
          is for diabetes. Wegovy is for weight loss. The dose in Wegovy is a
          bit higher. That is the whole difference.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Many doctors give Ozempic for weight loss. Online clinics sell a
          cheap compound form too. Same drug, lower cost. Legal rules are
          the only other difference.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">
          Mounjaro Is a Different Drug
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Mounjaro comes from Eli Lilly. It works on two body signals, not one.
          That leads to more weight loss on average: 20-22% vs 15-17%.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                Ozempic &amp; Wegovy
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• One body signal</li>
                <li>• 15-17% weight loss</li>
                <li>• Weekly shot</li>
                <li>• Lower cost</li>
                <li>• More safety data</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                Mounjaro &amp; Zepbound
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Two body signals</li>
                <li>• 20-22% weight loss</li>
                <li>• Weekly shot</li>
                <li>• Higher cost</li>
                <li>• Less long-term data</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground">
          Cost
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Branded drugs cost $800-$1,400 per month. Most health plans do not
          cover them for weight loss. Online clinics sell a compound form for
          $99-$400 per month. Same drug, much less cost.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Compound Mounjaro costs more than compound Ozempic. But both cost
          far less than branded.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">
          Which One to Pick
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Start with Ozempic or a compound form. It costs less. It is easy to
          get. It has more data behind it. Ask your doctor about Mounjaro
          later if you want more weight loss.
        </p>
      </article>

      {/* CTA */}
      <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
        <h2 className="font-heading text-xl font-bold text-foreground mb-2">
          Compare GLP-1 Providers
        </h2>
        <p className="text-muted-foreground mb-4">
          See which clinics offer Ozempic vs. Mounjaro, what they charge, and
          what support is included.
        </p>
        <Link href="/glp1-telehealth-guide">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
            Compare Programs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
