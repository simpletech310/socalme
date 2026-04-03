export interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const services: Service[] = [
  {
    title: "Urgent Care",
    description:
      "Walk-in care for illnesses and injuries — no appointment needed. In and out in about an hour.",
    icon: "MedicalCross",
    color: "coral",
  },
  {
    title: "On-Site X-Ray & Lab",
    description:
      "Digital X-rays and lab tests done on-site for faster diagnosis and treatment.",
    icon: "XRay",
    color: "sky",
  },
  {
    title: "DOT Physicals",
    description:
      "Certified DOT physical exams for commercial drivers — just $110, no appointment needed.",
    icon: "Clipboard",
    color: "teal",
  },
  {
    title: "Occupational Medicine",
    description:
      "Workers comp, pre-employment physicals, drug screening, and employer services.",
    icon: "Shield",
    color: "navy",
  },
  {
    title: "Telemedicine",
    description:
      "See a provider from home via secure video — convenient virtual visits available.",
    icon: "Stethoscope",
    color: "coral",
  },
  {
    title: "Patient Portal",
    description:
      "Access your records, view results, and manage your care online anytime, 24/7.",
    icon: "Clipboard",
    color: "sky",
  },
];
