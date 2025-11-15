'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Home, ArrowRight, Shield, Eye, Database, Lock, Cookie, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold">Mini Postman</span>
            </Link>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/tool" className="flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground">
            Last updated: November 15, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Mini Postman. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we handle your information when you use our API testing tool.
            </p>
          </Card>

          {/* Data Collection */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Database className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold">Data We Collect</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Local Storage Data</h3>
                <p className="text-muted-foreground mb-2">
                  Mini Postman stores the following data locally in your browser:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>API request history (last 10 requests)</li>
                  <li>Request URLs, methods, headers, and body content</li>
                  <li>User preferences and settings</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3 bg-muted/50 p-3 rounded-lg">
                  <strong>Important:</strong> All data is stored locally in your browser&apos;s localStorage. 
                  We do not transmit, store, or have access to any of your data on our servers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Data We Do NOT Collect</h3>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Personal identification information</li>
                  <li>Email addresses or contact information</li>
                  <li>Payment or financial information</li>
                  <li>API keys, tokens, or authentication credentials</li>
                  <li>Analytics or tracking data</li>
                  <li>Cookies (except essential browser storage)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* How We Use Data */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Eye className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold">How We Use Your Data</h2>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              The data stored locally in your browser is used solely for:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Request History:</strong> Allowing you to quickly access and resend previous API requests
              </li>
              <li>
                <strong>User Experience:</strong> Maintaining your preferences and settings across sessions
              </li>
              <li>
                <strong>Functionality:</strong> Enabling the core features of the API testing tool
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Since all data is stored locally, only you have access to it. We cannot view, access, or use your data in any way.
            </p>
          </Card>

          {/* Data Security */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Your data security is important to us. Here&apos;s how we protect your information:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Local Storage Only:</strong> All data remains in your browser and never leaves your device
                </li>
                <li>
                  <strong>No Server Transmission:</strong> We do not send your API requests, headers, or body content to any server
                </li>
                <li>
                  <strong>HTTPS:</strong> Our application is served over HTTPS to ensure secure communication
                </li>
                <li>
                  <strong>No Third-Party Tracking:</strong> We do not use analytics, tracking pixels, or third-party services that collect data
                </li>
              </ul>
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Note:</strong> When you make API requests to external services, those requests are sent directly 
                  from your browser to the target API. We do not intercept or proxy these requests. Please review the 
                  privacy policies of the APIs you interact with.
                </p>
              </div>
            </div>
          </Card>

          {/* Cookies */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold">Cookies and Tracking</h2>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Mini Postman does not use cookies for tracking or analytics purposes. We only use:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>
                <strong>localStorage:</strong> Browser storage API to save your request history and preferences locally
              </li>
              <li>
                <strong>Essential Cookies:</strong> Only if required by the hosting platform for basic functionality
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not use third-party cookies, advertising cookies, or tracking cookies of any kind.
            </p>
          </Card>

          {/* Your Rights */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Rights and Control</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>You have complete control over your data:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Access:</strong> All your data is stored locally and accessible through your browser&apos;s developer tools
                </li>
                <li>
                  <strong>Delete:</strong> You can clear your request history at any time using the &quot;Clear All&quot; button in the app
                </li>
                <li>
                  <strong>Export:</strong> You can manually export your data from browser localStorage
                </li>
                <li>
                  <strong>Complete Removal:</strong> Clear your browser&apos;s localStorage or uninstall the app to remove all data
                </li>
              </ul>
              
              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p className="text-sm font-medium mb-2">To clear all Mini Postman data:</p>
                <ol className="list-decimal ml-6 space-y-1 text-sm">
                  <li>Open your browser&apos;s Developer Tools (F12)</li>
                  <li>Go to the Application or Storage tab</li>
                  <li>Find localStorage for the Mini Postman domain</li>
                  <li>Delete the entries or clear all site data</li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Third-Party Services */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            
            <p className="text-muted-foreground mb-4">
              Mini Postman is a client-side application that runs entirely in your browser. We do not integrate with 
              third-party analytics, advertising, or tracking services.
            </p>
            <p className="text-muted-foreground">
              When you make API requests to external services, you are directly communicating with those services. 
              Please refer to their respective privacy policies for information on how they handle your data.
            </p>
          </Card>

          {/* Children's Privacy */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
            
            <p className="text-muted-foreground">
              Mini Postman is intended for use by developers and technical professionals. We do not knowingly collect 
              data from children under 13 years of age. Since we don&apos;t collect any personal data, this is not a concern, 
              but we recommend parental supervision for younger users.
            </p>
          </Card>

          {/* Changes to Policy */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            
            <p className="text-muted-foreground mb-4">
              We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. 
              We will notify users of any material changes by updating the &quot;Last updated&quot; date at the top of this policy.
            </p>
            <p className="text-muted-foreground">
              We encourage you to review this policy periodically to stay informed about how we protect your privacy.
            </p>
          </Card>

          {/* Contact */}
          <Card className="p-6 bg-muted/50">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              If you have any questions or concerns about this privacy policy or our data practices, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Open an issue on our GitHub repository</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Visit: <a href="https://github.com/Pratham-Prog861/mini-postman" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">github.com/Pratham-Prog861/mini-postman</a></span>
              </li>
            </ul>
          </Card>

          {/* Summary */}
          <Card className="p-6 border-primary/50 bg-primary/5">
            <h2 className="text-xl font-bold mb-4">Privacy Summary</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="font-semibold text-green-600 dark:text-green-400">✓ What We Do</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Store data locally in your browser</li>
                  <li>• Respect your privacy completely</li>
                  <li>• Give you full control of your data</li>
                  <li>• Use HTTPS for security</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-red-600 dark:text-red-400">✗ What We Don&apos;t Do</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Collect personal information</li>
                  <li>• Track your activity</li>
                  <li>• Share data with third parties</li>
                  <li>• Use cookies for tracking</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Ready to start testing APIs?
          </p>
          <Button asChild size="lg">
            <Link href="/tool" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;