"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";

const ProjectsSection = () => {
  const projects = [
    {
      title: "PolyRAG",
      description: "A Multilingual Retrieval-Augmented Generation System for Context-Aware Question Answering from Global PDFs",
      tags: ["Python", "RAG", "SLMs", "+2"],
      stars: 2,
      url: "https://github.com/Now-Tiger/rag-pdf-pipeline",
    },
    {
      title: "SynapseOps",
      description: "Automated data analysis for support, driving clear, actionable process improvement.",
      tags: ["CrewAI", "Agents", "Gemini", "+2"],
      stars: null,
      url: "https://github.com/Now-Tiger/supportops-multiagent-crew",
    },
    {
      title: "LexiGen",
      description: "FastAPI and HuggingFace text completion web app...",
      tags: ["React", "Python", "HuggingFace", "+3"],
      stars: null,
      url: "https://github.com/Now-Tiger/Lexigen",
    },
    {
      title: "GoSwift",
      description: "Real-time package tracking made simple!",
      tags: ["Go", "Redis", "PG", "Docker", "JWT", "+2"],
      stars: 1,
      url: "https://github.com/Now-Tiger/delivery-management-system",
    },
    {
      title: "Doggo",
      description: "Premium dog care services you can trust...",
      tags: ["Next.js", "Supabase", "Github Actions", "+2"],
      stars: null,
      url: "https://github.com/Now-Tiger/Doggo",
    },
    {
      title: "SocialFlow",
      description: "AI powered content scheduling at your pocket!",
      tags: ["Next.js", "Redis", "Celery", "Supabase", "+3"],
      stars: null,
      url: "https://github.com/Now-Tiger/socialflow",
    },
  ];

  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-12 md:px-20 lg:px-32 mb-5">
        <div className="max-w-3xl w-full">
          {/* Header */}
          <div className="mb-8">
            <p className="font-jb-mono text-emerald-500 text-xs uppercase tracking-wider mb-2 font-light">
              2AM QUESTIONS
            </p>
            <h2 className="font-soria text-4xl md:text-5xl lg:text-6xl mb-3 text-gray-900">
              What I&apos;ve built
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Experiments that started with &apos;I wonder if...&apos;
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between h-full hover:shadow-lg hover:shadow-emerald-700/20 transition-all duration-300 cursor-pointer border-gray-200 hover:border-emerald-500"
              >
                <CardHeader className="pb-2 pt-4 px-4 grow">
                  <div className="flex items-center gap-2 mb-1">
                    <Link
                      href=""
                      onClick={() =>
                        window.open(
                          project.url,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      <IoLogoGithub />
                    </Link>
                    <CardTitle className="font-soria text-base lg:text-xl">
                      {project.title}
                    </CardTitle>
                    {project.stars && (
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs">{project.stars}</span>
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-xs leading-snug font-light text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Tags Section - fixed alignment */}
                <CardContent className="mt-auto pt-0 pb-4 px-4">
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <hr className="border-t border-gray-300 mx-12 md:mx-20 lg:mx-80 my-12 md:my-16 lg:my-1" />
    </>
  );
};

export default ProjectsSection;
