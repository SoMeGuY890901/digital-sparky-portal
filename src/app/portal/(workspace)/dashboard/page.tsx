import type { Metadata } from "next";
import Link from "next/link";
import { milestones, nextSteps, projectStatus } from "@/lib/portal/data";
import { getDemoSession } from "@/lib/portal/session";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const account = await getDemoSession();

  return (
    <>
      <p className="portal-label">Welcome</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Hello, {account?.name}</h1>
      <p className="portal-lede mt-4">
        This is the home of the demo workspace: the sample project’s status, the milestone timeline, and what the studio is waiting on.
      </p>

      <section className="portal-card mt-8 p-5 sm:p-6" aria-labelledby="status-heading">
        <h2 id="status-heading" className="text-2xl">
          Project status
        </h2>
        <p className="portal-lede mt-2">Where the current sample project stands.</p>
        <p className="mt-5 text-3xl">{projectStatus.name}</p>
        <dl className="mt-5 grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="portal-label">Phase</dt>
            <dd className="mt-2">
              <span className="portal-status">{projectStatus.phase}</span>
            </dd>
          </div>
          <div>
            <dt className="portal-label">Package</dt>
            <dd className="mt-2">
              {projectStatus.packageName}
              <span className="portal-muted block">{projectStatus.range}</span>
            </dd>
          </div>
          <div>
            <dt className="portal-label">Sample update</dt>
            <dd className="mt-2">
              <time dateTime="2026-10-28">{projectStatus.updated}</time>
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-10" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="text-2xl">
          Timeline
        </h2>
        <p className="portal-lede mt-2">Sample milestones for this project, in order.</p>
        <ol className="mt-5 space-y-3">
          {milestones.map((milestone, index) => (
            <li key={milestone.name} className="portal-card grid gap-2 p-5 sm:grid-cols-[8rem_minmax(0,1fr)]">
              <p className="portal-label">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                <span className="mt-2 block normal-case tracking-normal text-[#f4f0e8]">
                  {milestone.state}
                </span>
              </p>
              <div>
                <h3 className="text-xl">{milestone.name}</h3>
                {milestone.dateTime ? (
                  <time className="portal-muted mt-1 block text-sm" dateTime={milestone.dateTime}>
                    {milestone.date}
                  </time>
                ) : (
                  <p className="portal-muted mt-1 text-sm">{milestone.date}</p>
                )}
                <p className="mt-2 leading-relaxed">{milestone.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10" aria-labelledby="next-heading">
        <h2 id="next-heading" className="text-2xl">
          Next steps
        </h2>
        <p className="portal-lede mt-2">What this demo is waiting on. Nothing here notifies a real person.</p>
        <ol className="mt-5 list-decimal space-y-3 pl-5 leading-relaxed">
          {nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="mt-6 flex flex-wrap gap-3">
          <Link className="portal-btn" href="/portal/files">
            Open sample files
          </Link>
          <Link className="portal-btn-quiet" href="/portal/quotes">
            Review sample quotes
          </Link>
        </p>
      </section>
    </>
  );
}
