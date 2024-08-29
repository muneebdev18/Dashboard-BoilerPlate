import Header from "../../components/header/Header"
import StatsCard from "../../components/statsCard/StatsCard"
import {motion} from 'framer-motion'
import { FaUser,FaDollarSign,FaShoppingCart} from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import LineChartOverview from "../../components/lineChart/LineChartOverview";
import PieChartDist from "../../components/pieChart/PieChartDist";

// import styles from './style.module.css'
const Dashboard = () => {
  return (
    <div className="w-full">
      <Header title={"Dashboard"} />
      <div className="w-full h-full lg:px-7 lg:py-7 sm:px-8 sm:py-2 xsm:px-0 xsm:py-0 overflow-y-auto">
        {/*-------- Stats Card Section ----------*/}
        <motion.div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        >
          <StatsCard title={"Total Users"} value={"443"} icon={FaUser} color="#8b5cf6"/>
          <StatsCard title={"Total Sales"} value={"$1930"} icon={FaDollarSign} color="#6366f1" />
          <StatsCard title={"Total Products"} value={"134"} icon={FaShoppingCart} color="#ec4899" />
          <StatsCard title={"Conversion Rate"} value={"11.9%"} icon={IoMdStats} color="#10b981"/>
        </motion.div>
        {/*-------- Stats Charts Section ----------*/}
        <div className="grid md:grid-cols-2 sm:grid-col-1 gap-7">
          <LineChartOverview/>
          <PieChartDist/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard