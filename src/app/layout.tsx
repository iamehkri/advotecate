import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

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
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full bg-[#EEFFFD] shadow-sm" style={{ minHeight: '8vh' }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4" style={{ minHeight: '8vh', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
            {/* Logo */}
            <div className="flex items-center min-w-[160px]" style={{ height: '10vh', paddingTop: '5px', paddingBottom: '5px' }}>
              <Image src="/logo.webp" alt="Advotecate Logo" width={0} height={0} style={{ height: '10vh', width: 'auto' }} sizes="(max-width: 768px) 120px, 160px" priority />
            </div>
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 min-w-[180px] justify-end">
              <button className="px-4 py-2 rounded font-semibold text-white bg-[#00C9A1] hover:bg-[#009e7c] transition shadow-sm">Sign In</button>
              <button className="px-4 py-2 rounded font-semibold text-white bg-[#00C9A1] hover:bg-[#009e7c] transition shadow-sm border border-[#00C9A1]">Register</button>
            </div>
          </div>
        </header>
        {/* Search Section */}
        <section className="w-full bg-[#00C9A1] py-3">
          <div className="max-w-2xl mx-auto flex items-center justify-center px-4">
            <input
              type="text"
              placeholder="Search Events, Candidates or Organizations..."
              className="flex-1 rounded-full px-6 py-2 text-base outline-none border border-gray-200 bg-white placeholder-gray-500 shadow-sm focus:border-[#00C9A1] focus:ring-2 focus:ring-[#00C9A1] transition"
              style={{ minWidth: 0 }}
            />
          </div>
        </section>
        <main>{children}</main>
        {/* Footer margin */}
        <div style={{ marginTop: '5vh' }}></div>
        {/* Footer */}
        <footer className="bg-[#00C9A1] text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
                <p>&copy; 2025 Advotecate Inc. All rights reserved.</p>
              </div>
              <div className="flex items-center space-x-4 w-full md:w-auto justify-center">
                <a href="#" className="text-white hover:text-[#fcb92c] transition-colors">About Us</a>
                <a href="#" className="text-white hover:text-[#fcb92c] transition-colors">Press</a>
                <a href="#" className="text-white hover:text-[#fcb92c] transition-colors">Careers</a>
                <a href="#" className="text-white hover:text-[#fcb92c] transition-colors">Privacy Policy</a>
              </div>
              <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
                <a href="#" aria-label="Facebook" className="transition-colors" style={{ color: "#EEFFFD" }}>
                  <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 hover:text-[#fcb92c]" />
                </a>
                <a href="#" aria-label="X" className="transition-colors" style={{ color: "#EEFFFD" }}>
                  <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 hover:text-[#fcb92c]" />
                </a>
                <a href="#" aria-label="Instagram" className="transition-colors" style={{ color: "#EEFFFD" }}>
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 hover:text-[#fcb92c]" />
                </a>
                <a href="#" aria-label="TikTok" className="transition-colors" style={{ color: "#EEFFFD" }}>
                  <FontAwesomeIcon icon={faTiktok} className="w-5 h-5 hover:text-[#fcb92c]" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

