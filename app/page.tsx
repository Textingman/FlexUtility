import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Users, MessageSquare, ShieldCheck, Bell, KeyRound, ArrowRight, Mail, Phone, Smartphone } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/bwo-verify-logo-trimmed.png" 
                  alt="BWO Verify" 
                  width={300} 
                  height={100}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
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
            Omnichannel Transactional Messaging
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl leading-tight">
            Reach Customers
            <span className="block text-[#d364a4]">On Any Channel, Every Time</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            BWO Verify is a complete transactional messaging platform — delivering identity verification, account notifications, and one-time passwords across SMS, email, voice, and more. One platform, every channel, every critical moment.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#d364a4] text-white text-lg font-semibold rounded-lg hover:bg-[#c24d93] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-[#d364a4] text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#d364a4]"
            >
              Learn More
            </Link>
          </div>

          {/* Channel badges */}
          <div className="mt-12 flex justify-center flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm text-sm font-medium text-gray-700">
              <Smartphone className="w-4 h-4 text-[#d364a4]" /> SMS
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4 text-[#d364a4]" /> Email
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 text-[#d364a4]" /> Voice
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm text-sm font-medium text-gray-700">
              <MessageSquare className="w-4 h-4 text-[#d364a4]" /> RCS
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm text-sm font-medium text-gray-700">
              <Zap className="w-4 h-4 text-[#d364a4]" /> Push Notifications
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview — 3 Pillars */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">One Platform. Three Core Solutions.</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything your business needs to verify, notify, and authenticate customers — delivered on the channel they prefer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 — Identity Verification */}
            <div className="bg-gradient-to-b from-pink-50 to-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[#d364a4]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Consumer Identity Verification</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Confirm who your customers are before they access sensitive services. Carrier-compliant verification workflows delivered via SMS, email, or voice — reducing fraud and building trust at the point of entry.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Multi-channel verification flows</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Document link delivery</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Form abandonment re-engagement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Multi-brand white-label support</li>
              </ul>
            </div>

            {/* Pillar 2 — Account Notifications */}
            <div className="bg-gradient-to-b from-pink-50 to-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Bell className="w-7 h-7 text-[#d364a4]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transactional Account Notifications</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Keep customers informed in real time with automated, event-driven notifications triggered by account activity — sent via SMS, email, push, or voice. No manual effort required.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Payment confirmations & receipts</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Account change alerts</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Appointment & booking reminders</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Shipping & delivery updates</li>
              </ul>
            </div>

            {/* Pillar 3 — OTP */}
            <div className="bg-gradient-to-b from-pink-50 to-white border border-pink-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <KeyRound className="w-7 h-7 text-[#d364a4]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">One-Time Passwords</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deliver secure, time-sensitive OTPs for login, checkout, and high-risk actions — via SMS, email, or voice call. Fast delivery, high deliverability, and full compliance built in.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Two-factor authentication (2FA)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Secure checkout verification</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Password reset codes</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d364a4] flex-shrink-0" /> Sub-2-second delivery speeds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Meet Customers Where They Are</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t limit your reach to a single channel. BWO Verify delivers your messages across every major communication channel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Smartphone className="w-7 h-7 text-[#d364a4]" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">SMS</h3>
            <p className="text-sm text-gray-600">High open rates, instant delivery, carrier-compliant 10DLC infrastructure.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-[#d364a4]" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-sm text-gray-600">Transactional email delivery for receipts, alerts, and verification links.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-[#d364a4]" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Voice</h3>
            <p className="text-sm text-gray-600">Automated voice calls for OTP delivery and critical account alerts.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-7 h-7 text-[#d364a4]" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">RCS</h3>
            <p className="text-sm text-gray-600">Rich messaging with images, buttons, and branded sender profiles.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-[#d364a4]" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Push</h3>
            <p className="text-sm text-gray-600">In-app and web push notifications for real-time engagement.</p>
          </div>
        </div>
      </section>

      {/* Why BWO Verify */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose BWO Verify?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Built for reliability, compliance, and scale — across every channel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-[#d364a4]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Carrier & Channel Compliant
              </h3>
              <p className="text-gray-600 text-center">
                Fully 10DLC-registered and compliant across all channels — your messages reach customers, not spam folders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-[#d364a4]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Lightning Fast Delivery
              </h3>
              <p className="text-gray-600 text-center">
                Optimized routing delivers OTPs and notifications in under 2 seconds across SMS, email, and voice.
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
          </div>
        </div>
      </section>

      {/* Detailed Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Built for Every Use Case</h2>
          <p className="mt-4 text-xl text-gray-600">
            From onboarding to ongoing engagement — we cover the full customer lifecycle, on any channel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">

            <div className="flex gap-5">
              <div className="flex-shrink-0 bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                <ShieldCheck className="w-6 h-6 text-[#d364a4]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Identity Verification</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Confirm customer identity via SMS, email, or voice before granting access to your platform, services, or sensitive data.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                <MessageSquare className="w-6 h-6 text-[#d364a4]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Document Link Delivery</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Send document links for electronic signatures via SMS, email, or RCS. Conversion rates are significantly higher than traditional channels — customers act immediately.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                <Bell className="w-6 h-6 text-[#d364a4]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Account Notifications</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Trigger real-time alerts for payments, account changes, appointments, and more — delivered on the channel your customer prefers.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                <KeyRound className="w-6 h-6 text-[#d364a4]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">One-Time Passwords</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Secure logins, checkouts, and high-risk actions with time-sensitive OTPs delivered via SMS, email, or voice. Full 2FA support with high deliverability guaranteed.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                <ArrowRight className="w-6 h-6 text-[#d364a4]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Form Abandonment Recovery</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Re-engage customers who dropped off mid-form with automated follow-up messages across SMS, email, or push — designed to recapture interest and complete submissions.
                </p>
              </div>
            </div>

          </div>

          <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
            <Image 
              src="/Phoneimage.png" 
              alt="BWO Verify Solutions" 
              width={350} 
              height={350}
              className="w-auto h-auto object-contain max-w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#d364a4] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build on BWO Verify?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join businesses that trust BWO Verify for identity verification, account notifications, and one-time passwords — delivered on any channel, at any scale.
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
              <h3 className="text-xl font-bold mb-4">BWO Verify</h3>
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
                support@bwoverify.com
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
            <p>&copy; 2025 BWO Verify. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/120453967/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BWO Verify on LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.google.com/search?q=BWO+Verify"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BWO Verify on Google"
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
