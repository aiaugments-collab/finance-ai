import React from "react";
import { Button } from "./ui/button";

import Link from "next/link";
import { SignedOut, SignInButton } from "@clerk/nextjs";


const Header = () => {
  return (
    <SignedOut>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Finance AI
          </Link>

          {/* Navigation Links - Only show for signed out users */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
              How It Works
            </a>
          </div>

          {/* Action Buttons - Only show for signed out users */}
          <div className="flex items-center space-x-4">
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="border-gray-300 hover:border-blue-400 hover:text-blue-600">
                Login
              </Button>
            </SignInButton>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                Get Started
              </Button>
            </SignInButton>
          </div>
        </nav>
      </header>
    </SignedOut>
  );
};

export default Header;
