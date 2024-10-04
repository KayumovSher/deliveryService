import React, { useState, useContext } from "react";

/// React router dom
import { Link } from "react-router-dom";

/// images
import logo from "../../../images/logo.png";
import logoText from "../../../images/logo-text.png";
// import { ThemeContext } from "../../../context/ThemeContext";

export function  NavMenuToggle(){
	setTimeout(()=>{	
		let mainwrapper = document.querySelector("#main-wrapper");
		if(mainwrapper.classList.contains('menu-toggle')){
			mainwrapper.classList.remove("menu-toggle");
		}else{
			mainwrapper.classList.add("menu-toggle");
		}
	},200);
}

const NavHader = () => {
   const [toggle, setToggle] = useState(false);
   // const { navigationHader, openMenuToggle, background } = useContext(
   //    ThemeContext
   // );
   return (
      <div className="nav-header">
         <Link to="/" className="brand-logo">
            {/* <img className="logo-abbr" src={logo} alt="" style={{width:'200px'}} /> */}
            {/* <img className="logo-compact" src={logoText} alt="" /> */}
            {/* <img className="brand-title" src={logo} alt="" /> */}
            <p></p>
            <h1 style={{color:'green'}}>Weel</h1>
         </Link>

         <div className="nav-control" 
            onClick={() => {
               setToggle(!toggle);
               //openMenuToggle();
               NavMenuToggle();
             }}
         >
            <div className={`hamburger ${toggle ? "is-active" : ""}`}>
               <span className="line" style={{color:'green'}}></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
