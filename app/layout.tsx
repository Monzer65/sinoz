import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { baseUrl } from "@/lib/utils";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-Regular.woff2",
  variable: "--font-vazirmatn-regular",
  weight: "400, 700",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "سینوز | محصولات آرایشی و بهداشتی",
    template: `%s | سینوز`,
    absolute: "سینوز | زیبایی طبیعی با محصولات مراقبت از پوست",
  },
  description:
    "با سینوز، زیبایی طبیعی خود را نمایان کنید. محصولات مراقبت از پوست و آرایشی با کیفیت، ترکیبی از طبیعت و علم برای پوست سالم و درخشان.",
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: "سینوز | لوازم آرایشی و مراقبت از پوست",
    description:
      "با سینوز، زیبایی طبیعی خود را نمایان کنید. محصولات با فرمولاسیون طبیعی و مورد اعتماد میلیون‌ها نفر.",
    url: baseUrl,
    siteName: "سینوز",
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "سینوز | زیبایی طبیعی با محصولات مراقبت از پوست",
      },
    ],
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "سینوز | لوازم آرایشی و بهداشتی",
    description: "زیبایی طبیعی را با محصولات مراقبت از پوست سینوز تجربه کنید.",
    site: "@sinoziran", // replace with actual handle if available
    creator: "@sinoziran", // replace with actual handle if available
    images: [`${baseUrl}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} font-[family-name:var(--font-vazirmatn-regular)] antialiased`}
      >
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
