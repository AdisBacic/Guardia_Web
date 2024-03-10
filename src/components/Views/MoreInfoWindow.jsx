import React from "react";
import ResponsiveAppBar from "../Navbar/ResponsiveAppBar"; // adjust the path as necessary
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Maincard from "../Misc/Maincard";
import MiddleSection from "../Misc/MiddleSection";
import Footer from "../Misc/Footer";
import Container from "@mui/material/Container";

const MainWindow = () => {
  // const location = useLocation();
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const shouldScroll = queryParams.get("scrollTo") === "anvandingsomraden";

  //   if (shouldScroll) {
  //     setTimeout(() => {
  //       const section = document.getElementById("anvandingsomraden-section");
  //       if (section) {
  //         window.scrollTo({
  //           top: section.offsetTop,
  //           behavior: "smooth",
  //         });
  //       }
  //     }, 0);
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // }, [location]);

  return (
    <>
      <div className="flex flex-col h-full ">
        <ResponsiveAppBar />
        <Container>
        <Maincard />
        <MiddleSection />
        <Footer />
        </Container>
      </div>
    </>
  );
};

export default MainWindow;
