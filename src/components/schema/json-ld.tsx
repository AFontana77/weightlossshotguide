export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  author,
  reviewer,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  author?: { name: string; title?: string };
  reviewer?: { name: string; credentials?: string };
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    image: image || "https://www.weightlossshotguide.com/og-image.jpg",
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.title,
        }
      : {
          "@type": "Organization",
          name: "Weight Loss Shot Guide",
          url: "https://www.weightlossshotguide.com",
        },
    publisher: {
      "@type": "Organization",
      name: "Weight Loss Shot Guide",
      url: "https://www.weightlossshotguide.com",
    },
  };

  if (reviewer && !reviewer.name.toLowerCase().includes("pending")) {
    schema.reviewedBy = {
      "@type": "Person",
      name: reviewer.name,
      jobTitle: reviewer.credentials,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  price,
  rating,
  brand,
  image,
  url,
}: {
  name: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  image: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    url,
    brand: { "@type": "Brand", name: brand },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ItemListSchema({
  name,
  items,
}: {
  name: string;
  items: { name: string; url: string; position: number }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
