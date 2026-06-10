import Link from 'next/link';
import Image from 'next/image';

export default function SMSPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
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
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
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
                <Link href="/sms" className="text-gray-900 hover:text-[#d364a4] px-3 py-2 rounded-md text-sm font-medium">
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

      {/* Header */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">SMS Policy</h1>
          <p className="text-lg text-gray-600">
            Last Updated: December 30, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <p className="text-gray-600 mb-8">
            This SMS Policy describes how BWO Verify uses SMS (text messaging) to communicate with users of our platform. This policy is incorporated into and forms part of our{' '}
            <Link href="/terms" className="text-[#d364a4] hover:text-[#c24d93] font-medium">Terms of Service</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Scope of SMS Use</h2>
          <p className="text-gray-600 mb-6">
            BWO Verify only uses SMS to send alert-related text messages to users within their portal. SMS messages are limited strictly to alerts directly triggered by account activity, such as account status updates and account-related alerts. No other use of SMS is permitted under this Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. No Marketing SMS</h2>
          <p className="text-gray-600 mb-6">
            BWO Verify does not send promotional, marketing, or advertising SMS messages to users. All SMS communications sent by BWO Verify are alert-related text messages triggered by account-related events or user-initiated actions within the portal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Opt-Out</h2>
          <p className="text-gray-600 mb-6">
            Users may opt out of non-essential SMS notifications at any time by updating their notification preferences within their account portal or by replying <strong>STOP</strong> to any SMS message. Please note that opting out of certain transactional notifications (such as OTPs or security alerts) may limit your ability to access or use certain features of the Service.
          </p>
          <p className="text-gray-600 mb-6">
            To re-enable SMS notifications after opting out, reply <strong>START</strong> to any previous SMS from BWO Verify, or update your preferences in your account portal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Message Frequency</h2>
          <p className="text-gray-600 mb-6">
            Message frequency varies based on account activity. You will only receive SMS messages when account-related events occur that require a notification or alert. BWO Verify does not send recurring scheduled SMS messages.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Message & Data Rates</h2>
          <p className="text-gray-600 mb-6">
            Standard message and data rates may apply depending on your mobile carrier and plan. BWO Verify is not responsible for any charges incurred from your mobile carrier related to SMS messages sent by our Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Supported Carriers</h2>
          <p className="text-gray-600 mb-6">
            BWO Verify SMS messages are delivered via carrier-compliant 10DLC (10-Digit Long Code) infrastructure. SMS delivery is supported across all major U.S. carriers. Delivery times may vary by carrier and network conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Help & Support</h2>
          <p className="text-gray-600 mb-6">
            For help with SMS notifications, reply <strong>HELP</strong> to any SMS message from BWO Verify, or contact our support team directly:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@bwoverify.com" className="text-[#d364a4] hover:text-[#c24d93]">support@bwoverify.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> <a href="tel:+18444353969" className="text-[#d364a4] hover:text-[#c24d93]">(844) 435-3969</a></p>
            <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="text-[#d364a4] hover:text-[#c24d93]">https://bwoverify.com</a></p>
          </div>

          <p className="text-gray-600 mb-6">
            For full details on how we handle your data, please review our{' '}
            <Link href="/privacy" className="text-[#d364a4] hover:text-[#c24d93] font-medium">Privacy Policy</Link>{' '}
            and{' '}
            <Link href="/terms" className="text-[#d364a4] hover:text-[#c24d93] font-medium">Terms of Service</Link>.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b3a41] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BWO Verify</h3>
              <p className="text-gray-400">
                Carrier-compliant SMS verification for businesses.
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
                href="https://share.google/EAXcnRMGdAAxZKiTu"
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
