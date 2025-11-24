import clsx from 'clsx';

const Greeting = () => {
  const className = clsx(
    'text-green-400 font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[60px] tracking-tight'
  );

  return (
    <div className={className}>
      Howdy, fellow! <span className="text-green-400 font-bold">👋</span>
    </div>
  );
};

export default Greeting;
