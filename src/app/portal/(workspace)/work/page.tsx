import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { pastWork } from "@/lib/portal/data";
import intake from "@/images/portal/intake.png";
import seasonal from "@/images/portal/seasonal.png";
import shop from "@/images/portal/shop.png";

const covers: Record<(typeof pastWork)[number]["image"], StaticImageData> = {
  shop,
  seasonal,
  intake,
};

export const metadata: Metadata = {
  title: "Work history",
};

export default function WorkPage() {
  return (
    <>
      <p className="portal-label">Archive</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Work history</h1>
      <p className="portal-lede mt-4">
        A sample archive of earlier projects for this demo client. Covers are generated placeholders, not screenshots or results.
      </p>
      <div className="mt-8 grid gap-6">
        {pastWork.map((project) => (
          <article key={project.slug} className="portal-card overflow-hidden sm:grid sm:grid-cols-[16rem_minmax(0,1fr)]">
            <Image
              src={covers[project.image]}
              alt={project.alt}
              sizes="(max-width: 640px) 100vw, 256px"
              className="h-auto w-full"
            />
            <div className="p-5">
              <p className="portal-status">{project.status}</p>
              <h2 className="mt-3 text-2xl">{project.title}</h2>
              <p className="portal-muted mt-1 text-sm">{project.when}</p>
              <p className="mt-3 leading-relaxed">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
