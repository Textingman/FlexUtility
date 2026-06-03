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
            BWO Verify only uses SMS to contact users about transactional account notifications and alerts within their portal. SMS messages are limited strictly to notifications directly triggered by account activity, such as account status updates and account-related alerts. No other use of SMS is permitted under this Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. No Marketing SMS</h2>
          <p className="text-gray-600 mb-6">
            BWO Verify does not send promotional, marketing, or advertising SMS messages to users. All SMS communications sent by BWO Verify are strictly transactional in nature and are triggered by account-related events or user-initiated actions within the portal.
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BWO Verify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
