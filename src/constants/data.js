
// define categories for the charts
export const categories = ['Stocks', 'Bonds', 'ETFs', 'Cash', 'Commodities','Fixed Income'];
// define background colors for each category
export const colors = ['#506C91','#6E9F69','#4E92DF','#FF9135','#FFF092','#D14747'];

// min and max values for every category
let minValue = 50;
let maxValue = 1000;

// generate charts with values contained in the limits defined
const allCharts = generateCharts(50, 1000);

export const chartsData = [...allCharts];

// Generate 10 random charts
function generateCharts(min, max){
  // charts is an array of charts
  let charts = [];
  for (let c=0; c<10; c++){
    // chart is an array of values
    let chart =[];
    // generate as many values as categories
    for (let i=0, l=categories.length; i<l; i++ ){
      // add value to the chart
      chart.push(getRandomIntInclusive(min, max));
    }
    // add chart to charts array
    charts.push(chart);
  }
  return charts;

}

// returns a random number between min and max (inclusive)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
