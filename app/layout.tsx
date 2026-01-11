import type { Metadata } from "next";
import {
  Lora,
  Merriweather,
  JetBrains_Mono,
  Atkinson_Hyperlegible,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

// Sans-serif for Portfolio mode
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

// Serif display for Newspaper headlines
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif-display",
});

// Serif body for Newspaper content
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-serif-body",
});

// Monospace for Terminal mode
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Prajas Naik",
  description: "Personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${atkinson.variable} ${lora.variable} ${merriweather.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
