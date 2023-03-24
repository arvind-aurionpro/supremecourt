import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../basepage/BasePage";
const Navigation = () => {
  const isLogout = useContext(MyContext).showLogout || false;

  const active_nav = useContext(MyContext).active_nav
  return (
    <div className="row ">
      <div className="nav-scroller py-3 darkmode">
        <nav className="nav d-flex justify-content-center">
          <Link className= {active_nav==1? ' p-2 ms-2 nav_color_hover nav_active':" p-2 ms-2 nav_color_hover"} to="/">
            HOME
          </Link>

          {isLogout ? (
            <>
              <Link className= {active_nav==2? ' p-2 ms-2 nav_color_hover nav_active':" p-2 ms-2 nav_color_hover"} to="/Dashboard">
                DASHBOARD
              </Link>
            </>
          ) : null}
          <a className={active_nav==3? ' p-2 ms-2 nav_color_hover nav_active':" p-2 ms-2 nav_color_hover"} href="#">
            COLLEGIUM RESOLUTIONS
          </a>
          <Link className={active_nav==4? ' p-2 ms-2 nav_color_hover nav_active':" p-2 ms-2 nav_color_hover"} to="/CauseList">
            CAUSE LIST
          </Link>
          <a className={active_nav==5? ' p-2 ms-2 nav_color_hover nav_active':" p-2 ms-2 nav_color_hover"} href="#">
            DAILY ORDERS
          </a>

          <ul className="navbar-nav ms-2 drop">
            <li className="nav-item dropdown">
              <Link
                className={active_nav==6? "nav-link dropdown-toggle hide nav_color_hover nav_active":"nav-link dropdown-toggle hide nav_color_hover"}
                to=""
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                JUDGEMENTS
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-light hide"
                aria-labelledby="navbarDarkDropdownMenuLink"
                data-bs-popper="none"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    link 11
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    link 11
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    link 11
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ms-3 drop">
            <li className="nav-item dropdown">
              <Link
                className={active_nav==7? "nav-link dropdown-toggle hide nav_color_hover nav_active":"nav-link dropdown-toggle hide nav_color_hover"}
                to=""
                id="navbarDarkDropdownMenuLink1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                SUPREME COURT
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-light hide"
                aria-labelledby="navbarDarkDropdownMenuLink1"
                data-bs-popper="none"
              >
                <li>
                  <Link className="dropdown-item" to="/NoticeAndCirculars">
                    Notice & circulars under
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    link 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    link 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <a className={active_nav==8? ' p-2 ms-2 nav_color_hover nav_active':" p-2 ms-2 nav_color_hover"} href="#">
            CAVEAT
          </a>
          {isLogout ? (
            <>
              <Link className={active_nav==9? ' p-2 ms-2 nav_color_hover nav_active':" p-2 ms-2 nav_color_hover"} to="/">
                LOGOUT
              </Link>
            </>
          ) : (
            <>
              <Link className={active_nav==10? ' p-2 ms-2 nav_color_hover nav_active':" p-2 ms-2 nav_color_hover"} to="/Dashboard">
                LOGIN
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
