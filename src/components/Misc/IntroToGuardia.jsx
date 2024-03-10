import React from "react";
import shieldImg from "../../assets/images/ShieldHighRes.png";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const IntroToGuardia = () => {
  return (
    <Container className="top-1/4 relative  rounded-xl">
      <div className="flex h-[50vh]">
        <div className="text-white w-full lg:w-2/3 ">
          <h1 className="text-4xl font-poppins-medium pb-8">
            <span className="bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent">Guardia</span> the easiest way to be GDPR compliant, Revoutionalize how you
            dhtin
          </h1>
          <p className="text-gray-400 font-poppins-light pb-8">
            Guardia is your solution for efficient and secure management of keys
            and valuable assets, with full respect for GDPR. Ensure that all
            sensitive information is handled correctly.
          </p>
          <NavLink className="pr-2">
            <Button variant="contained" className="bg-gradient-to-r from-green-600 to-green-900 rounded-none">Boka ett demo</Button>
          </NavLink>
          <NavLink>
            <Button variant="outlined">Läs mer</Button>
          </NavLink>
        </div>
        <img src={shieldImg} alt="Guardia" className="hidden lg:block absolute -right-40 -bottom-40 h-full" />
      </div>
    </Container>
  );
};

export default IntroToGuardia;
