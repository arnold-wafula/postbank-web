import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return(
        <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand / About */}
                <div>
                    <h2 className="text-white text-xl font-bold">Postbank</h2>
                    <p className="mt-3 text-sm leading-6">My bank, My choice, My future</p>
                </div>

                {/* Product Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                        <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                        <li><a href="/docs" className="hover:text-white">Documentation</a></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/careers" className="hover:text-white">Careers</a></li>
                        <li><a href="/blog" className="hover:text-white">Blog</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com" target="_blank" className="hover:text-white"><FaTwitter size={20} /></a>
                        <a href="https://facebook.com" target="_blank" className="hover:text-white"><FaFacebook size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-white"><FaLinkedin size={20} /></a>
                        <a href="https://instagram.com" target="_blank" className="hover:text-white"><FaInstagram size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} MyBank. All rights reserved.
            </div>
        </footer>
    )
}