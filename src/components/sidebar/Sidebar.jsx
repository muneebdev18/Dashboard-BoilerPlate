
import { motion } from 'framer-motion'
import { useState } from "react";
import {NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { SIDEBAR_ITEMS } from '../../data/data';
const Sidebar = () => {
   
    const [isSidebarOpen, setSidebarOpen] = useState(true) 
    return (
        <motion.div
         className={`relative z-101 transition-all duration-200 ease-linear flex-shrink  ${isSidebarOpen ? 'w-64' : 'w-20'}`} animate={{ width: isSidebarOpen ? 256 : 80 }}
         >
            <div className=" h-screen bg-gray-800 bg-opacity-50 backdrop-blur-sm  col py-2 px-4 border-r border-gray-700">
                <div className="flex">
                <p className={`${isSidebarOpen ? 'block' :'invisible'} text-2xl font-semibold`}>Logo</p>
                <motion.button
                //  whileHover={{scale:1.2}}
                 whileTap={{scale:0.9}}
                 onClick={()=>setSidebarOpen(!isSidebarOpen)}
                 className="p-2 rounded-md transition-colors hover:bg-slate-600 absolute right-[18px]"
                 >
                    <Menu size={26}/>
                </motion.button>
                </div>
                <nav className="mt-9 flex-grow">
                    {SIDEBAR_ITEMS?.map((item)=>{
                        return(
                            <NavLink
                                to={item.href}
                                key={item.href}
                                className={({ isActive }) =>
                                    `block  my-2 ${isSidebarOpen ? 'px-4 py-3' : 'py-3 px-3 flex justify-center items-center'} font-medium text-white hover:bg-gray-700 transition-colors duration-150 rounded-md cursor-pointer ${isActive ? 'bg-gray-700' : ''
                                    }`
                                }
                            >
                                <div className={` w-full ${isSidebarOpen ? 'flex items-center':'' } `}>
                                    <item.Icon size={24} className="mr-2 text-gray-300" fill={item.color} />
                                    {isSidebarOpen && item.name}
                                </div>
                            </NavLink>
                        )
                    })}

                </nav>
            </div>
        </motion.div>
    )
}

export default Sidebar