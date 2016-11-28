import React from 'react';

import PageHeader from './PageHeader'
import DonutChart from './DonutChart';
import Panel from './Panel';

import { maxCharts } from '../constants/data';

const Charts = ( {currentChart, onChangeChart} ) => {
  let sliderInput;
  return(
    <div>
      <PageHeader pageTitle="Portfolio Charts"/>
      <div className="row">
        <div className="col-xs-12">
          <Panel title={`Risk profile: ${currentChart}`}>
            <input
              id="risk"
              ref={(elem) => sliderInput = elem}
              type="range"
              min="1"
              max={maxCharts}//"10"
              step="1"
              defaultValue="1"
              onChange={() => onChangeChart(sliderInput.value)}
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
