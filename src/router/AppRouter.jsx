import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "../components/NavBar";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CustomersPage from "../pages/CustomersPage";
import Footer from "../components/Footer";
import CustomerPage from "../pages/CustomerPage";

const AppRouter = () => {
  return (
    <>
      <Router>
      <NavBar />
        
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
      </>
  );
};

export default AppRouter;
