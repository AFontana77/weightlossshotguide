// Centralized affiliate tag + link management for Weight Loss Shot Guide.
// Swap ONE constant here when an affiliate account changes.
//
// Amazon store IDs are capped at 20 characters, so the old
// "weightlossshotguide-20" (22 chars) was never a valid ID. Shortened to
// "wlshotguide-20" (14 chars, matches the portfolio "-20" convention).
// ACTION (Anthony): create this exact tracking ID in Amazon Associates, or tell
// AFFIL your preferred <=20-char ID and this one line gets swapped.
export const AMAZON_TAG = "wlshotguide-20";

// ---------------------------------------------------------------------------
// DIRECT TELEHEALTH AFFILIATE LINKS  (highest-AOV placements on the site)
// Destinations behind every "Get Evaluated by SHED MD" / Direct Meds CTA.
// Until the program approves, they point to the brand homepage, which is
// UNTRACKED (a conversion earns $0). On approval, replace the URL below with the
// tracked affiliate link and every CTA that uses it activates on the next deploy.
//
//   SHED MD:     $350 CPA, ~$8-12k/mo potential. Signup pending since ~2026-05-21.
//   Direct Meds: $280 CPA. Signup pending.
//
// NOTE: several page CTAs still hardcode the bare "https://www.shedmd.com"
// string in QuickVerdictBox / StickyCTA props. On activation, ALSO run a
// repo-wide replace-all of "https://www.shedmd.com" -> the tracked link. The
// exact file list is in the AFFIL click-list / completion notice (2026-07-05).
export const SHED_AFFILIATE_URL = "https://www.shedmd.com"; // TODO: swap to tracked link on approval ($350 CPA)
export const DIRECT_MEDS_AFFILIATE_URL = "https://www.directmeds.com"; // TODO: swap to tracked link on approval ($280 CPA)

// ---------------------------------------------------------------------------
// KA'CHAVA (Rakuten)  —  APPROVED 2026-05-27, BLOCKED ON ONE MISSING VALUE
//
// Ka'Chava approved this marketing channel ("Weight Loss Shot Guide", Rakuten
// publisher SID 4703793) on 2026-05-27. It is a meal-replacement shake, which
// is an honest fit for GLP-1 readers who cannot finish a normal meal.
//
// Advertiser MID 50419 is confirmed against the live Rakuten advertiser
// catalog. What is missing is this channel's PUBLISHER TOKEN, the opaque
// "id=" value in a linksynergy URL. It cannot be derived:
//   - The 2026-05-27 approval email uses Rakuten's newer template, which
//     carries no MID and no token (older approvals did include one).
//   - The portfolio's Rakuten API credentials only authenticate scope
//     4703736 (HomesteadingGear). Every other SID returns invalid_client, so
//     the Link Generator API cannot mint a link for this channel.
//   - Reusing another channel's token is not an option. Rakuten scopes links
//     to the approved marketing channel, and Ka'Chava DENIED HomesteadingGear
//     on the same day it approved this site.
//
// ACTION (Anthony, ~2 minutes): Rakuten publisher dashboard -> switch to the
// "Weight Loss Shot Guide" channel (SID 4703793) -> Links -> Ka'Chava ->
// Get Link. Send AFFIL the "id=" value out of the generated URL. That single
// value turns the constant below into a live tracked link, and AFFIL places
// the CTA in the same pass.
export const KACHAVA_RAKUTEN_MID = "50419";
export const KACHAVA_RAKUTEN_SID = "4703793";
export const KACHAVA_RAKUTEN_PUBLISHER_ID = ""; // <- paste the "id=" token here
export const KACHAVA_AFFILIATE_URL = KACHAVA_RAKUTEN_PUBLISHER_ID
  ? `https://click.linksynergy.com/deeplink?id=${encodeURIComponent(
      KACHAVA_RAKUTEN_PUBLISHER_ID
    )}&mid=${KACHAVA_RAKUTEN_MID}&murl=${encodeURIComponent(
      "https://www.kachava.com/"
    )}`
  : ""; // empty until the token lands, so no page can render a dead link

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
