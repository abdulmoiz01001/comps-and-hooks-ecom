import React from 'react';

const TermsAndConditionsComp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
        <div className="space-y-8 overflow-y-auto max-h-[70vh] p-4">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to our website. By accessing and using our site, you agree to comply with the following terms and conditions. Please read them carefully.
            </p>
          </div>
          
          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Use of the Website</h2>
            <p className="text-gray-700">
              You may use our website for lawful purposes only. You must not use it in a way that infringes the rights of others or restricts their use and enjoyment.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>No unauthorized access or hacking of our site.</li>
              <li>No posting of harmful or offensive content.</li>
              <li>Respect the privacy of others.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website, including text, graphics, logos, and images, is the property of our company. You may not reproduce or distribute any content without our permission.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
            <p className="text-gray-700">
              We are not liable for any damages arising from the use or inability to use our website. This includes direct, indirect, incidental, and consequential damages.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Policy Changes</h2>
            <p className="text-gray-700">
              We may update these terms and conditions from time to time. Please check this page regularly to stay informed of any changes.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Changes take effect immediately upon posting.</li>
              <li>Continued use of the site constitutes acceptance of the updated terms.</li>
            </ul>
          </div>

          {/* More sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsComp;
