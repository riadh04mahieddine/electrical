
'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-gray-900">Terms of Service</Link>
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

// Component that uses searchParams
const ThankYouContent = () => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Only trigger Purchase event if user is coming from a successful payment
    const paymentSuccess = searchParams.get('payment_success');
    const sessionId = searchParams.get('session_id');
    
    if (typeof ttq !== 'undefined' && paymentSuccess === 'true' && sessionId) {
      console.log('Triggering Purchase event with session ID:', sessionId);
      
      // Use the standard 'Purchase' event instead of 'CompletePayment'
      // Include value data for better conversion tracking
      // Rétablissement d'un événement d'achat complet pour garantir le déclenchement
      ttq.track('Purchase', {
        content_type: 'product',
        content_name: 'Rotative Extensible Power Strip',
        quantity: 1,
        currency: 'USD',
        value: 34.99,
        order_id: sessionId,
        contents: [{
          content_id: 'power_strip_001', // ID factice pour la structure
          content_type: 'product',
          content_name: 'Rotative Extensible Power Strip',
          quantity: 1,
          price: 34.99
        }]
      });
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col items-center mb-6">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircleIcon className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You for Your Order!</h1>
            <p className="text-gray-600 text-center">We&apos;ve received your order and are getting it ready to ship.</p>
          </div>
          
          <div className="border-t border-b border-gray-200 py-4 my-6">
            <h2 className="text-xl font-semibold mb-4">What&apos;s Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">Order Confirmation</h3>
                  <p className="text-sm text-gray-500">You&apos;ll receive an email confirmation shortly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <CubeTransparentIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">Order Processing</h3>
                  <p className="text-sm text-gray-500">We&apos;ll prepare your items and get them ready for shipping.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <TruckIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">Shipping</h3>
                  <p className="text-sm text-gray-500">Your order will be shipped within 1-2 business days.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-cyan-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Main page component with Suspense boundary
const ThankYouPage = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
};

export default ThankYouPage;
