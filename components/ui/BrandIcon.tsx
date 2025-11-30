interface BrandIconProps {
  name: string;
  className?: string;
}

const BrandIcon = ({ name, className }: BrandIconProps) => {
  const baseClass =
    'inline-flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full text-xs font-semibold';
  const finalClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <span className={finalClass}>
      {name.charAt(0).toUpperCase()}
    </span>
  );
};

export default BrandIcon;
