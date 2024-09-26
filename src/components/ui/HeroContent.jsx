function HeroContent() {
  return (
    <>
      <div className="flex flex-col px-10 pt-3 text-stone-900 md:flex-row lg:px-20 lg:pt-6">
        <div class="flex flex-col space-y-6 text-center md:w-1/2 md:space-y-12 md:px-20 md:text-start">
          <p className="text-xl md:text-3xl"> Hi, My Name is</p>
          <h2 className="text-4xl text-stone-800 md:text-7xl">
            <b>Harjot Singh</b>
          </h2>
          <p className="text-xs font-semibold text-stone-600 md:text-base">
            A passionate web developer specializing in creating clean,
            responsive websites. Let's build intuitive digital experiences that
            solve real-world problems.
          </p>
          <a
            href="/portfolio"
            className="w-max self-center rounded-lg bg-orange-500 px-3 py-1 font-semibold tracking-wide text-stone-50 hover:scale-90 active:bg-orange-700 md:self-start md:px-6 md:py-2 md:text-xl"
          >
            See My Work
          </a>
        </div>
        <div className="relative flex items-end justify-center md:w-1/2">
          <div>
            <img
              className="aspect-square h-[300px] md:h-[500px]"
              src="/assets/hero/ai-me.png"
              alt=""
            />
          </div>
          <div className="absolute top-1/2 flex h-max w-24 flex-col overflow-hidden rounded-xl bg-white/90 p-2 backdrop-blur-sm md:w-44">
            <div>
              <img
                src="/assets/icons/mern.png"
                className="h-full w-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center">
              <h2 className="text-center text-sm font-bold md:text-lg">
                Full Stack Ready
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroContent;
