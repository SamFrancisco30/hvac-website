import { PhoneCall, ShieldCheck, Timer, Wrench } from "lucide-react";
import { trustPoints } from "@/lib/site";

const icons = [PhoneCall, ShieldCheck, Timer, Wrench];

export function TrustBand() {
  return (
    <section className="rounded-[32px] border border-white/70 bg-white/85 p-5 shadow-[var(--shadow)] backdrop-blur">
      <div className="grid gap-4 md:grid-cols-4">
        {trustPoints.map((point, index) => {
          const Icon = icons[index] ?? ShieldCheck;
          return (
            <div key={point} className="flex items-center gap-4 rounded-3xl bg-slate-50 px-4 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--blue)] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{point}</div>
                <div className="text-xs text-slate-500">Clear, local, responsive support</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
