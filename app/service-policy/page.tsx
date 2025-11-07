import React from 'react';

// This is your new Service & Refund Policy page.
// 1. Create a folder `app/service-policy`
// 2. Place this file inside as `page.tsx`
export default function ServicePolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    // This div provides consistent styling for all your legal pages
    <div className='bg-transparent text-gray-200'>
      <div className='max-w-4xl mx-auto py-20 px-6 sm:px-8 lg:px-10'>
        <h1 className='text-3xl font-bold text-white mb-4'>
          Service, Refund & Cancellation Policy
        </h1>
        <p className='text-gray-400 italic mb-8'>
          Last Updated: November 7, 2025
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          1. Service Delivery
        </h2>
        <p className='text-gray-300 mt-4'>
          As a freelance service provider, Hari Sankar delivers digital services
          and solutions, including but not limited to website, mobile, AI
          development, software engineering, and consultation.
        </p>
        <p className='text-gray-300 mt-4'>
          All services are delivered digitally via electronic means (such as
          email, GitHub repositories, or cloud platforms). There is no physical
          shipping of products.
        </p>
        <p className='text-gray-300 mt-4'>
          Timelines for service delivery are agreed upon on a per-project basis
          and will be outlined in a formal Service Agreement or project
          proposal.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          2. Refund & Cancellation Policy
        </h2>
        <p className='text-gray-300 mt-4'>
          Due to the nature of the services being digital and custom-built, we
          adhere to a strict policy regarding refunds and cancellations.
        </p>
        <p className='text-gray-300 mt-4'>
          <strong>&quot;NO REFUND&quot; & &quot;NO CANCELLATION&quot;</strong>
        </p>
        <p className='text-gray-300 mt-4'>
          Once a project has commenced and/or payment (including any deposit or
          advance) has been made, no refunds or cancellations will be
          entertained. We dedicate significant time and resources to each
          project from the outset.
        </p>
        <p className='text-gray-300 mt-4'>
          Any exceptions to this policy are at the sole discretion of Hari
          Sankar and must be agreed upon in writing.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          3. Contact Us
        </h2>
        <p className='text-gray-300 mt-4'>
          For any questions or clarification regarding these policies, you may
          contact me at:
          <br />
          <a
            href='mailto:codeforyou4161@gmail.com'
            className='text-purple-400 hover:text-purple-300'
          >
            codeforyou4161@gmail.com
          </a>
        </p>
        <p className='text-gray-300 mt-4'>
          © {currentYear} Hari Sankar, All rights reserved.
        </p>
      </div>
    </div>
  );
}
