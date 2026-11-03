import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    image: `${site.url}/spark-mark.png`,
    logo: `${site.url}/spark-mark.png`,
    priceRange: "$1,500–$12,000",
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: {
      "@type": "City",
      name: site.locality,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
