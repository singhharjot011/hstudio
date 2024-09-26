function Navbar() {
  return (
    <>
      <div className="px-10 py-3 md:px-20 md:py-6">
        <nav className="flex h-max items-center justify-between rounded-xl bg-white p-2 lg:p-5">
          <a
            href="/"
            id="logo"
            className="text-2xl font-bold tracking-wide text-stone-900 lg:text-3xl"
          >
            HStudio
          </a>
          <ul className="hidden items-center justify-center gap-4 font-semibold text-stone-700 md:flex lg:mr-20 lg:flex-grow lg:justify-end lg:text-lg">
            <li>
              <a href="/home" className="font-extrabold text-stone-900">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
          <div
            id="buttons"
            className="hidden w-max items-center gap-1 md:flex lg:gap-2"
          >
            <a href="">
              <img
                src="/assets/icons/github.png"
                className="h-6 w-max lg:h-8"
                alt="Github"
              />
            </a>
            <a href="">
              <img
                src="/assets/icons/linkedin.png"
                className="aspect-square h-6 lg:h-8"
                alt="Linkedin"
              />
            </a>
            <a
              href="/contact"
              className="rounded-lg bg-orange-500 px-2 py-1 text-lg tracking-wide text-stone-50 hover:scale-90 active:bg-orange-700 lg:px-6 lg:py-2 lg:text-xl"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
