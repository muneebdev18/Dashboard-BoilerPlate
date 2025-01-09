import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Pin from '../../components/pinInput';

const OTPVerification = () => {
  const [timer, setTimer] = useState(30);
  const [pinValue, setPinValue] = useState('');
  const naviagte = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    naviagte('/auth/newpassword')
  }

  useEffect(() => {
    const time = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);

    return () => clearInterval(time);
  }, [timer]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: -30 }} transition={{ duration: 1.1, delay: 0.3 }}
      className="flex flex-row justify-center items-center min-h-screen bg-gray-900 text-white"
    >
      <div className="xl:w-5/12 md:w-10/12 sm:w-9/12 xsm:w-11/12 sm:px-8 xsm:px-4 py-8 flex flex-col justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
        <h1 className="sm:text-4xl xsm:text-2xl font-semibold mb-2 text-white">OTP Verification</h1>
        <p className="sm:text-lg xsm:text-sm text-gray-400 mb-8">Enter the OTP sent to your email.</p>

        <form onSubmit={handleSubmit}>
          <div className="pb-[15px]">
            <Pin pinValue={pinValue} setPinValue={setPinValue} />
          </div>
          <p className='text-center text-[#F2451C]'>00:{timer < 10 ? `0${timer}` : timer}</p>

          <div className="sm:pt-[24px] xsm:pt-[15px]">
            <button
              type='submit'
              className='rounded-[10px] text-white bg-[#4285f4] h-[50px] w-full sm:text-lg xsm:text-sm'
            >Continue</button>
          </div>
          {
            timer < 1 && (
              <div className='text-center sm:text-lg xsm:text-sm'>
                <p className='text-[#344054] pt-4'>If you didn't receive a code! <span style={{ pointer: "cursor" }} onClick={() => setTimer(30)} className='text-[#5429FF]'>Resend</span></p>
              </div>
            )
          }
        </form>
        <p className='mt-3 sm:text-lg xsm:text-sm'>If Not Sent, Try Again to sent OTP By <span className='cursor-pointer text-blue-500 font-semibold'>Click Here</span></p>
      </div>
    </motion.div>
  );
};

export default OTPVerification;
