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
            <div className="relative flex flex-grow cursor-pointer flex-wrap items-center justify-center gap-8 p-2 lg:flex-nowrap">
              <div className="absolute h-full w-full content-normal rounded-b-full bg-gradient-to-b from-transparent via-transparent to-stone-800/10"></div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/html.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="html"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  HTML
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/css.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="css"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  CSS
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/javascript.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="JavaScript"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  JavaScript
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/nodejs.png"
                  className="h-6 w-10 object-cover lg:h-10 lg:w-16 xl:h-14 xl:w-20"
                  alt="Node JS"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Node JS
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/mongodb.png"
                  className="h-6 w-12 object-cover lg:h-10 lg:w-20 xl:h-14 xl:w-24"
                  alt="Mongo DB"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Mongo DB
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/assets/icons/sql.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="SQL"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  SQL
                </span>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center justify-between space-y-4 lg:h-24 lg:flex-row lg:space-y-0">
            <h3 className="text-xl font-bold md:text-2xl lg:w-1/3 lg:text-3xl">
              Frameworks and Libraries
            </h3>

            <div className="relative flex flex-grow cursor-pointer flex-wrap items-center justify-center gap-8 p-2 lg:flex-nowrap">
              <div className="absolute h-full w-full content-normal rounded-b-full bg-gradient-to-b from-transparent via-transparent to-stone-800/10"></div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/tailwind1.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="tailwind"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Tailwind
                </span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/bootstrap.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="Bootstrap"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Bootstrap
                </span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/react.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="React"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  React
                </span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/react-router.png"
                  className="h-5 w-10 object-contain md:h-7 md:w-12 lg:h-10 lg:w-16 xl:h-14 xl:w-20"
                  alt="React Router"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  React Router
                </span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/redux.png"
                  className="h-5 w-10 object-contain md:h-7 md:w-12 lg:h-10 lg:w-16 xl:h-14 xl:w-20"
                  alt="Redux"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Redux
                </span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/express-js.png"
                  className="h-5 w-max object-cover md:h-7 lg:h-10 xl:h-14"
                  alt="Express JS"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Express JS
                </span>
              </div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/mongoose.png"
                  className="h-5 w-10 object-cover md:h-7 md:w-12 lg:h-10 lg:w-16 xl:h-14 xl:w-24"
                  alt="mongoose"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Mongoose
                </span>
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="flex flex-col items-center justify-between space-y-4 lg:h-24 lg:flex-row lg:space-y-0">
            <h3 className="text-xl font-bold md:text-2xl lg:w-1/3 lg:text-3xl">
              Tools
            </h3>
            <div className="relative flex flex-grow cursor-pointer flex-wrap items-center justify-center gap-8 p-2 lg:flex-nowrap">
              <div className="absolute h-full w-full content-normal rounded-b-full bg-gradient-to-b from-transparent via-transparent to-stone-800/10"></div>

              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/git.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="Git"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Git
                </span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/github.png"
                  className="h-max w-7 md:w-10 lg:w-16 xl:w-20"
                  alt="github"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Git Hub
                </span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/vscode.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="VS Code"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  VS Code
                </span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/supabase.png"
                  className="h-6 w-6 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                  alt="Supabase"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Supabase
                </span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/cloudinary.png"
                  className="h-7 w-7 lg:h-10 lg:w-10 xl:h-14 xl:w-14"
                  alt="Cloudinary"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Cloudinary
                </span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/postman.webp"
                  className="h-7 w-7 lg:h-10 lg:w-10 xl:h-14 xl:w-14"
                  alt="Postman"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Postman
                </span>
              </div>
              <div className="flex h-full flex-col items-center space-y-2">
                <img
                  src="/assets/icons/powerbi.png"
                  className="h-7 w-9 lg:h-10 lg:w-12 xl:h-14 xl:w-16"
                  alt="Power Bi"
                />
                <span className="text-xs font-semibold md:text-sm lg:text-base">
                  Power Bi
                </span>
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
                className="h-8 w-14 lg:h-16 lg:w-20"
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
