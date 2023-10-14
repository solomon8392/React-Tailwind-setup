import React from 'react'

const Loader = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          src="./" // Replace with the path to your loader image
          alt="Loading..."
          className="w-16 h-16"
        />
      </div>
    );
  };

  export default Loader;