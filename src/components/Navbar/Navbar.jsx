import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="md:px-10 px-5 py-4 flex flex-wrap gap-4 justify-between items-center shadow-md">
            <div>
                <NavLink to="/" className="text-4xl text-blue-600 font-semibold ">E-mart</NavLink>
            </div>
            <div className="border-2 border-blue-500 rounded">
                <input className="py-2 px-3 md:w-96 outline-none" type="text" placeholder="Search" />
                <button className="bg-blue-600 p-2 text-white">Search</button>
            </div>
            <ul className="flex justify-center gap-10 text-3xl">
                <NavLink to='/user' className='flex flex-col justify-center items-center text-blue-500'>
                    <i className='bx bxs-user-circle '></i>
                    <span className="text-sm ">Profile</span>
                </NavLink>
                <NavLink to='/message' className='flex flex-col justify-center items-center text-blue-500'>
                    <i className='bx bxs-message-detail'>
                        <span className="relative -top-5 p-1 px-2 right-2 rounded-full bg-red-400 text-white w-10 h-10 text-[12px]">0</span>
                    </i>
                    <span className="text-sm ">Message</span>
                </NavLink>
            </ul>
        </div>
    )
}
