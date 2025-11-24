import clsx from 'clsx';

const Greeting = () => {
  const className = clsx(
          'text-green-400 font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[60px] tracking-tight'    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
      );

  return (
    <div className={className}>
        Howdy, fellow! <span className="text-green-400 font-bold">👋</span>    </div>};
    

export default Greeting;
