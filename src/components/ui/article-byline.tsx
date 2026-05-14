import { ShieldCheck, User, CalendarClock } from "lucide-react";

export type ArticleAttribution = {
  author: string;
  authorTitle?: string;
  medicallyReviewedBy: string; // "Pending" or "Dr. X, MD"
  reviewerCredentials?: string;
  lastReviewed: string; // ISO date
  datePublished: string;
  dateModified: string;
};

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleByline({
  author,
  authorTitle,
  medicallyReviewedBy,
  reviewerCredentials,
  lastReviewed,
  dateModified,
}: ArticleAttribution) {
  const reviewerPending = medicallyReviewedBy.toLowerCase().includes("pending");
  return (
    <div className="mt-4 border border-border bg-muted/40 rounded-lg p-4 text-sm">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="inline-flex items-center gap-1.5 text-foreground">
          <User className="w-4 h-4 text-primary" aria-hidden="true" />
          <span className="font-medium">By {author}</span>
          {authorTitle && (
            <span className="text-muted-foreground">, {authorTitle}</span>
          )}
        </span>
        <span className="inline-flex items-center gap-1.5 text-foreground">
          <ShieldCheck
            className={`w-4 h-4 ${reviewerPending ? "text-muted-foreground" : "text-primary"}`}
            aria-hidden="true"
          />
          <span className="font-medium">Medically reviewed by:</span>
          <span className={reviewerPending ? "text-muted-foreground italic" : "text-foreground"}>
            {medicallyReviewedBy}
            {reviewerCredentials ? `, ${reviewerCredentials}` : ""}
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <CalendarClock className="w-4 h-4" aria-hidden="true" />
          <span>Last reviewed {formatDate(lastReviewed)}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <span>Last updated {formatDate(dateModified)}</span>
        </span>
      </div>
    </div>
  );
}

export function FootnoteList({
  notes,
}: {
  notes: { id: string; label: string; url?: string }[];
}) {
  if (!notes.length) return null;
  return (
    <section
      aria-labelledby="footnotes-heading"
      className="mt-12 pt-8 border-t border-border"
    >
      <h2
        id="footnotes-heading"
        className="font-heading text-lg font-semibold text-foreground mb-3"
      >
        References
      </h2>
      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
        {notes.map((n) => (
          <li key={n.id} id={`fn-${n.id}`}>
            {n.url ? (
              <a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-words"
              >
                {n.label}
              </a>
            ) : (
              <span>{n.label}</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FootnoteRef({ id }: { id: string }) {
  return (
    <sup>
      <a
        href={`#fn-${id}`}
        className="text-primary hover:underline ml-0.5"
        aria-label={`Reference ${id}`}
      >
        [{id}]
      </a>
    </sup>
  );
}
