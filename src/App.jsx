import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import RulesPage from "./Page/RulesPage/RulesPage";
import AboutUsPage from "./Page/AboutUsPage/AboutUsPage";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Page/HomePage/HomePage";
import ActivityPage from "./Page/ActivityPage/ActivityPage";
import ReservationPage from "./Page/ReservationPage/ReservationPage";
import ContactPage from "./Page/ContactPage/ContactPage";
import "./App.css";
import "./font/Burton.ttf";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/apropos" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
