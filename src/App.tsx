import React, {useState} from 'react';
import logo from './logo.svg';
import './assets/App.scss';
import AppHeader from "./components/AppHeader/AppHeader";
import AppCarousel from "./components/AppCarousel/AppCarousel";
import About from "./components/About/About";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
    const [isAccountActive, setIsAccountActive] = useState(false);
    const [userData, setUserData] = useState({
        username : "",
        token : "",
        uuid: ""
    })

    const handleAccountActive = (childData : boolean)=>{
        setIsAccountActive(childData)
    }
    const handleUserData = (childData : {
        username : "",
        token : "",
        uuid: ""
    })=>{
        setUserData(childData)
    }
    console.log(userData)
    return (
    <div className="App">
        <AppHeader isAccountActive={handleAccountActive} value={isAccountActive} userData={handleUserData} userDataValue={userData}/>
        <AppCarousel/>
        <About/>
        <AppFooter/>
    </div>
  );
}

export default App;
