import React from "react";
import shieldImg from "../../assets/images/GuardiaWebLogo.png";
import { Container } from "@mui/material";

const IntroToGuardia = () => {
  return (
    <Container className="mt-20 relative">
      <div className="flex items-center">
        <div className="text-white w-1/2 border">
            <h1 className=""></h1>

        </div>
      <img src={shieldImg} alt="Guardia" className="absolute -right-60 top-40 hidden md:block" />
      </div>
    </Container>
  );
};

export default IntroToGuardia;
