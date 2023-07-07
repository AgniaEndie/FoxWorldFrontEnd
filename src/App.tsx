import React, {useState} from 'react';
import logo from './logo.svg';
import './assets/App.scss';
import AppHeader from "./components/AppHeader/AppHeader";
import AppCarousel from "./components/AppCarousel/AppCarousel";
import About from "./components/About/About";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
        <AppHeader/>
        <AppCarousel/>
        <About/>
        <AppFooter/>
    </div>
  );
}

export default App;
