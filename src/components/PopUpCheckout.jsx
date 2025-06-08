import { useContext } from "react";
import InteractiveButton from '../elements/InteractiveButton'
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CheckoutContext } from "../context/CheckoutContext";

const PopUpCheckout = ({ isOpen, onClose, status, paymentMethod }) => {
    const { checkoutCount } = useContext(CheckoutContext);
    const navigate = useNavigate(); // Initialize useNavigate

    if (!isOpen) return null;

    const date = new Date();
    const formattedDate = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;

    const handleContinueShopping = () => {
        console.log("Redirecting to shop...");
        navigate('/shop'); // Redirect to the shop page
        console.log("Navigation triggered.");
        // onClose(); // Close the popup
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4">
          {status === 'loading' && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-turqoise border-t-transparent rounded-full animate-spin mb-6"></div>
              <h3 className="text-2xl font-medium text-turqoise mb-2">Processing Payment</h3>
              <p className="text-gray-600 text-center">Please wait while we process your payment...</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-turqoise mb-2">Payment Successful!</h3>
              <p className="text-gray-600 text-center mb-6">Your order has been placed successfully.</p>
              <div className="border border-turqoise rounded-xl p-4 w-full mb-6">
                <h4 className="text-turqoise font-medium mb-2">Order Details</h4>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Order Number:</span>
                    <span className="font-focus">INV/{formattedDate}/{String(checkoutCount).padStart(3, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="font-focus">{paymentMethod}</span>
                  </div>
                </div>
              </div>
              <InteractiveButton
                handlePress={handleContinueShopping} // Use the handler
                text="CONTINUE SHOPPING"
                className="bg-turqoise hover:bg-teal-700 text-white py-3 px-6 rounded-md w-full transition"
                outlineColor="outline-teal-700"
                textStyle="text-lg"
              />
            </div>
          )}
        </div>
      </div>
    )
}

export default PopUpCheckout;