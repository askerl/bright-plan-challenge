import React from 'react';

import PageHeader from './PageHeader'
import DashboardPanel from './DashboardPanel';

const Dashboard = ( ) => {
  let colClass = "col-md-6";
  return(
    <div>
      <PageHeader pageTitle="Dashboard"/>
      <div className="row">
        <div className={colClass}>
          <DashboardPanel color="primary" icon="fa-pie-chart" num="10" text="New Portfolio Charts!"/>
        </div>
        <div className={colClass}>
          <DashboardPanel color="green" icon="fa-tasks" num="12" text="New Tasks!"/>
        </div>
        <div className={colClass}>
          <DashboardPanel color="yellow" icon="fa-shopping-cart" num="124" text="New Orders!"/>
        </div>
        <div className={colClass}>
          <DashboardPanel color="red" icon="fa-support" num="13" text="Support Tickets!"/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
