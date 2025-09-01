import type { Metadata } from 'next';
import './globals.css';
import type React from 'react';

export const metadata: Metadata = {
  title: 'Horizon Render',
  description: 'NextJS web application for Horizon Render design system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
