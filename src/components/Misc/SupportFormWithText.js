import React from "react";
import SupportForm from "./SupportForm";
import SupportFaqs from "./SupportFaqs";

const SupportFormWithText = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SupportForm />

      <div className="flex flex-col justify-start p-4 leading-normal w-full md:w-1/2">
        <h4 className="text-2xl text-center mt-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500 lg:text-3xl mx-auto">
          Vanliga Frågor och Information
        </h4>
        <div className="mx-8 mt-7 mb-10">
          <SupportFaqs />
        </div>
      </div>
    </div>
  );
};

export default SupportFormWithText;
