import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
  typescript: true,
});

const quantityOptions = [
    { id: 1, name: 'Rotative & Extendable Power Strip x1', priceInCents: 3499 },
    { id: 2, name: 'Rotative & Extendable Power Strip x2', priceInCents: 5999 },
    { id: 3, name: 'Rotative & Extendable Power Strip x3', priceInCents: 7999 },
];

export async function POST(req: NextRequest) {
  const { selectedOptionId } = await req.json();

  const selectedProduct = quantityOptions.find(option => option.id === selectedOptionId);

  if (!selectedProduct) {
    return NextResponse.json({ error: 'Invalid product selection' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: selectedProduct.name,
              images: [`${req.headers.get('origin')}/images/1.png`],
            },
            unit_amount: selectedProduct.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: `${req.headers.get('origin')}/thank-you?payment_success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error(err);
    const errorMessage = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
