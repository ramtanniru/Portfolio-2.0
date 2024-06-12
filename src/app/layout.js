import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/Header";
import { ToasterContext } from "./context/ToasterContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Ram Tanniru",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-light-gradient dark:bg-dark-gradient ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
          <Header/>
          <ToasterContext/>
          {children}
          <Footer/>
          <ScrollToTop/>
        </ThemeProvider>
      </body>
    </html>
  );
}
