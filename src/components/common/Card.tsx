import GitHubIcon from "../icons/GitHubIcons";
import SvgLinkedIcon from "../icons/Linked";
import TwitterIcon from "../icons/TwitterIcon";
import { motion } from "framer-motion"

const ComponentCards = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4,
                delay: 0.3,
                ease: 'easeInOut',
            }}

            className="flex items-center p-8 w-full h-52 bg-white rounded-3xl shadow-lg">
            <section className="flex justify-center items-center w-24 h-24 
                hover:cursor-pointer hover:scale-110 duration-300">
                <img src="/src/assets/logo.png" alt="profile" className="border-2 border-green-500" />
            </section>

            <section className="block border-l border-gray-300 m-3">
                <div className="pl-3">
                    <h3 className="text-gray-600 font-semibold text-lg">El Papuh Wa</h3>
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] 
                    to-[#27272A] text-2xl font-bold">Web
                        Developer</h3>
                </div>
                <div className="flex gap-3 pt-2 pl-3 justify-around">
                    <GitHubIcon size={30}></GitHubIcon>
                    <TwitterIcon size={34} color="#1DA1F2"></TwitterIcon>
                    <SvgLinkedIcon size={30} color="#0077b5" />
                </div>
            </section>
        </motion.div>
    )
}

export default ComponentCards;