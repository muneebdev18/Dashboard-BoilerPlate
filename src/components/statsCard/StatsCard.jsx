import { motion } from 'framer-motion';

const StatsCard = ({ title, value, icon: Icon, color }) => {
  // const iconMap = {
  //   FaUser: FaUser,
  //   MdOutlinePostAdd: SiApostrophe,
  //   SiApostrophe: SiApostrophe,
  //   FaBookOpen: MdHistoryEdu,
  //   GrChapterAdd: GrChapterAdd,
  //   MdHistoryEdu: MdHistoryEdu,
  //   RiGitRepositoryPrivateFill: RiGitRepositoryPrivateFill,
  //   MdOutlinePublic: MdOutlinePublic,
  //   CgPathDivide: CgPathDivide,
  //   FaFileAlt: FaFileAlt,
  //   PiSelectionBackgroundBold: PiSelectionBackgroundBold,
  //   GiWoodFrame: GiWoodFrame,
  //   FaRegFileAudio: FaRegFileAudio,
  //   IoIosNotifications: IoIosNotifications,
  //   CiRead: CiRead,
  //   CiUnread: CiUnread
  // }

  // Find the icon component from the iconMap
  // const IconComponent = iconMap[Icon];

  return (
    <motion.div
      className={`py-6 flex px-7 items-center w-full rounded-lg bg-gray-800 backdrop-blur-md shadow-lg border-b border-gray-700 `}
      whileHover={{ y: -5, boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.5)' }}
    >
      <div className='flex flex-col gap-3'>
        <div className='flex gap-2 items-center'>
          {/* <span>{IconComponent && <IconComponent size={25} color={color} />}</span> */}
          <span><Icon size={25} color={color} /></span>
          <p className='text-gray-300 text-[16px] font-medium'>{title}</p>
        </div>
        <p className='text-[28px] font-semibold text-gray-300'>{value}</p>
      </div>
    </motion.div>
  )
}

export default StatsCard