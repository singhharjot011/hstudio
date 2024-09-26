function Footer() {
  return (
    <>
      <footer className="w-full bg-gradient-to-b from-transparent to-rose-50 p-10 md:p-20">
        <div className="flex w-full flex-col justify-between md:flex-row">
          <ul className="flex items-center justify-center gap-8 font-semibold text-stone-700 md:mr-20 md:text-xl">
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

          <div className="flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()}
            <h2 className="font-extrabold text-indigo-950 md:text-2xl">
              Harjot Singh
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
