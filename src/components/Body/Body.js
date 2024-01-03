import { MemoryRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainWindow from '../Views/MainWindow';
import DemoWindow from '../Views/DemoWindow';
import PriceWindow from '../Views/PriceWindow';
import SupportWindow from '../Views/SupportWindow';
import PrivacyPolicyWindow from '../Views/PrivacyPolicyWindow';

const Body = () => {
  return (
    <Router>
      <RoutesContent />
    </Router>
  );
};

const RoutesContent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainWindow />} />
      <Route path="/demo" element={<DemoWindow />} />
      <Route path="/priser" element={<PriceWindow />} />
      <Route path="/support" element={<SupportWindow />} />
      <Route path="/privacypolicy" element={<PrivacyPolicyWindow />} />
    </Routes>
  );
};

export default Body;
