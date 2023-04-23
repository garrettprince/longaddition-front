import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../lib/components/PaymentForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUSBLISHABLE_KEY
);

export default function Subscribe() {
  return (
    <div className="mt-24">
      <Elements stripe={stripePromise}>
          <PaymentForm />
      </Elements>
    </div>
  );
}
