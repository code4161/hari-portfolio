import React from 'react'; // Import React for JSX

// ✨ FIX: Moved FOOTER_DATA inline and removed icon imports
// We'll just render the names, as the icon components aren't available
const FOOTER_DATA = [
  {
    title: 'Reach Me',
    data: [
      {
        name: 'Upwork',
        // icon: SiUpwork, // Removed icon
        link: 'https://www.upwork.com/freelancers/~01881e3af3a211f8e3',
      },
      {
        name: 'Fiverr',
        // icon: SiFiverr, // Removed icon
        link: 'https://www.fiverr.com/harisankar111?public_mode=true',
      },
      {
        name: 'LinkedIn',
        // icon: RxLinkedinLogo, // Removed icon
        link: 'https://www.linkedin.com/in/hari-sankar-2a1a20332/',
      },
      {
        name: 'Email',
        // icon: HiOutlineMail, // Removed icon
        link: 'mailto:contact@harisankar.dev',
      },
    ],
  },
];

export const Footer = () => {
  // Access the only column, which is 'Reach Me'
  const reachMeColumn = FOOTER_DATA[0];

  return (
    <div className='w-full bg-transparent text-gray-200 shadow-lg py-12 px-4'>
      <div className='w-full flex flex-col items-center justify-center max-w-7xl mx-auto'>
        {/* Quote Section */}
        <div className='w-full max-w-3xl text-center mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-white leading-tight'>
            &quot;Let&apos;s evolve your business.
          </h2>
          <p className='text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mt-2'>
            Next-gen AI centric development.&quot;
          </p>
        </div>

        {/* &quot;Reach Me&quot; Section */}
        <div className='mb-8'>
          <h3 className='font-bold text-2xl text-white text-center mb-6'>
            {reachMeColumn.title}
          </h3>
          <div className='flex flex-row items-center justify-center gap-8 flex-wrap'>
            {/* ✨ FIX: Replaced Next.js <Link> with standard <a> tag */}
            {reachMeColumn.data.map(({ name, link }) => (
              <a
                key={name}
                href={link}
                target='_blank'
                rel='noreferrer noopener'
                className='flex flex-col items-center group transition-all hover:text-purple-400'
              >
                {/* Icon rendering removed as they are not available */}
                <span className='text-[16px] md:text-[18px] font-medium'>
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links Section */}
        <div className='w-full flex flex-row items-center justify-center gap-x-6 gap-y-2 flex-wrap mb-8 mt-4'>
          {/* ✨ FIX: Replaced Next.js <Link> with standard <a> tag */}
          <a
            href='/terms-and-conditions'
            className='text-sm text-gray-400 hover:text-white transition-colors'
          >
            Terms & Conditions
          </a>
          <span className='text-gray-500 hidden sm:inline'>|</span>
          <a
            href='/privacy-policy'
            className='text-sm text-gray-400 hover:text-white transition-colors'
          >
            Privacy Policy
          </a>
          <span className='text-gray-500 hidden sm:inline'>|</span>
          <a
            href='/service-policy'
            className='text-sm text-gray-400 hover:text-white transition-colors'
          >
            Service & Refund Policy
          </a>
        </div>

        {/* Copyright */}
        <div className='text-[14px] text-center text-gray-400'>
          &copy; Hari Sankar {new Date().getFullYear()} Inc. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};
