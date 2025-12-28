---
title: "New Age Home Care - Schema.org JSON-LD Markup.txt"
project: "QU-0338 - Power Automate Dataverse Consulting Services - New Age Support"
project_uuid: "01975794-3b40-74c0-a6b0-5e8c77e24058"
doc_uuid: "8320ee9b-a457-4f63-9f4a-e8f44520cdfc"
created_at: "2025-06-10T02:09:06.376524+00:00"
doc_index: 3
---

{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "HealthAndBeautyBusiness"],
  "name": "New Age Home Care",
  "alternateName": "New Age",
  "url": "https://newagehomecare.com.au",
  "description": "Family owned and operated organization specializing in provision of support for aged, frail and disabled population. Government registered service provider committed to ensuring care recipients live with dignity, choice and confidence.",
  "slogan": "We let our work do the talk",
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 4 Building B, 1C Grand Ave",
    "addressLocality": "Rosehill",
    "addressRegion": "NSW",
    "postalCode": "2142",
    "addressCountry": "AU"
  },
  
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+61-2-8628-0672",
      "contactType": "customer service",
      "availableLanguage": "English",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "opens": "00:00",
        "closes": "23:59",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", 
          "Friday", "Saturday", "Sunday"
        ]
      }
    },
    {
      "@type": "ContactPoint",
      "email": "accounts@newagehacs.com",
      "contactType": "billing"
    }
  ],
  
  "openingHours": "Mo-Su 00:00-23:59",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "opens": "00:00",
    "closes": "23:59",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", 
      "Friday", "Saturday", "Sunday"
    ]
  },
  
  "areaServed": {
    "@type": "State",
    "name": "New South Wales",
    "alternateName": "NSW"
  },
  
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    }
  },
  
  "ownershipType": "Family Business",
  
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Government Registration",
      "recognizedBy": {
        "@type": "Organization",
        "name": "National Disability Insurance Scheme",
        "alternateName": "NDIS"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Government Registration",
      "recognizedBy": {
        "@type": "Organization",
        "name": "My Aged Care"
      }
    }
  ],
  
  "serviceType": [
    "Aged Care Services",
    "Disability Support Services", 
    "In-Home Care",
    "Private Care Services"
  ],
  
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "New Age Home Care Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Home Care Packages",
        "description": "Government-funded aged care services delivered in the home, available in four levels with varying quantities of services and resources",
        "provider": {
          "@type": "Organization",
          "name": "New Age Home Care"
        },
        "serviceType": "Aged Care",
        "areaServed": {
          "@type": "State",
          "name": "New South Wales"
        }
      },
      {
        "@type": "Service",
        "name": "NDIS Disability Support",
        "description": "Personalized and flexible disability support services in home and community settings for people with acquired brain injury, intellectual, physical, sensory or neurological disabilities",
        "provider": {
          "@type": "Organization",
          "name": "New Age Home Care"
        },
        "serviceType": "Disability Support",
        "areaServed": {
          "@type": "State",
          "name": "New South Wales"
        }
      },
      {
        "@type": "Service",
        "name": "Dementia Care",
        "description": "Specialized in-home care services for clients with dementia, focusing on maintaining dignity and supporting independent lifestyle choices",
        "provider": {
          "@type": "Organization",
          "name": "New Age Home Care"
        },
        "serviceType": "Specialized Care"
      },
      {
        "@type": "Service", 
        "name": "Palliative Care",
        "description": "Specialized in-home care services for clients requiring end-of-life care, focusing on comfort, dignity, and quality of life",
        "provider": {
          "@type": "Organization",
          "name": "New Age Home Care"
        },
        "serviceType": "Specialized Care"
      },
      {
        "@type": "Service",
        "name": "Cancer Care",
        "description": "Specialized in-home care services for clients dealing with cancer, designed to support them during treatment and recovery",
        "provider": {
          "@type": "Organization", 
          "name": "New Age Home Care"
        },
        "serviceType": "Specialized Care"
      },
      {
        "@type": "Service",
        "name": "Post-Surgery Care",
        "description": "Specialized in-home care services for clients recovering from surgical procedures, supporting the healing process",
        "provider": {
          "@type": "Organization",
          "name": "New Age Home Care"
        },
        "serviceType": "Recovery Care"
      },
      {
        "@type": "Service",
        "name": "24-Hour Care",
        "description": "Continuous care services for clients with complex needs, provided around the clock in the client's home",
        "provider": {
          "@type": "Organization",
          "name": "New Age Home Care"
        },
        "serviceType": "Intensive Care"
      },
      {
        "@type": "Service",
        "name": "Private Care Services",
        "description": "All care services available privately without government assessments or subsidies, for clients of any age",
        "provider": {
          "@type": "Organization",
          "name": "New Age Home Care"
        },
        "serviceType": "Private Care"
      }
    ]
  },
  
  "specialCommitments": [
    {
      "@type": "Thing",
      "name": "24/7 Availability",
      "description": "Services available 24 hours a day, 7 days a week, 365 days a year with after-hours support"
    },
    {
      "@type": "Thing", 
      "name": "No Waiting List",
      "description": "Ability to implement care quickly when required with no waiting periods"
    },
    {
      "@type": "Thing",
      "name": "Real Person Support",
      "description": "Phone calls answered by real people, not automated systems"
    },
    {
      "@type": "Thing",
      "name": "Thoroughly Vetted Staff",
      "description": "All staff are thoroughly reference and criminal record checked with ongoing training"
    }
  ],
  
  "values": [
    "Dignity",
    "Choice", 
    "Confidence",
    "Respect",
    "Complete Personal Wellbeing"
  ],
  
  "mission": "Quality in-home care begins with respect. We strive to maintain the dignity and complete personal well being of our clients.",
  
  "targetAudience": [
    {
      "@type": "Audience",
      "name": "Aged and Frail Population"
    },
    {
      "@type": "Audience", 
      "name": "Disabled Population"
    },
    {
      "@type": "Audience",
      "name": "NDIS Participants" 
    },
    {
      "@type": "Audience",
      "name": "Home Care Package Recipients"
    },
    {
      "@type": "Audience",
      "name": "Private Care Clients"
    }
  ],
  
  "diversityPolicy": "We are not affiliated with any one cultural, religious or interest group. Everyone is welcome.",
  
  "qualityAssurance": "Professional, highly trained staff who truly care. Staff are big-hearted, knowledgeable and skilled with ongoing training and professional development."
}