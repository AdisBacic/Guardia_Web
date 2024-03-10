import React from "react";
import ResponsiveAppBar from "../Navbar/ResponsiveAppBar"; // adjust the path as necessary
import { useEffect } from "react";
import IntroToGuardia from "../Misc/IntroToGuardia";

const MainWindow = () => {

  return (
    <>
      {/* <SimpleSnackbar /> */}

      <div className="flex flex-col h-screen overflow-x-hidden overflow-y-hidden">
        <ResponsiveAppBar />
        <IntroToGuardia />
      </div>
    </>
  );
};

export default MainWindow;
