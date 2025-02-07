import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutUs from "./components/About Us";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home />
      <AboutUs />
      <Routes>
        <Route path="/" element={Home}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
