"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  country: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  region: "",
  country: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setMessage("Thanks. We received your request and will follow up soon.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us directly if this keeps happening.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Name" value={form.firstName} onChange={(value) => setForm({ ...form, firstName: value })} placeholder="Name" required />
        <Field label="Phone No." value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} placeholder="Phone No." required />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} placeholder="Email" type="email" required />
        <Field label="Address" value={form.address} onChange={(value) => setForm({ ...form, address: value })} placeholder="Address" />
      </div>

      <Field label="Address Line 1" value={form.addressLine1} onChange={(value) => setForm({ ...form, addressLine1: value })} placeholder="Address Line 1" />
      <Field label="Address Line 2" value={form.addressLine2} onChange={(value) => setForm({ ...form, addressLine2: value })} placeholder="Address Line 2" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="City" value={form.city} onChange={(value) => setForm({ ...form, city: value })} placeholder="City" />
        <Field label="State / Province / Region" value={form.region} onChange={(value) => setForm({ ...form, region: value })} placeholder="State / Province / Region" />
      </div>

      <label className="grid gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
        Country
        <div className="relative">
          <select
            value={form.country}
            onChange={(event) => setForm({ ...form, country: event.target.value })}
            className="h-[42px] w-full appearance-none rounded border border-[var(--border)] bg-white px-4 text-sm uppercase text-[var(--text)] outline-none transition focus:border-[var(--orange)]"
          >
            <option value="">--- Select Country ---</option>
            <option value="canada">Canada</option>
            <option value="united-states">United States</option>
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--muted)]">▾</span>
        </div>
      </label>

      <label className="grid gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
        Message:
        <textarea
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          rows={5}
          placeholder="Please provide technical specifications, square footage, or symptoms of system failure..."
          className="resize-none rounded border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--orange)]"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-[var(--orange)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--orange-deep)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>

      {message ? (
        <p aria-live="polite" className={`rounded px-4 py-3 text-sm ${status === "success" ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
          {message}
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
    <label className="grid gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
      {label}
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-[56px] rounded border border-[var(--border)] bg-white px-4 text-sm outline-none transition focus:border-[var(--orange)]"
      />
    </label>
  );
}
