import { NavLink } from "react-router-dom"


const Navbar = () => {

    const activeStyle = 'underline underline-offset-8 font-medium text-indigo-700 text-2xl'

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-8 px-16">
            <h1>
                <span className="text-indigo-400">alura</span>Stories.
            </h1>
            <ul className="flex items-center gap-12">
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive}) => isActive ? activeStyle : undefined }>
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/favorites'
                        className={({ isActive}) => isActive ? activeStyle : undefined }>
                            Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive}) => isActive ? activeStyle : undefined }>
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/authors'
                        className={({ isActive}) => isActive ? activeStyle : undefined }>
                            Authors
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive}) => isActive ? activeStyle : undefined }>
                            Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/create-posts'
                        className='py-4 px-10 bg-indigo-400 text-white rounded-lg hover:bg-indigo-700'>
                            Create Posts
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar