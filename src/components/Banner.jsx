import React, { useEffect, useState } from "react";
// import img1 from "../assets/foodimg1.jpg";
import img3 from "../assets/foodimg3.jpg";
import img5 from "../assets/foodimg5.jpg";
import img6 from "../assets/foodimg6.jpg";
import img2 from "../assets/foodimg2.jpg";
import img4 from "../assets/foodimg4.jpg";

const BannerImage = [img3, img2, img4, img5, img6];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % BannerImage.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  if (!BannerImage || BannerImage.length === 0) {
    // Handle the case where BannerImage is not defined or empty
    return null; // or display a loading indicator
  }

  return (
    <div className="max-w-[1520px] w-full py-4 px-4 relative">
      <div className="">
        <img
          className="sm:h-[300px] md:h-[400px] w-full rounded-2xl object-cover"
          src={BannerImage[currentIndex]}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
