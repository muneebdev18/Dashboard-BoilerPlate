import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const LineChartOverview = () => {
    const salesData = [
        { name: "Jul", sales: 4200 },
        { name: "Aug", sales: 3800 },
        { name: "Sep", sales: 5100 },
        { name: "Oct", sales: 4600 },
        { name: "Nov", sales: 5400 },
        { name: "Dec", sales: 7200 },
        { name: "Jan", sales: 6100 },
        { name: "Feb", sales: 5900 },
        { name: "Mar", sales: 6800 },
        { name: "Apr", sales: 6300 },
        // { name: "May", sales: 7100 },
        // { name: "Jun", sales: 7500 },
    ];
    
  return (
   <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl px-6 pt-5 pb-11 border border-gray-700 h-[370px]"
   initial={{opacity:0,y:-50}}
   animate={{opacity:1,y:0}}
   transition={{delay:0.2}}
   >
    <p className="font-medium text-[17px] mb-3">Sales Overview</p>

    <ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='sales'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
   </motion.div>
  )
}

export default LineChartOverview