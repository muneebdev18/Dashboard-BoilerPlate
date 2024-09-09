import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineHighlightOff, MdRemoveRedEye } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    email: "",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -30 }}
      transition={{ duration: 1.1, delay: 0.3 }}
      className="flex  justify-center items-center h-screen text-white"
    >
      <div className="xl:w-1/2 md:w-[500px] px-8 py-8 flex flex-col justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold mb-2 text-white">
          The Split Dashboard
        </h1>
        <p className="text-lg text-gray-100 mb-8">
          Please fill your details to access your account.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <label className="text-gray-300 text-lg">Email</label>
            <input
              type="email"
              className="mt-2 w-full text-lg p-4 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Email Address"
              value={values.email}
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
            />
            {values.email && (
              <MdOutlineHighlightOff
                className="absolute top-[53px] right-3 text-gray-500 cursor-pointer"
                onClick={() => setValues({ ...values, email: "" })}
                size={25}
              />
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="text-white text-lg">Password</label>
            <input
              type={values.showPassword ? "text" : "password"}
              className="mt-2 w-full text-lg p-4 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <div
              className="absolute top-[53px] right-3 text-gray-500 cursor-pointer"
              onClick={() =>
                setValues({ ...values, showPassword: !values.showPassword })
              }
            >
              {values.showPassword ? (
                <AiFillEyeInvisible size={25} />
              ) : (
                <MdRemoveRedEye size={25} />
              )}
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center text-gray-300">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-lg"
              />
              <label className="text-lg">Remember me</label>
            </div>
            <Link
              to="/auth/forgotpassword"
              className="text-purple-400 hover:underline text-lg"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <Link to={"/dashboard"}>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition duration-300"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
