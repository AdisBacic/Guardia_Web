import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainWindow from '../Views/MainWindow';
import DemoWindow from '../Views/DemoWindow';
import PriceWindow from '../Views/PriceWindow';
import SupportWindow from '../Views/SupportWindow';
import PrivacyPolicyWindow from '../Views/PrivacyPolicyWindow';
import DownloadWindow from '../Views/DownloadWindow';
import OrderConfirmation from '../Views/OrderConfirmation';
import MoreInfoWindow from '../Views/MoreInfoWindow';

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
      <Route path="/moreinfo" element={<MoreInfoWindow />} />
      <Route path="/demo" element={<DemoWindow />} />
      {/* <Route path="/download" element={<DownloadWindow />} /> */}
      <Route path="/priser" element={<PriceWindow />} />
      <Route path="/support" element={<SupportWindow />} />
      <Route path="/privacypolicy" element={<PrivacyPolicyWindow />} />
      <Route path="/confirmOrder" element={<OrderConfirmation />} />
    </Routes>
  );
};

export default Body;
