import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mccaigs.ai"),
  title: {
    default: "McCaigs AI — Privacy-first AI for Education, Business, Innovation",
    template: "%s | McCaigs AI",
  },
  description:
    "McCaigs AI, based in Edinburgh, Scotland, is the umbrella brand behind PupilsAI, TeachersAI, StudentsAI, StudentlyAI, AAXEOS and more — building privacy-first AI systems.",
  keywords: [
    "McCaigs AI",
    "PupilsAI",
    "TeachersAI",
    "StudentsAI",
    "StudentlyAI",
    "AAXEOS",
    "privacy-first AI",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "McCaigs AI",
    description:
      "Privacy-first AI for education, business automation and research.",
    url: "https://mccaigs.ai",
    siteName: "McCaigs AI",
    images: [{ url: "/hero-image.svg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "McCaigs AI",
    description:
      "Privacy-first AI for education, business automation and research.",
    images: ["/hero-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#15608F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins min-h-screen bg-background text-foreground antialiased`}> 
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="container-wide py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
