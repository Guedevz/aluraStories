import { NavLink } from "react-router-dom"

const Filters = () => {

    const activeStyle = 'underline underline-offset-8 font-medium text-indigo-700 text-2xl'

    return (
        <nav className='flex justify-center items-center w-full py-24 px-12 text-gray-500'>
            <ul className='flex flex-wrap justify-center gap-12'>
                <li className='whitespace-nowrap'>
                    <NavLink to='/posts/categories/:All' className={({ isActive}) => isActive ? activeStyle : undefined }

                    >
                    </NavLink>
                        All
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink to='/posts/categories/:Web-Development' className={({ isActive}) => isActive ? activeStyle : undefined }
                
                    >
                    </NavLink>
                        Web Development
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink to='/posts/categories/:Data-Science' className={({ isActive}) => isActive ? activeStyle : undefined }
                
                    >
                    </NavLink>
                        Data Science
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink to='/posts/categories/:Marketing' className={({ isActive}) => isActive ? activeStyle : undefined }
                
                    >
                    </NavLink>
                        Marketing
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink to='/posts/categories/:Digital-Content' className={({ isActive}) => isActive ? activeStyle : undefined }
                
                    >
                    </NavLink>
                        Digital Content
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink to='/posts/categories/:Blockchain-Web3' className={({ isActive}) => isActive ? activeStyle : undefined }
                
                    >
                    </NavLink>
                        Blockchain and Web3
                </li>
                <li className='whitespace-nowrap'>
                    <NavLink to='/posts/categories/:Cybersecurity' className={({ isActive}) => isActive ? activeStyle : undefined }
                
                    >
                    </NavLink>
                        Cybersecurity</li>
            </ul>
        </nav>
    )
}

export default Filters