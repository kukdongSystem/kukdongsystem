import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "공장자동화 & 자동제어 솔루션 전문 기업 | PLC HMI SCADA",
  description: "PLC, HMI, SCADA 설계 및 제작, 서보 제어, PC 기반 제어, 스마트 팩토리 솔루션 전문 기업입니다. 15년 이상의 풍부한 실적과 노하우로 최적화된 자동화 공정을 구축해 드립니다.",
  keywords: ["공장자동화", "자동제어", "PLC", "HMI", "SCADA", "서보제어", "스마트팩토리", "제어반제작"],
  openGraph: {
    title: "공장자동화 & 자동제어 솔루션 전문 기업",
    description: "PLC HMI SCADA 정밀 제어 시스템 구축 전문",
    images: ["/images/hero.png"],
  }
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
