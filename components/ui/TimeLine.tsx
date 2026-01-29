"use client";

import Link from "next/link";

const TimeLine = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-12 md:px-20 lg:px-32 mb-5" >
        <div className="max-w-3xl w-full">
          {/* Work Experience Timeline */}
          <section>
            {/* Header */}
            <div className="mb-8 mt-30">
              <p className="font-jb-mono text-emerald-500 text-xs uppercase tracking-wider mb-2 font-light">
                The Journey
              </p>
              <h2 className="font-soria text-4xl md:text-5xl lg:text-6xl mb-3 text-gray-900">
                How I got into this
              </h2>
              <p className="text-gray-500 text-sm font-light">
                Years of learning and later
              </p>
            </div>

            {/* Timeline Container */}
            {/*<div className="relative pl-8 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-emerald-200"> */}
              {[
                {
                  icon: "💼",
                  title: "Software Engineer",
                  org: "Social Booster Media",
                  date: "Nov 2025 - Present",
                  desc: "working on AI-driven automation systems where I build end-to-end solutions that replace manual workflows and significantly reduce operational overhead. Built & shipped AI-powered content and automation pipelines using Python, Playwright, LLMs (Llama 3.x), vector databases (Postgres + embeddings), and AWS, along with analytics dashboards in Next.js.",
                  tags: [
                    "React",
                    "Python",
                    "Django",
                    "Supabase",
                    "Playwright",
                    "NextJS",
                    "GCP",
                    "Docker",
                    "Kubernetes",
                    "System Design",
                  ],
                },
                {
                  icon: "💼",
                  title: "Software Engineering Intern",
                  org: "Geta.ai",
                  date: "Dec 2024 - Nov 2025",
                  desc: "High-performing Software Engineer, I built and shipped 10+ features optimizing core products. Delivered scalable systems for 5K+ users and cut reporting latency by 25% using Python/TypeScript while managing AWS/Kubernetes infrastructure.",
                  tags: [
                    "React",
                    "Python",
                    "FastAPI",
                    "MongoDB",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "System Design",
                  ],
                },
                {
                  icon: "🎓",
                  title: "Master of Computer Applications — Data Science",
                  org: "Symbiosis University, Pune",
                  date: "Jun 2023 May 2025",
                  desc: "Completed comprehensive machine learning course covering regression, classification, and supervised learning techniques.",
                  tags: [
                    "Python",
                    "Machine Learning",
                    "Deep Learning",
                    "Computer Vision",
                    "Databases",
                    "Statistics",
                  ],
                },
                {
                  icon: "𝗞",
                  title: "Competitions Contributor",
                  org: "Kaggle",
                  date: "Mar 2022",
                  desc: "I’m an active Contributor on Kaggle since 2021, consistently contributing to data science challenges. I specialize in developing Python notebooks for Predictive Analytics, ML, NLP, Deep Learning tasks. Leveraging my expertise, I frequently utilize Python frameworks and libraries such as scikit-learn, numpy and HuggingFace models to deliver effective solutions.",
                  linkText: "Kaggle Profile",
                  linkUrl: "https://www.kaggle.com/swapnilnarwade/code",
                },
              ].map((item, index) => (
                <div key={index} className="relative mb-10 flex items-start">
                  {/* Timeline Icon */}
                  <div className="absolute -left-0.5 bg-white border-2 rounded-full w-8 h-8 flex items-center justify-center text-lg">
                    <span>{item.icon}</span>
                  </div>

                  {/* Card */}
                  <div className="ml-12 w-full">
                    <div className="bg-white rounded-xl border shadow-sm hover:shadow-lg p-4 hover:shadow-emerald-700/20 transition-all duration-300 cursor-pointer border-gray-200 hover:border-emerald-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-soria lg:text-xl text-base text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 font-light">
                            {item.org}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 font-light">
                          {item.date}
                        </span>
                      </div>

                      <p className="text-sm text-gray-700 mt-2 leading-snug font-light">
                        {item.desc}
                      </p>

                      {/* Tags */}
                      {item.tags && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-light"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Link */}
                      {item.linkText && (
                        <div className="mt-3">
                          <Link
                            href="/"
                            className="text-emerald-500 text-xs font-medium flex items-center gap-1 hover:underline"
                            onClick={() =>
                              window.open(
                                item.linkUrl,
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3.5 h-3.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5H21m0 0v7.5M21 4.5l-9 9m-6 6H3m0 0v-7.5M3 19.5l9-9"
                              />
                            </svg>
                            {item.linkText}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            {/**</div> **/}
          </section>
        </div>
      </main>
      <hr className="border-t border-gray-300 mx-12 md:mx-20 lg:mx-80 my-12 md:my-16 lg:my-10" />
    </>
  );
};

export default TimeLine;
