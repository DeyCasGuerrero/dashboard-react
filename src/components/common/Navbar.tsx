import { AiFillLayout, AiOutlineUser, AiFillSetting, AiFillWarning, AiTwotonePieChart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { motion } from "framer-motion"

const NavBar = () => {
    return (
        <nav className="p-4 h-screen text-gray-500 min-w-60  flex flex-col justify-between ">
            <div className="mb-4 rounded-full">
                <h1 className="text-2xl font-bold text-center p-2">
                    <span className='text-red-600'>Y</span>
                    <span className='text-green-500'>a</span>
                    <span className='text-orange-500'>n</span>
                    <span className='text-purple-600'>a</span>
                    PayTa
                </h1>
            </div>

            <motion.aside
                initial={{ x: "-300vh", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{
                    duration: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                }}

                className=" bg-white z-10 flex-grow overflow-auto h-full flex flex-col items-center rounded-2xl shadow-xl">
                <h1 className="text-xl font-bold text-center mb-6 mt-4">Menu</h1>
                <div className="text-base font-bold flex flex-col  gap-14 h-full items-start px-4 py-6 rounded-lg ">

                    <Link to={"/"} className="hover:text-blue-500 transform hover:translate-x-5 transition-transform duration-300 flex items-center">
                        <span className="group flex items-center flex-row">
                            <AiFillLayout className="text-gray-500 group-hover:text-blue-500" size={25} />
                            <span className="ml-1">Home</span>
                        </span>
                    </Link>

                    <Link to={"/"} className="hover:text-blue-500  transform hover:translate-x-5 transition-transform duration-300 flex items-center">
                        <span className="group flex items-center flex-row">
                            <AiOutlineUser className="text-gray-500 group-hover:text-blue-500" size={25} />
                            <span className="ml-1">User</span>
                        </span>
                    </Link>

                    <Link to={"/"} className="hover:text-blue-500 transform hover:translate-x-5 transition-transform duration-300  flex items-center">
                        <span className="group flex items-center flex-row">
                            <AiTwotonePieChart className="text-gray-500 group-hover:text-blue-500" size={25} />
                            <span className="ml-1">Analytics</span>
                        </span>
                    </Link>

                    <Link to={"/"} className="hover:text-blue-500 transform hover:translate-x-5 transition-transform duration-300  flex items-center">
                        <span className="group flex items-center flex-row">
                            <AiFillSetting className="text-gray-500 group-hover:text-blue-500" size={25} />
                            <span className="ml-1">Settings</span>
                        </span>
                    </Link>

                    <Link to={""} className="hover:text-blue-500 transform hover:translate-x-5 transition-transform duration-300  flex items-center">
                        <span className="group flex items-center flex-row">
                            <AiFillWarning className="text-gray-500 group-hover:text-blue-500" size={25} />
                            <span className="ml-1">Reports</span>
                        </span>
                    </Link>

                    <div className="mt-auto">
                        <Link to={""} className="hover:text-blue-500 transform hover:scale-110 transition-transform duration-300  flex items-center">
                            <span className="group flex items-center flex-row">
                                <MdLogout className="text-gray-500 group-hover:text-blue-500" size={25} />
                                <span className="ml-1">LogOut</span>
                            </span>
                        </Link>
                    </div>

                </div>

            </motion.aside>
        </nav>
    )
}

export default NavBar;