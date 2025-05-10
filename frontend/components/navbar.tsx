"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-red-600">BLOOD CONNECT</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-8 items-center">
          <Link href="/" className="text-sm font-medium hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="/blood-bank" className="text-sm font-medium hover:text-red-600 transition-colors">
            Blood Bank
          </Link>
          <Link href="/find-donor" className="text-sm font-medium hover:text-red-600 transition-colors">
            Find Donor
          </Link>
          <Link href="/donations" className="text-sm font-medium hover:text-red-600 transition-colors">
            Donations
          </Link>
          <Link href="/request-blood" className="text-sm font-medium hover:text-red-600 transition-colors">
            Request Blood
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-red-600 transition-colors">
            About Us
          </Link>
          <Button asChild variant="outline" className="ml-4">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="ml-2 bg-red-600 hover:bg-red-700">
            <Link href="/register">Sign Up</Link>
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                className="py-2 text-sm font-medium hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/blood-bank"
                className="py-2 text-sm font-medium hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Blood Bank
              </Link>
              <Link
                href="/find-donor"
                className="py-2 text-sm font-medium hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Find Donor
              </Link>
              <Link
                href="/donations"
                className="py-2 text-sm font-medium hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Donations
              </Link>
              <Link
                href="/request-blood"
                className="py-2 text-sm font-medium hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                Request Blood
              </Link>
              <Link
                href="/about"
                className="py-2 text-sm font-medium hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/login" onClick={toggleMenu}>
                    Login
                  </Link>
                </Button>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/register" onClick={toggleMenu}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
