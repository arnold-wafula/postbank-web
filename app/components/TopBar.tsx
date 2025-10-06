import { Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full">
      {/* Topbar main */}
      <div className="bg-[#1873b7] text-white text-sm py-2 px-4 md:px-6 flex items-center justify-between">
        {/* Left: trust message */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-small truncate">
            My bank, My choice, My future
          </span>
        </div>

        {/* My bank, My choice, My future • Since 1910 */}

        {/* Right: desktop utilities */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+254700000000"
            className="flex items-center gap-2 hover:underline hover:text-[#FFD700] transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="whitespace-nowrap">+254 734 856353</span>
          </a>

          <a href="/news" className="hover:underline hover:text-[#FFD700] transition-colors">
            News
          </a>

          <a href="/careers" className="hover:underline hover:text-[#FFD700] transition-colors">
            Careers
          </a>

          {/* <a href="/contact" className="hover:underline hover:text-[#FFD700] transition-colors">
            Contact Us
          </a> */}

          <a href="/tenders" className="hover:underline hover:text-[#FFD700] transition-colors">
            Tenders
          </a>

          {/* Social icons) */}
          <div className="flex items-center gap-2 ml-2">
            <a href="https://www.facebook.com/PostbankKe/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors duration-200">
                <FaFacebookF size={16} />
            </a>
            
            <a href="https://x.com/Postbank1" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors duration-200">
                <FaTwitter size={16} />
            </a>

            <a href="https://www.instagram.com/postbankkenya/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors duration-200">
                <FaInstagram size={14} />
            </a>

            <a href="https://www.tiktok.com/@postbankke" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors duration-200">
                <FaTiktok size={16} />
            </a>
          </div>
        </div>

        {/* Mobile utilities: phone + compact "More" menu */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+254700000000"
            className="flex items-center gap-2 hover:underline hover:text-[#FFD700] transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="whitespace-nowrap">+254 700 000</span>
          </a>

          {/* Native details/summary is accessible and doesn't need JS */}
          <details className="relative">
            <summary
              className="list-none cursor-pointer px-3 py-1 bg-white/10 rounded text-white"
              aria-haspopup="true"
            >
              More ▾
            </summary>

            <div className="absolute right-0 mt-2 w-48 bg-white text-zinc-900 rounded shadow-lg p-3 z-50">
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a href="/news" className="block hover:text-[#FFD700]">News</a>
                </li>
                <li>
                  <a href="/careers" className="block hover:text-[#FFD700]">Careers</a>
                </li>
                <li>
                  <a href="/contact" className="block hover:text-[#FFD700]">Contact Us</a>
                </li>
                <li>
                  <a href="/tenders" className="block hover:text-[#FFD700]">Tenders</a>
                </li>
                <li className="pt-2 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <a href="https://www.facebook.com/PostbankKe/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors duration-200">
                        <FaFacebookF size={16} />
                    </a>
            
                    <a href="https://x.com/Postbank1" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors duration-200">
                        <FaTwitter size={16} />
                    </a>

                    <a href="https://www.instagram.com/postbankkenya/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors duration-200">
                        <FaInstagram size={14} />
                    </a>

                    <a href="https://www.tiktok.com/@postbankke" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors duration-200">
                        <FaTiktok size={16} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>

      {/* Red separator strip */}
      <div className="h-1 bg-[#ea373b]" />
    </div>
  );
}