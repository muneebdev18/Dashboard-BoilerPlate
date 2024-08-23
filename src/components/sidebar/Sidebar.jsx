import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { FaChartSimple } from "react-icons/fa6";

import { motion } from 'framer-motion'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
    const SIDEBAR_ITEMS = [
        { name: "Overview", icon: FaChartSimple, color: "#6366f1", href: "/", size:15 },
        { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/product", size:15 },
        { name: "Users", icon: Users, color: "#EC4899", href: "/users", size:15 },
        { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales", size:15 },
        { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders", size:15 },
        { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics", size:15 },
        { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings", size:15 },
    ];
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    return (
        <motion.div
         className={`relative z-101 transition-all duration-200 ease-linear flex-shrink ${isSidebarOpen ? 'w-64' : 'w-20'}`} animate={{ width: isSidebarOpen ? 256 : 80 }}
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
                    {SIDEBAR_ITEMS.map((item)=>{
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
                                    <item.icon size={24} className="mr-2 text-gray-300" fill={item.color} />
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