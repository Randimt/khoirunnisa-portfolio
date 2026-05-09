import type { Metadata } from "next";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khoirunnisa — Biomedical Engineering Portfolio",
  description:
    "Khoirunnisa is a Biomedical Engineering graduate from Telkom University focused on intelligent healthcare systems, biomedical instrumentation, IoT, machine learning, and signal processing.",
  keywords: [
    "Khoirunnisa",
    "Biomedical Engineering",
    "Telkom University",
    "Biomedical Instrumentation",
    "IoT Healthcare",
    "Signal Processing",
    "Machine Learning",
    "Medical Equipment Tracking",
    "Intelligent Healthcare Systems",
    "Future Medical Technology",
    "Biomedical Portfolio",
  ],
  authors: [{ name: "Khoirunnisa" }],
  creator: "Khoirunnisa",
  metadataBase: new URL("https://khoirunnisa-portfolio.local"),
  openGraph: {
    title: "Khoirunnisa — Futuristic Biomedical Engineering Portfolio",
    description:
      "Portfolio of a modern biomedical engineer working with intelligent healthcare systems, biomedical instrumentation, IoT technology, and future medical technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khoirunnisa — Futuristic Biomedical Engineering Portfolio",
    description:
      "Biomedical Engineering portfolio focused on intelligent healthcare systems, instrumentation, IoT, signal processing, and future medical technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
