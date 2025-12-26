import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Portfolio",
  description: "Muhammad Ibrahim Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
