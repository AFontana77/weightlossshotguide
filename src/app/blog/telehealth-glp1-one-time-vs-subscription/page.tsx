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

const URL = "https://www.weightlossshotguide.com/blog/telehealth-glp1-one-time-vs-subscription";
const TITLE = "GLP-1 Telehealth: One-Time Visit vs $145/Month Subscription";
const DESCRIPTION =
  "First-person GLP-1 telehealth cost guide. One-time visit fees vs $145 per month Ro Body. Compare Ro, Push, Sesame, LillyDirect, and Teladoc head to head.";

const faqs = [
  {
    question: "Do I need a monthly GLP-1 telehealth plan?",
    answer:
      "No. A one-time visit can get you a script with refills. Plans like Ro Body charge $145 each month. Push and Sesame charge a flat fee per visit.",
  },
  {
    question: "What is the cheapest way to get a Zepbound script?",
    answer:
      "Pay a flat fee on Push or Sesame for about $89. Then ask the doctor for refills. You save a lot vs a month plan.",
  },
  {
    question: "Does Ro Body cover the drug cost?",
    answer:
      "No. The $145 per month fee only covers the visit, chat, and coach. You still pay for Zepbound at the drug store.",
  },
  {
    question: "Is LillyDirect cheaper for self-pay Zepbound?",
    answer:
      "It can be. LillyDirect sells vials for $299 to $449 per month. You skip the pen. You still need a script from your doctor.",
  },
  {
    question: "Will my doctor on Push write a Zepbound script?",
    answer:
      "Many will. You see the doctor's price and notes first. Pick one who lists tirzepatide in their menu.",
  },
];

export default function TelehealthComparePage() {
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
          { name: "Telehealth GLP-1 Compare", url: URL },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Telehealth Compare</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Telehealth
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            GLP-1 Telehealth: One-Time Visit vs $145/Month Subscription
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
            You do not have to pay $145 each month. A flat fee visit can
            get you the same script. Here is what I learned.
          </p>

          <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-4">
            &ldquo;Damn, that&apos;s expensive. Is there a service that
            charges a one-time fee, not monthly?&rdquo;
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That was my note when I saw the Ro price. Yes, there is. A
            few, in fact.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Two Models
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You can pay by the visit. Or pay each month. The visit
            model is cheaper if you do not need help past the script.
            The month plan is for folks who want a coach.
            <FootnoteRef id="1" />
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Five Sites Side By Side
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Site</th>
                  <th className="text-left p-3 font-semibold text-foreground">Type</th>
                  <th className="text-left p-3 font-semibold text-foreground">First Fee</th>
                  <th className="text-left p-3 font-semibold text-foreground">Month Fee</th>
                  <th className="text-left p-3 font-semibold text-foreground">Drug Cost?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium text-foreground">Push Health</td>
                  <td className="p-3 text-muted-foreground">Flat fee</td>
                  <td className="p-3 text-muted-foreground">$75 to $125</td>
                  <td className="p-3 text-muted-foreground">$0</td>
                  <td className="p-3 text-muted-foreground">Sep at drug store</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Ro Body</td>
                  <td className="p-3 text-muted-foreground">Month plan</td>
                  <td className="p-3 text-muted-foreground">$45</td>
                  <td className="p-3 text-muted-foreground">$145</td>
                  <td className="p-3 text-muted-foreground">Sep</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Sesame Care</td>
                  <td className="p-3 text-muted-foreground">Flat fee</td>
                  <td className="p-3 text-muted-foreground">$60 to $100</td>
                  <td className="p-3 text-muted-foreground">$0</td>
                  <td className="p-3 text-muted-foreground">Sep</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">LillyDirect</td>
                  <td className="p-3 text-muted-foreground">Drug sales</td>
                  <td className="p-3 text-muted-foreground">$0</td>
                  <td className="p-3 text-muted-foreground">$299 to $449</td>
                  <td className="p-3 text-muted-foreground">Drug in price</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Teladoc</td>
                  <td className="p-3 text-muted-foreground">Plan-based</td>
                  <td className="p-3 text-muted-foreground">Varies by plan</td>
                  <td className="p-3 text-muted-foreground">Plan-based</td>
                  <td className="p-3 text-muted-foreground">Plan-based</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Do The Math
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            One year on Ro Body costs $145 times 12. That is $1,740 in
            fees. Plus the drug.
            <FootnoteRef id="2" />
          </p>
          <p className="text-muted-foreground leading-relaxed">
            One year on Push with two visits costs about $180. Plus
            the drug. You save $1,560.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            When A Month Plan Is Worth It
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Pick a month plan if you want a coach, chat support, or
            help with side e-ffects. The fee buys time and care, not
            just a script. Some folks need that. Most do not.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            What I Do
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I use Push. One flat fee. The doc sends the script. I
            pick up the drug at the drug store. Done.
          </p>

          <FootnoteList
            notes={[
              {
                id: "1",
                label: "FDA Zepbound (tirzepatide) prescribing information",
                url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf",
              },
              {
                id: "2",
                label: "Ro Body Program pricing page (Roman Health)",
                url: "https://ro.co/weight-loss/",
              },
            ]}
          />
        </article>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            See My Push Health Review
          </h2>
          <p className="text-muted-foreground mb-4">
            Read how I use Push for my own Zepbound refills, what I paid,
            and what shocked me about the rematch model.
          </p>
          <Link href="/blog/push-health-zepbound-review">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              Read the Push Health Review
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
