
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon, CubeTransparentIcon, EnvelopeIcon, TruckIcon } from '@heroicons/react/24/outline';

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
          <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

// Define a proper type for TikTok tracking object
interface TikTokTrackingObject {
  track: (event: string, parameters?: Record<string, unknown>) => void;
}

declare const ttq: TikTokTrackingObject;

const ThankYouPage = () => {
  useEffect(() => {
    if (typeof ttq !== 'undefined') {
      ttq.track('CompletePayment');
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto animate-pulse" />
            <h1 className="text-4xl font-extrabold text-gray-900 mt-4">Thank You for Your Order!</h1>
            <p className="text-lg text-gray-600 mt-2">Your purchase was successful and is now being processed.</p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-8 w-8 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Order Confirmation</h3>
                  <p className="text-gray-600">You will receive an email confirmation shortly with your order details.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CubeTransparentIcon className="h-8 w-8 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Processing</h3>
                  <p className="text-gray-600">Our team is preparing your order for shipment. This usually takes 1-2 business days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <TruckIcon className="h-8 w-8 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Shipping</h3>
                  <p className="text-gray-600">We&apos;ll send you an email once your order ships. You won&apos;t miss it!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
