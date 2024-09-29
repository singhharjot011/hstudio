function TechStack() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-tr from-transparent via-purple-50 to-indigo-50 px-10 pt-3 text-stone-900 md:px-20 md:pt-6">
        <div className="flex items-center justify-center p-4">
          <h2 className="text-3xl font-extrabold text-indigo-950 md:text-4xl lg:text-5xl">
            Technologies I work with
          </h2>
        </div>
        <div className="flex flex-col space-y-20 p-8 xl:p-14">
          {/* 1 */}
          <div className="flex flex-col items-center justify-between space-y-4 lg:h-24 lg:flex-row lg:space-y-0">
            <h3 className="text-xl font-bold md:text-2xl lg:w-1/3 lg:text-3xl">
              Languages and Databases
            </h3>
            <div className="relative flex flex-grow cursor-pointer flex-wrap items-center justify-center gap-8 p-2">
              <div className="absolute h-full w-full content-normal rounded-b-full bg-gradient-to-b from-transparent via-transparent to-stone-800/10"></div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/html.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="html"
                />
                <span className="font-semibold">HTML</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/css.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="css"
                />
                <span className="font-semibold">CSS</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/javascript.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="JavaScript"
                />
                <span className="font-semibold">JavaScript</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/nodejs.png"
                  className="h-10 w-16 object-cover lg:h-14 lg:w-20"
                  alt="Node JS"
                />
                <span className="font-semibold">Node JS</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/mongodb.png"
                  className="h-10 w-20 object-cover lg:h-14 lg:w-24"
                  alt="Mongo DB"
                />
                <span className="font-semibold">Mongo DB</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/sql.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="SQL"
                />
                <span className="font-semibold">SQL</span>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center justify-between space-y-4 lg:h-24 lg:flex-row lg:space-y-0">
            <h3 className="text-xl font-bold md:text-2xl lg:w-1/3 lg:text-3xl">
              Frameworks and Libraries
            </h3>

            <div className="relative flex flex-grow cursor-pointer flex-wrap items-center justify-center gap-8 p-2">
              <div className="absolute h-full w-full content-normal rounded-b-full bg-gradient-to-b from-transparent via-transparent to-stone-800/10"></div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/tailwind1.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="tailwind"
                />
                <span className="font-semibold">Tailwind</span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/bootstrap.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="Bootstrap"
                />
                <span className="font-semibold">Bootstrap</span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/react.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="React"
                />
                <span className="font-semibold">React</span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/react-router.png"
                  className="h-10 w-min object-cover lg:h-14 lg:w-min"
                  alt="React Router"
                />
                <span className="font-semibold">React Router</span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/redux.png"
                  className="h-10 w-min object-cover lg:h-14 lg:w-min"
                  alt="Redux"
                />
                <span className="font-semibold">Redux</span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/express-js.png"
                  className="h-10 w-min object-cover lg:h-14 lg:w-min"
                  alt="Express JS"
                />
                <span className="font-semibold">Express JS</span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/mongoose.png"
                  className="h-10 w-min object-cover lg:h-14 lg:w-min"
                  alt="mongoose"
                />
                <span className="font-semibold">Mongoose</span>
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="flex flex-col items-center justify-between space-y-4 lg:h-24 lg:flex-row lg:space-y-0">
            <h3 className="text-xl font-bold md:text-2xl lg:w-1/3 lg:text-3xl">
              Tools
            </h3>
            <div className="relative flex flex-grow cursor-pointer flex-wrap items-center justify-center gap-8 p-2">
              <div className="absolute h-full w-full content-normal rounded-b-full bg-gradient-to-b from-transparent via-transparent to-stone-800/10"></div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/git.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="Git"
                />
                <span className="font-semibold">Git</span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/github.png"
                  className="h-max w-16 lg:w-20"
                  alt="github"
                />
                <span className="font-semibold">Git Hub</span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/vscode.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="VS Code"
                />
                <span className="font-semibold">VS Code</span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/supabase.png"
                  className="h-10 w-10 lg:h-14 lg:w-14"
                  alt="Supabase"
                />
                <span className="font-semibold">Supabase</span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/cloudinary.png"
                  className="h-10 w-min lg:h-14"
                  alt="Cloudinary"
                />
                <span className="font-semibold">Cloudinary</span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/postman.webp"
                  className="h-10 w-min lg:h-14"
                  alt="Postman"
                />
                <span className="font-semibold">Postman</span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/powerbi.png"
                  className="h-10 w-min lg:h-14"
                  alt="Power Bi"
                />
                <span className="font-semibold">Power Bi</span>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-center justify-between space-y-4 lg:h-24 lg:flex-row lg:space-y-0">
            <h3 className="text-base font-bold md:text-xl lg:w-1/3 lg:text-2xl">
              The List Goes On....
            </h3>
            <div className="flex flex-grow flex-wrap items-center justify-center gap-8">
              <span className="font-bolder text-2xl text-indigo-800 lg:text-5xl">
                {"{"}
              </span>
              <img
                src="/assets/icons/others/docker.png"
                alt="Docker"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              <img
                src="/assets/icons/others/babble.png"
                alt="Babble"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              <img
                src="/assets/icons/others/figma.png"
                alt="Figma"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              <img
                src="/assets/icons/others/jira.png"
                alt="Jira"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              <img
                src="/assets/icons/others/slack.webp"
                alt="Slack"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              <img
                src="/assets/icons/others/netlify.svg"
                alt="Netlify"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              <img
                src="/assets/icons/others/webpack.png"
                alt="Webpack"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              <img
                src="/assets/icons/others/stripe.png"
                alt="Stripe"
                className="h-8 w-min lg:h-16"
              />
              <img
                src="/assets/icons/others/heroku.webp"
                alt="Heroku"
                className="h-8 w-8 lg:h-16 lg:w-16"
              />
              <span className="font-bolder text-2xl text-indigo-800 lg:text-5xl">
                {"...}"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
