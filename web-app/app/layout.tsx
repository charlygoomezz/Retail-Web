import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Outfit } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/sonner';

const outfit = Outfit({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Admin web-page',
  description: 'Landig page to buy products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <NextTopLoader color="#000" />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
