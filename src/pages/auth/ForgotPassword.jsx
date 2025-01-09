import { useState } from "react";
import { motion } from 'framer-motion';
import { MdOutlineHighlightOff } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: -30 }} transition={{ duration: 1.1, delay: 0.3 }}
            className="flex flex-row justify-center items-center min-h-screen text-white"
        >
            <div className="xl:w-1/2 md:w-10/12 sm:w-9/12 xsm:w-11/12 sm:px-8 xsm:px-4 py-8 flex flex-col justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
                <h1 className="sm:text-4xl xsm:text-2xl font-semibold mb-2 text-white">
                    Forgot Password ?
                </h1>
                <p className="sm:text-lg xsm:text-sm text-gray-100 sm:mb-8 xsm:mb-4">
                    Enter your email address to reset your password.
                </p>

                <form className="space-y-6">
                    {/* Email Input */}
                    <div className="relative">
                        <label className="text-gray-300 sm:text-lg xsm:text-sm">Email</label>
                        <input
                            type="email"
                            className="mt-2 w-full sm:text-lg xsm:text-sm p-4 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {email && (
                            <MdOutlineHighlightOff
                                className="absolute top-[53px] right-3 text-gray-500 cursor-pointer"
                                onClick={() => setEmail('')}
                                size={25}
                            />
                        )}
                    </div>
                    <Link to={"/auth/otpverification"}>
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 sm:text-lg xsm:text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition duration-300"
                        >
                            Continue
                        </button>
                    </Link>
                </form>
            </div>
        </motion.div>
    );
};

export default ForgotPassword;
