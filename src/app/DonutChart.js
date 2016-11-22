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
                // hoverBackgroundColor: colors,
            }]
    };

    this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          cutoutPercentage: 50
        }
    });

  }

  componentWillReceiveProps(props) {
    // set the data of the cart to the current chart selected
    this.chart.data.datasets[0].data = chartsData[props.currentChart];
    // trigger update method to refresh the chart
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
