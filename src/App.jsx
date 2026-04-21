import {Routes, Route, HashRouter} from "react-router-dom";
import LandingPage from "./LandingPage";
import FormPage from "./FormPage";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<FormPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
