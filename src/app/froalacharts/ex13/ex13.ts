import { Component, NgZone} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';

declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: 'ex13.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex13 {
  demoId = 'ex13';
  
  sampleCode = fcDemos;
  
  dataSource = {
    "chart": {
      "caption": "Average Annual Population Growth",
      "subcaption": " 1955-2015",
      "numbersuffix": "%",
      "includevalueinlabels": "1",
      "labelsepchar": ": ",
      "entityFillHoverColor": "#FFF9C4",
      "theme": "froala"
    },
    "colorrange": {
      "minvalue": "0",
      "code": "#FFE0B2",
      "gradient": "1",
      "color": [
        
        {
          "minvalue": "0.5",
          "maxvalue": "1.0",
          "color": "#FFD74D"
        },
        {
          "minvalue": "1.0",
          "maxvalue": "2.0",
          "color": "#FB8C00"
        },
        {
          "minvalue": "2.0",
          "maxvalue": "3.0",
          "color": "#E65100"
        }
      ]
    },
    "data": [{
      "id": "NA",
      "value": ".82",
      "showLabel": "1"
      
    },
    {
      "id": "SA",
      "value": "2.04",
      "showLabel": "1"
    },
    {
      "id": "AS",
      "value": "1.78",
      "showLabel": "1"
      
    },
    {
      "id": "EU",
      "value": ".40",
      "showLabel": "1"
    },
    {
      "id": "AF",
      "value": "2.58",
      "showLabel": "1"
    },
    {
      "id": "AU",
      "value": "1.30",
      "showLabel": "1"
    }
  ]
}

  constructor(private zone:NgZone){}

  ngOnInit(){
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex13'].title);
    })
  }
  ngAfterViewInit() {
    Prism && Prism.highlightAll();
  }
}
