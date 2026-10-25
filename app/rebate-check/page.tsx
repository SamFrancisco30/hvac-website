import type { Metadata } from "next";
import { QuizFunnel } from "./quiz-funnel";

export const metadata: Metadata = {
  title: "60-Second Rebate Check",
  description:
    "Check your Ontario heat pump rebate in 60 seconds — up to $7,500 through Home Renovation Savings now, plus get updates on the new federal rebate opening in early 2027.",
};

export default function RebateCheckPage() {
  return (
    <div className="pt-20">
      <QuizFunnel />
    </div>
  );
}
