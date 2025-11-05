import Link from 'next/link';
import { FOOTER_DATA } from '@/constants';
// ✨ NEW: Import any additional icons you use, e.g., for Email
import { HiOutlineMail } from 'react-icons/hi'; // Example: npm install react-icons

export const Footer = () => {
  // Access the only column, which is 'Reach Me'
  const reachMeColumn = FOOTER_DATA[0];

  return (
    <div className='w-full bg-transparent text-gray-200 shadow-lg py-12 px-4'>
      <div className='w-full flex flex-col items-center justify-center max-w-7xl mx-auto'>
        {/* Quote Section (Unchanged) */}
        <div className='w-full max-w-3xl text-center mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-white leading-tight'>
            &quot;Let&apos;s evolve your business.
          </h2>
          <p className='text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mt-2'>
            Next-gen AI centric development.&quot;
          </p>
        </div>

        <div className='mb-8'>
          <h3 className='font-bold text-2xl text-white text-center mb-6'>
            {reachMeColumn.title}
          </h3>
          <div className='flex flex-row items-center justify-center gap-8 flex-wrap'>
            {reachMeColumn.data.map(({ icon: Icon, name, link }) => (
              <Link
                key={name}
                href={link}
                target='_blank'
                rel='noreferrer noopener'
                className='flex flex-col items-center group transition-all hover:text-purple-400'
              >
                {Icon && (
                  <Icon className='w-8 h-8 md:w-10 md:h-10 mb-2 transition-transform group-hover:scale-110' />
                )}
                <span className='text-[16px] md:text-[18px] font-medium'>
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright (Unchanged) */}
        <div className='mt-8 text-[14px] text-center text-gray-400'>
          &copy; Hari Sankar {new Date().getFullYear()} Inc. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};
