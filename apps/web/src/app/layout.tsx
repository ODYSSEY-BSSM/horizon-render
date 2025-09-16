import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Horizon Render',
  description: 'NextJS web application for Horizon Render design system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
