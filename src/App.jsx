import React, { useState } from 'react';

export default function App() {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleGetStarted = () => {
    console.log("Get Started button clicked");
    setButtonDisabled(true);
    // Simulate an API call with loading feedback
    setTimeout(() => {
      console.log("Simulated API request completed");
      setButtonDisabled(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col">
      <header className="p-4 text-center text-3xl font-bold">
        Boss G
      </header>
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-7xl mb-4">Welcome to Boss G</h1>
        <p className="text-lg md:text-2xl mb-8">
          Elevate your productivity with the ultimate management tool.
        </p>
        <button 
          onClick={handleGetStarted}
          disabled={buttonDisabled}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold cursor-pointer transition-opacity duration-300 disabled:opacity-50"
        >
          {buttonDisabled ? "Loading..." : "Get Started"}
        </button>
      </main>
      <footer className="p-4 text-center">
        <a className="underline cursor-pointer" href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}