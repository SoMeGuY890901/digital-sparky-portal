import type { Metadata } from "next";
import { demoReply } from "@/app/portal/actions";
import { messages } from "@/lib/portal/data";
import { getDemoSession } from "@/lib/portal/session";

export const metadata: Metadata = {
  title: "Messages",
};

export default async function MessagesPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const params = await searchParams;
  const account = await getDemoSession();
  const notSent = params.saved === "0";
  const invalid = params.error === "1";

  return (
    <>
      <p className="portal-label">Support</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Messages</h1>
      <p className="portal-lede mt-4">
        A sample thread with the studio. Replies stay on this screen only as a notice, and nothing is delivered.
      </p>
      <ol className="mt-8 space-y-3">
        {messages.map((message) => (
          <li key={message.id} className="portal-card p-5">
            <p className="font-bold">{message.from}</p>
            <p className="portal-muted text-sm">
              {message.role} · <time dateTime={message.dateTime}>{message.date}</time>
            </p>
            <p className="mt-3 leading-relaxed">{message.body}</p>
          </li>
        ))}
      </ol>
      <form className="portal-card mt-6 p-5" action={demoReply}>
        <h2 className="text-2xl">Reply as {account?.name}</h2>
        <p className="portal-lede mt-2">
          Sending checks that a note was typed, then tells you it was not delivered.
        </p>
        {notSent ? (
          <p className="mt-4 border border-[#e0c48a] px-3 py-2" role="status">
            Not sent. This demo does not deliver messages or store the reply.
          </p>
        ) : null}
        {invalid ? (
          <p className="mt-4 border border-[#c9553d] px-3 py-2" role="alert">
            Write a short note first. Nothing was sent.
          </p>
        ) : null}
        <div className="portal-field mt-4">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required minLength={2} maxLength={1000} />
        </div>
        <button className="portal-btn mt-4" type="submit">
          Try to send
        </button>
      </form>
    </>
  );
}
