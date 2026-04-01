import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "극동계전 | KUKDONG SYSTEM - 공장자동화 & 자동제어 솔루션 전문 기업",
  description: "극동계전(KUKDONG SYSTEM)은 PLC, HMI, SCADA 설계 및 제작 전문 기업입니다. 스마트 팩토리 솔루션부터 정밀 제어 시스템까지 15년 이상의 풍부한 노하우로 최적의 자동화 솔루션을 제공합니다.",
  keywords: ["극동계전", "KUKDONG SYSTEM", "공장자동화", "자동제어", "PLC 설계", "HMI 제작", "SCADA 전문가", "스마트팩토리 솔루션", "정밀제어시스템"],
  openGraph: {
    title: "극동계전 | KUKDONG SYSTEM - 공장자동화 전문 기업",
    description: "신뢰와 기술력으로 보답하는 정밀 제어 자동화 시스템 구축 파트너",
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
  return (
    <html lang="ko">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
