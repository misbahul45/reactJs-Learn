import React from 'react'

const Missing = () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-extrabold">404 - Page Not Found</h1>
        <p className="text-lg mt-4">Sorry, the page you are looking for doesn't exist.</p>
        <button
          className="bg-white text-blue-500 rounded-full py-2 px-4 mt-8 hover:bg-blue-500 hover:text-white"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Missing