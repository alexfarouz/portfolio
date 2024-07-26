import logo from "../assets/Alex_Farouz_logo.png";
import { FaLink, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-1 w-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <motion.a 
                    whileHover={{ scale: 1.2, color: "#0077b5" }}
                    style={{ display: "inline-block" }}
                    href="https://www.linkedin.com/in/alexander-farouz-753b10251/"
                    target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.2, color: "#333" }}
                    style={{ display: "inline-block" }}
                    href="https://github.com/alexfarouz"
                    target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </motion.a>
            </div>
        </nav>
    )
}

export default Navbar;