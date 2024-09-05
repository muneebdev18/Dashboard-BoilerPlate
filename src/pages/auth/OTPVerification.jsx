import { useState } from 'react';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import {motion} from 'framer-motion'
const OTPVerification = () => {
  const [otp, setOtp] = useState('');

  return (
    <motion.div initial={{opacity:0,y:0}} animate={{opacity:1,y:-30}} transition={{duration:1.1,delay:0.3}} className="flex flex-row justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="xl:w-1/2 lg:w-2/3 md:w-full px-8 py-16 flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-semibold mb-2 text-white">OTP Verification</h1>
        <p className="text-lg text-gray-400 mb-8">Enter the OTP sent to your email.</p>

        <form className="space-y-6">
          {/* OTP Input */}
          <div className="relative">
            {/* <label className="text-gray-300 text-lg mb-4">OTP</label> */}
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="text-gray-300 mx-2">-</span>}
              inputStyle={{
                display: "flex",
                justifyContent: "space-between",
                width: "5rem",
                height: "5rem",
                margin: "0 0.5rem",
                fontSize: "1.5rem",
                borderRadius: "0.375rem",
                border: "1px solid #4B5563", // Border color (gray-600)
                backgroundColor: "#1F2937", // Background color (gray-800)
                color: "#FFFFFF", // Text color (white)
                textAlign: "center",
              }}
              focusStyle={{
                border: "2px solid #7C3AED", // Focus border color (purple-500)
                outline: "none",
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>

          {/* Continue Button */}
          <Link to="/auth/newpassword">
            <button
              type="submit"
              className="w-[450px] py-3 mt-8 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition duration-300"
            >
              Continue
            </button>
          </Link>
        </form>
      </div>
    </motion.div>
  );
};

export default OTPVerification;
