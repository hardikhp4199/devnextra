export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevNextra",
    description: "Software development company building scalable web, mobile, and software solutions for restaurants, retail, healthcare, real estate, education, and fitness businesses.",
    url: "https://devnextra.com",
    logo: "https://devnextra.com/Logo1.png",
    email: "hello@devnextra.com",
    telephone: "+44-7587-535-370",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Software development",
      "Web development",
      "Mobile app development",
      "UI/UX design",
      "Cloud & DevOps",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}