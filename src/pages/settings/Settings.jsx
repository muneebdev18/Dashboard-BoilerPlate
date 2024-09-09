import Header from '../../components/header/Header'
import { FiUser } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";
import Profile from '../../assets/images/logos/profileImg.png'
import Footer from '../../components/footer/Footer'
import {motion} from 'framer-motion'
import { useState } from 'react';
import EditProfileModal from '../../components/modals/EditProfileModal';
import ChangePasswordModal from '../../components/modals/ChangePasswordModal';
const Settings = () => {
  const [editProfileModal,setEditProfileModal] =useState(false)
  const [changePasswordModal,setChangePasswordModal] =useState(false)
  return (
    <div className="w-full flex flex-col min-h-screen relative">
    <Header title={"Settings"} />
    <div className="flex flex-col flex-grow w-full lg:px-6 lg:py-7 sm:px-8 sm:py-2 xsm:px-0 xsm:py-0 overflow-y-auto">
      {/*-------- Profile Section -------- */}
    <motion.div initial={{opacity:0,y:0}} animate={{opacity:1,y:-20}} transition={{duration:1,delay:0.2}} className=" my-5 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl px-6 pt-5 pb-5 border border-gray-700 overflow-y-hidden">
      <div className='flex gap-3 items-center mb-4'>
        <FiUser color='#818CF8' size={24} className='font-medium'/>
        <p className='font-medium text-xl'>Profile</p>
      </div>
      {/* Image with details*/}
      <div className='flex items-center gap-5'>
        <img src={Profile} className='w-[110px] h-[110px] rounded-full object-cover'/>
        <div className='flex flex-col'>
          <p className='text-[17px] font-medium text-gray-200'>Johansson Sam</p>
          <p className='text-[16px] text-gray-400'>johansson@hotmail.com</p>
        </div>
      </div>
      {/* Edit Profile Button */}
      <button onClick={()=>setEditProfileModal(true)} className='py-[12px] mt-9 px-5 rounded-lg  bg-[#4338CA] text-white font-medium hover:bg-[#5c4ef5]'>Edit Profile</button>
    </motion.div>
    {/* ------- Modal For Edit Profile ------- */}
   {editProfileModal &&  <EditProfileModal setEditProfileModal={setEditProfileModal}/>}
    {/*------------- Change Password Section ----------------- */}
    <motion.div initial={{opacity:0,y:0}} animate={{opacity:1,y:-20}} transition={{duration:1,delay:0.5}} className=" bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl px-6 pt-5 pb-5 border border-gray-700 overflow-y-hidden">
      <div className='flex gap-3 items-center mb-4'>
        <FiUnlock color='#818CF8' size={24} className='font-medium'/>
        <p className='font-medium text-xl'>Security</p>
      </div>
      {/* Change Password Button */}
      <button onClick={()=>setChangePasswordModal(true)} className='py-[12px] mt-6 px-5 rounded-lg  bg-[#4338CA] text-white font-medium hover:bg-[#5c4ef5]'>Change Password</button>
    </motion.div>
        {changePasswordModal && <ChangePasswordModal setChangePasswordModal={setChangePasswordModal}/>}
    </div>
    <Footer/>
    </div>
  )
}

export default Settings