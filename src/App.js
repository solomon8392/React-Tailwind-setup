import React, { useState, useEffect } from 'react';
import Loader from './loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., data fetching)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change the delay as needed
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? <Loader /> : <profile />}
    </div>
  );
};

export default App;



{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,700&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Manrope:wght@300;400;500;700;800&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,200;1,300;1,500;1,700;1,800&display=swap" rel="stylesheet"> */}