import { MetadataRoute } from "next";

const BASE_URL = "https://www.weightlossshotguide.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  return [
    // Core
    { url: BASE_URL, lastModified: today, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/glp1-telehealth-guide`, lastModified: today, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/best-protein-powder-glp1`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/best-supplements-ozempic`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/best-body-composition-monitor`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },

    // Drug brand hubs (high SV)
    { url: `${BASE_URL}/zepbound`, lastModified: today, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/mounjaro`, lastModified: today, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/tirzepatide`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },

    // Compounding pharmacy directory
    { url: `${BASE_URL}/compounding-pharmacies`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/compounded-semaglutide`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/compounded-tirzepatide`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/503a-vs-503b-pharmacies`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },

    // Per-pharmacy reviews
    { url: `${BASE_URL}/henry-meds-review`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ro-body-review`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/hims-weight-loss-review`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/mochi-health-review`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/form-health-review`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },

    // Comparison pages
    { url: `${BASE_URL}/zepbound-vs-wegovy`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ozempic-vs-mounjaro`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cheapest-glp1-options`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/glp1-without-insurance`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },

    // Blog
    { url: `${BASE_URL}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog/what-to-eat-on-ozempic`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/glp1-supplements-guide`, lastModified: today, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/blog/ozempic-vs-wegovy-vs-mounjaro`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/glp1-body-composition-tracking`, lastModified: today, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/blog/push-health-zepbound-review`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/blog/telehealth-glp1-one-time-vs-subscription`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/blog/tirzepatide-vs-semaglutide-receptors`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/blog/zepbound-cost-vs-food-budget`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/omad-with-glp1-protein-strategy`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },

    // Evergreen
    { url: `${BASE_URL}/about`, lastModified: today, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
  ];
}
