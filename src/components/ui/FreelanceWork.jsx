import { useState } from "react";
import Heart from "./svg/Heart";
import View from "./svg/View";

function FreelanceWork() {
  const [likes, setLikes] = useState(2);
  const [views, setViews] = useState(3);
  return (
    <>
      <div className="flex flex-col bg-gradient-to-tr from-transparent via-purple-50 to-indigo-50 px-5 pt-3 text-stone-900 md:px-20 md:pt-6">
        <div className="flex items-center justify-center p-4">
          <h2 className="text-3xl font-extrabold text-indigo-950 md:text-4xl lg:text-5xl">
            Successful Freelance Projects
          </h2>
        </div>

        <div className="flex w-full flex-col gap-12 md:flex-row md:justify-between lg:p-20">
          {/* 1 */}
          <div className="flex flex-col space-y-4">
            <div className="group relative rounded-xl bg-gradient-to-r from-rose-100 to-teal-100 shadow-lg md:h-72 md:w-96">
              <div className="absolute bottom-0 flex h-1/3 w-full items-center rounded-b-xl bg-gradient-to-t from-stone-800/70 px-5 opacity-0 backdrop-blur-[2px] duration-300 group-hover:opacity-100">
                <span className="text-lg font-semibold text-white">
                  Woodlawn Pharmacy - A modern, user-friendly Pharmacy Website
                </span>
              </div>
              <img
                src="/assets/freelance-projects/woodlawn-pharmacy/frame.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="h-10 w-10 rounded-full bg-green-50 p-1">
                <img
                  src="/assets/freelance-projects/woodlawn-pharmacy/wpharmacy-logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <a
                href="https://www.woodlawnpharmacy.ca/"
                target="_blank"
                className="flex-grow text-xl font-semibold hover:text-green-600"
              >
                Woodlawn Pharmacy
              </a>
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

          {/* 2 */}
          <div className="flex flex-col space-y-4">
            <div className="group relative rounded-xl bg-gradient-to-l from-lime-50 via-gray-50 to-yellow-50 shadow-lg md:h-72 md:w-96">
              <div className="absolute bottom-0 flex h-1/3 w-full items-center rounded-b-xl bg-gradient-to-t from-stone-800/70 px-5 opacity-0 backdrop-blur-[2px] duration-300 group-hover:opacity-100">
                <span className="text-lg font-semibold text-white">
                  Medicrest Pharmacy - Reliable healthcare solutions with easy
                  Rx management.
                </span>
              </div>
              <img
                src="/assets/freelance-projects/medicrest-pharmacy/frame.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="h-10 w-10 rounded-full bg-indigo-50 p-1">
                <img
                  src="/assets/freelance-projects/medicrest-pharmacy/mpharmacy-logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <a
                href="https://medicrestpharmacy.ca/"
                target="_blank"
                className="flex-grow text-xl font-semibold hover:text-indigo-600"
              >
                Medicrest Pharmacy
              </a>
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

          {/* 3 */}
          <div className="flex flex-col space-y-4">
            <div className="group relative rounded-xl bg-gradient-to-l from-rose-200 via-yellow-50 to-orange-200 shadow-lg md:h-72 md:w-96">
              <div className="absolute bottom-0 flex h-1/3 w-full items-center rounded-b-xl bg-gradient-to-t from-stone-800/70 px-5 opacity-0 backdrop-blur-[2px] duration-300 group-hover:opacity-100">
                <span className="text-lg font-semibold text-white">
                  Urban Web Pixels - Creative digital agency specializing in web
                  development.
                </span>
              </div>
              <img
                src="/assets/freelance-projects/urban-web-pixels/frame.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="h-10 w-10 rounded-full bg-red-50 p-1">
                <img
                  src="/assets/freelance-projects/urban-web-pixels/uwb-logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <a
                href="https://urbanwebpixels.com/"
                target="_blank"
                className="flex-grow text-xl font-semibold hover:text-red-600"
              >
                Urban Web Pixels
              </a>
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
      </div>
    </>
  );
}

export default FreelanceWork;
