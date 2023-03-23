import { useState } from "react";
import "../Homework1/navbar.scss";


const navbar = () => {

  const [menu, setMenu] = useState("navbar__menu");
    const showNavbar = () => {
      menu === 'navbar__menu' ? setMenu('navbar__active') : setMenu('navbar__menu');
    }

  return (
    <div className="header">
        
        <div className="container">
        <navbar className="navbar">
            
          <a href="#"className="navbar__logo">Fazliddin</a>
              <ul className="navbar__menu">
                <li>
                  <a href="#"className="navbar__menu--link" >Home</a>
                </li>
                <li>
                  <a href="#"className="navbar__menu--link">About</a>
                </li>
                <li>
                  <a href="#"className="navbar__menu--link">Category</a>
                </li>
                <li>
                  <a href="#"className="navbar__menu--link">Registr</a>
                </li>
              </ul>
                  <input type="search" className="navbar__input" placeholder='Search'/>
                  <div className="burger" onClick={showNavbar}>
                    <hr className="burger__line" />
                    <hr className="burger__line" />
                    <hr className="burger__line" />
                  </div>
        </navbar>
        </div>
    </div>
  )
}

export default navbar;