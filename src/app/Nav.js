import React from 'react';
import {Link} from 'react-router';

const Nav = ( { title } ) => (

  <nav className="navbar navbar-default navbar-static-top nav-fix" role="navigation">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">{title}</Link>
      </div>
      <ul className="nav navbar-top-links navbar-right">
        <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
                <li><Link to="#"><i className="fa fa-user fa-fw"></i> User Profile</Link>
                </li>
                <li><Link to="#"><i className="fa fa-gear fa-fw"></i> Settings</Link>
                </li>
                <li className="divider"></li>
                <li><Link to="/"><i className="fa fa-sign-out fa-fw"></i> Logout</Link>
                </li>
            </ul>
        </li>
      </ul>

      <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
              <ul className="nav" id="side-menu">
                  <li className="sidebar-search">
                      <div className="input-group custom-search-form">
                          <input type="text" className="form-control" placeholder="Search..."></input>
                          <span className="input-group-btn">
                          <button className="btn btn-default" type="button">
                              <i className="fa fa-search"></i>
                          </button>
                      </span>
                      </div>
                  </li>
                  <li>
                      <Link to="/dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
                  </li>
                  <li>
                      <Link to="#"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></Link>
                      <ul className="nav nav-second-level">
                          <li>
                              <Link to="/charts">Portfolio Charts</Link>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>

  </nav>

);

export default Nav;
