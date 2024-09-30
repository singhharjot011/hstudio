import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="px-10 py-3 md:px-20 md:py-6">
        <nav className="flex h-max items-center justify-between rounded-xl bg-white p-2 lg:p-5">
          <NavLink
            to="/"
            id="logo"
            className="text-2xl font-bold tracking-wide text-stone-900 lg:text-3xl"
          >
            HStudio
          </NavLink>
          <ul className="hidden items-center justify-center gap-4 font-semibold text-stone-700 md:flex lg:mr-20 lg:flex-grow lg:justify-end lg:text-lg">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
          <div
            id="buttons"
            className="hidden w-max items-center gap-1 md:flex lg:gap-2"
          >
            <NavLink to="">
              <img
                src="/assets/icons/github.png"
                className="h-6 w-max lg:h-8"
                alt="Github"
              />
            </NavLink>
            <NavLink to="">
              <img
                src="/assets/icons/linkedin.png"
                className="aspect-square h-6 lg:h-8"
                alt="Linkedin"
              />
            </NavLink>
            <NavLink
              to="/contact"
              className="rounded-lg bg-orange-500 px-2 py-1 text-lg tracking-wide text-stone-50 hover:scale-90 active:bg-orange-700 lg:px-6 lg:py-2 lg:text-xl"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
