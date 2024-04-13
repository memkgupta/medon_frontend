import React, { useState } from 'react';

const RatingModal = ({ onClose }:{onClose:any}) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event:any) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    // Handle submission of rating (e.g., send to backend)
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-1/3 p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Rate the Meeting</h2>
        <select
          value={rating}
          onChange={handleRatingChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value={0}>Select Rating</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white py-2 px-4 rounded mr-4 hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={rating === 0}
            className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
              rating === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;