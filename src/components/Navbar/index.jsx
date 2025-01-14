import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <nav>
            <h1>
                aluraStories.
            </h1>
            <ul>
                <li>
                    <NavLink
                        to='/'
                    >
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/favorites'
                    >
                            Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                    >
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/authors'
                    >
                            Authors
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                    >
                            Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/create-posts'
                    >
                            Create Posts
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar