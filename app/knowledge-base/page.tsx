import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { knowledgeBaseTopics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description: "Future SEO content hub for HVAC homeowner questions and guides.",
};

export default function KnowledgeBasePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Knowledge base"
        title="SEO content goes here later."
        description="The site is structured so this section can grow into useful homeowner guides without cluttering the homepage."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {knowledgeBaseTopics.map((topic) => (
          <div key={topic} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[var(--shadow)]">
            <div className="text-lg font-bold text-slate-900">{topic}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">This can become a full article with FAQs, service links, and internal linking later.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
