import { useState } from "react";
import { NavLink } from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = 'underline underline-offset-8 font-medium text-indigo-700 text-2xl'

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-8 px-16 top-0 bg-white">
            <h1>
                <span className="text-indigo-400">alura</span>Stories.
            </h1>
            <ul className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-12 p-8 transform transition-transform duration-300 lg:static lg:flex lg:flex-row lg:h-auto lg:p-0 lg:translate-x-0 lg:justify-end ${isOpen ? "translate-x-0" : "-translate-x-full"}`} >
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive}) => isActive ? activeStyle : undefined } onClick={() => setIsOpen(false)}>
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/favorites'
                        className={({ isActive}) => isActive ? activeStyle : undefined } onClick={() => setIsOpen(false)}>
                            Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive}) => isActive ? activeStyle : undefined } onClick={() => setIsOpen(false)}>
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive}) => isActive ? activeStyle : undefined } onClick={() => setIsOpen(false)}>
                            Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/create-posts'
                        className={({ isActive }) =>
                            `py-4 px-10 rounded-lg ${
                            isActive ? 'bg-indigo-700 text-white' : 'bg-indigo-400 text-white'
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                        >
                        Create Post
                    </NavLink>
                </li>
            </ul>

            <button className="text-2xl z-20 lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <IoMdClose /> : <FaBarsStaggered />}
            </button>
        </nav>
    )
}

export default Navbar