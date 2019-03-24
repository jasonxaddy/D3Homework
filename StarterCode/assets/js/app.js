// @TODO: YOUR CODE HERE!
// Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 500;

// // Define the chart's margins as an object
// var margin = {
//   top: 60,
//   right: 60,
//   bottom: 60,
//   left: 60
// };

// var chartWidth = svgWidth - margin.left - margin.right;
// var chartHeight = svgHeight - margin.top - margin.bottom;

// var svg = d3.select("scatter")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

d3.csv("../data/data.csv", function(error, data) {
    console.log(data)
});