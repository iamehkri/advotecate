import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Advotecate",
  description: "Advocacy platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        {/* Navigation Bar */}
        <nav className="bg-teal-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold">Advotecate</div>
            <div>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-teal-300">Dashboard</a></li>
                <li><a href="#" className="text-white hover:text-teal-300">Settings</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
