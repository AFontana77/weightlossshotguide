// Centralized affiliate tag management for GLP-1 Guide
// Swap ONE constant when affiliate accounts change

export const AMAZON_TAG = "glp1guide-20"; // update when approved

export const AFFILIATE_PROGRAMS = {
  amazon: {
    tag: AMAZON_TAG,
    cookie: "24h",
    commission: "3-4%",
  },
  bulkSupplements: {
    url: "https://www.bulksupplements.com/pages/affiliates",
    cookie: "45d",
    commission: "10-15%",
  },
  myProtein: {
    url: "https://www.myprotein.com/affiliate",
    cookie: "30d",
    commission: "up to 20%",
  },
  onnit: {
    url: "https://www.onnit.com/affiliate-program/",
    cookie: "45d",
    commission: "12%",
  },
  shed: {
    url: "https://www.shedmd.com/pages/affiliates",
    cookie: "30d",
    commission: "$350 CPA",
  },
  directMeds: {
    url: "https://www.directmeds.com/affiliates",
    cookie: "30d",
    commission: "$280 CPA",
  },
} as const;

export function amazonLink(urlOrAsin: string): string {
  if (urlOrAsin.startsWith("http")) {
    const url = new URL(urlOrAsin);
    url.searchParams.set("tag", AMAZON_TAG);
    return url.toString();
  }
  return `https://www.amazon.com/dp/${urlOrAsin}?tag=${AMAZON_TAG}`;
}

export type AffiliateSource =
  | "amazon"
  | "bulkSupplements"
  | "myProtein"
  | "onnit"
  | "shed"
  | "directMeds"
  | "direct";

export interface Product {
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  amazonAsin?: string;
  directUrl?: string;
  affiliateSource: AffiliateSource;
  image: string;
  shortDescription: string;
  pros: string[];
  cons: string[];
  verdict: string;
  specs: Record<string, string>;
}

export function bestLink(
  product: Product
): { url: string; label: string; isDirect: boolean } {
  // Prefer direct affiliate (higher commission) over Amazon
  if (product.directUrl && product.affiliateSource !== "amazon") {
    return {
      url: product.directUrl,
      label: `Visit ${product.brand}`,
      isDirect: true,
    };
  }
  if (product.amazonAsin) {
    return {
      url: amazonLink(product.amazonAsin),
      label: "Check Price on Amazon",
      isDirect: false,
    };
  }
  return {
    url: "#",
    label: "Check Availability",
    isDirect: false,
  };
}
