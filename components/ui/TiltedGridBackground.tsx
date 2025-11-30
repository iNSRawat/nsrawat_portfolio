import { clsx } from 'clsx';

// import TiltedGrid from 'public/static/icons/tilted-grid.svg';

const TiltedGridBackground = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(['absolute overflow-hidden [mask-image:linear-gradient(white,transparent)]', className])}>
  );
};

export default TiltedGridBackground;
