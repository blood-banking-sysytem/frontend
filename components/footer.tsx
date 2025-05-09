import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-600">BLOOD CONNECT</h3>
            <p className="text-sm text-gray-600">
              Connecting blood donors with those in need, saving lives one donation at a time.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blood-bank" className="text-gray-600 hover:text-red-600 transition-colors">
                  Blood Bank
                </Link>
              </li>
              <li>
                <Link href="/find-donor" className="text-gray-600 hover:text-red-600 transition-colors">
                  Find Donor
                </Link>
              </li>
              <li>
                <Link href="/request-blood" className="text-gray-600 hover:text-red-600 transition-colors">
                  Request Blood
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-red-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-red-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              Email:{" "}
              <a href="mailto:info@bloodconnect.org" className="hover:text-red-600 transition-colors">
                info@bloodconnect.org
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-red-600 transition-colors">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Blood Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
