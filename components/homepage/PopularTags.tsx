'use client';

import { map } from 'lodash';
import Image from 'next/image';

import popularTags from '@/data/popularTags';

import Link from '@/components/ui/Link';

const colorMap: Record<string, string> = {
  'bg-blue-600': '#2563eb',
  'bg-blue-500': '#3b82f6',
  'bg-blue-700': '#1d4ed8',
  'bg-purple-700': '#7e22ce',
  'bg-green-600': '#16a34a',
  'bg-cyan-500': '#06b6d4',
};

const iconMap: Record<string, string> = {
  'Python': '/static/icons/python.svg',
  'SQL': '/static/icons/sql.svg',
  'Matplotlib': '/static/icons/matplotlib.svg',
  'NumPy': '/static/icons/numpy.svg',
  'Pandas': '/static/icons/pandas.svg',
  'Seaborn': '/static/icons/seaborn.svg',
  'Plotly': '/static/icons/plotly.svg',
  'Mongodb': '/static/icons/mongodb.svg',
  'Docker': '/static/icons/docker.svg',
};

const PopularTags = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 py-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
          Popular Tags
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Popular tags feature the most widely favored topics.
        </p>
      </div>

      <div className="popular-tags grid grid-cols-1 gap-4 py-6 xl:grid-cols-6">
        {map(popularTags, (popularTag) => {
          const { slug, href, title, bgColor, iconType } = popularTag;
          const bgHex = colorMap[bgColor] || '#000000';
          const iconPath = iconMap[iconType] || '/static/icons/python.svg';

          return (
            <Link
              key={slug}
              href={href}
              className="flex w-full justify-center space-x-2 rounded-lg p-3 transition-shadow hover:shadow-md"
              style={{ backgroundColor: bgHex }}
            >
              <Image
                src={iconPath}
                alt={title}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="my-auto text-white">{title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularTags;
