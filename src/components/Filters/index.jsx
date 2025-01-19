import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from '../../context';

const Filters = () => {
    const context = useContext(PostContext);
    const activeStyle = 'underline underline-offset-8 font-medium text-indigo-700 text-2xl';

    return (
        <nav className='flex justify-center items-center w-full pt-12 pb-24 px-12 text-gray-500'>
            <ul className='flex flex-wrap justify-center gap-12'>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/web-development'
                        onClick={() => context.setSearchByCategory('web development')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Web Development
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/data-science'
                        onClick={() => context.setSearchByCategory('data science')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Data Science
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/marketing'
                        onClick={() => context.setSearchByCategory('marketing')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Marketing
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/digital-content'
                        onClick={() => context.setSearchByCategory('digital content')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Digital Content
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/blockchain-web3'
                        onClick={() => context.setSearchByCategory('blockchain and web3')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Blockchain and Web3
                    </NavLink>
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink
                        to='/cybersecurity'
                        onClick={() => context.setSearchByCategory('cybersecurity')}
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
