import React from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div>
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-menu"
              aria-controls="main-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand" href="./">
              <img src="images/logo.png" alt="Logo" />
            </a>
            <a className="navbar-brand hidden" href="./">
              <img src="images/logo2.png" alt="Logo" />
            </a>
          </div>
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/dashboard">
                  <i className="menu-icon fa fa-dashboard" />
                  Dashboard
                </Link>
              </li>
              <h3 className="menu-title">UI elements</h3>
              {/* /.menu-title */}
              <li className="menu-item-has-children dropdown">
                <Link
                  to="/addproduct"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="menu-icon fa fa-laptop" />
                  Product
                </Link>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="fa fa-puzzle-piece" />
                    {/* <Link to="/addproduct">Add Product</Link> */}
                  </li>
                  <li>
                    <i className="fa fa-id-badge" />
                    <a href="ui-badges.html">View Product</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="menu-icon fa fa-table" />
                  Tables
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="fa fa-table" />
                    <a href="tables-basic.html">Basic Table</a>
                  </li>
                  <li>
                    <i className="fa fa-table" />
                    <a href="tables-data.html">Data Table</a>
                  </li>
                </ul>
              </li>
              {/* <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="menu-icon fa fa-th" />
                  Forms
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-th" />
                    <a href="forms-basic.html">Basic Form</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-th" />
                    <a href="forms-advanced.html">Advanced Form</a>
                  </li>
                </ul>
              </li> */}
              {/* <h3 className="menu-title">Icons</h3> */}
              {/* /.menu-title */}
              {/* <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="menu-icon fa fa-tasks" />
                  Icons
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-fort-awesome" />
                    <a href="font-fontawesome.html">Font Awesome</a>
                  </li>
                  <li>
                    <i className="menu-icon ti-themify-logo" />
                    <a href="font-themify.html">Themefy Icons</a>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <a href="widgets.html">
                  {" "}
                  <i className="menu-icon ti-email" />
                  Widgets{" "}
                </a>
              </li> */}
              {/* <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="menu-icon fa fa-bar-chart" />
                  Charts
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-line-chart" />
                    <a href="charts-chartjs.html">Chart JS</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-area-chart" />
                    <a href="charts-flot.html">Flot Chart</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-pie-chart" />
                    <a href="charts-peity.html">Peity Chart</a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="menu-icon fa fa-area-chart" />
                  Maps
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-map-o" />
                    <a href="maps-gmap.html">Google Maps</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-street-view" />
                    <a href="maps-vector.html">Vector Maps</a>
                  </li>
                </ul>
              </li> */}
              {/* <h3 className="menu-title">Extras</h3> */}
              {/* /.menu-title */}
              {/* <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="menu-icon fa fa-glass" />
                  Pages
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-sign-in" />
                    <a href="page-login.html">Login</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-sign-in" />
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-paper-plane" />
                    <a href="pages-forget.html">Forget Pass</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </nav>
      </aside>
    </div>
  );
}
