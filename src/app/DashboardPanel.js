import React from 'react';
import {Link} from 'react-router';

const DashboardPanel = ( {color, icon, num, text} ) => (

  <div className={`panel panel-${color}`}>
      <div className="panel-heading">
          <div className="row">
              <div className="col-xs-3">
                  <i className={`fa ${icon} fa-5x`}></i>
              </div>
              <div className="col-xs-9 text-right">
                  <div className="huge">{num}</div>
                  <div>{text}</div>
              </div>
          </div>
      </div>
      <Link to="/charts">
          <div className="panel-footer">
              <span className="pull-left">View Details</span>
              <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
              <div className="clearfix"></div>
          </div>
      </Link>
  </div>

);

export default DashboardPanel;
