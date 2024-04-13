// components/CommunityForum.js

import Link from 'next/link';
import React from 'react';

const CommunityForum = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Community Forum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example forum posts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-wrap mb-2">10 Essential Healthcare Tips for a Healthy Lifestyle</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra nisl sed
            felis tincidunt, at dictum ex ultrices.
          </p>
          <span className="text-gray-500">Posted by Dr .John Doe</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-wrap mb-2">Navigating Healthcare: Tips for Making Informed Decisions</h2>
          <p className="text-gray-700 mb-4">
            Sed quis ante sed lacus feugiat fringilla. Maecenas vestibulum eros at libero
            mattis, in vehicula mauris tempus.
          </p>
          <span className="text-gray-500">Posted by Dr .Jane Smith</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl text-wrap font-semibold mb-2">The Road to Wellness: Essential Healthcare Recommendations</h2>
          <p className="text-gray-700 mb-4">
            Vestibulum ac enim vel ligula sagittis vestibulum. Quisque fermentum mi non
            dapibus fermentum.
          </p>
          <span className="text-gray-500">Posted by Dr. Alex Johnson</span>
        </div>
        {/* Add more posts as needed */}
      </div>
      
    </div>
  );
};

export default CommunityForum;
