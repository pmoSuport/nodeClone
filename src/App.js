import './App.css';
import Logo1 from './images/logo1.svg'
import Logo2 from './images/logo2.svg'
import Sidenav from './Components/SideNav/Sidenav'
import Gitlogo from './images/gitlogo.png';
import React, { useState } from 'react';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function App() {

  const [theme, setTheme] = useState("light")
  const [open, setOpen] = useState(false)

  function changeTheme() {

    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <img className="logo1" src={Logo1} alt="NodeJs" ></img>
        <img className="logo2" src={Logo2} alt="NodeJs" ></img>
        <ul className="list">
          <li className='active'>Learn</li>
          <li className="li"><a href="https://nodejs.org/en/docs/">Documentation</a></li>
          <li className="li screen" ><a href="https://nodejs.org/en/docs/">Docs</a></li>
          <li className="li"><a href="https://nodejs.dev/download">Download</a></li>
          <li className="li"><a href="https://nodejs.dev/community">Community</a></li>
        </ul>
        <button type="button" className="dark-mode-toggle " onClick={changeTheme}>
          <i className="material-icons light-mode-only theme-buttons"><NightsStayIcon /></i>
          <i className="material-icons dark-mode-only theme-buttons"><WbSunnyIcon /></i>

        </button>
        <img className="gitlogo" src={Gitlogo} alt="GitLogo" ></img>
      </header>
      <button type="button" className={!open ? "side-nav-open" : "side-nav-open1"}
        onClick={() => { setOpen(open => !open) }}
      >
        {!open && <span> Menu</span>}

      </button>
      <Sidenav setOpen={open} open={setOpen} />
    </div>
  );
}

export default App;
