import type { GithubRepository, ProjectCardProps } from '@/types/index';

import { Zoom, Link, Image } from '@/components/ui';
import { GithubRepo } from '@/components/project';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, imgSrc, url, repo, github, live, builtWith } = project;

  const repository = repo as GithubRepository | undefined;

  const href = repository?.url || url;

  return (
    <div className="w-full p-3 sm:p-4 md:w-1/2 lg:w-1/2">
      <div
        className={`${
          imgSrc && 'h-full'
        } flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50`}
      >
        {imgSrc && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Zoom>
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                width={1088}
                height={612}
              />
            </Zoom>
          </div>
        )}

        <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
          <h2 className="mb-2 text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl md:text-2xl">
            {href ? (
              <Link
                href={href}
                aria-label={`Link to ${title}`}
                className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>

          <p className="mb-3 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:line-clamp-none sm:text-base">
            {repository?.description || description}
          </p>

          <div className="mb-3 flex flex-wrap gap-1.5 text-xs sm:text-sm">
            <span className="shrink-0 font-medium text-gray-700 dark:text-gray-300">Built with:</span>
            <div className="flex flex-wrap gap-1">
              {builtWith?.map((tool, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {repository ? (
              <GithubRepo repo={repository} />
            ) : (
              <>
                {github && (
                  <Link
                    href={github}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 sm:text-base"
                    aria-label={`GitHub repository for ${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
                {live && (
                  <Link
                    href={live}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 sm:text-base"
                    aria-label={`Live demo for ${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
                {href && (
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 sm:text-base"
                    aria-label={`Link to ${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
