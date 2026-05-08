import type { Product } from "@/lib/affiliate";

// =============================================================================
// PROTEIN SHAKES
// =============================================================================

export const proteinShakes: Product[] = [
  {
    name: "Fairlife Core Power Elite",
    slug: "fairlife-core-power-elite",
    category: "protein-shakes",
    brand: "Fairlife",
    price: 44,
    rating: 4.8,
    amazonAsin: "B07WLRG765",
    directUrl: "",
    affiliateSource: "amazon",
    image: "",
    shortDescription:
      "42g of protein per bottle with zero cooking required — the highest RTD protein on the market.",
    pros: [
      "42g protein per serving — highest of any RTD protein",
      "Ready-to-drink bypasses GLP-1 nausea issues",
      "Casein + whey blend for sustained absorption",
      "Available at Walmart, Costco, and Amazon",
    ],
    cons: [
      "$3.50/serving is premium pricing",
      "Not suitable for dairy-free users",
      "Limited flavor options vs powder",
    ],
    verdict:
      "The single best protein option for GLP-1 users who struggle to eat enough whole food. At 42g per bottle with zero prep, it solves the hardest problem of high-protein eating on a suppressed appetite, so you hit 100g of protein daily even on days when food is the last thing you want, so the weight you lose on semaglutide stays lost because you kept the muscle.",
    specs: {
      Protein: "42g",
      Calories: "230",
      Format: "Ready to drink (14 fl oz)",
      "Protein sources": "Ultrafiltered milk (casein + whey)",
    },
  },
  {
    name: "Optimum Nutrition Gold Standard Whey",
    slug: "optimum-nutrition-gold-standard-whey",
    category: "protein-shakes",
    brand: "Optimum Nutrition",
    price: 32,
    rating: 4.7,
    amazonAsin: "B000QSNYGI",
    directUrl: "",
    affiliateSource: "amazon",
    image: "",
    shortDescription:
      "Best price-per-gram of protein with 25g per serving and exceptional mixability.",
    pros: [
      "25g protein per serving at best-in-class price",
      "Mixes in cold water in under 10 seconds",
      "Available at every major retailer",
      "30+ flavors",
    ],
    cons: [
      "Powder format may cause bloating during GLP-1 adjustment",
      "Slower than hydrolyzed whey for absorption",
    ],
    verdict:
      "The best-value option once you are past the initial GLP-1 adjustment period and can tolerate powder. Unbeatable price per gram of protein, so maintaining 120g of daily protein costs under $1 per day, so the supplement budget that protects your muscle mass does not compete with the medication budget.",
    specs: {
      Protein: "25g",
      Calories: "120",
      Format: "Powder",
      Size: "5 lb (74 servings)",
    },
  },
  {
    name: "Vital Proteins Collagen Peptides",
    slug: "vital-proteins-collagen-peptides",
    category: "protein-shakes",
    brand: "Vital Proteins",
    price: 28,
    rating: 4.6,
    amazonAsin: "B01G5GKQT2",
    directUrl: "",
    affiliateSource: "amazon",
    image: "",
    shortDescription:
      "18g of collagen protein per serving that dissolves invisibly in any liquid — essential for GLP-1 users worried about skin changes.",
    pros: [
      "Dissolves completely in hot or cold beverages",
      "Supports skin elasticity during rapid weight loss",
      "Pairs with any other protein source",
      "Unflavored and flavorless",
    ],
    cons: [
      "Not a complete protein — must combine with other sources",
      "Lower protein density per dollar than whey",
    ],
    verdict:
      "Not a replacement for whey or casein, but an essential add-on for GLP-1 users concerned about skin changes from rapid weight loss. Add to coffee, soup, or smoothies, so you get 18g of collagen protein without any extra step in your routine, so skin elasticity has the building blocks it needs while your body reshapes.",
    specs: {
      Protein: "18g collagen",
      Calories: "70",
      Format: "Unflavored powder",
      Size: "10 oz (28 servings)",
    },
  },
];

// =============================================================================
// SUPPLEMENTS
// =============================================================================

export const supplementProducts: Product[] = [
  {
    name: "Thorne Creatine Monohydrate",
    slug: "thorne-creatine-monohydrate",
    category: "supplements",
    brand: "Thorne",
    price: 35,
    rating: 4.7,
    amazonAsin: "B0013OQKNS",
    directUrl: "",
    affiliateSource: "amazon",
    image: "",
    shortDescription:
      "The only supplement with strong clinical evidence for preserving muscle during caloric deficit — non-negotiable for GLP-1 users.",
    pros: [
      "5g clinically proven dose per serving",
      "NSF Certified for Sport",
      "Unflavored — mixes with anything",
      "Thorne purity standards exceed most brands",
    ],
    cons: [
      "Takes 2-3 weeks of consistent use to see results",
      "No taste appeal on its own",
    ],
    verdict:
      "Non-negotiable for anyone on GLP-1 medications. Creatine has stronger clinical evidence than any other supplement for preserving lean muscle during rapid weight loss, so the 20 lbs you lose on semaglutide is 20 lbs of fat, not 10 lbs of fat and 10 lbs of muscle you spend the next year trying to rebuild. Use 5g daily.",
    specs: {
      Dose: "5g creatine monohydrate",
      Servings: "90",
      Certification: "NSF Certified for Sport",
      Form: "Unflavored powder",
    },
  },
  {
    name: "Garden of Life Dr. Formulated Probiotics",
    slug: "garden-of-life-probiotics",
    category: "supplements",
    brand: "Garden of Life",
    price: 28,
    rating: 4.5,
    amazonAsin: "B00Y7JBQSC",
    directUrl: "",
    affiliateSource: "amazon",
    image: "",
    shortDescription:
      "50 billion CFU from 16 strains — directly addresses the GI side effects that affect 30-40% of GLP-1 users.",
    pros: [
      "50 billion CFU from 16 clinically studied strains",
      "Shelf stable — no refrigeration needed",
      "Organic certified",
      "Includes prebiotics for enhanced effectiveness",
    ],
    cons: [
      "Results take 3-4 weeks to notice",
      "Higher price than generic probiotics",
    ],
    verdict:
      "GLP-1 medications significantly change gut motility. A high-quality multi-strain probiotic directly addresses the nausea, constipation, and digestive discomfort that sends many users back to their doctor, so you stay on the medication through the first 8 weeks when results compound, so the weight loss continues instead of stopping at the first side effect.",
    specs: {
      CFU: "50 billion",
      Strains: "16",
      Storage: "Shelf stable",
      Prebiotics: "Included",
    },
  },
  {
    name: "Thorne Magnesium Bisglycinate",
    slug: "thorne-magnesium-bisglycinate",
    category: "supplements",
    brand: "Thorne",
    price: 22,
    rating: 4.6,
    amazonAsin: "B0CW44BYWF",
    directUrl: "",
    affiliateSource: "amazon",
    image: "",
    shortDescription:
      "The most bioavailable form of magnesium — critical during rapid weight loss when deficiency accelerates.",
    pros: [
      "Bisglycinate is the most absorbable form",
      "No laxative effect unlike magnesium oxide/citrate",
      "Supports sleep quality and muscle function",
      "Thorne purity standards",
    ],
    cons: [
      "More expensive than oxide forms (though those don't absorb well)",
      "Takes 2-4 weeks for full effect",
    ],
    verdict:
      "Magnesium deficiency is common and worsens during rapid weight loss. Bisglycinate specifically avoids the diarrhea effect that makes other forms impractical at therapeutic doses, so you get the full 200mg therapeutic dose at bedtime, so sleep quality improves and muscle cramps stop being a reason to skip workouts.",
    specs: {
      Dose: "200mg per capsule (take 1-2)",
      Form: "Bisglycinate (most bioavailable)",
      Timing: "Before bed",
      Servings: "60",
    },
  },
];

// =============================================================================
// TELEHEALTH PROGRAMS
// =============================================================================

export const telehealthPrograms: Product[] = [
  {
    name: "SHED MD",
    slug: "shed-md",
    category: "telehealth",
    brand: "SHED MD",
    price: 149,
    rating: 4.8,
    amazonAsin: "",
    directUrl: "https://www.shedmd.com",
    affiliateSource: "shed",
    image: "",
    shortDescription:
      "Full medical oversight including nutrition coaching and ongoing monitoring for GLP-1 side effects.",
    pros: [
      "Full medical team support — not a prescription mill",
      "Includes nutrition coaching and behavioral support",
      "Ongoing monitoring for GLP-1 side effects",
      "Available in most US states",
    ],
    cons: [
      "Higher monthly cost than budget providers",
      "Waitlist in some states",
    ],
    verdict:
      "The highest-quality GLP-1 telehealth provider for users who want real medical oversight. Worth the premium if you are concerned about side effects or have other health conditions, so a board-certified physician reviews your case instead of an algorithm, so the dosing adjustments that prevent side effects happen before you give up on the medication.",
    specs: {
      "Monthly cost": "Starting at $149/mo",
      Includes: "Medical team + nutrition coaching",
      States: "Most US states",
    },
  },
  {
    name: "Direct Meds",
    slug: "direct-meds",
    category: "telehealth",
    brand: "Direct Meds",
    price: 99,
    rating: 4.5,
    amazonAsin: "",
    directUrl: "https://www.directmeds.com",
    affiliateSource: "directMeds",
    image: "",
    shortDescription:
      "Faster approval and lower monthly cost. Solid choice for healthy adults seeking straightforward access to compounded semaglutide.",
    pros: [
      "Faster approval process (3-5 days)",
      "Flexible payment options available",
      "Lower monthly cost than premium providers",
      "Generic semaglutide available",
    ],
    cons: [
      "Less comprehensive monitoring than SHED",
      "Support response times vary",
    ],
    verdict:
      "The budget-conscious choice for healthy adults who need straightforward GLP-1 access. Solid option if you have a clear health picture and primarily need prescription access.",
    specs: {
      "Monthly cost": "Starting at $99/mo",
      "Approval time": "3-5 days typical",
      Drug: "Semaglutide (generic)",
    },
  },
];

// =============================================================================
// BODY MONITORS
// =============================================================================

export const bodyMonitors: Product[] = [
  {
    name: "Withings Body Comp Scale",
    slug: "withings-body-comp-scale",
    category: "body-monitors",
    brand: "Withings",
    price: 159,
    rating: 4.4,
    amazonAsin: "B09NMR7Z4M",
    directUrl: "",
    affiliateSource: "amazon",
    image: "",
    shortDescription:
      "The most complete body composition data you can get at home — tracks fat, muscle, bone density, and visceral fat.",
    pros: [
      "Tracks fat %, muscle mass, bone density, visceral fat, nerve health",
      "WiFi sync to Apple Health and MyFitnessPal",
      "8 user profiles with automatic recognition",
      "Pregnancy mode",
    ],
    cons: [
      "$159 premium price",
      "Accuracy affected by hydration levels",
      "Some metrics require standing still for full reading",
    ],
    verdict:
      "Essential for GLP-1 users who need to verify they are losing fat, not muscle. The complete body composition picture this provides is worth the price, so you see visceral fat dropping month over month, so the progress you cannot see on the scale is still tracked and confirmed.",
    specs: {
      Metrics:
        "Weight, fat%, muscle mass, bone density, visceral fat, nerve health",
      Connectivity: "WiFi + Bluetooth",
      Users: "8 profiles",
      App: "Withings Health Mate",
    },
  },
  {
    name: "Renpho Smart Scale ES-CS20M",
    slug: "renpho-smart-scale-es-cs20m",
    category: "body-monitors",
    brand: "Renpho",
    price: 30,
    rating: 4.5,
    amazonAsin: "B01N1UX8RV",
    directUrl: "",
    affiliateSource: "amazon",
    image: "",
    shortDescription:
      "13 body composition metrics for $30 — the best budget option for tracking GLP-1 progress beyond scale weight.",
    pros: [
      "13 metrics including BMI, body fat%, muscle mass, bone mass",
      "Syncs with Apple Health, Fitbit, Samsung Health, Google Fit",
      "Excellent free app",
      "Best budget option by far",
    ],
    cons: [
      "Less accurate than medical-grade or premium smart scales",
      "App has some upsell friction",
    ],
    verdict:
      "The smart pick for GLP-1 users on a budget. At $30, you get 13 body composition metrics and a genuinely useful app. More than enough to track whether you are losing fat versus muscle, so the $500/month medication is working the way it should, so you can adjust protein and training before a bad trend goes too far.",
    specs: {
      Metrics: "13 including fat%, muscle, bone mass, BMI, metabolic age",
      Price: "$30",
      Integrations: "Apple Health, Fitbit, Samsung, Google Fit",
      Battery: "4×AAA",
    },
  },
];

// =============================================================================
// ALL PRODUCTS (combined)
// =============================================================================

export const allProducts: Product[] = [
  ...proteinShakes,
  ...supplementProducts,
  ...telehealthPrograms,
  ...bodyMonitors,
];

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}
