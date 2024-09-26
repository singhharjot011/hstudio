import { useState } from "react";
import Heart from "./svg/Heart";
import View from "./svg/View";

function FreelanceWork() {
  const [likes, setLikes] = useState(2);
  const [views, setViews] = useState(3);
  return (
    <>
      <div className="flex flex-col bg-gradient-to-br from-transparent via-purple-50 to-indigo-50 px-20 pt-24 text-stone-900">
        <div className="flex items-center justify-center p-4">
          <h2 className="text-3xl font-extrabold text-indigo-950 md:text-4xl lg:text-5xl">
            Successful Freelance Projects
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:justify-between lg:p-20">
          {/* 1 */}
          <div className="flex flex-col space-y-4">
            <div className="h-72 w-96 rounded-xl bg-gradient-to-l from-gray-200 via-gray-400 to-gray-300 shadow-lg">
              <img
                src="/assets/freelance-projects/woodlawn-pharmacy/frame.avif"
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
              <span className="flex-grow text-xl font-semibold">
                Woodlawn Pharmacy
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

          {/* 2 */}
          <div className="flex flex-col space-y-4">
            <div className="h-72 w-96 rounded-xl bg-gradient-to-l from-gray-200 via-gray-400 to-gray-300 shadow-lg">
              <img
                src="/assets/freelance-projects/medicrest-pharmacy/frame.avif"
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
              <span className="flex-grow text-xl font-semibold">
                Medicrest Pharmacy
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

          {/* 3 */}
          <div className="flex flex-col space-y-4">
            <div className="h-72 w-96 rounded-xl bg-gradient-to-l from-gray-200 via-gray-400 to-gray-300 shadow-lg">
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
              <span className="flex-grow text-xl font-semibold">
                Urban Web Pixels
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
      </div>
    </>
  );
}

export default FreelanceWork;
