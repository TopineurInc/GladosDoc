import "@/app/global.css";
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import { Sora } from 'next/font/google';
import { Metadata } from 'next'
import { Body } from '@/app/layout.client';

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/topineur_logo.png',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={sora.className} suppressHydrationWarning>
      <Body>
        <RootProvider>
          {children}
        </RootProvider>
      </Body>
    </html>
  );
}
