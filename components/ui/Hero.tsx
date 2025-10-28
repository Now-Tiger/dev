"use client";

// TODO: Replace with actual readings on the website
const readlingListTemp ="https://github.com/Now-Tiger#:~:text=User%20Authentication%20using,on%20Serverless%20Functions";
const linkedinProfile = "https://linkedin.com/in/now-tiger";

const HeroSection = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-12 md:px-20 lg:px-32">
        <div className="max-w-3xl w-full">
          {/* Header */}
          <p className="font-jb-mono text-gray-500 text-xs md:text-sm mb-4 tracking-tight font-light">
            AI Engineer / Learner / Experimenter
          </p>

          {/* Main Heading */}
          <h1 className="font-soria text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 text-gray-900">
            I experiment with things that fascinate me.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base mb-5 leading-snug font-light">
            No boundaries, no limits. Algorithms, systems, ML, design—if it
            sparks curiosity, I dive in. Then I write about whatever clicks.
          </p>

          {/* Author Info */}
          <div className="flex items-center space-x-3 mb-6 text-xs text-gray-500 font-light">
            <span className="font-normal text-gray-900">Swapnil Narwade</span>
            <span>•</span>
            <span>@Now-Tiger</span>
            <span>•</span>
            <span>Music Nerd</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              className="px-5 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors flex items-center space-x-2 text-xs font-normal"
              onClick={() =>
                window.open(readlingListTemp, "_blank", "noopener,noreferrer")
              }
            >
              <span>Read writing</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <button
              className="px-5 py-2.5 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors border border-gray-300 text-xs font-normal"
              onClick={() =>
                window.open(linkedinProfile, "_blank", "noopener,noreferrer")
              }
            >
              More about me
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
