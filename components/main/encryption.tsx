'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from '@/lib/motion';

// ✨ NEW: A reusable component for your feature cards
const FeatureCard = ({ icon, title, description, index }: any) => {
  // Animate from left for items 0 & 2, from right for 1 & 3
  const variants =
    index % 2 === 0
      ? slideInFromLeft(0.5 + index * 0.2)
      : slideInFromRight(0.5 + index * 0.2);

  return (
    <motion.div
      variants={variants}
      className='flex flex-col items-center text-center p-8 rounded-2xl 
                 border border-[#7042F88B] bg-[#0300145e] backdrop-blur-md shadow-lg'
    >
      <Image src={icon} alt={title} width={70} height={70} className='mb-4' />
      <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
      <p className='text-lg text-gray-300'>{description}</p>
    </motion.div>
  );
};

// ✨ RENAMED: from 'Encryption' to 'CoreFeatures'
const CoreFeatures = () => {
  return (
    // ✨ CHANGED: Switched to flex-col and added padding
    <div className='flex flex-col relative items-center justify-center min-h-screen w-full h-full py-20'>
      {/* This is the background video */}
      <div className='w-full h-full absolute top-0 left-0 z-[-10]'>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='false'
          className='w-full h-full object-cover'
          // ✨ NOTE: You might want to rename this video from 'encryption-bg'
          // to something more general like 'features-bg.webm'
        >
          <source src='/videos/encryption-bg.webm' type='video/webm' />
        </video>
      </div>

      {/* This is the content that sits ON TOP of the video */}
      <div className='flex flex-col items-center justify-center z-20 w-full max-w-7xl px-10'>
        {/* 1. The Main Title */}
        <motion.div
          variants={slideInFromTop}
          className='text-[40px] font-medium text-center text-gray-200 mb-12'
        >
          {/* ✨ CHANGED: Title reflects all new topics */}
          Secure, Performant,{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            & Scalable
          </span>{' '}
          Solutions.
        </motion.div>

        {/* 2. The new 2x2 Grid */}
        {/* ✨ NEW: Replaced the single lock with a 2x2 grid of features */}
        <motion.div
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'
        >
          {/* Card 1: Performance */}
          <FeatureCard
            icon='/rocket-icon.png' // ✨ NEW ICON NEEDED
            title='Performance'
            description='Blazing-fast applications optimized for an exceptional user experience.'
            index={0}
          />

          {/* Card 2: Security (Re-uses your lock) */}
          <FeatureCard
            icon='/lock-main.png'
            title='Security'
            description='End-to-end encryption and best practices to keep your data secure.'
            index={1}
          />

          {/* Card 3: Scalability */}
          <FeatureCard
            icon='/scale-icon.png' // ✨ NEW ICON NEEDED
            title='Scalability'
            description='Systems designed to grow with your user base and business needs.'
            index={2}
          />

          {/* Card 4: Resiliency */}
          <FeatureCard
            icon='/shield-icon.png' // ✨ NEW ICON NEEDED
            title='Resiliency'
            description='Fault-tolerant architecture that ensures reliability and high uptime.'
            index={3}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CoreFeatures;
