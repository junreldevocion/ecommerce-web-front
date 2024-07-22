const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-slate-50">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-2">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Get your products here!
        </h1>
        <h3 className="mx-auto max-w-2xl text-lg tracking-tight text-slate-700">Browse the latest product here!</h3>
      </div>
    </div>
  );
};

export default Hero;
