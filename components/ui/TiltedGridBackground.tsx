import { clsx } from 'clsx';


const TiltedGridBackground = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(['absolute overflow-hidden [mask-image:linear-gradient(white,transparent)]', className])}>
      <img src="/static/icons/tilted-grid.svg" alt="Tilted Grid"
        className={clsx([
          'h-[160%] w-full',
          'absolute inset-x-0 inset-y-[-30%] skew-y-[-18deg]',
          'dark:fill-white/[.01] dark:stroke-white/[.025]',
          'fill-black/[0.02] stroke-black/5',
        ])}
      />
    </div>
  );
};

export default TiltedGridBackground;
