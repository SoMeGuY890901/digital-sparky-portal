import type { Metadata } from "next";
import { DemoUpload } from "@/components/portal/demo-upload";
import { libraryFiles } from "@/lib/portal/data";

export const metadata: Metadata = {
  title: "Files",
};

export default function FilesPage() {
  return (
    <>
      <p className="portal-label">Library</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Files</h1>
      <p className="portal-lede mt-4">
        Sample files for the project. The upload control does not store a file on a server.
      </p>
      <ul className="mt-8 divide-y divide-[#2e2a26] border-y border-[#2e2a26]">
        {libraryFiles.map((file) => (
          <li key={file.name} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold">{file.name}</p>
              <p className="portal-muted text-sm">
                {file.detail} · Added {file.added}
              </p>
            </div>
            <a className="portal-link inline-flex min-h-12 items-center" href={file.href}>
              Open sample file
            </a>
          </li>
        ))}
      </ul>
      <DemoUpload />
    </>
  );
}
