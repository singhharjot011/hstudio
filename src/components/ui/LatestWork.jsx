import { useState } from "react";
import Heart from "./svg/Heart";
import View from "./svg/View";

function LatestWork() {
  const [likes, setLikes] = useState(2);
  const [views, setViews] = useState(3);

  return (
    <>
      <div className="flex flex-col bg-gradient-to-tr from-transparent via-purple-50 to-indigo-50 px-10 pt-3 text-stone-900 md:px-20 md:pt-6">
        <div className="flex items-center justify-center p-2 md:p-4">
          <h2 className="text-3xl font-extrabold text-indigo-950 md:text-4xl lg:text-5xl">
            My Latest Work
          </h2>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between lg:p-20">
          <div className="flex flex-col space-y-4">
            <div className="h-72 w-96 rounded-xl bg-gradient-to-l from-gray-200 via-gray-400 to-gray-300 shadow-lg">
              <img
                src="/assets/portfolio/vanilla-crm/vcrm.png"
                className="h-full w-full object-contain"
                alt="Vanilla CRM"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="h-10 w-10 rounded-full bg-violet-100 p-1">
                <img
                  src="/assets/portfolio/vanilla-crm/vcrm-logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="flex-grow text-xl font-semibold">
                Vanilla CRM
              </span>
              <div className="flex gap-2">
                <div className="flex gap-0.5">
                  <Heart /> {likes}
                </div>
                <div className="flex gap-0.5">
                  <View /> {views}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="h-72 w-96 rounded-xl bg-gradient-to-r from-red-200 via-red-100 to-yellow-50 shadow-lg">
              <img
                src="/assets/portfolio/react-jewels/rjewels.png"
                className="h-full w-full object-contain"
                alt="React Jewels"
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="h-10 w-10 rounded-full bg-stone-100 p-1">
                <img
                  src="/assets/portfolio/react-jewels/rjewels-logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="flex-grow text-xl font-semibold">
                React Jewels
              </span>
              <div className="flex gap-2">
                <div className="flex gap-0.5">
                  <Heart /> {likes}
                </div>
                <div className="flex gap-0.5">
                  <View /> {views}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="h-72 w-96 rounded-xl bg-gradient-to-r from-rose-950 via-rose-800 to-transparent shadow-lg">
              <img
                src="/assets/portfolio/tailwind-immigration/timmigration.png"
                className="h-full w-full object-contain"
                alt="Tailwind Immigration"
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="h-10 w-10 rounded-full bg-rose-100 p-1">
                <img
                  src="/assets/portfolio/tailwind-immigration/timmigration-logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="flex-grow text-xl font-semibold">
                React Jewels
              </span>
              <div className="flex gap-2">
                <div className="flex gap-0.5">
                  <Heart /> {likes}
                </div>
                <div className="flex gap-0.5">
                  <View /> {views}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="/portfolio"
            className="font-semibold text-indigo-950 md:text-xl lg:text-2xl"
          >
            See Full Portfolio
          </a>
        </div>
      </div>
    </>
  );
}

export default LatestWork;
