export interface InsurancePlan {
  name: string;
  description: string;
}

export const insurancePlans: InsurancePlan[] = [
  { name: "PPO", description: "Most PPO insurance plans accepted" },
  { name: "IEHP", description: "Inland Empire Health Plan" },
  { name: "Medi-Cal", description: "California Medicaid coverage" },
  { name: "Molina", description: "Molina Healthcare plans" },
];
