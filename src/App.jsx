import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Page/HomePage/HomePage";
import ActivityPage from "./Page/ActivityPage/ActivityPage";
import ReservationPage from "./Page/ReservationPage/ReservationPage";
import ContactPage from "./Page/ContactPage/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ActivityPage" element={<ActivityPage />} />
          <Route path="/ReservationPage" element={<ReservationPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
