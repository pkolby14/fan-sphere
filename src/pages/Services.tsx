import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Innovative solutions with privacy at their core
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">What We Offer</h2>
          <p className="text-gray-600 mb-8">
            At Fan Sphere, we're developing a comprehensive suite of privacy-focused software solutions 
            designed to help fans connect, share, and engage safely online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Secure Community Platform</h2>
            <p className="text-gray-600">
              Create and join fan communities with advanced privacy controls, end-to-end encryption, 
              and customizable sharing settings.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Private discussion forums</li>
              <li>• Encrypted messaging</li>
              <li>• Custom privacy settings</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Content Management</h2>
            <p className="text-gray-600">
              Share and manage your content with complete control over who can access and interact 
              with your uploads.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Secure file sharing</li>
              <li>• Content privacy controls</li>
              <li>• Digital rights management</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Management</h2>
            <p className="text-gray-600">
              Organize and participate in community events with built-in privacy features and 
              secure communication channels.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Private event planning</li>
              <li>• Secure ticketing</li>
              <li>• Attendee privacy protection</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Analytics & Insights</h2>
            <p className="text-gray-600">
              Access community insights while respecting user privacy through anonymous and 
              aggregated data analysis.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Privacy-preserving analytics</li>
              <li>• Anonymous engagement metrics</li>
              <li>• Secure data storage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 