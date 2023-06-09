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
import UseStatePage from "../pages/UseStatePage";
import EjercicioPage from "../pages/EjercicioPage";
import Footer from "../components/Footer";

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
            <Route path="/use-state" element={<UseStatePage />} />
            <Route path="/Ejercicio" element={<EjercicioPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </>
  );
};

export default AppRouter;
