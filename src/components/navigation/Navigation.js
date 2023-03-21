import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../basepage/BasePage";
const Navigation = () => {
  const isLogout = useContext(MyContext).showLogout || false;
  return (
    <div className="row ">
      <div className="nav-scroller py-3 darkmode">
        <nav className="nav d-flex justify-content-center">
          <Link className="p-2 ms-2 nav_color_hover" to="/">
            HOME
          </Link>

          {isLogout ? (
            <>
              <Link className="p-2 ms-2 nav_color_hover" to="/Dashboard">
                Dashboard
              </Link>
            </>
          ) : null}
          <a className="p-2 ms-2 nav_color_hover" href="#">
            COLLEGIUM RESOLUTIONS
          </a>
          <Link className="p-2 ms-2 nav_color_hover" to="/CauseList">
            CAUSE LIST
          </Link>
          <a className="p-2 ms-2 nav_color_hover" href="#">
            DAILY ORDERS
          </a>

          <ul className="navbar-nav ms-2 drop">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hide nav_color_hover"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                JUDGEMENTS
              </a>
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
              <a
                className="nav-link dropdown-toggle hide nav_color_hover"
                href="#"
                id="navbarDarkDropdownMenuLink1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                SUPREME COURT
              </a>
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

          <a className="p-2 ms-2 nav_color_hover" href="#">
            CAVEAT
          </a>
          {isLogout ? (
            <>
              <Link className="p-2 ms-2 nav_color_hover" to="/">
                LOGOUT
              </Link>
            </>
          ) : (
            <>
              <Link className="p-2 ms-2 nav_color_hover" to="/Dashboard">
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
