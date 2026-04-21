import { HashRoture, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import FormPage from "./FormPage";
const App = () => {
  return (
    <HashRoture>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<FormPage />} />
      </Routes>
    </HashRoture>
  );
};

export default App;
