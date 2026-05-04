import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--orange)]">404</div>
      <h1 className="mt-4 text-4xl font-black text-[var(--blue)]">Page not found</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">The page you were looking for does not exist. Return to the homepage or contact us directly.</p>
      <Link href="/" className="mt-8 rounded-full bg-[var(--orange)] px-6 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </div>
  );
}
