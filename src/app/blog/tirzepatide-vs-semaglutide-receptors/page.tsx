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

const URL = "https://www.weightlossshotguide.com/blog/tirzepatide-vs-semaglutide-receptors";
const TITLE = "Tirzepatide vs Semaglutide: The Dual-Receptor Difference Explained";
const DESCRIPTION =
  "Tirzepatide hits two body targets. Semaglutide hits one. What the dual GLP-1 plus GIP action means for weight loss, blood sugar, and side e-ffects.";

const faqs = [
  {
    question: "What is the big diff?",
    answer:
      "Tirz hits two targets. GLP-1 and GIP. Sema hits one. The two help you lose more.",
  },
  {
    question: "Which is more strong for loss?",
    answer:
      "Tirz. It leads to 20 to 22 percent loss. Sema leads to 15 to 17. Both work.",
  },
  {
    question: "Is one more safe?",
    answer:
      "Both have a long safe track. Both can cause nausea. Both warn for thyroid risk.",
  },
  {
    question: "Can I switch from sema to tirz?",
    answer:
      "Yes. Start at 2.5 mg per week. Step up each 4 weeks. Most lose more.",
  },
  {
    question: "Which costs less?",
    answer:
      "Sema. List is $900 to $1,300. Tirz lists at $1,000 to $1,400. Both have cash deals.",
  },
];

export default function TirzVsSemaPage() {
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
          { name: "Tirzepatide vs Semaglutide", url: URL },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Tirzepatide vs Semaglutide</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Drug Science
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            Tirzepatide vs Semaglutide: The Dual-Receptor Difference Explained
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
            Both shots help you lose weight. Both cut blood sugar.
            They work in two ways that count.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            One Target vs Two
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sema hits one target. GLP-1. That gut signal slows the
            gut and tells the brain you feel full.
            <FootnoteRef id="1" />
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Tirz hits two. GLP-1 and GIP. GIP helps the body use
            fat and sugar. Two hits, more loss.
            <FootnoteRef id="2" />
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Side By Side
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Drug</th>
                  <th className="text-left p-3 font-semibold text-foreground">Maker</th>
                  <th className="text-left p-3 font-semibold text-foreground">Targets</th>
                  <th className="text-left p-3 font-semibold text-foreground">Max Weight Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium text-foreground">Semaglutide</td>
                  <td className="p-3 text-muted-foreground">Novo Nordisk</td>
                  <td className="p-3 text-muted-foreground">GLP-1</td>
                  <td className="p-3 text-muted-foreground">15 to 17%</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Tirzepatide</td>
                  <td className="p-3 text-muted-foreground">Eli Lilly</td>
                  <td className="p-3 text-muted-foreground">GLP-1 + GIP</td>
                  <td className="p-3 text-muted-foreground">20 to 22%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Brand Names
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sema is sold as Ozempic, Wegovy, and Rybelsus. Tirz
            is sold as Mounjaro and Zepbound. The dose and label
            vary. The drug is the same.
            <FootnoteRef id="3" />
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            What I Feel On Tirz
          </h2>
          <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-4">
            &ldquo;OMAD without tirzepatide produces confusion and
            lightheadedness. OMAD with t does not.&rdquo;
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That is what I wrote. One meal a day with no drug felt
            rough. Same plan with the drug felt fine. Two hits keep
            blood sugar level.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Dose Steps For Zepbound
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Start at 2.5 mg per week. Hold for 4 weeks. Step to
            5 mg for 4 weeks. Then 7.5 mg. The FDA label sets the
            plan. Some folks stop at 5 mg.
            <FootnoteRef id="4" />
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Which To Pick
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Pick sema for lower cost. Pick tirz if you want more
            loss or have type 2 that needs more help.
          </p>

          <FootnoteList
            notes={[
              {
                id: "1",
                label: "FDA Wegovy (semaglutide) prescribing information",
                url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf",
              },
              {
                id: "2",
                label: "FDA Mounjaro (tirzepatide) prescribing information",
                url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf",
              },
              {
                id: "3",
                label: "FDA Zepbound (tirzepatide for weight loss) approval",
                url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf",
              },
              {
                id: "4",
                label: "NIH summary of GIP and GLP-1 receptor agonist class",
                url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9243034/",
              },
            ]}
          />
        </article>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Compare GLP-1 Telehealth Costs
          </h2>
          <p className="text-muted-foreground mb-4">
            See which sites offer tirzepatide and what they charge
            so you can match the right drug to the right path.
          </p>
          <Link href="/blog/telehealth-glp1-one-time-vs-subscription">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              See Telehealth Compare
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
