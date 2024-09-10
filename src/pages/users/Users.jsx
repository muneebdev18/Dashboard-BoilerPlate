import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { motion } from 'framer-motion'
import StatsCard from "../../components/statsCard/StatsCard"
import { FaSearch, FaUsers, FaUserSlash, FaUserShield } from "react-icons/fa"
import { MdDeleteForever, MdVerified } from "react-icons/md";
import { MdNoAccounts } from "react-icons/md";
import Profile from '../../assets/images/profile-new.png'
import { IoMdStats } from "react-icons/io"
import Pagination from "../../components/pagination/Pagination"
import { BiSolidEdit } from "react-icons/bi"
// import StatChart from "../../components/statsChart/StatChart"
import DeleteModal from "../../components/modals/DeleteModal"
import { useEffect, useState } from "react"
import LineChartOverview from "../../components/lineChart/LineChartOverview"

const Users = () => {
    const [activeModal,setActiveModal] = useState(false)
    const USER_DATA = [{
        id: 1,
        name: "User 1",
        email: "user1@gmail.com",
        verify: <MdVerified size={16} color="#36C2CE"/>,
        status: "Active"
    },
    {
        id: 2,
        name: "User 2",
        email: "user2@gmail.com",
        // verify: <MdNoAccounts size={26} color="#ff0000"/>,
        category: "Electronics",
        status: "Active"
    },
    {
        id: 3,
        name: "User 3",
        email: "user3@gmail.com",
        verify: <MdVerified size={16} color="#36C2CE"/>,
        category: "Electronics",
        status: "Active"
    },
    {
        id: 4,
        name: "User 4",
        email: "user4@gmail.com",
        verify:<MdVerified size={16} color="#36C2CE"/>,
        category: "Electronics",
        status: "Active"
    },
    {
        id: 5,
        name: "User 5",
        email: "user5@gmail.com",
        verify:<MdVerified size={16} color="#36C2CE"/>,
        category: "Electronics",
        status: "Active"
    }, {
        id: 6,
        name: "User 6",
        email: "user6@gmail.com",
        // verify: <MdNoAccounts size={26} color="#ff0000"/>,
        status: "Active"
    },
    {
        id: 7,
        name: "User 7",
        email: "user7@gmail.com",
        // verify: <MdNoAccounts size={26} color="#ff0000"/>,
        category: "Electronics",
        status: "Active"
    },
    {
        id: 8,
        name: "User 8",
        email: "user8@gmail.com",
        // verify: <MdNoAccounts size={26} color="#ff0000"/>,
        status: "Active"
    },
    {
        id: 9,
        name: "User 9",
        email: "user9@gmail.com",
        verify: <MdVerified size={16} color="36C2CE"/>,
        category: "Electronics",
        status: "Active"
    },
    {
        id: 10,
        name: "User 10",
        email: "user10@gmail.com",
        verify: <MdVerified size={16} color="36C2CE"/>,
        status: "Active"
    },

    ]
       //  --- NEW PAGE ALWAYS RENDER FROM TOP(1st Section) ------
 useEffect(() => {
    window.scroll(0, 0);
  }, []);
    return (
        <div className="w-full flex flex-col min-h-screen relative">
            <Header title={"Users"} />
            <div className="flex flex-col flex-grow w-full lg:px-7 lg:py-7 sm:px-8 sm:py-2 xsm:px-0 xsm:py-0 overflow-y-auto">
                {/*-------- Stats Card Section ----------*/}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatsCard
                        title={"Total Users"}
                        value={"123"}
                        icon={FaUsers}
                        color="#8b5cf6"
                    />
                    <StatsCard
                        title={"Verified Users"}
                        value={"30"}
                        icon={FaUserShield}
                        color="#6366f1"
                    />
                    <StatsCard
                        title={"Unverified Users"}
                        value={"134"}
                        icon={FaUserSlash}
                        color="#ec4899"
                    />
                    <StatsCard
                        title={"User Rate"}
                        value={"11.9%"}
                        icon={IoMdStats}
                        color="#10b981"
                    />
                </motion.div>
                {/*-------- Table Section ------- */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="h-[auto] bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl px-6 pt-5 pb-11 border border-gray-700 overflow-y-hidden">
                    {/* ------- Table Header ------- */}
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-medium">Users List</p>
                        <div className="relative bg-transparent">
                            <input
                                type="text"
                                placeholder="Search Users"
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
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 bg-gray-800">
                                        Country
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
                                {USER_DATA.map((item, index) => {
                                    return (
                                        <tr key={index} className="space-y-2">
                                            <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">
                                                {item.id}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">
                                                <div className="flex items-center gap-[6px]">
                                                    <img src={Profile} className="w-[42px] h-[40px] rounded-full"/>
                                                    <p>{item.name}</p>
                                                <span> {item.verify}</span>
                                                </div>
                                                
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">
                                                {item.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700">
                                                Karahci
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-100 border-b border-gray-700"><div className="bg-[#06D001] text-center px-7 py-2 w-fit rounded-3xl">{item.status}</div></td>
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
                    {/*---------- Pagination ---------- */}
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

                   {/* ------- User Chart HeatUp -------- */}
              <div className="grid grid-col-1 my-8">
                <LineChartOverview/>
                </div>
            </div>
         
            {/* ------ Footer ------ */}
            <Footer />
        </div>
    )
}

export default Users