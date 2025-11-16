export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mini Postman",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free online API testing tool and Postman alternative. Test REST APIs instantly with GET, POST, PUT, DELETE requests. No installation required.",
    "url": "https://mini-postman-rouge.vercel.app",
    "screenshot": "https://mini-postman-rouge.vercel.app/og-image.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "featureList": [
      "All HTTP Methods (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)",
      "Custom Headers Editor",
      "JSON Body Editor with Validation",
      "Response Viewer with Syntax Highlighting",
      "Request History",
      "Keyboard Shortcuts",
      "No Installation Required"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
