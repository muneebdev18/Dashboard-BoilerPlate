import { motion } from 'framer-motion'
import { GoLock } from 'react-icons/go'
const ChangePasswordModal = ({ setChangePasswordModal }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.4, delay: 0.2 }} className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-[#202020b8] z-40">
            <div className="flex flex-col bg-gray-800  sm:px-[30px] sm:py-[20px] xsm:p-4 mx-2 relative shadow rounded-xl items-center">
                <div className="flex w-full flex-col mb-[24px]">
                    <p className="text-white font-semibold text-[23px] text-center mb-5">
                        {`Edit Your Profile`}
                    </p>
                    {/* <div className='flex gap-5'> */}
                    <div className='flex flex-col gap-3 '>
                    <div className="relative ">
                        <input
                            type="password"
                            placeholder="Enter Current Password"
                            className="bg-gray-900 bg-opacity-80 py-3 w-full px-[38px]  outline-none rounded-lg"
                        />
                        <GoLock className="absolute top-4 left-3 text-white" />
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Enter New Password"
                            className="bg-gray-900 bg-opacity-80 py-3 px-[38px]  w-full  outline-none rounded-lg"
                        />
                        <GoLock className="absolute top-4 left-3 text-white" />
                    </div>
                    <div className="relative ">
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="bg-gray-900 bg-opacity-80 py-3 px-[38px]  w-full outline-none rounded-lg"
                        />
                        <GoLock className="absolute top-4 left-3 text-white" />
                    </div>
                    </div>
                    {/* </div> */}
                </div>
                <div className="flex gap-[30px]  my-3">
                    <button
                        className="py-[11px] bg-[#ff0000] px-[50px] text-[16px] rounded-md text-white font-medium  hover:opacity-70"
                        onClick={() => setChangePasswordModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="py-[11px] text-[16px] bg-[#295F98] px-[50px]  font-medium rounded-md text-white hover:opacity-70"
                    >
                        Update
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default ChangePasswordModal