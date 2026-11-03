import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#work", label: "Work" },
  { href: "/#studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
  { href: "/portal", label: "Client portal" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-8">
        <Link href="/" className="inline-flex min-h-12 items-center gap-3">
          <Image
            src="/spark-mark.png"
            width={40}
            height={40}
            alt=""
            sizes="40px"
          />
          <span className="font-display text-lg leading-tight text-paper">
            Digital Sparky
            <span className="block text-sm font-sans font-medium tracking-wide text-gold">
              Studios
            </span>
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={link.href === "/portal" ? false : undefined}
                  className="inline-flex min-h-12 items-center px-3 text-sm text-paper underline-offset-4 hover:underline hover:decoration-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
