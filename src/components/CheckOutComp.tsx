
// Checkout.js (Frontend)
import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to replace with your own public Stripe key
const stripePromise = loadStripe('pk_test_51PnS7C03NGo99QFw61RQglpv88VqYcKuiaV6n8SpIKDX8AkYL2cLdQE87urH5zs81d6OtuJlRQ4aArtmkTMp65L6002O7ia5WV');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event : any) => {
    event.preventDefault();
    setErrorMessage('');

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    try {
      // Create a Payment Intent on the backend
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 50000,currency:"pkr" }), // Amount in cents
      });

      const { clientSecret } = await response.json();

      // Confirm the Payment Intent with the client secret
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card as any,
        },
      });

      if (error) {
        setErrorMessage(error.message as any);
      } else {
        // Payment succeeded
        alert('Payment successful!');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-6 text-center">Complete Your Payment</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">Card Details</label>
        <CardElement
          id="card-element"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
      <button
        type="submit"
        disabled={!stripe}
        className={`w-full py-2 px-4 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${!stripe ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} transition duration-200`}
      >
        Pay
      </button>
    </form>
  </div>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;