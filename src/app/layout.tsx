import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./(Home)/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";
import Footer from "./(Home)/Footer";
import Tawkto from "@/lib/Tawkto";
import Script from "next/script";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Best Academic Assistance Team | Edu Researchers",
  description:
    "Our Academic Assistance Team at Edu Researchers provides professional academic support to help students succeed. Get high-quality academic assistance tailored to your needs",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        data-host="https://mmeanalytics.designstime.com/"
        data-dnt="false"
        src="https://mmeanalytics.designstime.com/js/script.js"
        id="ZwSg9rf6GA"
        async
        defer
      ></script>
      <Script
        id="cookieyes"
        strategy="afterInteractive"
        src="https://cdn-cookieyes.com/client_data/c3f2a6ffb44ef5ea670173cb/script.js"
      />

      <Tawkto />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
