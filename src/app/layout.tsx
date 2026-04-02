import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "극동계전 | KUKDONG SYSTEM - LS PLC & 미쓰비시 PLC 자동화 솔루션 전문",
  description: "극동계전(KUKDONG SYSTEM)은 LS PLC, LS 인버터, 미쓰비시 PLC, 미쓰비시 인버터 등 글로벌 표준 제품을 바탕으로 최적의 자동화 솔루션을 제공하는 스마트 팩토리 설계 전문 기업입니다.",
  keywords: [
    "극동계전", "KUKDONG SYSTEM", "공장자동화", "자동제어", "PLC 설계", "HMI 제작", "SCADA 전문가", 
    "LS PLC", "LS Inverter", "LS 인버터", "Mitsubishi PLC", "Mitsubishi Inverter", "미쓰비시 PLC", "미쓰비시 인버터",
    "스마트팩토리 솔루션", "정밀제어시스템", "Industrial Automation", "Smart Factory Service"
  ],
  openGraph: {
    title: "극동계전 | KUKDONG SYSTEM - 공장자동화 및 PLC 제어 전문",
    description: "LS 및 미쓰비시 PLC/인버터 기반의 신뢰할 수 있는 자동화 파트너",
    images: ["/images/hero.png"],
    type: "website",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "https://kukdongsystem.vercel.app",
  },
  verification: {
    google: "PB7bHtg4899qkT-vyNjA3flc7D8nRf-MCUhfBxb5Y5Q",
    other: {
      "naver-site-verification": "ac976e7548fb3af71dec5abc0a9e92d2866f7b2d",
    }
  },
};

import { LanguageProvider } from '@/contexts/LanguageContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "극동계전 (KUKDONG SYSTEM)",
    "image": "https://kukdongsystem.vercel.app/images/hero.png",
    "@id": "https://kukdongsystem.vercel.app",
    "url": "https://kukdongsystem.vercel.app",
    "telephone": "+82-31-492-0895",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "326 Sandan-ro, Bldg 19-104",
      "addressLocality": "Ansan-si, Danwon-gu",
      "addressRegion": "Gyeonggi-do",
      "postalCode": "15426",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.3217,
      "longitude": 126.8309
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://kukdongsystem.vercel.app"
    ],
    "priceRange": "$$",
    "description": "LS PLC, Mitsubishi PLC, LS Inverter, Mitsubishi Inverter specialist for factory automation and smart factory solutions.",
    "providesService": [
      "PLC Programming",
      "HMI Design",
      "SCADA System Integration",
      "Inverter & Servo Control",
      "LS PLC Control System",
      "Mitsubishi PLC Automation"
    ]
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
