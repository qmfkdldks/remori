import React from "react";

const data = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Remori",
  alternateName: "Remori Argentina",
  url: "https://remori.com.ar",
  logo: "https://remori.com.ar/static/logo.png",
  sameAs: [
    "https://github.com/qmfkdldks/remori",
    "https://remori.com.ar",
    "https://www.linkedin.com/in/brian-kang-56ab51b1/"
  ]
};

const GoogleSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default GoogleSchema;
