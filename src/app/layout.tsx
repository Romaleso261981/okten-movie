"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import { Header } from "@/components";
import { MantineProvider, createTheme } from "@mantine/core";

import { Provider as StoreProvider } from "react-redux";
import { store } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider store={store}>
          <MantineProvider theme={theme}>
            <Header />
            {children}
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
