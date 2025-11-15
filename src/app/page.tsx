'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Zap,
  Send,
  Code2,
  Layers,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Github,
  Globe,
  Settings,
  FileJson,
  Terminal,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/landing/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <Navbar />

      {/* Hero Section */}
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
              <Button size="lg" asChild className="text-lg">
                <Link href="/tool">
                  <Rocket className="h-5 w-5 mr-2" />
                  Launch Tool
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#demo">
                  <Send className="h-5 w-5 mr-2" />
                  View Demo
                </a>
              </Button>
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

      {/* Problem Statement */}
      <section className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
              Why Mini Postman?
            </h2>
            <p className="text-lg text-zinc-400">
              Testing APIs shouldn&apos;t require heavy desktop apps or complex setups
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Too Slow',
                description: 'Heavy desktop apps take forever to load and consume resources',
              },
              {
                icon: Settings,
                title: 'Too Complex',
                description: 'Overwhelming interfaces with features you never use',
              },
              {
                icon: Globe,
                title: 'Not Accessible',
                description: 'Need to install software on every machine you work on',
              },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                  <problem.icon className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold text-zinc-50 mb-2">{problem.title}</h3>
                  <p className="text-zinc-400">{problem.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-zinc-400">
              Powerful features in a clean, intuitive interface
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Send,
                title: 'All HTTP Methods',
                description: 'Support for GET, POST, PUT, DELETE, PATCH, HEAD, and OPTIONS',
              },
              {
                icon: Code2,
                title: 'Custom Headers',
                description: 'Add, edit, and toggle custom request headers with ease',
              },
              {
                icon: FileJson,
                title: 'JSON Editor',
                description: 'Built-in JSON validation and formatting for request bodies',
              },
              {
                icon: Layers,
                title: 'Response Viewer',
                description: 'Tabbed interface for body, headers, and raw response data',
              },
              {
                icon: Clock,
                title: 'Request History',
                description: 'Automatically saves your last 10 requests for quick access',
              },
              {
                icon: Terminal,
                title: 'Keyboard Shortcuts',
                description: 'Ctrl+Enter to send, Ctrl+K to focus URL bar',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-zinc-50 mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-zinc-400">
              From URL to response in seconds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Enter URL', description: 'Type or paste your API endpoint' },
              { step: '02', title: 'Configure', description: 'Add headers and body if needed' },
              { step: '03', title: 'Send Request', description: 'Click send or press Ctrl+Enter' },
              { step: '04', title: 'View Response', description: 'See formatted JSON and headers' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-linear-to-r from-primary/50 to-transparent" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-4">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-50 mb-2">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
              Built with Modern Tools
            </h2>
            <p className="text-lg text-zinc-400">
              Powered by the latest web technologies
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              'Next.js 16',
              'React 19',
              'TypeScript',
              'Tailwind CSS',
              'shadcn/ui',
              'Motion',
              'Axios',
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Badge variant="outline" className="px-6 py-3 text-base border-zinc-700 hover:border-primary transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-zinc-400">
              Whether you&apos;re learning or building production apps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Testing Public APIs',
                description: 'Quickly test and explore public REST APIs',
                icon: Globe,
              },
              {
                title: 'Debugging Endpoints',
                description: 'Debug your own API endpoints during development',
                icon: Code2,
              },
              {
                title: 'Learning HTTP',
                description: 'Understand how HTTP requests and responses work',
                icon: Sparkles,
              },
              {
                title: 'Quick API Checks',
                description: 'Verify API responses without complex setup',
                icon: CheckCircle2,
              },
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 bg-zinc-900/50 border-zinc-800 h-full">
                  <useCase.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-zinc-50 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-zinc-400">{useCase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="p-12 bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-4">
                Start Testing APIs Now
              </h2>
              <p className="text-lg text-zinc-400 mb-8">
                No installation required. Just open and start testing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/tool">
                    <Rocket className="h-5 w-5 mr-2" />
                    Launch Tool
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    Star on GitHub
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br from-primary to-primary/50">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-zinc-50">Mini Postman</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-50 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <Link href="/tool" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
                Launch Tool
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              © 2025 Mini Postman. Built with ❤️ using Next.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
