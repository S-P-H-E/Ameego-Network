import Head from 'next/head'
import Image from 'next/image'
import { useSpring, animated } from 'react-spring';
import { useState } from 'react'; // <-- added import

import {MdVerified} from 'react-icons/md'
import {BsArrowRight} from 'react-icons/bs'
import {CiChat1} from 'react-icons/ci'
import {MdMenu, MdClose} from 'react-icons/md' // <-- added import
import asterisk from '@/public/assets/images/asterisk.png'
import tate1 from '@/public/assets/images/tate1.png'

import Nav from '@/components/Nav';

export default function Home() {

  return (
    <>
      <Head>
        <title>Ameego Network</title>
        <meta name="description" content="Quality Content for Serious Brands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className='flex flex-col justify-center items-center m-10 mt-20 text-center uppercase font-bold text-2xl md:text-6xl'>
        <h1>Transforming your ideas </h1>
        <h1 className='m3-6 flex'> 
          <div className='hidden md:flex md:h-14 md:w-20 w-16 h-10 mx-4 bg-[#FFC802] p-1 rounded-full justify-center items-center'>
            <Image src={asterisk} className='md:w-10'/>
          </div>
          into reality
        </h1>
        <button className='font-medium text-[15px] bg-[#FFC802] md:p-5 px-5 py-2 m-10 rounded-full border-2 border-black flex justify-center items-center transition-all hover:scale-90'>
          Let's Talk
          <BsArrowRight />
        </button>
      </div>

      {/* banner */}
      <div className='py-10 text-black border-y-2 border-black text-[7px] md:text-[12px]'>
        <div className='flex gap-6 justify-center items-center overflow-auto max-w-[10000px]'>
          <h1 className='border border-black w-fit p-3 rounded-full'>Fast Content Production</h1>
          <h1 className='border border-black w-fit p-3 rounded-full'>Increased Views and Followers</h1>
          <h1 className='border border-black w-fit p-3 rounded-full'>Boosted Post Engament</h1>
        </div>
      </div>

      {/* testimonials */}
      <div className='my-20 rounded-[40px] flex flex-col justify-center'>
        <h1 className='text-center'>What our partners say</h1>
        <div className='flex justify-center items-center flex-col md:flex-row'>
          <div className='w-fit border border-black m-3 md:m-10 rounded-[20px] flex p-5 content shadow-xl'>
              <div>
                <div className='tate-img w-[50px] h-[50px] rounded-full m-1'/>
              </div>
              <div className='mx-3'>
                <div className='flex justify-center items-center gap-1'>
                  <h1 className='font-bold text-xl'>Andrew Tate</h1>
                  <MdVerified className='text-[#FFC802]' size={20}/>
                  <h2 className='text-[#737373] text-[15px] hidden md:flex'>@Cobratate</h2>
                </div>
                <h2 className='text-[12px] md:text-[18px]'>These are epic.</h2>
              </div>
            </div>

            <div className='w-fit border border-black m-3 md:m-10 rounded-[20px] flex p-5 content shadow-xl'>
              <div>
                <div className='tristan-img w-[50px] h-[50px] rounded-full m-1'/>
              </div>
              <div className='mx-3'>
                <div className='flex justify-center items-center gap-1'>
                  <h1 className='font-bold text-xl'>Tristan Tate</h1>
                  <MdVerified className='text-[#FFC802]' size={20}/>
                  <h2 className='text-[#737373] text-[15px] hidden md:flex'>@Talismantate</h2>
                </div>
                <h2 className='text-[12px] md:text-[18px]'>Thanks bro.</h2>
              </div>
            </div>

            <div className='w-fit border border-black m-3 md:m-10 rounded-[20px] flex p-5 content shadow-xl'>
              <div>
                <div className='justin-img w-[50px] h-[50px] rounded-full m-1'/>
              </div>
              <div className='mx-3'>
                <div className='flex justify-center items-center gap-1'>
                  <h1 className='font-bold text-xl'>Justin Waller</h1>
                  <MdVerified className='text-[#FFC802]' size={20}/>
                  <h2 className='text-[#737373] text-[15px] hidden md:flex'>@Waller7J</h2>
                </div>
                <h2 className='text-[12px] md:text-[18px]'>Thanks G 🙏 love the video.</h2>
              </div>
            </div>
        </div>
      </div>

      <div>
        <h1 className='text-center'>What our partners say</h1>
      </div>
      </>
  )
}