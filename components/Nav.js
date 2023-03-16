import { useState } from "react";
import {HiOutlineMenuAlt4} from 'react-icons/hi'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // state for mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // function to toggle mobile menu
  const handleToggleMobileMenu = () => {
    setShowMobileMenu(prevState => !prevState);
  }
    return (
        <>
            {/* Desktop Navigation */}
            <nav className='nav p-6 flex justify-between items-center bg-[#FFFFFF] rounded-full my-6 md:m-6 w-full text-black'>
                <h1 className='text-md md:text-xl font-bold'>AMEEGO</h1>

                <div className='p-1 px-6 hidden md:flex'> {/* <-- hide on mobile */}
                <button className='mx-4 hover:underline'>Instagram</button>
                <button className='mx-4 hover:underline'>Twitter</button>
                <button className='mx-4 hover:underline'>YouTube</button>
                <button className='mx-4 hover:underline'>TikTok</button>
                </div>
                
                {/* Mobile Menu Button */}
                <button className='cursor-pointer text-[#535353] h-fit text-2xl px-4 rounded-full md:hidden' onClick={() => setIsMenuOpen(true)}>
                    <HiOutlineMenuAlt4 />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className='fixed top-0 left-0 w-screen h-screen bg-white z-50' style={{ display: isMenuOpen ? 'block' : 'none' }}>
                <button className='absolute top-6 right-6 text-2xl text-gray-700' onClick={() => setIsMenuOpen(false)}>x</button>
                <div className='flex flex-col justify-center items-center h-full'>
                <button className='text-4xl font-bold mb-4'>About</button>
                <button className='text-4xl font-bold mb-4'>Testimonials</button>
                <button className='text-4xl font-bold mb-4'>Portfolio</button>
                <button className='text-4xl font-bold mb-4'>Plans</button>
                <button className='text-4xl font-bold'>Contact Us</button>
                </div>
            </div>
        </>
    )
}