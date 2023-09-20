import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-[1520px] m-auto text-white px-4 bg-black/50">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice how to improve your flow?</h1>
          <h1>Sign Up to join our newsletter and stay up to date.</h1>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-4">
              Notify me
            </button>
          </div>
          <div>
            <p>
              we are concerned about the security of your data, Read{""}
              <span className="text-[#00df9a]">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
