import React, {  useContext, useReducer, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import {Collapse} from 'react-bootstrap';
/// Link
import { Link } from "react-router-dom";
import {MenuList} from './Menu';
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

import icon1 from '../../../images/icon1.png';


const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active : "",
  activeSubmenu : "",
}

const SideBar = () => {
  var d  = new Date();
  const [heartBlast,setHeartBlast ] = useState(false);
  function handleClick(){
    setHeartBlast(!heartBlast);
  }

	const {
		iconHover,
		sidebarposition,
		headerposition,
		sidebarLayout,
    ChangeIconSidebar,
  
	} = useContext(ThemeContext);

  const [state, setState] = useReducer(reducer, initialState);	
	 
	  // let handleheartBlast = document.querySelector('.heart');
	  // function heartBlast(){
		//   return handleheartBlast.classList.toggle("heart-blast");
	  // }
  
 	const [hideOnScroll, setHideOnScroll] = useState(true)
	useScrollPosition(
		({ prevPos, currPos }) => {
		  const isShow = currPos.y > prevPos.y
		  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
		},
		[hideOnScroll]
	)

 
	const handleMenuActive = status => {		
		setState({active : status});			
		if(state.active === status){				
			setState({active : ""});
		}   
	}
	const handleSubmenuActive = (status) => {		
		setState({activeSubmenu : status})
		if(state.activeSubmenu === status){
			setState({activeSubmenu : ""})			
		}    
	}
	// Menu dropdown list End

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  

    return (
      <>
        <div 
          onMouseEnter={()=>ChangeIconSidebar(true)}
          onMouseLeave={()=>ChangeIconSidebar(false)}
          className={`deznav  border-right ${iconHover} ${
            sidebarposition.value === "fixed" &&
            sidebarLayout.value === "horizontal" &&
            headerposition.value === "static"
              ? hideOnScroll > 120
                ? "fixed"
                : ""
              : ""
            }`}
        >
          <PerfectScrollbar className="deznav-scroll">
              <ul className="metismenu" id="menu">
                {MenuList.map((data, index)=>{
                  let menuClass = data.classsChange;
                    if(menuClass === "menu-title"){
                      return(
                          <li className={menuClass}  key={index} >{data.title}</li>
                      )
                    }else{
                      return(				
                        <li className={` ${ state.active === data.title ? 'mm-active' : ''}`}
                          key={index} 
                        >
                          
                          {data.content && data.content.length > 0 ?
                              <>
                                <Link to={"#"} 
                                  className="has-arrow"
                                  onClick={() => {handleMenuActive(data.title)}}
                                >								
                                    {data.iconStyle}
                                    <span className="nav-text">{data.title}</span>
                                </Link>
                                <Collapse in={state.active === data.title ? true :false}>
                                    <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                      {data.content && data.content.map((data,index) => {									
                                        return(	
                                            <li key={index}
                                              className={`${ state.activeSubmenu === data.title ? "mm-active" : ""}`}                                    
                                            >
                                              {data.content && data.content.length > 0 ?
                                                  <>
                                                    <Link to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                                      onClick={() => { handleSubmenuActive(data.title)}}
                                                    >
                                                      {data.title}
                                                    </Link>
                                                    <Collapse in={state.activeSubmenu === data.title ? true :false}>
                                                        <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                                          {data.content && data.content.map((data,index) => {
                                                            return(	
                                                              <>
                                                                <li key={index}>
                                                                  <Link className={`${path === data.to ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                                                </li>
                                                              </>
                                                            )
                                                          })}
                                                        </ul>
                                                    </Collapse>
                                                  </>
                                                :
                                                <Link to={data.to}>
                                                  {data.title}
                                                </Link>
                                              }
                                              
                                            </li>
                                          
                                        )
                                      })}
                                    </ul>
                                  </Collapse>
                              </>
                          :
                            <Link  to={data.to} >
                                {data.iconStyle}
                                <span className="nav-text">{data.title}</span>
                            </Link>
                          }
                          
                        </li>	
                      )
                    }
                  })} 
              </ul>
                <div className="add-menu-sidebar">
                  <img src={icon1} alt="" />
                  <p>Organize your menus through button bellow</p>
                  <Link to="#" className="btn bg-white text-black">
                    + Add Menus
                  </Link>
                </div>
              <div className="copyright">
                  <p>
                    <strong>Davur - React Restaurant Admin Dashboard</strong> © {d.getFullYear()} All
                    Rights Reserved
                  </p>
                <p>
                  Made with{" "}
                  <span className={`heart ${heartBlast ? 'heart-blast' : ''}`} onClick={handleClick}></span>{" "}
                  by DexignZone
                </p>
              </div>
          </PerfectScrollbar>
        </div>
      </>
    );

}

export default SideBar;
