import React from 'react';

import Panel from './Panel';

const Dashboard = ( ) => {
  return(
    <div>
      <div className="row">
           <div className="col-lg-12">
               <h1 className="page-header">Dashboard</h1>
           </div>
       </div>
      <div className="row">
        <div className="col-lg-12">
          <Panel title="Dashboard panel">
            This is a test page
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
