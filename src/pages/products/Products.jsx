// Add Loader and Length = 0 then No Item and Pagination

import Header from "../../components/header/Header";
import StatsCard from "../../components/statsCard/StatsCard";
import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdSell,MdDeleteForever } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import Footer from '../../components/footer/Footer'
import Pagination from "../../components/pagination/Pagination";
import { useState } from "react";
import DeleteModal from "../../components/modals/DeleteModal"
// import styles from './style.module.css'
const Products = () => {
  const [activeModal,setActiveModal] = useState(false)
  const PRODUCT_DATA = [{
    id:1,
    name: "Product 1",
    price: "$150",
    quantity: 50,
    category:"Electronics",
    status: "Active"
  },
  {
    id:2,
    name: "Product 2",
    price: "$150",
    quantity: 10,
    category:"Electronics",
    status: "Active"
  },
  {
    id:3,
    name: "Product 3",
    price: "$150",
    quantity: 20,
    category:"Electronics",
    status: "Active"
  },
  {
    id:4,
    name: "Product 4",
    price: "$150",
    quantity: 150,
    category:"Electronics",
    status: "Active"
  },
  {
    id:5,
    name: "Product 5",
    price: "$250",
    quantity: 70,
    category:"Electronics",
    status: "Active"
  },{
    id:6,
    name: "Product 6",
    price: "$20",
    quantity: 40,
    status: "Active"
  },
  {
    id:7,
    name: "Product 7",
    price: "$15",
    quantity: 540,
    category:"Electronics",
    status: "Active"
  },
  {
    id:8,
    name: "Product 6",
    price: "$20",
    quantity: 40,
    status: "Active"
  },
  {
    id:9,
    name: "Product 7",
    price: "$15",
    quantity: 540,
    category:"Electronics",
    status: "Active"
  },
  {
    id:10,
    name: "Product 6",
    price: "$20",
    quantity: 40,
    status: "Active"
  },

]

  return (
    <div className="w-full flex flex-col min-h-screen relative">
      <Header title={"Products"} />
      <div className="flex flex-col flex-grow w-full lg:px-7 lg:py-7 sm:px-8 sm:py-2 xsm:px-0 xsm:py-0 overflow-y-auto">
        {/*-------- Stats Card Section ----------*/}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard
            title={"Total Products"}
            value={"123"}
            icon={FaShoppingCart}
            color="#8b5cf6"
          />
          <StatsCard
            title={"Total Sold"}
            value={"30"}
            icon={MdSell}
            color="#6366f1"
          />
          <StatsCard
            title={"Total in Stock"}
            value={"134"}
            icon={MdSell}
            color="#ec4899"
          />
          <StatsCard
            title={"Sales Rate"}
            value={"11.9%"}
            icon={IoMdStats}
            color="#10b981"
          />
        </motion.div>
        {/*-------- Table Section ------- */}
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.5}} className="h-[880px] bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl px-6 pt-5 pb-11 border border-gray-700">
          {/* ------- Table Header ------- */}
          <div className="flex justify-between items-center">
            <p className="text-2xl font-medium">Products List</p>
            <div className="relative bg-transparent">
              <input
                type="text"
                placeholder="Search Products"
                className="bg-gray-800 bg-opacity-80 py-3 px-[38px] backdrop-blur-md outline-none rounded-lg"
              />
              <FaSearch className="absolute top-4 left-3" />
            </div>
          </div>
          {/* ------- Table Body ------- */}
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full divide-y divide-gray-700  text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                    ID
                  </th>
                  <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                    Price
                  </th>
                  <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                    Category
                  </th>
                  <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                    Status
                  </th>
                  <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* ------- Table Row ------- */}
            {PRODUCT_DATA.map((item,key)=>{
              return(
                <tr key={key} className="space-y-2">
                <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">
                  {item.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">
                  {item.price}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">{item.quantity}</td>
                <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">{item.status}</td>
                <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700 ">
                                                
                                                <div className="flex items-center gap-1">
                                                <BiSolidEdit size={25} color="#6366f1" className="cursor-pointer" />
                                                <MdDeleteForever  onClick={()=>setActiveModal(true)}  size={25} color="#ff0000" className="cursor-pointer" />
                                                </div>
                                            </td>
                </tr>
              )
            })}
                 {/* -------- If isLoading is true then, To View and Center the Loader --------- */}
                                {/* <tr className="overflow-y-hidden">
                <td colSpan="7" className="text-center align-middle py-10">
                  <Loader loaderStyle={loaderStyle} />
                </td>
              </tr> */}
              </tbody>
            </table>
            
          </div>
          <div className="flex flex-col md:flex-row mt-5 justify-between items-center gap-3 text-[11px]">
                        <p className=" text-gray-100 text-[15px]">
                            {/* {firstPostIndex + 1}-{lastPostIndex} of {UserData.length} */}
                            1 - 10 of 20
                        </p>
                        {/* Add Pagination When do API Integration */}

                        <div className="flex sm:flex-row xsm:flex-col space-x-4">
                            <Pagination
                            // totalPost={UserData.length}
                            // postPerPage={postPerPage}
                            // setCurrentPage={setCurrentPage}
                            // currentPage={currentPage}
                            />
                        </div>
                    </div>
        </motion.div>
         {/* ------- Modal for Delete Product ------- */}
         {activeModal && <DeleteModal title="User" activeModal={activeModal} setActiveModal = {setActiveModal} /> }
      </div>
        <Footer/>
    </div>
  );
};

export default Products;
