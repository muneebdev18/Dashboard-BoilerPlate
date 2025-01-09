import Lottie from "react-lottie";
import SuccessAnimation from "../../assets/animation/Success-Animation - 1725549566408.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Success = () => {
  // Animation options
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: SuccessAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -30 }}
      transition={{ duration: 1.1, delay: 0.3 }}
      className="flex justify-center items-center min-h-screen"
    >
      <div className="flex flex-col justify-center items-center bg-white/10 backdrop-blur-lg py-8 rounded-lg shadow-lg xl:w-1/2 md:w-10/12 sm:w-9/12 xsm:w-11/12 sm:px-8 xsm:px-4">
        <Lottie options={defaultOptions} width={180} />
        <h1 className="font-bold text-[#ffffff] sm:text-4xl xsm:text-2xl mt-4">Congratulations</h1>
        <p className="text-[#ffffff] sm:text-lg xsm:text-sm mt-2 text-center">
          Your password has been reset successfully
        </p>
        <Link to={"/auth/login"}>
          <button
            type="submit"
            className="rounded-lg sm:text-lg xsm:text-sm text-white bg-[#070029] hover:bg-[#3a2a88] transition-colors duration-300 mt-6 py-3 px-8 w-full max-w-xs"
          >
            Continue
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Success;
