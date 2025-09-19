import "./globals.css";

import { Patrick_Hand } from 'next/font/google';

const patrickHand = Patrick_Hand({ 
  subsets: ['latin'], 
  weight: '400' 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
