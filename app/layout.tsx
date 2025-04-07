import type { Metadata } from "next";
import { MedievalSharp, Nunito, Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/nav/header";
import Footer from "@/components/footer/footer";

// Load fonts with CSS variable names
const medievalSharp = MedievalSharp({
     variable: "--font-medieval",
     subsets: ["latin"],
     weight: "400", // Only one weight available for Medieval Sharp
});

const nunito = Nunito({
     variable: "--font-nunito",
     subsets: ["latin"],
     weight: ["300", "400", "600", "700"], // Pick the weights you need
});

const inter = Inter({
     variable: "--font-inter",
     subsets: ["latin"],
     weight: ["300", "400", "500", "600", "700"],
});

const crimsonText = Crimson_Text({
     variable: "--font-crimson",
     subsets: ["latin"],
     weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
     title: "ReducioPDF",
     description:
          "Reducio PDF is an AI-powered PDF summarizer that instantly condenses large documents into concise summaries. Extract key insights, save time, and boost productivity with this fast, accurate, and user-friendly tool. Ideal for students, researchers, and professionals.",
     icons: {
          icon: "/favicon.ico",
     },
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body
                    className={`${medievalSharp.variable} ${nunito.variable} ${inter.variable} ${crimsonText.variable} antialiased`}
               >
                    <Header />
                    {children}
                    <Footer />
               </body>
          </html>
     );
}
