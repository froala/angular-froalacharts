import {Component} from '@angular/core';

var chartData = {
  chart: {theme: 'fint'},
  data: [{value: 50}, {value: 55}, {value: 70}, {value: 60}]
}

var config = {
    type: "Column2D",
    width: 500,
    height: 300,
    dataFormat: 'json',
    dataSource: chartData
}

@Component({
  	selector: 'chart',
  	template: `
              <froalacharts [chartConfig]=chartConf> </froalacharts>
              <froalacharts type="Spline" [chartConfig]="chartConf"> </froalacharts>
              <froalacharts type="Pyramid" [chartConfig]=chartConf> </froalacharts>
              <froalacharts type="World" [chartConfig]=chartConf> Column2D chart will render here... </froalacharts>
          `
})

export class FroalaChartsSample {
    chartData = JSON.stringify(chartData);

    chartConf = JSON.stringify(config);
}
