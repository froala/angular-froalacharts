import { Component, NgZone } from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
import * as FroalaCharts from 'froalacharts';

declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex36.html',
  styleUrls: ['../ex.css']
})
export class Ex36 {
  demoId = 'ex36';
  sampleCode = fcDemos;
  dataSource: any;
  type: string;
  width: string;
  height: string;
  constructor() {
    this.type = 'timeseries';
    this.width = '100%';
    this.height = '400';
    // This is the dataSource of the chart
    this.dataSource = {
      data: null,
      caption: {
        text: 'Temperature readings in Italy'
      },
      yAxis: [
        {
          plot: 'Temperature',
          title: 'Temperature',
          format: {
            suffix: '°C'
          },
          style: {
            title: {
              'font-size': '14px'
            }
          },
          referenceLine: [
            {
              label: 'Controlled Temperature',
              value: '10'
            }
          ]
        }
      ]
    };
    this.fetchData();
  }

  // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
  // parameters, one is data another is schema.
  fetchData() {
    var jsonify = res => res.json();
    var dataFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/adding-a-reference-line-data.json'
    ).then(jsonify);
    var schemaFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/adding-a-reference-line-schema.json'
    ).then(jsonify);

    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const froalaDataStore = new FroalaCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const froalaTable = froalaDataStore.createDataTable(data, schema);
      // Afet that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      this.dataSource.data = froalaTable;
    });
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex36'].title);
    });
  }
}
