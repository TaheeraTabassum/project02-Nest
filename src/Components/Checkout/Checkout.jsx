export default function Checkout() {
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <div className="shadow-lg bg-white p-6 rounded-xl">
        <p className="text-gray-600">
          Thank you! Your order is ready to process.
        </p>

        <button className="bg-blue-600 text-white py-2 mt-4 w-full rounded-lg">
          Complete Payment
        </button>
      </div>
    </div>
  );
}
