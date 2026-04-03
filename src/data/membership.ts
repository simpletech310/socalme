export interface MembershipPlan {
  name: string;
  price: number;
  priceLabel: string;
  features: string[];
  highlighted: boolean;
}

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Single Visit",
    price: 60,
    priceLabel: "per visit",
    features: [
      "No insurance needed",
      "See a provider today",
      "Includes consultation",
      "On-site X-ray & lab available",
    ],
    highlighted: false,
  },
  {
    name: "Family Plan",
    price: 50,
    priceLabel: "per visit",
    features: [
      "All single visit benefits",
      "Covers entire household",
      "Save $10 per visit",
      "Best value for families",
    ],
    highlighted: true,
  },
];
