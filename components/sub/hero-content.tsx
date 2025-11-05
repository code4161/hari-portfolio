'use client';

import { SparklesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation'; // ✨ CHANGED: Import TypeAnimation

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/lib/motion';

export const HeroContent = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          // ✨ CHANGED: Fixed typo (removed extra ']')
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>
            {/* ✨ CHANGED: Personalized intro */}
            Hari Sankar // Experienced Freelancer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
        >
          {/* ✨ CHANGED: Added your name and dynamic text */}
          <span>
            Hi, I'm Hari.
            <br />I build{' '}
            <TypeAnimation
              sequence={[
                // You can customize these to match your skills
                'Web Applications',
                2000,
                'Mobile Apps',
                2000,
                'Automation Tools',
                2000,
                'AI Solutions',
                2000,
              ]}
              wrapper='span'
              speed={50}
              className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
              repeat={Infinity}
            />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          {/* ✨ CHANGED: Refined bio for a stronger freelance voice */}
          As an experienced Full Stack Engineer, I bring value to business,
          through Web, Mobile, Automation and AI solutions. Let's build
          something amazing together.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
          href='#contact' // ✨ CHANGED: Point to your contact section
        >
          {/* ✨ CHANGED: Stronger Call-to-Action */}
          Get in Touch
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
      >
        <Image
          src='/hero-bg.svg'
          alt='work icons'
          height={650}
          width={650}
          draggable={false}
          className='select-none'
        />
      </motion.div>
    </motion.div>
  );
};
