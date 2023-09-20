import React from "react";
import { topPicks } from "../data/data";

const TopPicks = () => {
  console.log(topPicks);
  return (
    <div>
      <h1 className="text-orange-500 text-2xl font-bold text-center">
        Top Picks
      </h1>
      <div className="flex max-w-[1520px]  m-auto py-2 px-2 gap-3 overflow-auto">
        {topPicks.map((item) => {
          return (
            <div key={item.id} className="rounded-2xl relative flex-shrink-0">
              <div className="absolute w-[300px] h-full rounded-2xl bg-black/60 text-white">
                <p className="px-2 font-bold">{item.title}</p>
                <p className="px-2">{item.price}</p>
                <button className="border-dotted border-white bg-black/50 text-white mx-2 p-1 absolute bottom-4">
                  Add to Cart
                </button>
              </div>
              <img
                className="h-[200px] w-[300px] rounded-2xl object-cover cursor-pointer hover:scale-105 ease-out duration-100"
                src={item.img}
                alt={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopPicks;
