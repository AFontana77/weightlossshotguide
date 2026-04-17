import Link from "next/link";

const reviewLinks = [
  { name: "Best Protein Powders", href: "/best-protein-powder-glp1" },
  { name: "Best Supplements", href: "/best-supplements-ozempic" },
  { name: "Telehealth Programs", href: "/glp1-telehealth-guide" },
  { name: "Body Composition Monitors", href: "/best-body-composition-monitor" },
];

const learnLinks = [
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4 text-primary-foreground"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <span className="font-heading text-base font-bold">
                GLP-1 Guide
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              The companion resource for GLP-1 medication users. Evidence-based
              product reviews for Ozempic, Wegovy, and Mounjaro users.
            </p>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed max-w-xs">
              <strong>Affiliate Disclosure:</strong> We earn commissions when
              you purchase through our links, at no extra cost to you. This
              funds our independent research.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Reviews
            </h3>
            <ul className="space-y-2">
              {reviewLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Learn
            </h3>
            <ul className="space-y-2">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} GLP-1 Guide. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
            GLP-1 Guide is reader-supported. When you buy through links on our
            site, we may earn an affiliate commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
