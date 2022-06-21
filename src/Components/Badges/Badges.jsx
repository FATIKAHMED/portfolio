import React from "react";
import "./Badges.css";
import fast from "../../Assets/fast.png";
import responsive from "../../Assets/responsive.png";
import intuitive from "../../Assets/intuitive.png";
import dynamic from "../../Assets/dynamic.png";

function Badges() {
  return (
    <>
      <div className="  p-2 m-8  font-semibold text-center text-5xl  ">
        <h6 className="sets  mt-14 text-gray-500">ABOUT</h6>
      </div>

      <div className="flex flex-wrap justify-center mt-16 gap-6 ">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[90px]  bg-[#04c2c9] rounded-full p-5 pb-[1.3rem]"
            src={fast}
          />
          <h5 className="text-3xl font-semibold text-gray-500 p-2">Fast</h5>
          <p className="text-gray-500 ">
            Fast load times and lag free interaction,
          </p>
          <p className="text-gray-500 ">my highest priority.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[90px]  bg-[#04c2c9] rounded-full p-3 "
            src={responsive}
          />
          <h5 className="text-3xl font-semibold text-gray-500 p-2">
            Responsive
          </h5>
          <p className="text-gray-500 ">My layouts will work on any device,</p>
          <p className="text-gray-500 ">big or small.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[90px]  bg-[#04c2c9] rounded-full p-5 pb-[1.3rem]"
            src={intuitive}
          />
          <h5 className="text-3xl font-semibold text-gray-500 p-2">
            Intuitive
          </h5>
          <p className="text-gray-500 ">Strong preference for easy to use,</p>
          <p className="text-gray-500 ">intuitive UX/UI.</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[90px]  bg-[#04c2c9] rounded-full p-5 pb-[1.3rem]"
            src={dynamic}
          />
          <h5 className="text-3xl font-semibold text-gray-500 p-2">Dynamic</h5>
          <p className="text-gray-500 ">Websites don't have to be static,</p>
          <p className="text-gray-500">I love making pages come to life.</p>
        </div>
      </div>
    </>
  );
}

export default Badges;
