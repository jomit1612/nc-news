import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Nav from "./Utils/nav";
import Cooking from "./components/Cooking";
import Coding from "./components/Coding";
import Football from "./components/Football";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/football" element={<Football />} />
      </Routes>
    </>
  );
}

export default App;
