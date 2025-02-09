import "./globals.css";

import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { Providers } from "./providers";
import Header from "./components/Header";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
