import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import RulesPage from "./Page/RulesPage/RulesPage";
import AboutUsPage from "./Page/AboutUsPage/AboutUsPage";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Page/HomePage/HomePage";
import ActivityPage from "./Page/ActivityPage/ActivityPage";
import ReservationPage from "./Page/ReservationPage/ReservationPage";
import ContactPage from "./Page/ContactPage/ContactPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ActivityPage" element={<ActivityPage />} />
          <Route path="/ReservationPage" element={<ReservationPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/RulesPage" element={<RulesPage />} />
          <Route path="/About-us" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
