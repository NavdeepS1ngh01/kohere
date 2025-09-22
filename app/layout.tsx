import "./globals.css";

import { Patrick_Hand } from 'next/font/google';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

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
      <body>
        <Theme>
        {children}
        </Theme>
        </body>
    </html>
  );
}
