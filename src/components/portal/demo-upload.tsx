"use client";

import { useState } from "react";

type Picked = {
  key: string;
  name: string;
  size: string;
};

export function DemoUpload() {
  const [picked, setPicked] = useState<Picked[]>([]);
  const [missing, setMissing] = useState(false);

  return (
    <form
      className="portal-card mt-6 p-5"
      onSubmit={(event) => {
        event.preventDefault();
        const input = event.currentTarget.elements.namedItem("file");
        if (!(input instanceof HTMLInputElement)) return;
        const file = input.files?.[0];
        if (!file) {
          setMissing(true);
          return;
        }
        setMissing(false);
        setPicked((current) => [
          {
            key: `${file.name}-${file.size}-${current.length}`,
            name: file.name,
            size: `${Math.max(1, Math.ceil(file.size / 1024))} KB`,
          },
          ...current,
        ]);
        input.value = "";
      }}
    >
      <h2 className="text-2xl">Add a file to this screen</h2>
      <p className="portal-lede mt-2">
        This control only lists a file in your browser. It does not upload, scan, or store it.
      </p>
      <div className="portal-field mt-5">
        <label htmlFor="file">Choose a file</label>
        <input id="file" name="file" type="file" />
      </div>
      {missing ? (
        <p className="mt-3 border border-[#c9553d] px-3 py-2" role="alert">
          Choose a file first. Nothing was uploaded.
        </p>
      ) : null}
      <button className="portal-btn mt-5" type="submit">
        Add to the demo list
      </button>
      {picked.length > 0 ? (
        <ul className="mt-6 space-y-3">
          {picked.map((file) => (
            <li key={file.key} className="border-t border-[#2e2a26] pt-3">
              <span className="block font-bold">{file.name}</span>
              <span className="portal-muted block text-sm">
                {file.size} · Not stored · Demo only
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="portal-muted mt-5 text-sm">No file has been picked in this tab.</p>
      )}
    </form>
  );
}
