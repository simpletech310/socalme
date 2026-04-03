import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Locations from "@/components/Locations";
import TotalAccess from "@/components/TotalAccess";
import Insurance from "@/components/Insurance";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { locations, hours } from "@/data/locations";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "SoCal Emergency Medicine - Urgent Care Centers",
    description:
      "Walk-in urgent care open 7 days a week across 7 Inland Empire locations. In and out in an hour.",
    url: "https://socalem.com",
    logo: "https://socalem.com/SoCal-logo.png",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:30",
    },
    department: locations.map((loc) => ({
      "@type": "MedicalClinic",
      name: `SoCalEM - ${loc.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.city,
        addressRegion: loc.state,
        postalCode: loc.zip,
        addressCountry: "US",
      },
      telephone: loc.phone,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:30",
      },
    })),
    medicalSpecialty: [
      "Emergency Medicine",
      "Occupational Medicine",
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "Urgent Care" },
      { "@type": "MedicalProcedure", name: "DOT Physicals" },
      { "@type": "MedicalProcedure", name: "On-Site X-Ray" },
      { "@type": "MedicalProcedure", name: "Lab Testing" },
      { "@type": "MedicalProcedure", name: "Occupational Medicine" },
      { "@type": "MedicalProcedure", name: "Telemedicine" },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <WhyChooseUs />
        <Locations />
        <TotalAccess />
        <Insurance />
        <CallToAction />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
