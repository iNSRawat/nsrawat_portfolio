import { clsx } from 'clsx';

const TiltedGridBackground = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(['absolute overflow-hidden [mask-image:linear-gradient(white,transparent)]', className])} />
  );
};

export default TiltedGridBackground;
