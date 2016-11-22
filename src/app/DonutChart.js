import React from 'react';
import {chartsData,categories,colors} from '../constants/data';
import Chart from 'chart.js';


class DonutChart extends React.Component {

  componentDidMount() {

    let ctx = document.getElementById("myChart");

    let data = {
        labels: categories,
        datasets: [
            {
                data: chartsData[this.props.currentChart],
                backgroundColor: colors,
                // hoverBackgroundColor: colors              
            }]
    };

    this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: data
    });

  }

  componentWillReceiveProps(props) {
    this.chart.data.datasets[0].data = chartsData[props.currentChart];
    this.chart.update();
  }

  render(){
    return(
      <div id="canvasBox">
        <canvas id="myChart"></canvas>
      </div>
    );
  }

}

export default DonutChart;
