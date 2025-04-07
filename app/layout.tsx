import type { Metadata } from "next";
import { MedievalSharp, Nunito } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
     title: "ReducioPDF",
     description:
          "Reducio PDF is an AI-powered PDF summarizer that instantly condenses large documents into concise summaries. Extract key insights, save time, and boost productivity with this fast, accurate, and user-friendly tool. Ideal for students, researchers, and professionals.",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body
                    className={`${medievalSharp.variable} ${nunito.variable} antialiased`}
               >
                    {children}
               </body>
          </html>
     );
}
