function HeroTechs() {
  return (
    <>
      <div className="flex flex-col-reverse bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-200 px-10 py-3 text-stone-900 md:flex-row md:justify-between md:px-20 md:pt-6">
        <div className="flex flex-col py-5 md:space-y-4 lg:px-20">
          <div className="flex items-center">
            <h3 className="font-bold tracking-wide md:text-xl">
              The Pillars of My Craft
            </h3>
          </div>
          <div className="flex w-full items-center gap-1 md:gap-3">
            <div className="aspect-square h-4 overflow-hidden rounded-full shadow-lg">
              <img
                src="/assets/icons/html.png"
                alt="html"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="aspect-square h-8 overflow-hidden rounded-full p-1 shadow-lg">
              <img
                src="/assets/icons/css.png"
                alt="CSS"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="aspect-square h-8 overflow-hidden rounded-full shadow-lg">
              <img
                src="/assets/icons/javascript.png"
                alt="javascript"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="aspect-square h-12 overflow-hidden rounded-full p-1 shadow-lg">
              <img
                src="/assets/icons/react.png"
                alt="react"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="aspect-square h-12 overflow-hidden rounded-full p-2 shadow-lg">
              <img
                src="/assets/icons/redux.png"
                alt="redux"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="aspect-square h-16 overflow-hidden rounded-full p-2 shadow-lg">
              <img
                src="/assets/icons/react-router.png"
                alt="react-router"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="aspect-square h-16 overflow-hidden rounded-full p-2 shadow-lg md:h-20">
              <img
                src="/assets/icons/nodejs.png"
                alt="nodejs"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="aspect-square h-20 overflow-hidden rounded-full p-2 shadow-lg md:h-24">
              <img
                src="/assets/icons/mongodb.png"
                alt="mongodb"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute -top-12 left-8 flex aspect-auto w-max items-center justify-center self-center rounded-xl bg-white px-1 py-1 shadow-lg md:-left-96 md:gap-1 md:px-2 lg:-left-48 xl:left-0 2xl:left-24">
            <div className="aspect-square h-6 overflow-hidden md:h-12">
              <img
                className="h-full w-full rounded-full object-cover"
                src="/assets/icons/tailwind.jpg"
                alt=""
              />
            </div>
            <div className="flex w-full flex-col ps-2">
              <h4 className="text-xs font-bold md:text-lg">Ui/Ux</h4>
              <p className="text-xs font-semibold md:text-sm">
                Turning ideas into reality.
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:w-2/12">
          <div className="1 absolute -top-40 right-8 flex aspect-auto h-44 w-24 flex-col items-center justify-center gap-1 self-center rounded-full bg-gradient-to-l from-orange-200 to-yellow-50 shadow-lg md:-top-32 md:right-1 md:h-72 md:w-44">
            <div className="flex h-1/3 gap-1 md:p-2">
              <div className="w-1/3 self-end overflow-hidden rounded-full bg-white p-1">
                <img
                  src="/assets/icons/javascript.png"
                  className="aspect-square h-6 w-full object-contain md:h-12"
                  alt=""
                />
              </div>
              <div className="w-1/3 self-start overflow-hidden rounded-full bg-white p-1">
                <img
                  src="/assets/icons/react.png"
                  className="aspect-square h-6 w-full object-contain md:h-12"
                  alt=""
                />
              </div>
              <div className="w-1/3 self-end overflow-hidden rounded-full bg-white p-1">
                <img
                  src="/assets/icons/nodejs.png"
                  className="aspect-square h-6 w-full object-contain md:h-12"
                  alt=""
                />
              </div>
            </div>
            <div className="flex h-1/2 items-center justify-center p-2 text-center text-xs md:text-base">
              <h5 className="font-semibold">
                JavaScript, React, and Node.js form the core of my tech stack.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroTechs;
