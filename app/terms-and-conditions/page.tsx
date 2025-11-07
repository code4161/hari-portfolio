import React from 'react';

// This is your new Terms and Conditions page.
// 1. Create a folder `app/terms-and-conditions`
// 2. Place this file inside as `page.tsx`
export default function TermsAndConditionsPage() {
  const currentYear = new Date().getFullYear();

  return (
    // This div provides consistent styling for all your legal pages
    <div className='bg-transparent text-gray-200'>
      <div className='max-w-4xl mx-auto py-20 px-6 sm:px-8 lg:px-10'>
        <h1 className='text-3xl font-bold text-white mb-4'>
          Terms & Conditions
        </h1>
        <p className='text-gray-400 italic mb-8'>
          Last Updated: November 7, 2025
        </p>

        <p className='text-gray-300 mt-4'>
          Thank you for accessing hari-portfolio (hereinafter referred to as
          "the Site"). This site is owned and operated by Hari Sankar. By
          accessing this site, you indicate your unconditional acceptance of
          these terms & conditions. We reserve this right, in our sole
          discretion, to update or revise these terms & conditions. Continued
          use of the site following the posting of any changes to the 'terms &
          conditions', constitutes your acceptance of those changes.
        </p>
        <p className='text-gray-300 mt-4'>
          At this Site, we try our best to create a space where you can explore
          my portfolio and services in a safe and secure environment. All
          information and content displayed on the Site constitutes an
          "invitation to offer" in the context of my freelance services. Any
          request for my services, whether through a contact form or email,
          constitutes your "offer" which shall be subject to a separate SERVICE
          AGREEMENT to be agreed upon by both parties.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          1. Eligibility to Use Our Site
        </h2>
        <p className='text-gray-300 mt-4'>
          Use of the Site is available only to persons who can legally enter
          into contracts under applicable laws. Persons who are "incompetent to
          contract", within the meaning of the Indian Contract Act, 1872
          including un-discharged insolvents etc. are not eligible to use the
          Site. The Site reserves the right to terminate your access if it is
          discovered that you are under the age of 18 years or suffer from any
          other disability, as recognized under Indian Contract Act, 1872.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          2. Intellectual Property
        </h2>
        <p className='text-gray-300 mt-4'>
          All content present on this site, including text, graphics, logos,
          images, and code, is the property of Hari Sankar unless otherwise
          stated. This content is protected by copyright and other intellectual
          property laws. You may not reproduce, redistribute, or use any content
          from this site for commercial purposes without express written
          permission from Hari Sankar.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          3. Electronic Communications
        </h2>
        <p className='text-gray-300 mt-4'>
          When you use the site or send emails or other data, information, or
          communicate to us, you agree and understand that you are communicating
          with us electronically and give your consent to receive communications
          electronically from us periodically, when required.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          4. Feedback & Submissions
        </h2>
        <p className='text-gray-300 mt-4'>
          All reviews, comments, feedback, suggestions, ideas, and other
          submissions disclosed, submitted or offered to Hari Sankar on or by
          this Site or otherwise (collectively referred to as "Comments") will
          remain Hari Sankar's property. Such disclosure, submission or offer of
          any Comments shall constitute an assignment to Hari Sankar of all
          worldwide rights, titles and interests in all copyrights and other
          intellectual properties in the Comments.
        </p>
        <p className='text-gray-300 mt-4'>
          Hari Sankar will be entitled to use, reproduce, disclose, modify,
          adapt, create derivative works from, publish, display and distribute
          any Comments you submit for any purpose whatsoever, without
          restriction and without compensating you in any way. You agree that
          any Comments submitted by you to the Site will not violate this policy
          or any right of any third party, including copyright, trademark,
          privacy or other personal or proprietary right(s).
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          5. Disclaimer of Warranties & Accuracy
        </h2>
        <p className='text-gray-300 mt-4'>
          While Hari Sankar strives to provide accurate information on this
          portfolio, typographical errors or inaccuracies may occur. The
          information is provided "as is" without warranty of any kind. Hari
          Sankar shall not be liable for any errors or omissions, or for any
          actions taken in reliance on the information presented.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          6. Contact Information
        </h2>
        <p className='text-gray-300 mt-4'>
          For any questions or clarification regarding these Terms & Conditions,
          you may contact me at:
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
