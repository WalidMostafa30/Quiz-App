import React from "react";
import "./css/App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

const App = () => {

  return (
    <main>
      <NavBar />
      <Home />
    </main>
  );
};

export default App;
