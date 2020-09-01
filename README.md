# angular-froalacharts

A simple and lightweight official Angular component for FroalaCharts JavaScript charting library. angular-froalacharts enables you to add JavaScript charts in your Angular application without any hassle.

## [Demo](https://froalacharts.github.io/angular-froalacharts/)

- Github Repo: [https://github.com/froalacharts/angular-froalacharts](https://github.com/froalacharts/angular-froalacharts)
- Documentation: [https://www.froalacharts.com/dev/getting-started/angular/angular/your-first-chart-using-angular](https://www.froalacharts.com/dev/getting-started/angular/angular/your-first-chart-using-angular)
- Support: [https://www.froalacharts.com/contact-support](https://www.froalacharts.com/contact-support)
- FroalaCharts
  - Official Website: [https://www.froalacharts.com/](https://www.froalacharts.com/)
  - Official NPM Package: [https://www.npmjs.com/package/froalacharts](https://www.npmjs.com/package/froalacharts)
- Issues: [https://github.com/froalacharts/angular-froalacharts/issues](https://github.com/froalacharts/angular-froalacharts/issues)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Working with chart API](#working-with-apis)
  - [Working with events](#working-with-events)
- [Quick Start](#quick-start)
- [Going Beyond Charts](#going-beyond-charts)
- [Usage and Integration of FroalaTime](#usage-and-integration-of-froalaTime)
- [For Contributors](#for-contributors)
- [Licensing](#licensing)

## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.
- You've an **Angular** Application.
- **FroalaCharts** installed in your project, as detailed below:

### Installation

To install `angular-froalacharts` library, run:

```bash
$ npm install angular-froalacharts --save
```

To install `froalacharts` library:

```bash
$ npm install froalacharts --save
```

## Quick Start

Here is a basic sample that shows how to create a chart using `angular-froalacharts`:

Add this in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import angular-froalacharts
import { FroalaChartsModule } from 'angular-froalacharts';

// Import FroalaCharts library and chart modules
import * as FroalaCharts from 'froalacharts';

import * as FroalaTheme from 'froalacharts/themes/fusioncharts.theme.fusion';

// Pass the froalacharts library and chart modules
FroalaChartsModule.fcRoot(FroalaCharts, Charts, FroalaTheme);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Specify FroalaChartsModule as import
    FroalaChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Once the library is imported, you can use its components, directives in your Angular application:

In your Angular AppComponent:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataSource: Object;
  title: string;

  constructor() {
    this.title = 'Angular  FroalaCharts Sample';

    this.dataSource = {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'froala'
      },
      data: [
        { label: 'Venezuela', value: '290' },
        { label: 'Saudi', value: '260' },
        { label: 'Canada', value: '180' },
        { label: 'Iran', value: '140' },
        { label: 'Russia', value: '115' },
        { label: 'UAE', value: '100' },
        { label: 'US', value: '30' },
        { label: 'China', value: '30' }
      ]
    };
  }
}
```

```xml
<!-- You can now use froalacharts component in app.component.html -->
<h1>
  {{title}}
</h1>
<froalacharts
    width="600"
    height="350"
    type="Column"
    dataFormat="JSON"
    [dataSource]="dataSource"
></froalacharts>
```

## Working with Events

Fusincharts events can be subscribed from component's output params.  
Usage in template :

```xml
<froalacharts
  width="600"
  height="350"
  type="Column"
  dataFormat="json"
  [dataSource]="dataSource"
  (dataplotRollOver)="plotRollOver($event)">
</froalacharts>
```

And in component's code , `$event` will be an object `{ eventObj : {...}, dataObj: {...} }`  
For more on this read [here](https://www.froalacharts.com/dev/api/froalacharts/froalacharts-events)

```js
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataSource: Object;
  title: string;

  constructor() {
    this.title = "Angular  FroalaCharts Sample";

    this.dataSource = {
      ...// same data as above
    };
  }



  plotRollOver($event){
    var dataValue = $event.dataObj.dataValue;
    console.log(`Value is ${dataValue}`);
  }

}
```

Get the list of froalacharts' [events](https://www.froalacharts.com/dev/advanced-chart-configurations/events/classifying-events)

## Working with APIs

Using api of charts involves getting the FroalaCharts chart instance from the `initialized` event.
It emits chart object which can be operated upon later.

In template, we add `initialized` event

```xml
<froalacharts
  type="column"
  width="100%"
  height="400"
  dataFormat="json"
  [dataSource]="dataSource"
  (initialized)="initialized($event)">
</froalacharts>
<button (click)="changeLabel()">Change label</button>
```

And in component's code , we get `$event` as `{ chart : ChartInstance }`

So in order to use the chart instance , we need to store the chart instance.

```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataSource: Object;
  title: string;
  chart: any;
  constructor() {
    this.title = "Angular  FroalaCharts Sample";

    this.dataSource = {
      ...// same data as above
    };
  }

  initialized($event){
    this.chart = $event.chart; // Storing the chart instance
  }

  changeLabel(){
    this.chart.setChartAttribute('caption', 'Changed caption');
  }

}

```

## Usage and integration of FroalaTime

From `froalacharts@1.0.4` and `angular-froalacharts@3.0.0`, You can visualize timeseries data easily with angular.

Learn more about FroalaTime [here](https://www.froalacharts.com/froalatime).

### Setup for FroalaTime

```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Import angular-froalacharts
import { FroalaChartsModule } from 'angular-froalacharts';
// Import FroalaCharts library and chart modules
import * as FroalaCharts from 'froalacharts';
// Pass the froalacharts library and chart modules
FroalaChartsModule.fcRoot(FroalaCharts, Charts, TimeSeries);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Specify FroalaChartsModule as import
    FroalaChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Component code

```typescript
// In app.component.ts
import { Component } from '@angular/core';
import * as FroalaCharts from 'froalacharts';
const dataUrl =
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json';
const schemaUrl =
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json';
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataSource: any;
  type: string;
  width: string;
  height: string;
  constructor() {
    this.type = 'timeseries';
    this.width = '400';
    this.height = '400';
    this.dataSource = {
      data: null,
      yAxis: {
        plot: [{ value: 'Sales' }]
      },
      caption: {
        text: 'Online Sales of a SuperStore in the US'
      }
    };
    this.fetchData();
  }
  fetchData() {
    let jsonify = res => res.json();
    let dataFetch = fetch(dataUrl).then(jsonify);
    let schemaFetch = fetch(schemaUrl).then(jsonify);
    Promise.all([dataFetch, schemaFetch]).then(res => {
      let data = res[0];
      let schema = res[1];
      let froalaTable = new FroalaCharts.DataStore().createDataTable(
        data,
        schema
      ); // Instance of DataTable to be passed as data in dataSource
      this.dataSource.data = froalaTable;
    });
  }
}
```

### Template Code

```html
<div>
  <froalacharts
    [type]="type"
    [width]="width"
    [height]="height"
    [dataSource]="dataSource"
  ></froalacharts>
</div>
```

Useful links for FroalaTime

- [How FroalaTime works](https://www.froalacharts.com/dev/froalatime/getting-started/how-froala-time-works)
- [Create your first chart](https://www.froalacharts.com/dev/froalatime/getting-started/create-your-first-chart-in-froalatime)

## For Contributors

- Clone the repository and install dependencies

```
$ git clone https://github.com/froalacharts/angular-froalacharts.git
$ cd angular-component
$ npm i
$ npm start
```

## Going Beyond Charts

- Explore 20+ pre-built business specific dashboards for different industries like energy and manufacturing to business functions like sales, marketing and operations [here](https://www.froalacharts.com/explore/dashboards).
- See [Data Stories](https://www.froalacharts.com/explore/data-stories) built using FroalaCharts’ interactive JavaScript visualizations and learn how to communicate real-world narratives through underlying data to tell compelling stories.

## Licensing

The FroalaCharts React component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FroalaCharts library in your page separately, which has a [separate license](https://www.froalacharts.com/buy).
