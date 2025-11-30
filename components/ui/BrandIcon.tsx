import { cn } from '@/lib/utils';

interface BrandIconProps {
  name: string;
  className?: string;
}

const BrandIcon = ({ name, className }: BrandIconProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-xs font-semibold',
        className
      )}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
};

export default BrandIcon;
