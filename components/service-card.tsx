import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceCardProps = {
  title: string;
  summary: string;
  href: string;
  bullets?: string[];
};

export function ServiceCard({ title, summary, href, bullets = [] }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_35px_rgba(0,33,71,0.08)] transition hover:-translate-y-1 hover:border-[rgba(255,69,0,0.35)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(0,33,71,0.12),rgba(255,69,0,0.18))] text-[var(--blue)]">
        <span className="text-xl font-black">HV</span>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
      {bullets.length ? (
        <ul className="mt-5 space-y-3 text-sm text-slate-700">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-auto pt-6">
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] transition group-hover:text-[var(--orange)]">
          Learn more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
