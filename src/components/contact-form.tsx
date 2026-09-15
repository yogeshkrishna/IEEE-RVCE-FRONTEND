"use client";
import { useState } from "react";
import { contactEmail } from "@/lib/content";
import { Arrow } from "./icons";
export default function ContactForm() {
  const [draft, setDraft] = useState<string | null>(null);
  const [error, setError] = useState("");
  return (
    <form
      className="contact-form"
      onChange={() => {
        setDraft(null);
        setError("");
      }}
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();
        if (!name || message.length < 10) {
          setError(
            "Please enter your name and a message with at least 10 characters, excluding surrounding spaces.",
          );
          return;
        }
        const subject = String(data.get("topic"));
        setDraft(
          `mailto:${contactEmail}?subject=${encodeURIComponent(`IEEE RVCE — ${subject}`)}&body=${encodeURIComponent(`Hello IEEE RVCE,\n\n${message}\n\n${name}\n${email}`)}`,
        );
      }}
    >
      <h2>Let’s start a conversation.</h2>
      <p>
        Prepare an email to the branch. You’ll review and send it in your email
        app.
      </p>
      <label>
        Your name
        <input name="name" autoComplete="name" required maxLength={100} />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
        />
      </label>
      <label>
        What’s on your mind?
        <select name="topic">
          <option>General enquiry</option>
          <option>Membership</option>
          <option>Events and workshops</option>
          <option>Collaboration</option>
          <option>Article proposal</option>
        </select>
      </label>
      <label>
        Your message
        <textarea
          name="message"
          rows={5}
          minLength={10}
          maxLength={1500}
          required
        />
      </label>
      <button className="pill-button" type="submit">
        Prepare email <Arrow />
      </button>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {draft && (
        <div className="draft-ready" role="status">
          <strong>Your email draft is ready.</strong>
          <p>
            Nothing has been sent. Open the draft, review it, then send it from
            your email app.
          </p>
          <a className="text-link" href={draft}>
            Open email draft <Arrow />
          </a>
        </div>
      )}
      <noscript>
        <p>
          Email us directly at{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </noscript>
    </form>
  );
}
