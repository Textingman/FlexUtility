import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, Zap, CheckCircle, ShieldCheck, Bell, KeyRound, MessageSquare } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/volt-transactional-logo.png" 
                  alt="Volt Transactional" 
                  width={300} 
                  height={100}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/sms" className="text-gray-600 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
                  SMS Policy
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="/signup" className="bg-[#d364a4] text-white hover:bg-[#c24d93] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <span className="inline-block bg-pink-100 text-[#d364a4] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            About Volt Transactional
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl leading-tight">
            Who We Are
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            We&apos;re building the future of omnichannel transactional messaging — helping businesses verify customer identity, deliver account notifications, and send one-time passwords across every channel.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#d364a4] text-white text-lg font-semibold rounded-lg hover:bg-[#c24d93] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#d364a4] text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#d364a4]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                Volt Transactional was created to solve a critical problem: businesses need a reliable way to reach customers across every channel — SMS, email, voice, RCS, and push — for verification, notifications, and authentication.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We provide a simple, secure omnichannel messaging platform that acts as a trusted intermediary between businesses and their customers, ensuring every critical message gets delivered.
              </p>
              <p className="text-lg text-gray-600">
                Our goal is to make transactional messaging seamless, secure, and accessible for businesses of all sizes — on any channel, every time.
              </p>
            </div>
            <div className="bg-gradient-to-b from-pink-50 to-white border border-pink-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#d364a4]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Focused on Quality</h3>
                    <p className="text-gray-600">
                      Built from the ground up to meet industry standards and carrier compliance best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#d364a4]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
                    <p className="text-gray-600">
                      Your customers&apos; data is protected with enterprise-grade security measures across every channel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#d364a4]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">
                      Optimized routing delivers OTPs and notifications in under 2 seconds across SMS, email, and voice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">One Platform. Three Core Solutions.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything your business needs to verify, notify, and authenticate customers — delivered on the channel they prefer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-pink-50 to-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-[#d364a4]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Consumer Identity Verification</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Confirm who your customers are before they access sensitive services. Carrier-compliant verification workflows delivered via SMS, email, or voice.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Multi-channel verification flows</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Document link delivery</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Form abandonment re-engagement</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Multi-brand white-label support</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-pink-50 to-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Bell className="w-7 h-7 text-[#d364a4]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Transactional Account Notifications</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Keep customers informed in real time with automated, event-driven notifications triggered by account activity — sent via SMS, email, push, or voice.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Payment confirmations & receipts</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Account change alerts</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Appointment & booking reminders</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Shipping & delivery updates</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-pink-50 to-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <KeyRound className="w-7 h-7 text-[#d364a4]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">One-Time Passwords</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Deliver secure, time-sensitive OTPs for login, checkout, and high-risk actions — via SMS, email, or voice call. Fast delivery and full compliance built in.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Two-factor authentication (2FA)</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Secure checkout verification</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Password reset codes</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Sub-2-second delivery speeds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-600">
              Built for reliability, compliance, and scale — across every channel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-[#d364a4]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Carrier &amp; Channel Compliant
              </h3>
              <p className="text-gray-600 text-center">
                Fully 10DLC-registered and compliant across all channels — your messages reach customers, not spam folders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-[#d364a4]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Multi-Brand Support
              </h3>
              <p className="text-gray-600 text-center">
                Run multiple brands from a single account with customizable styling and white-label options on every channel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-12 h-12 text-[#d364a4]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Easy Integration
              </h3>
              <p className="text-gray-600 text-center">
                Simple URL-based integration with comprehensive documentation. Get up and running in minutes, not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#d364a4] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build on Volt Transactional?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join businesses that trust Volt Transactional for identity verification, account notifications, and one-time passwords — delivered on any channel, at any scale.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-[#d364a4] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b3a41] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Volt Transactional</h3>
              <p className="text-gray-400">
                Omnichannel transactional messaging for businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sms" className="text-gray-400 hover:text-white">
                    SMS Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@volttransactional.com
              </p>
              <p className="text-gray-400 mt-2">
                (844) 435-3969
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Address</h4>
              <p className="text-gray-400">
                2000 NE 42nd Ave PMB 1251<br />
                Portland, OR 97213<br />
                United States of America
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400">
            <p>&copy; 2025 Volt Transactional. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/120453967/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volt Transactional on LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://share.google/EAXcnRMGdAAxZKiTu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volt Transactional on Google"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
