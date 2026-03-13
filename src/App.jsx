import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import HomePage from "./Pages/HomePage";
import EveryOne from "./Pages/EveryOne";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgotPage from "./Pages/ForgotPage";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";

const NO_LAYOUT = ["/every","/login","/register","/forgot",];

const AppContent = () => {
  const location = useLocation();
  const token = localStorage.getItem("app_token");

  // Token yoxdursa — yalnız /every görünür
  if (!token) {
    return (
      <Routes>
        <Route path="/every" element={<EveryOne />} />
        <Route path="*" element={<Navigate to="/every" replace />} />
      </Routes>
    );
  }

  const hideLayout = NO_LAYOUT.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/shop" element={<ShopPage />} /> */}
        <Route path="/every" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
