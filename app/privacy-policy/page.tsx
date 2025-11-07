import React from 'react';
import Link from 'next/link';

// This is your new Privacy Policy page.
// 1. Create a folder `app/privacy-policy`
// 2. Place this file inside as `page.tsx`
export default function PrivacyPolicyPage() {
  // Get the current year for the policy
  const currentYear = new Date().getFullYear();

  return (
    // This div provides consistent styling for all your legal pages
    <div className='bg-transparent text-gray-200'>
      <div className='max-w-4xl mx-auto py-20 px-6 sm:px-8 lg:px-10'>
        <h1 className='text-3xl font-bold text-white mb-4'>Privacy Policy</h1>
        <p className='text-gray-400 italic mb-8'>
          {/* ✨ UPDATED: Date */}
          Last Updated: November 7, 2025
        </p>

        <p className='text-gray-300 mt-4'>
          We respect and are committed to protecting your privacy. Publishing,
          selling, or renting any personal data or information to any third
          party without your consent is against our ethics.
        </p>
        <p className='text-gray-300 mt-4'>
          The privacy practices of this statement apply to our services
          available under the domain and subdomains of this site. By visiting
          this Site, you agree to be bound by the terms and conditions of this
          privacy policy. If you do not agree, please do not use or access our
          site.
        </p>
        {/* ✨ FIX: Removed stray </s_code> tag from here */}
        <p className='text-gray-300 mt-4'>
          This privacy policy does not apply to sites maintained by other
          companies or organizations to which we link (such as Upwork, LinkedIn,
          etc.), and we are not responsible for any personal information you
          submit to third parties via our website. Please ensure that you read
          the privacy policy of such other companies or organizations before
          submitting your details.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          Privacy Guarantee
        </h2>
        <p className='text-gray-300 mt-4'>
          We agree that we will not sell or rent your personal information to
          third parties for their marketing purposes without your explicit
          consent. From time to time, we may reveal general statistical
          information about our Site and visitors (e.g., number of visitors,
          common regions, etc.).
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          Information We Collect
        </h2>
        <p className='text-gray-300 mt-4'>
          The Personal Information is used for two general purposes: to respond
          to your inquiries and to provide you with the best possible services.
        </p>
        <p className='text-gray-300 mt-4'>
          You acknowledge that you are disclosing Personal Information
          voluntarily. We primarily collect information when you contact us,
          such as your name, email address, or project details.
        </p>
        <p className='text-gray-300 mt-4'>
          We identify and use your IP address to help diagnose problems with our
          server, and to administer our Website. Your IP address is also used to
          help identify you and to gather broad demographic information.
        </p>
        {/* ✨ FIX: Removed stray </s_code> tag from here */}

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          Cookie Policy
        </h2>
        <p className='text-gray-300 mt-4'>
          Hari Sankar&apos;s website operates a strict privacy policy, and we
          are committed to being transparent about how we use cookies.
        </p>
        <p className='text-gray-300 mt-4'>
          A cookie is a small file on your computer, phone, or other device that
          saves snippets of text for reference by the website. Cookies help make
          your online experience more efficient.
        </p>
        <p className='text-gray-300 mt-4'>
          We use cookies for a few main purposes:
        </p>
        <ul className='list-disc list-inside text-gray-300 mt-4 ml-4'>
          <li>
            <strong>Essential Cookies:</strong> Required for the regular
            operation of our website (e.g., to load correctly).
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Used for performance measurement
            to understand how many people visit our site, how they navigate, and
            what content is popular (e.g., Google Analytics). This allows us to
            improve the site.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These remember your preferences
            to make your experience on our website better for you.
          </li>
        </ul>
        <p className='text-gray-300 mt-4'>
          We do not use advertising cookies to track you across other sites. You
          can see how Google Analytics uses cookie information by visiting{' '}
          <a
            href='https://www.google.com/policies/privacy/partners/'
            target='_blank'
            rel='noreferrer noopener'
            className='text-purple-400 hover:text-purple-300'
          >
            this link
          </a>
          .
        </p>
        <p className='text-gray-300 mt-4'>
          You are always free to decline our cookies if your browser permits.
          Most browsers allow you to manage or delete cookies in their Settings,
          usually under &quot;Privacy&quot; or &quot;Security&quot;.
        </p>

        <h2 className='text-2xl font-semibold text-white mt-8 mb-4'>
          Contact Us
        </h2>
        <p className='text-gray-300 mt-4'>
          For any questions or concerns regarding your privacy, you may contact
          me at:
          <br />
          <a
            href='mailto:codeforyou4161@gmail.com'
            className='text-purple-400 hover:text-purple-300'
          >
            {/* ✨ UPDATED: Email */}
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
