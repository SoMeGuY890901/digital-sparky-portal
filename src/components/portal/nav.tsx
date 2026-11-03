"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portalNav } from "@/lib/portal/nav";

export function PortalNav() {
  const pathname = usePathname();

  return (
    <nav className="portal-nav" aria-label="Portal">
      <ul>
        {portalNav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
