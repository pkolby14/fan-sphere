import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">About Fan Sphere</h1>
          <p className="text-xl text-gray-600">
            Building the future of secure fan communities
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded with a vision to revolutionize how fans connect online, Fan Sphere emerged from a simple idea: 
            that people should be able to share their passions freely while maintaining control over their privacy.
          </p>
          <p className="text-gray-600">
            Today, we're working on developing cutting-edge software solutions that put user privacy first while 
            creating engaging spaces for communities to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To create innovative, privacy-focused software solutions that enable fans to connect, share, and celebrate 
              their interests in a secure and engaging environment.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the leading platform for privacy-conscious fan communities, setting new standards for 
              how people connect and share online.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-xl font-semibold text-indigo-600 mb-2">Privacy First</div>
              <p className="text-gray-600">User privacy and data protection are at the heart of everything we do</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold text-indigo-600 mb-2">Innovation</div>
              <p className="text-gray-600">Constantly pushing boundaries to create better solutions</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold text-indigo-600 mb-2">Community</div>
              <p className="text-gray-600">Building strong, engaged, and secure communities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 