'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} MultiPrise. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-gray-900">Terms of Service</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Last Updated: July 28, 2025
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              MultiPrise (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and make purchases.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3 className="text-lg font-medium mt-4 mb-2">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Shipping and billing address</li>
              <li>Phone number</li>
              <li>Payment information (processed securely through our payment processor)</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4 mb-2">2.2 Non-Personal Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Browser type</li>
              <li>IP address</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent on our website</li>
              <li>Product preferences</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer service and support</li>
              <li>Sending order confirmations and updates</li>
              <li>Communicating with you about products, services, and promotions</li>
              <li>Improving our website, products, and services</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Preventing fraudulent transactions and monitoring against errors</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, pixel tags, and similar technologies to track activity on our website and to maintain certain information. Cookies are small data files stored on your device that help us improve our website and your experience.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
            <p>
              We may use third-party services to help us operate our business and our website or administer activities on our behalf, such as sending emails, processing payments, or analyzing website usage. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p>
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Stripe for payment processing</li>
              <li>TikTok Pixel for advertising and analytics</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
            </p>
            <p>
              If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to or restrict processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none pl-6 mb-4">
              <li>By email: privacy@multiprise.com</li>
              <li>By phone: +1 (800) 123-4567</li>
              <li>By mail: 123 Innovation Drive, San Francisco, CA 94103, United States</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
