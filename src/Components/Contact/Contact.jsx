import React from "react";

function Contact() {
  return (
    <>
      <div className="h-[100vh] bg-black flex items-center flex-col top-3">
        <div>
          <div className="  p-2 m-8  font-semibold text-center text-5xl  ">
            <h6 className="sets  mt-14 text-[#04c2c9]">CONTACT US</h6>
          </div>
        </div>
        <div>
          <form>
            <h2 className="text-[#04c2c9] mt-3 ml-3 mr-3 mb-1">Name</h2>
            <input className=" w-[100%] p-1 mt-2 ml-3 mr-3 mb-2"type="text"></input>
            <h2 className="text-[#04c2c9] mt-3 ml-3 mr-3 mb-1">E-mail</h2>
            <input className="w-[100%] p-1 mt-2 ml-3 mr-3 mb-2"></input>
            <h2 className="text-[#04c2c9] mt-3 ml-3 mr-3 mb-1">Subject</h2>
            <input className=" w-[100%] p-1 mt-2 ml-3 mr-3 mb-2"></input>
            <h2 className="text-[#04c2c9] mt-3 ml-3 mr-3 mb-1">Enter Message</h2>
            <textarea  className=" w-[100%] p-1 mt-2 ml-3 mr-3 mb-2"></textarea>
            <div className="item-center">
            <button type="submit" className=" flex items-center  text-center  text-xl font-light m-3 text-[#04c2c9] border-[2px] border-[#04c2c9] rounded-md pl-3 pr-3 ">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
