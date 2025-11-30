'use client';

import Image from 'next/image';

interface BrandIconProps {
  type: string;
  className?: string;
}

const iconMap: Record<string, string> = {
  React: '/static/icons/react.svg',
  Remix: '/static/icons/remix.svg',
  Git: '/static/icons/git.svg',
  GitHub: '/static/icons/github.svg',
  Javascript: '/static/icons/javascript.svg',
  Typescript: '/static/icons/typescript.svg',
  Node: '/static/icons/nodejs.svg',
  Bash: '/static/icons/bash.svg',
  Markdown: '/static/icons/markdown.svg',
  NextJS: '/static/icons/nextjs.svg',
  Docker: '/static/icons/docker.svg',
  Postgres: '/static/icons/postgres.svg',
  Mongodb: '/static/icons/mongodb.svg',
  Python: '/static/icons/python.svg',
  SQL: '/static/icons/sql.svg',
  Matplotlib: '/static/icons/matplotlib.svg',
  NumPy: '/static/icons/numpy.svg',
  Pandas: '/static/icons/pandas.svg',
  Seaborn: '/static/icons/seaborn.svg',
  Plotly: '/static/icons/plotly.svg',
  Scikit: '/static/icons/scikit-learn.svg',
  TensorFlow: '/static/icons/tensorflow.svg',
  PyTorch: '/static/icons/pytorch.svg',
  PowerBI: '/static/icons/powerbi.svg',
  Jupyter: '/static/icons/jupyter.svg',
  Tableau: '/static/icons/tableau.svg',
  Anaconda: '/static/icons/anaconda.svg',
  PyCharm: '/static/icons/pycharm.svg',
  Spotify: '/static/icons/spotify.svg',
  Railway: '/static/icons/railway.svg',
  Vercel: '/static/icons/vercel.svg',
  TailwindCSS: '/static/icons/tailwind.svg',
  Umami: '/static/icons/umami.svg',
};

const BrandIcon = (props: BrandIconProps) => {
  const { type, className = 'w-6 h-6' } = props;
  const iconPath = iconMap[type];

  if (!iconPath) {
    return (
      <span
        className={`inline-flex items-center justify-center bg-gray-200 rounded-full text-xs font-semibold ${className}`}
      >
        {type.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <Image src={iconPath} alt={type} width={24} height={24} className={className} />
  );
};

export default BrandIcon;
