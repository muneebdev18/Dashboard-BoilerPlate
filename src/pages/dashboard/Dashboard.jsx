import Header from "../../components/header/Header";
import StatsCard from "../../components/statsCard/StatsCard";
import { motion } from 'framer-motion';
import { FaUser, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import LineChartOverview from "../../components/lineChart/LineChartOverview";
import PieChartDist from "../../components/pieChart/PieChartDist";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header title={"Dashboard"} />
      <div className="flex flex-col flex-grow w-full lg:px-7 lg:py-7 sm:px-8 sm:py-2 xsm:px-2 xsm:py-2 overflow-y-auto">
        {/*-------- Stats Card Section ----------*/}
        <motion.div className="grid lg:grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard title={"Total Users"} value={"443"} icon={FaUser} color="#8b5cf6" />
          <StatsCard title={"Total Sales"} value={"$1930"} icon={FaDollarSign} color="#6366f1" />
          <StatsCard title={"Total Products"} value={"134"} icon={FaShoppingCart} color="#ec4899" />
          <StatsCard title={"Conversion Rate"} value={"11.9%"} icon={IoMdStats} color="#10b981" />
        </motion.div>
        {/*-------- Stats Charts Section ----------*/}
        <div className="grid md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 justify-between items-center gap-7 my-10">
          <LineChartOverview />
          <PieChartDist />
        </div>
      </div>
      {/*-------- Footer ---------*/}
      <Footer />
    </div>
  )
}

export default Dashboard;
