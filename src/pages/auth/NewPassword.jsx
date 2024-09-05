import React,{useState} from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { MdRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const NewPassword = () => {
    const [values, setValues] = useState({
        password: "",
        confPassword:"",
        showPassword: false,
        showconfPassword: false,

    });
  return (
    <motion.div initial={{opacity:0,y:0}} animate={{opacity:1,y:-30}} transition={{duration:1.1,delay:0.3}} className="flex flex-row justify-center items-center min-h-screen  text-white">
            <div className="xl:w-1/2 lg:w-2/3 md:w-full px-8 py-16 flex flex-col justify-center">
                <h1 className="text-4xl font-semibold mb-2 text-white">
                   Set up a new Password
                </h1>
                <p className="text-lg text-gray-100 mb-8">
                    Please fill all the fields to set up a new Password.
                </p>

                <form onSubmit={(e)=>e.preventDefault()} className="space-y-6">
                  

                    {/*New Password Input */}
                    <div className="relative">
                        <label className="text-white text-lg ">Password</label>
                        <input
                            type={values.showPassword ? "text" : "password"}
                            className="mt-2 w-full text-lg p-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={(e) =>
                                setValues({ ...values, password: e.target.value })
                            }
                        />
                        <div
                            className="absolute top-[53px] right-3 text-gray-500 cursor-pointer"
                            onClick={() =>
                                setValues({ ...values, showPassword: !values.showPassword })
                            }
                        >
                            { values.showPassword ? <AiFillEyeInvisible size={25} /> : <MdRemoveRedEye size={25} />}
                        </div>
                    </div>
                    {/* Confirm Password Input */}

                    <div className="relative">
                        <label className="text-white text-lg ">Confirm Password</label>
                        <input
                            type={values.showconfPassword ? "text" : "password"}
                            className="mt-2 w-full text-lg p-4 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter Password"
                            value={values.confPassword}
                            onChange={(e) =>
                                setValues({ ...values, confPassword: e.target.value })
                            }
                        />
                        <div
                            className="absolute top-[53px] right-3 text-gray-500 cursor-pointer"
                            onClick={() =>
                                setValues({ ...values, showconfPassword: !values.showconfPassword })
                            }
                        >
                            { values.showconfPassword ? <AiFillEyeInvisible size={25} /> : <MdRemoveRedEye size={25} />}
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <Link to={"/auth/success"} >
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition duration-300"
                    >
                        Continue
                    </button>
                    </Link>
                </form>
            </div>
        </motion.div>
  )
}

export default NewPassword