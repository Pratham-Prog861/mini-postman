import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is API Testing? A Complete Guide for Developers',
  description: 'Learn the fundamentals of API testing, why it matters, and how to get started with REST API testing.',
};

export default function WhatIsApiTestingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Documentation Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Mini Postman</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="hidden sm:inline">Home</span>
              </Link>
              <Link href="/tool" className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-2 rounded-md transition-colors">
                <span>Get Started</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span>What is API Testing?</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What is API Testing? A Complete Guide for Developers
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time>January 15, 2025</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            API testing is a crucial part of modern software development. Whether you're building a mobile app, 
            web application, or microservices architecture, understanding how to test APIs effectively can save 
            you countless hours of debugging and ensure your applications work reliably.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">What is an API?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            API stands for Application Programming Interface. It's a set of rules and protocols that allows 
            different software applications to communicate with each other. Think of it as a waiter in a restaurant: 
            you (the client) tell the waiter (the API) what you want, and the waiter brings your order from the 
            kitchen (the server).
          </p>

          <div className="bg-muted/50 border rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold mb-3">Real-World Example</h3>
            <p className="text-sm text-muted-foreground mb-3">
              When you use a weather app on your phone, the app doesn't store all the weather data. Instead, 
              it makes an API request to a weather service, which returns the current weather information.
            </p>
            <code className="block bg-background p-3 rounded text-sm">
              GET https://api.weather.com/v1/current?city=NewYork
            </code>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">What is API Testing?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            API testing is the process of verifying that an API works as expected. Unlike UI testing, which tests 
            the visual interface, API testing focuses on the business logic, data responses, and security of the 
            application at the API level.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Key Aspects of API Testing</h3>
          <div className="space-y-4 mb-8">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">1. Functionality Testing</h4>
              <p className="text-sm text-muted-foreground">
                Verify that the API performs its intended function correctly. Does it return the right data? 
                Does it handle different inputs properly?
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">2. Reliability Testing</h4>
              <p className="text-sm text-muted-foreground">
                Ensure the API can handle expected load and continues to function under stress. Can it handle 
                1000 requests per second? What happens when the database is slow?
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">3. Security Testing</h4>
              <p className="text-sm text-muted-foreground">
                Check for vulnerabilities like SQL injection, unauthorized access, and data leaks. Is authentication 
                working? Are sensitive endpoints protected?
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">4. Performance Testing</h4>
              <p className="text-sm text-muted-foreground">
                Measure response times and identify bottlenecks. How fast does the API respond? Where are the 
                performance issues?
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Why is API Testing Important?</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <div>
                <strong>Early Bug Detection:</strong> Find issues before they reach production
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <div>
                <strong>Faster Development:</strong> Test APIs independently without waiting for UI
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <div>
                <strong>Better Coverage:</strong> Test edge cases and error scenarios easily
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <div>
                <strong>Cost Effective:</strong> Cheaper to fix bugs at the API level than in production
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Types of API Testing</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Smoke Testing</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Quick tests to verify that the API is up and running. Think of it as a health check.
          </p>
          <div className="bg-muted p-4 rounded-lg mb-6">
            <code className="text-sm">GET /health → 200 OK</code>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Functional Testing</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Verify that each endpoint works correctly with valid inputs, invalid inputs, and edge cases.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Integration Testing</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Test how different APIs work together. Does the user API integrate properly with the payment API?
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">4. Load Testing</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Test how the API performs under heavy load. Can it handle Black Friday traffic?
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Getting Started with API Testing</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Understand the API</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Before testing, you need to understand:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-6 text-muted-foreground">
            <li>What endpoints are available?</li>
            <li>What HTTP methods does each endpoint support?</li>
            <li>What parameters are required?</li>
            <li>What response format to expect?</li>
            <li>What authentication is needed?</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Choose Your Tool</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Popular API testing tools include:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-6 text-muted-foreground">
            <li><strong>Mini Postman</strong> - Lightweight, browser-based, no installation</li>
            <li><strong>Postman</strong> - Feature-rich desktop application</li>
            <li><strong>cURL</strong> - Command-line tool for quick tests</li>
            <li><strong>Insomnia</strong> - Modern REST client</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: Write Test Cases</h3>
          <div className="bg-muted/50 border rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Example Test Case</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Test:</strong> Get user by ID
              </div>
              <div>
                <strong>Endpoint:</strong> <code className="bg-background px-2 py-1 rounded">GET /api/users/123</code>
              </div>
              <div>
                <strong>Expected:</strong> 200 OK with user data
              </div>
              <div>
                <strong>Verify:</strong> Response contains id, name, email fields
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Step 4: Test Different Scenarios</h3>
          <div className="space-y-3 mb-8">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <strong>Happy Path:</strong> Valid inputs, expected success
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <strong>Negative Testing:</strong> Invalid inputs, expected errors
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <strong>Edge Cases:</strong> Boundary values, empty data, special characters
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <strong>Security:</strong> Unauthorized access, SQL injection attempts
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Best Practices</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <strong>Test Early and Often:</strong> Don't wait until the end of development
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <strong>Automate Repetitive Tests:</strong> Save time with automation
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <strong>Test in Different Environments:</strong> Dev, staging, and production-like
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <div>
                <strong>Document Your Tests:</strong> Make them understandable for the team
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <div>
                <strong>Monitor in Production:</strong> Real-world testing never stops
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Try It Yourself</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Ready to start testing APIs? Try Mini Postman - a free, lightweight tool that runs in your browser. 
            No installation required, no signup needed. Perfect for beginners and experienced developers alike.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Start Testing APIs Now</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try our free API testing tool - no installation required
            </p>
            <Link 
              href="/tool"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Launch Mini Postman
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            API testing is an essential skill for modern developers. It helps you build more reliable applications, 
            catch bugs early, and deliver better software to your users. Start with simple tests, use the right 
            tools, and gradually build your testing expertise.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Remember: every API call is an opportunity to verify that your application works correctly. Happy testing!
          </p>
        </div>

        {/* Back to Blog */}
        <div className="mt-16 pt-8 border-t">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
