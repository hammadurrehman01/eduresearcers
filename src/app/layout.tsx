import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./(Home)/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";
import Footer from "./(Home)/Footer";
import Tawkto from "@/lib/Tawkto";
import Script from "next/script";
import FloatingContact from "@/components/FloatingContact";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


<Script
  id="cookieyes"
  strategy="afterInteractive"
  src="https://cdn-cookieyes.com/client_data/c3f2a6ffb44ef5ea670173cb/script.js"
/>;

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
      <Tawkto />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingContact/>
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
