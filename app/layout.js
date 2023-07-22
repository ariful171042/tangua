import Navber from "@/components/Navber";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const noto = Noto_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "টাঙ্গুয়ার ভাসমান বাড়ি",
  description: "টাঙ্গুয়ার ভাসমান বাড়ি",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
