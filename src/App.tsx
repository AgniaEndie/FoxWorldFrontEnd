import React, {useState} from 'react';
import logo from './logo.svg';
import './assets/App.scss';
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
        <AppHeader/>
    </div>
  );
}

export default App;
