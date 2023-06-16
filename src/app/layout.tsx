import "./globals.css";
import { Mitr } from "next/font/google";
import Header from "./components/header/Header";

// import Footer from "./components/footer/footer";

const mitr = Mitr({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "",
  description: "Generated by create next app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mitr.className}>
        <Header />

        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
