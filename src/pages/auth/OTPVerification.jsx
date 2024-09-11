import { useState } from 'react';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import {motion} from 'framer-motion'
const OTPVerification = () => {
  const [otp, setOtp] = useState('');

  return (
    <motion.div initial={{opacity:0,y:0}} animate={{opacity:1,y:-30}} transition={{duration:1.1,delay:0.3}} className="flex flex-row justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="px-8 py-8 flex flex-col justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold mb-2 text-white">OTP Verification</h1>
        <p className="text-lg text-gray-400 mb-8">Enter the OTP sent to your email.</p>

        <form className="space-y-6">
          {/* OTP Input */}
          <div className="relative">
            {/* <label className="text-gray-300 text-lg mb-4">OTP</label> */}
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="text-gray-300 mx-2">-</span>}
              inputStyle={{
                display: "flex",
                justifyContent: "space-between",
                width: "4.7rem",
                height: "4.5rem",
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
              className="w-full py-3 mt-8 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition duration-300"
            >
              Continue
            </button>
          </Link>
        </form>
        <p className='mt-3 text-[18px]'>If Not Sent, Try Again to sent OTP By <span className='cursor-pointer text-blue-500 font-semibold'>Click Here</span></p>
      </div>
    </motion.div>
  );
};

export default OTPVerification;
