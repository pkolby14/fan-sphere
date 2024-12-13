import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to Fan Sphere</h1>
          <p className="text-xl text-gray-600">
            Developing innovative software solutions with privacy at our core
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy First</h2>
            <p className="text-gray-600">
              We prioritize your privacy and data security in every solution we develop. Our commitment to protecting user information is unwavering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Innovation Driven</h2>
            <p className="text-gray-600">
              Leveraging cutting-edge technology to create solutions that make a difference in how people connect and share their interests.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-gray-600 mb-4">
            Fan Sphere is dedicated to creating a secure and engaging platform where fans can connect, share, and celebrate their interests while maintaining complete control over their privacy.
          </p>
          <p className="text-gray-600">
            As we continue to grow and expand, our focus remains on developing innovative solutions that put user privacy first while fostering meaningful connections within fan communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-indigo-600 mb-2">Security</div>
            <p className="text-gray-600">End-to-end encryption and robust privacy controls</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-indigo-600 mb-2">Community</div>
            <p className="text-gray-600">Connect with like-minded fans safely and securely</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-indigo-600 mb-2">Innovation</div>
            <p className="text-gray-600">Constantly evolving to meet user needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 