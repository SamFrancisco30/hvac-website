"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { serviceMenu, coverageCities } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  urgency: string;
  city: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  urgency: "",
  city: "",
  message: "",
};

const urgencyOptions = [
  { value: "emergency", label: "Emergency — need help today" },
  { value: "this-week", label: "This week" },
  { value: "this-month", label: "Within the next month" },
  { value: "planning", label: "Planning ahead" },
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setStatusMessage("Thanks — we received your request and will be in touch shortly.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please call us directly if this keeps happening.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Your name"
          required
        />
        <Field
          label="Phone"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          placeholder="+1 (___) ___-____"
          type="tel"
          required
        />
      </div>

      <Field
        label="Email"
        value={form.email}
        onChange={(v) => setForm({ ...form, email: v })}
        placeholder="your@email.com"
        type="email"
        required
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <SelectField
          label="Service Type"
          value={form.service}
          onChange={(v) => setForm({ ...form, service: v })}
        >
          <option value="">— Select a service —</option>
          {serviceMenu.map((s) => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
          <option value="other">Other / Not sure</option>
        </SelectField>

        <SelectField
          label="Urgency"
          value={form.urgency}
          onChange={(v) => setForm({ ...form, urgency: v })}
        >
          <option value="">— Select urgency —</option>
          {urgencyOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </SelectField>
      </div>

      <SelectField
        label="City / Area"
        value={form.city}
        onChange={(v) => setForm({ ...form, city: v })}
      >
        <option value="">— Select your city —</option>
        {coverageCities.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
        <option value="other">Other GTA area</option>
      </SelectField>

      <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
        Message
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          placeholder="Describe the issue, system type, or any other details that would help us prepare..."
          className="resize-none rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-slate-400 focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(255,69,0,0.1)]"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--orange-deep)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Request"}
      </button>

      {statusMessage ? (
        <p
          aria-live="polite"
          className={`rounded-lg px-4 py-3 text-sm ${
            status === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-rose-50 text-rose-800"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function Field({ label, value, onChange, placeholder, type = "text", required = false }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
      {label}
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 rounded-lg border border-[var(--border)] bg-white px-4 text-sm text-[var(--text)] outline-none transition placeholder:text-slate-400 focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(255,69,0,0.1)]"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

function SelectField({ label, value, onChange, children }: SelectFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
      {label}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full appearance-none rounded-lg border border-[var(--border)] bg-white px-4 pr-10 text-sm text-[var(--text)] outline-none transition focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(255,69,0,0.1)]"
        >
          {children}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--muted)]">▾</span>
      </div>
    </label>
  );
}
