import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1B3C53] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#456882] transition-colors">About</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#456882] transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-[#456882] transition-colors">Press</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-[#456882] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#456882] transition-colors">Returns</Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#456882] transition-colors">Shipping</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@esoko.com" className="hover:text-[#456882] transition-colors">support@esoko.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-[#456882] transition-colors">+1 (234) 567-890</a>
              </li>
              <li>
                <span className="text-white/80">123 Market Street, Suite 100, City, Country</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <Link href="https://facebook.com" aria-label="Facebook" className="p-2 rounded hover:text-[#456882] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="p-2 rounded hover:text-[#456882] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="p-2 rounded hover:text-[#456882] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded hover:text-[#456882] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Esoko. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-[#456882] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#456882] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
