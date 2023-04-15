import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytical from "./components/Analytical";
import Newsletter from "./components/Newsletter";
import CardLayer from "./components/CardLayer/CardLayer";
import FooterLayer from "./components/FooterLayer/FooterLayer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytical />
      <Newsletter />
      <CardLayer />
      <FooterLayer />
    </div>
  );
}

export default App;
