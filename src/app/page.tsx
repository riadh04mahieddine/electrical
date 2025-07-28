"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ShieldCheckIcon, FireIcon, ArrowsPointingOutIcon, ArrowPathIcon, TruckIcon, CheckBadgeIcon, PlusIcon, MinusIcon, BoltIcon, ClockIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className="bg-transparent backdrop-blur-sm sticky top-0 z-20 border-b border-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Image src="/images/logo.png" alt="MULTIPRISE Logo" width={190} height={50} className="object-contain" />
        <a href="#" className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
          Order Now
        </a>
      </div>
    </header>
  );
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
// Define a proper type for TikTok tracking object
interface TikTokTrackingObject {
  track: (event: string, parameters?: Record<string, unknown>) => void;
}

declare const ttq: TikTokTrackingObject;

const ProductSection = () => {
  const [selectedOption, setSelectedOption] = useState(2);
  const [mainImage, setMainImage] = useState('/images/1.png');
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof ttq !== 'undefined') {
      ttq.track('ViewContent', {
        content_name: 'Rotative Extensible Power Strip',
        content_type: 'product',
        currency: 'USD',
        value: 34.99 // Prix pour un seul produit
      });
    }
  }, []);
  const quantityOptions = [
    { id: 1, quantity: 'X1', price: '$34.99', originalPrice: '$49.99', discount: 'SAVE 40%' },
    { id: 2, quantity: 'X2', price: '$59.99', originalPrice: '$99.98', discount: 'SAVE 50%', tag: 'BEST VALUE' },
    { id: 3, quantity: 'X3', price: '$79.99', originalPrice: '$149.97', discount: 'SAVE 60%', tag: 'PREMIUM' },
  ];

  const currentOffer = quantityOptions.find(option => option.id === selectedOption) || quantityOptions[0];
  const thumbnailImages = ['/images/1.png', '/images/2.png', '/images/3.png'];

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleCheckout = async () => {
    if (typeof ttq !== 'undefined') {
      // Get the selected product option data
      const selectedProduct = quantityOptions[selectedOption - 1];
      const price = parseFloat(selectedProduct.price.replace('$', ''));
      
      // Track InitiateCheckout with product data
      ttq.track('InitiateCheckout', {
        content_type: 'product',
        content_id: 'power_strip',
        content_name: 'Rotative Extensible Power Strip',
        quantity: selectedOption,
        currency: 'USD',
        value: price
      });
    }
    setLoading(true);
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedOptionId: selectedOption }),
      });

      const { sessionId, error } = await response.json();
      
      if (error) {
        console.error('Stripe Error:', error);
        alert('An error occurred during checkout. Please try again.');
        setLoading(false);
        return;
      }

      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe Redirect Error:', error.message);
          alert('Could not redirect to payment page. Please try again.');
        }
      }
    } catch (error) {
      console.error('Checkout Error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
    setLoading(false);
  };

  const features = [
    { name: '360° Rotation', description: 'Easily access outlets in the tightest corners', icon: ArrowPathIcon },
    { name: 'Surge Protection', description: 'Protects your valuable devices from voltage spikes', icon: ShieldCheckIcon },
    { name: 'Compact & Extendable Design', description: 'Perfect for home, office, or travel', icon: ArrowsPointingOutIcon },
    { name: 'Fire-Retardant Materials', description: 'Maximum safety with fire-resistant materials', icon: FireIcon },
  ];

  return (
    <section className="container mx-auto px-2 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
            <div className="bg-secondary aspect-square rounded-lg flex items-center justify-center overflow-hidden">
              <Image src={mainImage} alt="Main product view" width={500} height={500} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {thumbnailImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`bg-secondary aspect-square rounded-md flex items-center justify-center cursor-pointer border-2 ${mainImage === img ? 'border-blue-500' : 'border-transparent'} overflow-hidden`}
                  onClick={() => setMainImage(img)}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} width={150} height={150} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>

        {/* Product Info */}
        <div className="sticky top-24">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">Electrical Outlet Extender Access Hard to Reach Outlets! Features USB A, USB C, and 2 AC Outlets
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center">
              <h2 className="text-4xl font-bold text-text-primary">
                {currentOffer.price}
                <span className="text-2xl text-gray-400 line-through ml-2">
                  {currentOffer.originalPrice}
                </span>
              </h2>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex text-yellow-400">
              {/* 5 stars */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <span className="ml-2 text-sm text-gray-500">145+ Satisfied Customers</span>
          </div>

          {/* Trust Signals */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <TruckIcon className="h-6 w-6 text-green-500" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <CheckBadgeIcon className="h-6 w-6 text-green-500" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>

          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-text-primary">{feature.name}</p>
                  <p className="text-text-primary/80">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Quantity Selector */}
          <div className="mt-10 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary text-center mb-4">Choose Your Bundle</h3>
            <div className="grid grid-cols-3 gap-4">
              {quantityOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 border rounded-lg cursor-pointer text-center transition-all duration-300 ${selectedOption === option.id ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-gray-300 bg-white'}`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <span className="font-bold text-lg text-text-primary">{option.quantity}</span>
                  {option.tag && <span className={`ml-2 text-xs font-semibold px-2 py-1 rounded-full ${selectedOption === option.id ? 'bg-cyan-200 text-cyan-800' : 'bg-gray-200 text-gray-700'}`}>{option.tag}</span>}
                  <p className="text-xl font-bold mt-2 text-text-primary">{option.price}</p>
                  <p className="text-sm text-gray-500 line-through">{option.originalPrice}</p>
                  <p className="text-sm font-semibold text-red-500 mt-1">{option.discount}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button 
                onClick={handleCheckout} 
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold py-4 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg flex flex-col items-center justify-center text-center disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="text-lg">Processing...</span>
                ) : (
                  <>
                    <span className="text-lg">Order Now & Get 60% OFF</span>
                    <span className="text-xs opacity-90 font-normal flex items-center mt-1">
                      <ClockIcon className="h-4 w-4 mr-1"/>
                      Offer ends in: {formatTime(timeLeft)}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ProductBenefits = () => {

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">A Revolution For Your Outlets</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover why this power strip is more than just an accessory.
          </p>
        </div>
                <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {[ { name: 'Maximum Flexibility', description: 'With its 360° rotation and extendable design, no outlet is out of reach. Plug in your devices effortlessly.', icon: ArrowsPointingOutIcon, }, { name: 'Ultra-Fast Charging', description: 'Equipped with USB-A ports and a USB-C Power Delivery port, it charges your devices at maximum speed.', icon: BoltIcon, }, { name: 'Guaranteed Safety', description: 'Designed with fire-retardant materials and surge protection, it ensures complete safety for your devices.', icon: ShieldCheckIcon, }, ].map((benefit) => (
            <div key={benefit.name} className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                <benefit.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-semibold text-gray-900">{benefit.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CustomerReviews = () => {
  const reviews = [
    {
      name: 'Laura M.',
      review: 'Revolutionary product! No more tangled cables behind my desk. The design is great and the quality is top-notch. I recommend it 100%!',
      rating: 5,
    },
    {
      name: 'Julien P.',
      review: 'Very practical for traveling. Compact and solid. The USB ports are a real plus for charging my phone and tablet at the same time.',
      rating: 5,
    },
    {
      name: 'Sophie D.',
      review: 'Finally a solution for inaccessible outlets! The extendable arm is a stroke of genius. Delivery was fast, I am very satisfied.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Our Customers Love Us</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Find out why they chose our extendable power strip.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 flex-grow">“{review.review}”</blockquote>
              <footer className="mt-6">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-green-600">Verified Customer</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: 'Is the power strip compatible with all outlets?',
      answer: 'Yes, our power strip is designed to be compatible with standard Type A and Type B outlets, which are common in the United States.',
    },
    {
      question: 'What is the maximum length of the extendable arm?',
      answer: 'The arm can extend up to 12 inches (about 30 cm), allowing you to easily reach the most difficult outlets.',
    },
    {
      question: 'Do the USB ports support fast charging?',
      answer: 'Absolutely. The USB-C port is equipped with Power Delivery (PD) technology for ultra-fast charging of your compatible devices.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee. If you are not completely satisfied, you can return the product for a full refund.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Have a question? We have the answer.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-900"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <MinusIcon className="h-6 w-6 text-accent" />
                ) : (
                  <PlusIcon className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-secondary/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-primary/60">
            <div className="flex justify-center space-x-6 mb-4">
                <Link href="/contact" className="hover:underline">Contact</Link>
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
            </div>
            <p>© 2025 MULTIPRISE. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-100 to-background text-text-primary min-h-screen font-sans">
      <Header />
      <ProductSection />
      <ProductBenefits />
      <CustomerReviews />
      <FAQ />
      <Footer />
    </main>
  );
}
