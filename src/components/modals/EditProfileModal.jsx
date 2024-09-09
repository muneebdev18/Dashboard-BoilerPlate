import { motion } from 'framer-motion'
import Profile from '../../assets/images/logos/profileImg.png'
import { IoMdCamera } from 'react-icons/io'
const EditProfileModal = ({ setEditProfileModal }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.4, delay: 0.2 }} className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-[#202020b8] z-40">
            <div className="flex flex-col bg-gray-800  sm:px-[30px] sm:py-[20px] xsm:p-4 mx-2 relative shadow rounded-xl items-center">
                <div className="flex justify-center items-center flex-col mb-[24px]">
                    <p className="text-white font-semibold text-[23px] text-center mb-5">
                        {`Edit Your Profile`}
                    </p>
                    <div className='flex items-center gap-5'>
                        <div className='relative'>
                            <img src={Profile} className='w-[110px] h-[110px] rounded-full object-cover' />
                            <label className={"absolute sm:right-[23px] xsm:right-[24px] sm:top-[95px] xsm:top-[97px]"}>
                                <input type="file" hidden />
                                <IoMdCamera style={{ cursor: "pointer" }} color='white' size={16} />
                            </label>
                        </div>
                        <div className='flex flex-col'>
                            {/* <p className='text-[17px] font-medium text-gray-200'>Johansson Sam</p> */}
                            <label className='text-sm font-medium'> Name :
                                <input type='text' value={"Johansson"} className='bg-gray-900 text-white py-3 px-4 outline-none rounded-sm ml-2' />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[30px]  my-3">
                    <button
                        className="py-[11px] bg-[#ff0000] px-[50px] text-[16px] rounded-md text-white font-medium  hover:opacity-70"
                        onClick={() => setEditProfileModal(false)}
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

export default EditProfileModal