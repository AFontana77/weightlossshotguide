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

const URL = "https://www.weightlossshotguide.com/blog/push-health-zepbound-review";
const TITLE = "Push Health for Zepbound: What Actually Happens After You Click Submit";
const DESCRIPTION =
  "First-person Push Health Zepbound review. What the marketplace really does, how provider rematch works in seconds, and what it costs.";

const faqs = [
  {
    question: "Is Push Health a real telehealth site?",
    answer:
      "Yes. Push Health links you to doctors in your state. The doctor writes the script. Push runs the booking and chat.",
  },
  {
    question: "How much does Push Health charge?",
    answer:
      "Most docs charge a flat fee of $75 to $125. You pay the doc. Push adds a small fee on top.",
  },
  {
    question: "What if my doctor drops me?",
    answer:
      "You can pick a new doc in the same state. I got matched again in a minute. The old visit notes stay with you.",
  },
  {
    question: "Can my doctor send the script to my drug store?",
    answer:
      "Yes. The doc can send it to any drug store you pick. You can also send it to LillyDirect.",
  },
  {
    question: "Is Push cheaper than Ro or Sesame?",
    answer:
      "For one visit, yes. Push is a flat fee. Ro is $145 per month. Sesame is a flat fee like Push.",
  },
];

export default function PushHealthReviewPage() {
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
          { name: "Push Health Zepbound Review", url: URL },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Push Health Review</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Telehealth Reviews
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mt-3">
            Push Health for Zepbound: What Actually Happens After You Click Submit
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
            I take Zepbound. I use Push Health for my refills. Here is
            how it works. And what shocked me.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            What Push Health Is
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Push Health is a list of doctors. Not a clinic. You pick
            a state. You pick a doc. You pay one fee. The doc sends
            the script.
            <FootnoteRef id="1" />
          </p>
          <p className="text-muted-foreground leading-relaxed">
            No month fee. No drug in the box. No coach. Just a visit
            and a script.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            What I Paid
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            My doc charged $89. Push added a small fee. The total
            was just under $100. The script went to my drug store.
            The Zepbound was a sep cost.
            <FootnoteRef id="2" />
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            The Rematch
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            My first doc, Maribel, dropped me. No warning. Just a
            note in the app.
          </p>
          <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/40 pl-4">
            &ldquo;This is an incredible racket. Just matched with a new
            provider within seconds of Maribel releasing me.&rdquo;
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That was my note. The match took less than a minute.
            The new doc saw my old notes. I paid a new fee. The
            script came that day.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That cuts both ways. Good, you will not run out. Bad,
            the doc can drop you any time.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Push Health vs Ro vs Sesame
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Platform</th>
                  <th className="text-left p-3 font-semibold text-foreground">Visit Fee</th>
                  <th className="text-left p-3 font-semibold text-foreground">Monthly Fee</th>
                  <th className="text-left p-3 font-semibold text-foreground">Refill Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium text-foreground">Push Health</td>
                  <td className="p-3 text-muted-foreground">$75 to $125</td>
                  <td className="p-3 text-muted-foreground">$0</td>
                  <td className="p-3 text-muted-foreground">Pay per visit</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 font-medium text-foreground">Ro Body</td>
                  <td className="p-3 text-muted-foreground">$45 first month</td>
                  <td className="p-3 text-muted-foreground">$145</td>
                  <td className="p-3 text-muted-foreground">Subscription</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground">Sesame Care</td>
                  <td className="p-3 text-muted-foreground">$60 to $100</td>
                  <td className="p-3 text-muted-foreground">$0</td>
                  <td className="p-3 text-muted-foreground">Pay per visit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            Who Push Health Is Right For
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Push works best if you already know you want tirzepatide, you do
            not need coaching, and you want to pay for visits only. If you
            need hand-holding, a health coach, or a single bill that covers
            the drug, Ro or Form Health is a better fit.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground">
            What I Would Change
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I would warn new patients about the rematch model. The first
            time a provider drops you, it feels personal. It is not. It is
            a marketplace. Pick a state with deep provider supply and you
            will be fine.
          </p>

          <FootnoteList
            notes={[
              {
                id: "1",
                label: "Push Health provider directory and platform overview",
                url: "https://www.pushhealth.com/",
              },
              {
                id: "2",
                label: "FDA Zepbound (tirzepatide) prescribing information",
                url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf",
              },
            ]}
          />
        </article>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-foreground mb-2">
            Compare All GLP-1 Telehealth Options
          </h2>
          <p className="text-muted-foreground mb-4">
            See a full breakdown of Push, Ro, Sesame, LillyDirect, and Teladoc
            so you can pick the lowest-cost path for your refill schedule.
          </p>
          <Link href="/blog/telehealth-glp1-one-time-vs-subscription">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              Read the Telehealth Comparison
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
