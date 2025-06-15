import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFakePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('💸 Payment Successful via UPI!\nThanks for shopping, Legend!');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#f0f4ff] to-[#fff8f0] p-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md text-center border-4 border-purple-200"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">💳 UPI Payment</h2>

        {/* QR Code */}
        <div className="mb-4">
          <motion.img
            src="https://api.qrserver.com/v1/create-qr-code/?data=fakeupi@upi&size=200x200"
            alt="QR Code"
            className="mx-auto rounded-xl border-4 border-purple-300"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <p className="mt-2 text-gray-600 text-sm">Scan using GPay / PhonePe / Paytm</p>
        </div>

        {/* UPI ID */}
        <div className="bg-purple-100 text-purple-700 font-mono px-4 py-2 rounded-xl mb-6 text-sm">
          UPI ID: <span className="font-bold">fakeupi@upi</span>
        </div>

        {/* FUN Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          disabled={loading}
          onClick={handleFakePayment}
          className={`w-full py-3 text-lg rounded-xl font-bold transition-all duration-300 shadow-lg ${
            loading
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-gradient-to-r from-[#ff6b6b] to-[#f06595] hover:from-[#fa5252] hover:to-[#e64980] text-white'
          }`}
        >
          {loading ? '🤖 Processing...' : '🎉 Woohoo! I Paid ✔️'}
        </motion.button>

        {/* Fun Caption */}
        <p className="mt-4 text-xs text-gray-400 italic">
          (This is a fake gateway for demo purposes 🧪)
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
