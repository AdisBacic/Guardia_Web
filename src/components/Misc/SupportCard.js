import React from "react";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import SupportHeroSection from "./SupportHeroSection";
import SupportFormWithText from "./SupportFormWithText";

const SupportCard = () => {
  return (
    <div className="bg-[#090A0F] flex items-center justify-center mt-16 md:mt-24 lg:mt-30">
      <div className="cursor-default flex flex-col items-center border-gray-700 bg-[#090A0F] w-full">
        <SupportHeroSection />

        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div className="w-full mx-auto pb-20">
            <SupportFormWithText />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default SupportCard;
