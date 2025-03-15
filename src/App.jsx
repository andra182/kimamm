import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import Service from "./components/Service";
import Why from "./components/Why";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div id="">
        <Hero />
      </div>
      <div id="portofolio">
        <Portofolio />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="why">
        <Why />
      </div>
      <Footer />
      <img
        src="/src/assets/abs1.png"
        alt=""
        className="absolute top-[50rem] left-[-10rem] w-96 z-0"
      />
      <img
        src="/src/assets/abs2.png"
        alt=""
        className="absolute top-[100rem] right-[-10rem] w-96 z-0"
      />
      <img
        src="/src/assets/abs3.png"
        alt=""
        className="absolute top-[100rem] left-[-1rem] w-80 z-0"
      />
      <img
        src="/src/assets/abs4.png"
        alt=""
        className="absolute top-[178rem] right-[-1rem] w-80 z-0"
      />
      <img
        src="/src/assets/abs2.png"
        alt=""
        className="absolute top-[170rem] left-[-10rem] w-96 z-0"
      />
      <img
        src="/src/assets/abs5.png"
        alt=""
        className="absolute top-[222rem] left-[-10rem] w-96 z-0"
      />
    </div>
  );
}

export default App;
