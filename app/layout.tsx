import { OverlayScrollbarsWrapper } from "@/components/overlay-scrollbars-wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saai Vignesh - Full Stack Developer",
  description:
    "Portfolio site for Saai Vignesh, Full Stack Developer with 7 years of experience in web development, AI applications, and cloud architecture.",
  keywords: [
    "Saai Vignesh",
    "full-stack developer",
    "web development",
    "React",
    "Angular",
    "Node.js",
    "NestJS",
    "Python",
    "AWS",
    "AI",
    "MongoDB",
    "PostgreSQL",
  ],
  authors: [{ name: "Saai Vignesh Premanand" }],
  creator: "Saai Vignesh Premanand",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Saai Vignesh - Full Stack Developer",
    description:
      "Full-stack developer with 7 years of experience building modern web applications, AI solutions, and cloud infrastructure.",
    siteName: "Saai Vignesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saai Vignesh - Full Stack Developer",
    description:
      "Full-stack developer with 7 years of experience building modern web applications",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          <OverlayScrollbarsWrapper>{children}</OverlayScrollbarsWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
