import type { Metadata } from "next";
import { QuizFunnel } from "./quiz-funnel";

export const metadata: Metadata = {
  title: "60-Second Rebate Check | WARMWISE",
  description:
    "Check your Ontario heat pump rebate in 60 seconds — up to $7,500 through Home Renovation Savings now, plus join the early-bird list for the federal rebate opening January 2027.",
};

export default function RebateCheckPage() {
  return (
    <main className="pt-20">
      <QuizFunnel />
    </main>
  );
}
