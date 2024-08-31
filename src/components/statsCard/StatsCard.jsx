import {motion} from 'framer-motion'
const StatsCard = ({title,value,icon:Icon,color}) => {
  return (
    <motion.div className={`h-[130px] flex px-7 items-center w-[100%] rounded-lg bg-gray-800 backdrop-blur-md shadow-lg border-b border-gray-700 `}
    whileHover={{y:-5,boxShadow:'0px 25px 50px -12px rgba(0,0,0,0.5)'}}
    >
    <div className='flex flex-col gap-3'>
    <div className='flex gap-2 items-center'>
        <span><Icon size={25} color={color}/></span>
        <p className='text-gray-300 text-[16px] font-medium'>{title}</p>
    </div>
    <p className='text-[28px] font-semibold text-gray-300'>{value}</p>
    </div>
    </motion.div>
  )
}

export default StatsCard