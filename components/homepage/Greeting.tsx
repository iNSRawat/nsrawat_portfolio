import clsx from 'clsx';

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text font-extrabold text-transparent',
    'text-4xl leading-[60px] tracking-tight md:text-5xl lg:text-6xl'
  );

  return (
    <div className={className}>
      Howdy, fellow! <span className="font-bold text-green-400">👋</span>
    </div>
  );
};

export default Greeting;
