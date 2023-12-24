// import React, { useEffect, useContext, useState } from 'react';
import { useNavigate, MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import MainWindow from '../Views/MainWindow';
import DemoWindow from '../Views/DemoWindow';
import PriceWindow from '../Views/PriceWindow';

// const LayoutAuthorized = ({ children }) => {
// };

const Body = () => {

    return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<LayoutAuthorized><MainWindow /></LayoutAuthorized>} /> */}
      {/* Without auth */}
        <Route path="/" element={<MainWindow />} />
        <Route path="/demo" element={< DemoWindow />} />
        <Route path="/priser" element={< PriceWindow />} />
      {/* <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
  </Router>
   );
 
};

export default Body;
