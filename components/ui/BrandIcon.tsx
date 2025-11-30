'use client';

import Image from 'next/image';

interface BrandIconProps {
  type: string;
  className?: string;
}

const iconMap: { [key: string]: string } = {
  NextJS: '/static/icons/nextjs.svg',
  TailwindCSS: '/static/icons/tailwind.svg',
  Typescript: '/static/icons/typescript.svg',
  Umami: '/static/icons/umami.svg',
};

const BrandIcon = ({ type, className = '' }: BrandIconProps) => {
  const iconPath = iconMap[type];

  if (!iconPath) {
    return (
      <span className={`inline-flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-xs font-semibold ${className}`}>
        {type.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <Image
      src={iconPath}
      alt={type}
      width={24}
      height={24}
      className={className || 'w-6 h-6'}
    />
  );
};

export default BrandIcon;
