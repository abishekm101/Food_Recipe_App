import React from "react";
import deliveryimg from "../assets/deliverimg2.png";

const Delivery = () => {
  return (
    <div className="w-full py-10">
      <h1 className="text-orange-500 font-bold text-center text-2xl">
        Quick Delivery App
      </h1>
      <div className="max-w-[1250px] mx-auto grid md:grid-cols-2">
        <img className="w-[550px] mx-auto my-4" src={deliveryimg} alt="" />
        <div className="flex flex-col justify-center px-4">
          <p className="font-bold text-blue-600">Get The App</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl py-2 font-bold">
            Limitless Conveience on-demand
          </h1>
          <p>
            Our revolutionary "Limitless Delivery" feature for your favorite
            food delivery app! We understand that your cravings have no
            boundaries, and neither should your dining choices. With our
            unparalleled service, you can now enjoy a world of flavors without
            any restrictions.With "Limitless Delivery," your culinary desires
            know no bounds. Experience the future of food delivery and embark on
            a gastronomic journey without limits – because when it comes to
            satisfying your cravings, we believe there should be no boundaries.
            Taste the freedom today!
          </p>
          <button className="w-[200px] bg-black font-bold text-blue-600 my-5 md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
