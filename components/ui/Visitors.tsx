"use client";

import { useState, useEffect } from "react";

const VisitorCount = () => {
  // Use a separate state to track mounting to handle hydration safely.
  const [mounted, setMounted] = useState(false);
  
  // Initialize count lazily using a function. 
  // This runs once during the initial render phase, avoiding the need for 'setCount' in useEffect.
  // Since we don't render until 'mounted' is true, the server/client value mismatch during hydration is hidden.
  const [count] = useState(() => Math.floor(Math.random() * 100) + 1);

  useEffect(() => {
    // Only set mounted to true on the client
    setMounted(true);
  }, []);

  // Return null on server and first client render to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-md border border-gray-200 z-50">
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
      <svg
        className="w-3.5 h-3.5 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <span className="text-xs font-medium text-gray-700">
        {count}
      </span>
    </div>
  );
};

export default VisitorCount;
