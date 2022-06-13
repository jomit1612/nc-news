import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
