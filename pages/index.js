import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useSpring, animated } from 'react-spring';
import { useState } from 'react'; // <-- added import
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import {SlEye} from 'react-icons/sl'
import {CiChat1} from 'react-icons/ci'
import {MdMenu, MdClose} from 'react-icons/md' // <-- added import

import HeroImage from '@/public/images/hero.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // state for mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // function to toggle mobile menu
  const handleToggleMobileMenu = () => {
    setShowMobileMenu(prevState => !prevState);
  }

  return (
    <>
      <Head>
        <title>Ameego Network</title>
        <meta name="description" content="Quality Content for Serious Brands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Desktop Navigation */}
      <nav className='p-6 flex justify-between items-center border-b-[1px] border-[#171717]'>
        <h1 className='text-white w-fit text-xl font-bold'>AMEEGO</h1>
        <div className=' text-[#535353] p-2 px-6 hidden sm:flex'> {/* <-- hide on mobile */}
          <button className='mx-4'>About</button>
          <button className='mx-4'>Testimonials</button>
          <button className='mx-4'>Portfolio</button>
          <button className='mx-4'>Plans</button>
        </div>
        <button className='cursor-pointer text-[#535353] border-[1px] border-[#535353] h-fit p-2 px-4 rounded-full hidden sm:block'> {/* <-- hide on mobile */}
          Contact Us
        </button>
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