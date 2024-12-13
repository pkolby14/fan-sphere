import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Fan Sphere</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Your ultimate destination for connecting with fellow fans and sharing your passion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 