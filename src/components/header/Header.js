import { useState,useContext,useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { MyContext } from "../basepage/BasePage";
import { accessibility } from "../../utils/functions";
import { darkMode, lightMode } from "../../utils/functions";
const Header = () => {
  accessibility('322')
  const [search,setSearch] = useState('')
  const [darkmode,setDarkMode] = useState(false)
  const allContext = useContext(MyContext)

  useEffect(()=>{
    if(allContext.hasOwnProperty('darkMode') && allContext.darkMode){

      if(darkmode){
        darkMode()
      }else{
        lightMode()
      }
    }


  },[darkmode])


  return (
    <>
      <header className="blog-header lh-1">
        <div className="row flex-nowrap justify-content-between align-items-center topbar">
          <div className="col-4 pt-1">
            <p>
              <a href="#">Sitemap</a> | <span>Light/Dark Mode</span>
              <span className="form-switch mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  defaultChecked={false}
                  onChange={()=>setDarkMode(darkmode?false:true)}
                  style= {{cursor:'pointer'}}
                />
              </span>
            </p>
          </div>

          <div className="col-8 d-flex justify-content-end align-items-center">
            <ul className="accessibility-links">
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.nic.sciapp" target='_blank'>
                  <img
                    src={"./img/google-playstore.svg"}
                    alt="Download App from Playstore"
                  />
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/in/app/supreme-court-of-india/id1523266644"  target='_blank'>
                  <img
                    src={"./img/app-store.svg"}
                    
                    alt="Download App from Apple Store"
                   
                  />
                </a>
              </li>
              <li>
                <a href="#">Skip to main content</a>
              </li>
              <li>
                <a target = "_blank" href="https://www.meity.gov.in/content/screen-reader-access ">
                  <img  src={'/img/screen-reader-icon.svg'} alt='screen reader' title={"Screen Reader"}/>
                </a>
              </li>
              <li>

              <ul className="navbar-nav ms-2 drop">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hide"
                href="#"
                id="navbarDarkDropdownMenuLink_1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                  <img src={"/img/accessibility-icon.svg"} alt='Accessibility' title={'Accessibility'}/>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-light hide"
                aria-labelledby="navbarDarkDropdownMenuLink_1"
                data-bs-popper="none"
              >
                <li>
                  <span className="dropdown-item" onClick={()=>accessibility('0')}>
                    -A
                  </span>
                </li>
                <li>
                  <span className="dropdown-item" onClick={()=>accessibility('1')}>
                  &nbsp;A
                  </span>
                </li>
                <li>
                  <span className="dropdown-item" onClick={()=>accessibility('2')}>
                  +A
                  </span>
                </li>
              </ul>
            </li>
          </ul>
              </li>
              <li>

              <ul className="navbar-nav ms-2 drop">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hide"
                href="#"
                id="navbarDarkDropdownMenuLink_2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              > 
                  <img src="/img/language-change-icon.svg" alt='Language' title="Language"/>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-light hide"
                aria-labelledby="navbarDarkDropdownMenuLink_2"
                data-bs-popper="none"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Hindi
                  </a>
                </li>
                
              </ul>
            </li>
          </ul>

              </li>
            </ul>
          </div>
        </div>
        <div className="after_login row  darkmode">

          <div className="col-sm-10"></div>

          <div className="col-sm-2" >
            
            
            <ul className= {allContext.showLogout?"navbar-nav  drop":"navbar-nav ms-2 drop hidden"}>
            <li className="nav-item dropdown pt-1">
              <a
                className=" dropdown-toggle hide after_login_color common_text_color"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
               <img className="" src="/img/dashboard/user-login-icon.svg" style={{width:"9%"}}/> welcome. Mohan vamsi
              </a>
              <ul
                className="dropdown-menu dropdown-menu-light hide ul_float_right"
                aria-labelledby="navbarDarkDropdownMenuLink"
                data-bs-popper="none"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
                
              </ul>
            </li>
          </ul>

            
            </div>
        </div>
        <div className="row py-2 darkmode">
          <div className="col-4">

            {
              darkmode && allContext.hasOwnProperty('darkMode') && allContext.darkMode?(
                <a href="#">
                <img src="/img/sci-logo-darkmode.svg" alt='logo' className="scilogo"/>
              </a>
              ):(
                <a href="#">
                <img src="/img/sci-logo.svg" alt='logo' className="scilogo"/>
              </a>
              )
            }
           
          </div>
          <div className="col-8 d-flex justify-content-end align-items-center position-relative">
        
            
            <span className="searchfiltertxt">
              <a href="#">Advanced Search</a>&nbsp;|&nbsp;<a href="#">Docket Search</a>
            </span>
            <div className="input-group mysearchbox">
                <input className="form-control border-end-0 border" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search here.." id="searchinput"/>
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
            

           
          </div>
        </div>

        <Navigation />
      </header>
    </>
  );
};

export default Header;
