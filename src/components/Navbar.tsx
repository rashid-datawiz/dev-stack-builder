import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <div className='border-b border-gray-300 sticky top-0 z-50 border-b border-gray-300 bg-white'>
            <nav className='bg-white flex justify-between gap-4 container mx-auto py-4 '>
                <img src={Logo} className='w-[100px] h-[30px]' alt="" />
                <ul className='flex gap-4 items-center'>
                    <li><a className='text-red-500 font-bold' href="/">Home</a></li>
                    <li><a href="/">Technologies</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>

                <div className='flex justify-center gap-4'>
                    <button className='bg-white px-4 py-2 rounded-4xl  hover:bg-blue-200'>Sign In</button>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-4xl'>Sign Up</button>
                </div>


            </nav>
        </div>

    );
};

export default Navbar;