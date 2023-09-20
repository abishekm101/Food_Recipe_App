import React, { useState } from "react";
import { mealData } from "../data/data";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCat = (category) => {
    if (category === "all") {
      setFoods(mealData);
    } else {
      const filteredFoods = mealData.filter(
        (item) => item.category === category
      );
      setFoods(filteredFoods);
    }
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Spicy
      </h1>
      <div className="flex flex-col lg:flex-row justify-center mb-4">
        <div className="flex justify-center md:justify-center ">
          <button
            onClick={() => filterCat("all")}
            className="w-16 bg-orange-500 text-white hover:bg-white hover:text-black"
          >
            All
          </button>
          <button
            onClick={() => filterCat("pizza")}
            className="w-16 bg-orange-500 text-white hover:bg-white hover:text-black"
          >
            Pizza
          </button>
          <button
            onClick={() => filterCat("chicken")}
            className="w-16 bg-orange-500 text-white hover:bg-white hover:text-black"
          >
            Chicken
          </button>
          <button
            onClick={() => filterCat("salad")}
            className="w-16 bg-orange-500 text-white hover:bg-white hover:text-black"
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-3">
        {foods?.map((item) => {
          return (
            <div
              key={item.id}
              className="border-none hover:scale-105 duration-300"
            >
              <img
                className="h-[200px] w-full object-cover rounded-md"
                src={item.image}
                alt={item.name}
              />

              <div className="flex justify-between px-4 py-2">
                <p className="bg-orange-500 h-16 rounded-full border-2 font-semibold -mt-10 py-4 px-3">
                  {item.price}
                </p>
                <p className="bg-orange-500 rounded-lg h-18 px-4 font-semibold">
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
