'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Home, ArrowRight, FileText, Scale, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

const TermsOfService = () => {
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
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-muted-foreground">
            Last updated: November 15, 2025
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to Mini Postman! These Terms of Service (&quot;Terms&quot;) govern your use of our API testing tool 
              and services. By accessing or using Mini Postman, you agree to be bound by these Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you do not agree to these Terms, please do not use our service. We reserve the right to update 
              these Terms at any time, and your continued use constitutes acceptance of any changes.
            </p>
          </Card>

          {/* Service Description */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Zap className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold">Service Description</h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mini Postman is a free, open-source, browser-based API testing tool that allows you to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Send HTTP requests (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)</li>
                <li>Configure custom headers and request bodies</li>
                <li>View and analyze API responses</li>
                <li>Store request history locally in your browser</li>
                <li>Test and debug REST APIs</li>
              </ul>
              <p className="bg-muted/50 p-4 rounded-lg mt-4">
                <strong>Important:</strong> Mini Postman is a client-side application. All functionality runs in your 
                browser, and we do not store, process, or have access to your API requests or data.
              </p>
            </div>
          </Card>

          {/* Acceptable Use */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h2 className="text-2xl font-bold">Acceptable Use</h2>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">You agree to use Mini Postman only for lawful purposes and in accordance with these Terms. You may:</p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Test and debug your own APIs or publicly available APIs</li>
              <li>Use the tool for educational and learning purposes</li>
              <li>Integrate it into your development workflow</li>
              <li>Share and recommend the tool to others</li>
              <li>Contribute to the open-source project</li>
              <li>Use it for commercial projects and professional work</li>
            </ul>
          </Card>

          {/* Prohibited Use */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <XCircle className="h-6 w-6 text-destructive mt-1" />
              <div>
                <h2 className="text-2xl font-bold">Prohibited Use</h2>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">You agree NOT to use Mini Postman to:</p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Send unauthorized requests to APIs or services</li>
              <li>Attempt to gain unauthorized access to systems or networks</li>
              <li>Conduct security testing without proper authorization</li>
              <li>Perform denial-of-service attacks or flood APIs with requests</li>
              <li>Scrape, harvest, or collect data without permission</li>
              <li>Transmit malware, viruses, or malicious code</li>
              <li>Impersonate others or misrepresent your identity</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Bypass rate limits or security measures of third-party APIs</li>
            </ul>
            
            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mt-4">
              <p className="text-sm font-medium text-destructive mb-2">
                <AlertTriangle className="inline h-4 w-4 mr-1" />
                Important Notice
              </p>
              <p className="text-sm text-muted-foreground">
                You are solely responsible for ensuring you have proper authorization to interact with any APIs 
                you test. Always respect API terms of service, rate limits, and authentication requirements.
              </p>
            </div>
          </Card>

          {/* User Responsibilities */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Responsibilities</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">API Credentials</h3>
                <p>
                  You are responsible for keeping your API keys, tokens, and credentials secure. Mini Postman 
                  stores data locally in your browser, but you should:
                </p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Never share your API credentials publicly</li>
                  <li>Use environment-specific credentials for testing</li>
                  <li>Rotate credentials if they may have been compromised</li>
                  <li>Clear your browser history if using a shared computer</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Third-Party APIs</h3>
                <p>
                  When using Mini Postman to interact with third-party APIs, you must:
                </p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Comply with the terms of service of those APIs</li>
                  <li>Respect rate limits and usage quotas</li>
                  <li>Obtain necessary permissions and authorizations</li>
                  <li>Handle sensitive data according to applicable regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Data Management</h3>
                <p>
                  Since data is stored locally in your browser:
                </p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>You are responsible for backing up important requests</li>
                  <li>Clear sensitive data from history when appropriate</li>
                  <li>Understand that clearing browser data will delete your history</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Scale className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-2xl font-bold">Intellectual Property</h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Open Source License</h3>
                <p>
                  Mini Postman is open-source software released under the MIT License. You are free to:
                </p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Use the software for any purpose</li>
                  <li>Modify and distribute the source code</li>
                  <li>Include it in commercial projects</li>
                  <li>Create derivative works</li>
                </ul>
                <p className="mt-3 text-sm bg-muted/50 p-3 rounded-lg">
                  The software is provided &quot;as is&quot;, without warranty of any kind. See the LICENSE file 
                  in the repository for full details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Trademarks</h3>
                <p>
                  &quot;Mini Postman&quot; and associated logos are trademarks. While you may use the software freely, 
                  please do not use our trademarks in a way that suggests endorsement without permission.
                </p>
              </div>
            </div>
          </Card>

          {/* Disclaimers */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Disclaimers and Limitations</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">No Warranty</h3>
                <p>
                  Mini Postman is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind, 
                  either express or implied, including but not limited to:
                </p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Merchantability or fitness for a particular purpose</li>
                  <li>Accuracy, reliability, or completeness</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security or freedom from viruses</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Limitation of Liability</h3>
                <p className="mb-2">
                  To the maximum extent permitted by law, we shall not be liable for any:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Indirect, incidental, special, or consequential damages</li>
                  <li>Loss of data, profits, or business opportunities</li>
                  <li>Damages resulting from your use or inability to use the service</li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>Issues arising from third-party APIs or services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Third-Party Services</h3>
                <p>
                  Mini Postman allows you to interact with third-party APIs. We are not responsible for:
                </p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>The availability, content, or policies of third-party services</li>
                  <li>Any damages or losses caused by third-party APIs</li>
                  <li>CORS errors or other technical limitations</li>
                  <li>Changes to third-party API specifications</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Privacy */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Privacy and Data</h2>
            
            <p className="text-muted-foreground mb-4">
              Your privacy is important to us. Please review our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> to 
              understand how we handle data.
            </p>
            <p className="text-muted-foreground">
              Key points:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground mt-2">
              <li>All data is stored locally in your browser</li>
              <li>We do not collect, store, or transmit your data</li>
              <li>No tracking, analytics, or third-party services</li>
              <li>You have complete control over your data</li>
            </ul>
          </Card>

          {/* Modifications */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Modifications to Service and Terms</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Service Changes</h3>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of Mini Postman at any time 
                  without notice. We are not liable for any modification, suspension, or discontinuation of the service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Terms Updates</h3>
                <p>
                  We may update these Terms from time to time. Changes will be effective immediately upon posting 
                  with an updated &quot;Last updated&quot; date. Your continued use of Mini Postman after changes 
                  constitutes acceptance of the new Terms.
                </p>
              </div>
            </div>
          </Card>

          {/* Termination */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            
            <p className="text-muted-foreground mb-4">
              You may stop using Mini Postman at any time. Since the service runs entirely in your browser:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Simply close the application to stop using it</li>
              <li>Clear your browser&apos;s localStorage to remove all data</li>
              <li>No account deletion or formal termination process is required</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We reserve the right to refuse service to anyone for any reason at any time, though as an open-source 
              tool, you can always run your own instance.
            </p>
          </Card>

          {/* Governing Law */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Governing Law and Disputes</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, without regard 
                to conflict of law principles.
              </p>
              <p>
                Any disputes arising from these Terms or your use of Mini Postman should first be addressed through 
                informal communication. For open-source related issues, please use our GitHub repository.
              </p>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-6 bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            
            <p className="text-muted-foreground mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>GitHub: <a href="https://github.com/Pratham-Prog861/mini-postman" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">github.com/Pratham-Prog861/mini-postman</a></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>Open an issue for questions or concerns</span>
              </li>
            </ul>
          </Card>

          {/* Summary */}
          <Card className="p-6 border-primary/50 bg-primary/5">
            <h2 className="text-xl font-bold mb-4">Terms Summary</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">In simple terms:</strong> Mini Postman is a free tool for testing APIs. 
                Use it responsibly and legally. Don&apos;t abuse APIs or violate their terms. We provide the tool as-is 
                without warranties. Your data stays in your browser. We&apos;re not responsible for how you use it or 
                issues with third-party APIs.
              </p>
              <p className="text-xs">
                This summary is for convenience only and does not replace the full Terms above.
              </p>
            </div>
          </Card>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              By using Mini Postman, you agree to these terms.
            </p>
            <Button asChild>
              <Link href="/tool" className="flex items-center gap-2">
                Start Testing APIs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
