import React from "react";
import "./Landing_Page.css";

function Landing_page() {
  return (
    <>
      <div className=" h-[100vh] flex flex-col items-center justify-center gap-3 bg-[#252934]">
        <h1 className="md:text-5xl text-2xl font-normal text-white">
          Hello, I'm
          <span className="text-pink-800">Fatik Ahmed Khan</span>,
        </h1>
        <h1 className="md:text-5xl text-2xl font-normal text-white">
          I'm full stack web developer
        </h1>
        <button className="view-button flex items-center gap-5 text-xl font-light mt-3 text-white border-[2px] pl-5 pr-5 pt-2 pb-2 hover:bg-cyan-500 transition-all duration-150 ease-in">
          View my work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 button-arrow"
            viewBox="0 0 20 17"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Landing_page;
