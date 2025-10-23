"use client";

const VisitorCount = () => {
  return (
    <div className="fixed bottom-6 right-6 flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-md border border-gray-200">
      <div className="w-2 h-2 bg-emerald-700 rounded-full animate-pulse"></div>
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
      <span className="text-xs font-medium text-gray-700">16</span>
    </div>
  );
};

export default VisitorCount;
