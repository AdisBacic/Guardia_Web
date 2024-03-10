import React from "react";
import ResponsiveAppBar from "../Navbar/ResponsiveAppBar"; // adjust the path as necessary
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IntroToGuardia from "../Misc/IntroToGuardia";

const MainWindow = () => {
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const shouldScroll = queryParams.get("scrollTo") === "anvandingsomraden";

    if (shouldScroll) {
      setTimeout(() => {
        const section = document.getElementById("anvandingsomraden-section");
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
