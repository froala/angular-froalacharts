# angular-froalacharts

Simple and lightweight official Angular component for FroalaCharts. `angular-froalacharts` enables you to add JavaScript charts in your Angular application without any hassle.

- Github Repo: [https://github.com/froala/angular-froalacharts](https://github.com/froala/angular-froalacharts)
- Documentation: [https://froala.com/charts/docs/frameworks/angular/](https://froala.com/charts/docs/frameworks/angular/)
- Support: [support@froala.com](support@froala.com)
- FroalaCharts
  - Official Website: [https://www.froala.com/](https://www.froala.com/)
  - Official NPM Package: [https://www.npmjs.com/package/froalacharts](https://www.npmjs.com/package/froalacharts)
- Issues: [https://github.com/froala/angular-froalacharts/issues](https://github.com/froala/angular-froalacharts/issues)

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Quick Start](#quick-start)
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
import * as FroalaCharts from 'froalacharts';;

import * as FroalaTheme from 'froalacharts/themes/froalacharts.theme.froala';

// Pass the froalacharts library and chart modules
FroalaChartsModule.fcRoot(FroalaCharts, FroalaTheme);

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
    type="pie"
    dataFormat="JSON"
    [dataSource]="dataSource"
></froalacharts>
```

## For Contributors

- Clone the repository and install dependencies

```
$ git clone https://github.com/froala/angular-froalacharts.git
$ cd angular-component
$ npm i
$ npm start
```

## Licensing

The FroalaCharts Angular component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FroalaCharts library in your page separately, which has a [separate license](https://www.ideracorp.com/Legal/Froala/FroalaChartsLicenseAgreement).