import { NavLink } from "react-router-dom";

const Filters = () => {
    const activeStyle = 'underline underline-offset-8 font-medium text-indigo-700 text-2xl';

    return (
        <nav className='flex justify-center items-center w-full pt-12 pb-24 px-12 text-gray-500'>
            <ul className='flex flex-wrap justify-center gap-12'>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/web-development'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Web Development
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/data-science'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Data Science
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/marketing'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Marketing
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/digital-content'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Digital Content
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/blockchain-web3'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Blockchain and Web3
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/cybersecurity'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Cybersecurity
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Filters;
