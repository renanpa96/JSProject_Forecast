let xlsx = require("xlsx");
let fs = require("fs");
let path = require("path");

let wb = xlsx.read(
  ".\2_JSProject\0_JSProject_ForecastDATAForecast Foxconn_04.23.xlsx"
);

console.log(wb);
