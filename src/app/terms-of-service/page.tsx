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

const TermsOfServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Last Updated: July 28, 2025
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to MultiPrise. These Terms of Service ("Terms") govern your use of our website and the purchase of products offered by MultiPrise ("we," "our," or "us").
            </p>
            <p>
              By accessing our website and/or purchasing our products, you agree to be bound by these Terms. If you do not agree to all the Terms, you must not access the website or purchase our products.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Use of Our Website</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">2.1 Eligibility</h3>
            <p>
              You must be at least 18 years old to use our website and purchase our products. By using our website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
            </p>
            
            <h3 className="text-lg font-medium mt-4 mb-2">2.2 Account Registration</h3>
            <p>
              You may need to create an account to access certain features of our website. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h3 className="text-lg font-medium mt-4 mb-2">2.3 Prohibited Activities</h3>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use our website in any way that violates any applicable laws or regulations</li>
              <li>Use our website to transmit or send unsolicited or unauthorized advertising or promotional materials</li>
              <li>Attempt to gain unauthorized access to our website, user accounts, or computer systems</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our website</li>
              <li>Use our website in a manner that could damage, disable, overburden, or impair it</li>
              <li>Use any robot, spider, or other automatic device to access our website</li>
              <li>Copy, modify, distribute, sell, or lease any part of our website without our permission</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Products and Orders</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">3.1 Product Information</h3>
            <p>
              We strive to provide accurate product descriptions, pricing, and availability information. However, we do not warrant that product descriptions or other content on our website are accurate, complete, reliable, current, or error-free.
            </p>
            
            <h3 className="text-lg font-medium mt-4 mb-2">3.2 Ordering</h3>
            <p>
              When you place an order, you are making an offer to purchase the products. We reserve the right to accept or decline your order for any reason, including but not limited to product availability, errors in product or pricing information, or problems with your payment method.
            </p>
            
            <h3 className="text-lg font-medium mt-4 mb-2">3.3 Pricing and Payment</h3>
            <p>
              All prices are displayed in US dollars and do not include taxes or shipping costs, which will be added at checkout. We reserve the right to change prices at any time without notice. Payment must be made at the time of order through our secure payment processor.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Shipping and Delivery</h2>
            <p>
              We ship to addresses within the United States and Canada. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by customs, weather conditions, or other factors beyond our control.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Returns and Refunds</h2>
            <p>
              You may return products within 30 days of delivery for a full refund if they are in their original condition and packaging. Shipping costs for returns are the responsibility of the customer unless the return is due to our error or a defective product.
            </p>
            <p>
              To initiate a return, please contact our customer service team at support@multiprise.com.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Product Warranty</h2>
            <p>
              Our products come with a 1-year limited warranty against manufacturing defects. This warranty does not cover damage caused by misuse, accidents, or normal wear and tear. To make a warranty claim, please contact our customer service team with proof of purchase.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is our property or the property of our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, distribute, or display any portion of our website without our prior written consent.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p>
              OUR WEBSITE AND PRODUCTS ARE PROVIDED "AS IS" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR WEBSITE OR PRODUCTS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE PRODUCT THAT IS THE SUBJECT OF THE CLAIM.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless MultiPrise and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your use of our website, violation of these Terms, or violation of any rights of a third party.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any legal action or proceeding arising out of or related to these Terms shall be brought exclusively in the federal or state courts located in San Francisco, California.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">12. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website after the posting of revised Terms means that you accept and agree to the changes.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none pl-6 mb-4">
              <li>By email: legal@multiprise.com</li>
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

export default TermsOfServicePage;
