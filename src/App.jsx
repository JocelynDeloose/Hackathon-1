import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import RulesPage from "./Page/RulesPage/RulesPage";
import AboutUsPage from "./Page/AboutUsPage/AboutUsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Footer />}>
            <Route path="/Rules" element={<RulesPage />} />
            <Route path="/About-us" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
