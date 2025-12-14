import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

// Project data structure
const projectsData = {
  procesaur: {
    id: 'procesaur',
    title: 'Procesaur',
    description: 'Procesaur is a platform that allows you to turn Web Data Into Actionable Insights using an AI powered smart web scraper agent.',
    image: '/projects/procesaur.png',
    category: 'Tool',
    longDescription: 'Procesaur revolutionizes how businesses extract and analyze web data. Our AI-powered smart web scraper agent transforms raw web data into actionable insights, helping companies make data-driven decisions faster and more efficiently.',
    videoPlaceholder: '/projects/procesaur.png', // We'll use the project image as video placeholder for now
    links: {
      website: {
        url: 'https://procesaur.com',
        enabled: true
      },
      twitter: {
        url: 'https://twitter.com/procesaur',
        enabled: true
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=e4gfK--0VJ0',
        enabled: true
      },
      github: {
        url: 'https://github.com/procesaur',
        enabled: false
      }
    }
  },
  viralytics: {
    id: 'viralytics',
    title: 'Viralytics',
    description: 'Viralytics is a platform that allows you to track your social media analytics and get insights on your audience along with AI powered content ideas.',
    image: '/projects/viralytics.png',
    category: 'Tool',
    longDescription: 'Viralytics empowers content creators and businesses to understand their social media performance through comprehensive analytics and AI-powered insights. Get actionable recommendations for your content strategy.',
    videoPlaceholder: '/projects/viralytics.png',
    links: {
      website: {
        url: 'https://viralytics.com',
        enabled: false
      },
      twitter: {
        url: 'https://twitter.com/viralytics',
        enabled: true
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=JvXGsTYkPGU',
        enabled: true
      },
      github: {
        url: 'https://github.com/viralytics',
        enabled: false
      }
    }
  },
  'recall-ai': {
    id: 'recall-ai',
    title: 'Recall AI',
    description: 'Recall AI is a study mobile app with AI powered flashcards and a study reminder',
    image: '/projects/recall-ai.png',
    category: 'Tool',
    longDescription: 'Recall AI is a study mobile app with AI powered flashcards and a study reminder',
    videoPlaceholder: '/projects/recall-ai.png',
    links: {
      website: {
        url: 'https://recallai.com',
        enabled: false
      },
      twitter: {
        url: 'https://twitter.com/recallai',
        enabled: true
      },
      youtube: {
        url: 'https://youtu.be/D_ieJzM1bIY',
        enabled: true
      },
      github: {
        url: 'https://github.com/recallai',
        enabled: false
      }
    }
  },
  looplearn: {
    id: 'looplearn',
    title: 'looplearn',
    description: 'looplearn is a talent factory and pipeline built to enable universities to train their students in in-demand skills and get them employed at scale.',
    image: '/projects/looplearn.png',
    category: 'Startup',
    longDescription: 'looplearn bridges the gap between education and employment by providing universities with the tools and curriculum to train students in high-demand skills, creating a direct pipeline to employment opportunities.',
    videoPlaceholder: '/projects/looplearn.png',
    links: {
      website: {
        url: 'https://looplearn.app',
        enabled: true
      },
      twitter: {
        url: 'https://twitter.com/looplearn',
        enabled: true
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=UROkICzlL98',
        enabled: true
      },
      github: {
        url: 'https://github.com/looplearn',
        enabled: false
      }
    }
  },
  workpilot: {
    id: 'workpilot',
    title: 'WorkPilot',
    description: 'WorkPilot is a Project and Task management platform that allows teams to collaborate through chat, video and voice calls, and schedule tasks using a collaborative Kanban Board.',
    image: '/projects/workpilot.png',
    category: 'Open Source',
    longDescription: 'WorkPilot is an all-in-one project management solution that combines task management, team collaboration, and real-time communication. Built with modern technologies to help teams stay organized and productive.',
    videoPlaceholder: '/projects/workpilot.png',
    links: {
      website: {
        url: 'https://workpilot.com',
        enabled: false
      },
      twitter: {
        url: 'https://twitter.com/workpilot',
        enabled: false
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=fkluyMvBKTs',
        enabled: true
      },
      github: {
        url: 'https://github.com/workpilot',
        enabled: true
      }
    }
  },

 
};

// YouTube embed component
const YouTubeEmbed = ({ videoId }: { videoId: string }) => (
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full rounded-2xl"
    />
  </div>
);

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// Social link component
const SocialLink = ({ 
  href, 
  icon: Icon, 
  label, 
  enabled, 
  className = "" 
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  enabled: boolean;
  className?: string;
}) => {
  const buttonClasses = `
    flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-full transition-all duration-300 text-left text-xs md:text-sm
    ${enabled 
      ? 'bg-gradient-to-r from-blue-600/20 to-blue-600/20 border border-blue-500/30 hover:from-blue-600/30 hover:to-blue-600/30 hover:border-blue-400/50 text-white' 
      : 'bg-gray-800/50 border border-gray-700/50 text-gray-500 cursor-not-allowed'
    }
  `;

  if (!enabled) {
    return (
      <div className={buttonClasses}>
        <Icon className={`text-sm md:text-lg ${className}`} />
        <span className="font-medium">{label}</span>
      </div>
    );
  }

  return (
    <Link href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
      <Icon className={`text-sm md:text-lg ${className}`} />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

interface ProjectPageProps {
  params: {
    project: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const project = projectsData[params.project as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6 justify-center text-white min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 py-5 md:ml-20 ml-5 md:mr-20 mr-5">
        {/* Main Content */}
        <div className="flex-1 lg:max-w-4xl">
                  {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-start gap-2">
              <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${dancingScript.className}`}>
                {project.title}
              </h1>
              <span className={`px-2 py-1 text-xs font-medium rounded-full mt-1 ${
                project.category === 'Tool' ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30' :
                project.category === 'Startup' ? 'bg-gradient-to-r from-blue-500/20 to-white/20 text-blue-400 border border-blue-500/30' :
                project.category === 'Open Source' ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30' :
                'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-500/30'
              }`}>
                {project.category}
              </span>
            </div>
          </div>

        {/* Video Section */}
        <div className="mb-8">
          {project.links.youtube.enabled ? (
            <YouTubeEmbed videoId={getYouTubeVideoId(project.links.youtube.url)} />
          ) : (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={project.videoPlaceholder}
                alt={`${project.title} video preview`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-[16px] border-l-gray-800 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Description, Links, and Details Section */}
        <div className="mb-8 bg-gray-900/30 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Links Section */}
          <div className="mb-8">
            <div className="flex gap-2 md:gap-3">
              <SocialLink
                href={project.links.website.url}
                icon={FaExternalLinkAlt}
                label="Visit"
                enabled={project.links.website.enabled}
                className="text-blue-400"
              />
              <SocialLink
                href={project.links.github.url}
                icon={FaGithub}
                label="Code"
                enabled={project.links.github.enabled}
                className="text-gray-300"
              />
              <SocialLink
                href={project.links.twitter.url}
                icon={FaXTwitter}
                label="Follow"
                enabled={project.links.twitter.enabled}
                className="text-blue-400"
              />
              <SocialLink
                href={project.links.youtube.url}
                icon={FaYoutube}
                label="Watch"
                enabled={project.links.youtube.enabled}
                className="text-red-400"
              />
            </div>
          </div>

          {/* Detailed Description Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Deep Dive</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-base leading-relaxed">
                {project.longDescription}
              </p>
              <p className="text-gray-400 text-sm mt-4">
                This project showcases modern web development practices and innovative solutions 
                to real-world problems. Built with attention to user experience, performance, 
                and scalability in mind.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Sidebar - Other Projects */}
        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <div className="sticky top-6 mt-24">
            <h3 className="text-lg font-semibold mb-4">Other Projects</h3>
            <div className="space-y-3">
              {Object.values(projectsData)
                .filter(p => p.id !== project.id)
                .map((otherProject) => (
                <Link 
                  key={otherProject.id} 
                  href={`/projects/${otherProject.id}`}
                  className="flex gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={otherProject.image}
                      alt={otherProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 leading-tight mb-1">
                      {otherProject.title}
                    </h4>
                    <p className="text-xs text-gray-400 mb-1">
                      {otherProject.category}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {otherProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 