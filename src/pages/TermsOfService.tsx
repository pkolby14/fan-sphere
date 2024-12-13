import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using our services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms,
              you are prohibited from using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Services</h2>
            <p className="text-gray-600">Our AI-powered services are provided under the following conditions:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>You must use our services in compliance with all applicable laws</li>
              <li>You may not misuse or attempt to manipulate our AI systems</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>We reserve the right to modify or terminate services for any reason</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600">
              All content, features, and functionality of our services, including but not limited to
              our AI technology, code, text, graphics, and logos, are owned by us and protected by
              intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-600">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of our services. This includes any errors or omissions
              in any content or loss or damage incurred as a result of the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will notify users of any
              material changes via email or through our services. Continued use of our services
              after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Information</h2>
            <p className="text-gray-600">
              For any questions regarding these Terms of Service, please contact us at:
              <br />
              Email: legal@aicompany.com
              <br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 