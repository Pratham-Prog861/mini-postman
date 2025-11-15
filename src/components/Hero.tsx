import React from 'react'
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Rocket, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc-800/20 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="h-3 w-3 mr-1" />
              Built with Next.js 16 & React 19
            </Badge>
            <h1 className="text-5xl md:text-7xl font-boldmb-6 bg-clip-text text-transparent bg-linear-to-r from-zinc-50 to-zinc-400">
              Test APIs Like a Pro
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              A lightweight, modern API testing tool built for developers who value speed and simplicity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild className="text-lg">
                  <Link href="/tool">
                    <Rocket className="h-5 w-5 mr-2" />
                    Launch Tool
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" asChild>
                  <a href="#features">
                    <Send className="h-5 w-5 mr-2" />
                    View Features
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent z-10" />
            <div className="rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-3 border-b border-zinc-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-zinc-500 ml-2">Mini Postman</span>
              </div>
              <div className="bg-zinc-900/30 p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-500 font-semibold">GET</span>
                  <span className="text-zinc-400">https://api.example.com/users</span>
                  <span className="ml-auto text-zinc-500">200 OK • 145ms</span>
                </div>
                <div className="text-zinc-400 space-y-1">
                  <div>{'{'}</div>
                  <div className="pl-4">
                    <span className="text-blue-400">&quot;status&quot;</span>: <span className="text-green-400">&quot;success&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">&quot;data&quot;</span>: [...]
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Hero