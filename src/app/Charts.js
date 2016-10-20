import React from 'react';

import PageHeader from './PageHeader'
import DonutChart from './DonutChart';
import Panel from './Panel';

const Charts = ( {currentChart, onChangeChart} ) => {
  let input;
  return(
    <div>
      <PageHeader pageTitle="Portfolio Charts"/>
      <div className="row">
        <div className="col-lg-12">
          <Panel title={`Risk profile: ${currentChart}`}>
            <input
              id="risk"
              ref={(c) => input = c}
              type="range"
              min="1"
              max="10"
              step="1"
              defaultValue="1"
              onChange={() => onChangeChart(input.value)}
            />
          </Panel>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Panel title="Investment portfolio">
            <DonutChart currentChart={currentChart - 1}/>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default Charts;
