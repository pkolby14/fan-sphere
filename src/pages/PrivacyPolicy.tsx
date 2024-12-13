import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Fan Sphere ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
            </p>
            <p className="text-gray-600">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-600 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 mb-4">
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Contact us for support</li>
              <li>Participate in promotions or surveys</li>
              <li>Post content in our forums</li>
            </ul>
            <p className="text-gray-600 mb-4">This information may include:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 mb-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Account credentials</li>
              <li>Profile information</li>
              <li>Payment information (processed securely through authorized payment processors)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">When you access our platform, we may automatically collect:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Device information (type, operating system, browser)</li>
              <li>IP address and location data</li>
              <li>Usage patterns and preferences</li>
              <li>Cookies and tracking technologies data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Providing and maintaining our services</li>
              <li>Personalizing your experience</li>
              <li>Processing your transactions</li>
              <li>Communicating about updates and promotions</li>
              <li>Analyzing and improving our platform</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 mb-4">
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Other users (only information you choose to make public)</li>
              <li>Potential buyers in case of a business transaction</li>
            </ul>
            <p className="text-gray-600">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes without your explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement robust security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure data storage with encryption at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Export your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Types of cookies we use:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Essential cookies for platform functionality</li>
              <li>Analytics cookies to improve our services</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for relevant advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our services are not intended for children under 13 years of age. We do not knowingly collect or maintain information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              We may transfer your information internationally. When we do, we ensure appropriate safeguards are in place to protect your data and comply with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions or concerns about this Privacy Policy or our practices, please contact us at:
              <br />
              Email: privacy@fansphere.tech
              <br />
              Address: 350 Fifth Avenue, Manhattan, NY 10118
              <br />
              Phone: (212) 555-0123
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 