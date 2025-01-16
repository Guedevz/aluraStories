import { NavLink } from "react-router-dom"

const Filters = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/posts/categories/:Web-Development'></NavLink>Web Development</li>
                <li><NavLink to='/posts/categories/:Data-Science'></NavLink>Data Science</li>
                <li><NavLink to='/posts/categories/:Marketing'></NavLink>Marketing</li>
                <li><NavLink to='/posts/categories/:Digital-Content'></NavLink>Digital Content</li>
                <li><NavLink to='/posts/categories/:Blockchain-Web3'></NavLink>Blockchain and Web3</li>
                <li><NavLink to='/posts/categories/:Cybersecurity'></NavLink>Cybersecurity</li>
            </ul>
        </nav>
    )
}

export default Filters