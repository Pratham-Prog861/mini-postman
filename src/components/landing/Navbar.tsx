'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Menu, X, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-linear-to-br from-primary to-primary/50 group-hover:scale-110 transition-transform">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-zinc-50">Mini Postman</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
              How It Works
            </Link>
            <Link href="#tech-stack" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
              Tech Stack
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild>
              <Link href="/tool">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-zinc-800 py-4"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="#features"
                  className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="#tech-stack"
                  className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tech Stack
                </Link>
                <Button asChild className="w-full">
                  <Link href="/tool">Get Started</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
