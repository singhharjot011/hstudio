function Pitch() {
  return (
    <>
      <div className="flex flex-col justify-between bg-gradient-to-tr from-transparent via-purple-50 to-indigo-50 px-10 pt-3 text-stone-900 md:flex-row md:px-20 md:pt-6">
        <div className="p-10 md:w-1/2 md:p-20">
          <h2 className="text-2xl font-extrabold text-indigo-950 md:text-3xl">
            Got a project in mind or need something done?
          </h2>
        </div>
        <div className="flex flex-col space-y-8 px-12 py-10 md:w-1/2 md:px-24 md:py-20">
          <h5 className="text-lg text-stone-700 md:text-xl">
            Now that you know about me, let's talk about your project.
          </h5>
          <span className="relative z-20 w-max uppercase">
            <span className="relative z-30">
              Shoot Mes<span className="text-white">sage</span>
            </span>
            <span className="absolute -right-4 -top-4 z-10 h-14 w-14 rounded-full bg-orange-600 group-hover:scale-105"></span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Pitch;
