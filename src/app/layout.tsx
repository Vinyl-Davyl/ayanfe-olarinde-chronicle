import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrolling from "./provider/lenis";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const saolDisplay = localFont({
  src: "./fonts/SaolDisplay-Regular.woff",
  variable: "--font-saol-display",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ayanfe Olarinde Chronicle",
  description: "Paintings bringing age-old Yoruba folklore tales to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${saolDisplay.variable} antialiased`}>
        <div className="hidden lg:block">
          <SmoothScrolling>{children}</SmoothScrolling>
        </div>
        <div className="bg-[#434343] h-screen grid place-items-center lg:hidden">
          <div className="space-y-1 px-5">
            <h1
              className="text-6xl font-semibold"
              style={{
                fontFamily: "SaolDisplay",
              }}
            >
              Welcome!
            </h1>
            <p className="text-white/65 uppercase">
              For the best experience, please view this site on a larger screen.
            </p>
            <p className="text-white/65 uppercase">
              Unfortunately, it&apos;s not optimized for smaller devices yet, but stay tuned for updates!
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
