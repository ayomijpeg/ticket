"use client";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar"; // handles search + icon

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/favicon.ico" // replace with /images/ticketmaster-logo.png if you add it
            alt="Ticketmaster"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold">Ticketmaster</span>
        </Link>

        {/* Middle: Search Bar */}
        <div className="flex-1 max-w-lg mx-6">
          <SearchBar />
        </div>

        {/* Right: Links */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/concerts" className="hover:text-blue-400">
            Concerts
          </Link>
          <Link href="/sports" className="hover:text-blue-400">
            Sports
          </Link>
          <Link href="/arts" className="hover:text-blue-400">
            Arts & Theater
          </Link>
          <Link href="/comedy" className="hover:text-blue-400">
            Comedy
          </Link>
          <Link href="/signin" className="hover:text-blue-400">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
