import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CodePrev } from './froalacharts/codepreview';
import { CodemirrorModule } from 'ng2-codemirror';

import { Ex1 } from './froalacharts/ex1/ex1';
import { Ex2 } from './froalacharts/ex2/ex2';
import { Ex3 } from './froalacharts/ex3/ex3';
import { Ex4 } from './froalacharts/ex4/ex4';
import { Ex5 } from './froalacharts/ex5/ex5';
import { Ex5a } from './froalacharts/ex5a/ex5a';
import { Ex6 } from './froalacharts/ex6/ex6';
import { Ex7 } from './froalacharts/ex7/ex7';
import { Ex8 } from './froalacharts/ex8/ex8';
import { Ex9 } from './froalacharts/ex9/ex9';
import { Ex10 } from './froalacharts/ex10/ex10';
import { Ex11 } from './froalacharts/ex11/ex11';
import { Ex12 } from './froalacharts/ex12/ex12';
import { Ex13 } from './froalacharts/ex13/ex13';
import { Ex14 } from './froalacharts/ex14/ex14';
import { Ex15 } from './froalacharts/ex15/ex15';
import { Ex16 } from './froalacharts/ex16/ex16';
import { Ex17 } from './froalacharts/ex17/ex17';
import { Ex18 } from './froalacharts/ex18/ex18';
import { Ex19 } from './froalacharts/ex19/ex19';
import { Ex20 } from './froalacharts/ex20/ex20';
import { Ex21 } from './froalacharts/ex21/ex21';
import { Ex22 } from './froalacharts/ex22/ex22';
import { Ex23 } from './froalacharts/ex23/ex23';
import { Ex24 } from './froalacharts/ex24/ex24';
import { Ex25 } from './froalacharts/ex25/ex25';
import { Ex26 } from './froalacharts/ex26/ex26';
import { Ex27 } from './froalacharts/ex27/ex27';
import { Ex28 } from './froalacharts/ex28/ex28';
import { Ex29 } from './froalacharts/ex29/ex29';
import { Ex30 } from './froalacharts/ex30/ex30';
import { Ex31 } from './froalacharts/ex31/ex31';
import { Ex32 } from './froalacharts/ex32/ex32';
import { Ex33 } from './froalacharts/ex33/ex33';
import { Ex34 } from './froalacharts/ex34/ex34';
import { Ex35 } from './froalacharts/ex35/ex35';
import { Ex36 } from './froalacharts/ex36/ex36';

import { FroalaTime } from './froalatime/froalatime';

import { SafeHtmlPipe } from './pipes/trustAsHtml';
import { TabbedCode } from './froalacharts/tabbedComponent/tabbed.code.component';

import {
  Navigation,
  NavService,
  ObservingComponent,
  MyAppComponent
} from './observable/observable.component';

import { FroalaChartsSample } from './froalacharts/froalacharts.component';
import {
  FroalaChartsModule
} from '../angular-froalacharts';

// Load FroalaCharts
import * as FroalaCharts from 'froalacharts';
// Load Ocean theme
import * as Candy from 'froalacharts/themes/froalacharts.theme.candy';
import * as Froala from 'froalacharts/themes/froalacharts.theme.froala';

FroalaChartsModule.fcRoot(
  FroalaCharts,
  Froala,
  Candy
);

@NgModule({
  declarations: [
    Ex1,
    Ex2,
    Ex3,
    Ex4,
    Ex5,
    Ex5a,
    Ex6,
    Ex7,
    Ex8,
    Ex9,
    Ex10,
    Ex11,
    Ex12,
    Ex13,
    Ex14,
    Ex15,
    Ex16,
    Ex17,
    Ex18,
    Ex19,
    Ex20,
    Ex21,
    Ex22,
    Ex23,
    Ex24,
    Ex25,
    Ex26,
    Ex27,
    Ex28,
    Ex29,
    Ex30,
    Ex31,
    Ex32,
    Ex33,
    Ex34,
    Ex35,
    Ex36,
    SafeHtmlPipe,
    Navigation,
    ObservingComponent,
    MyAppComponent,
    CodePrev,
    AppComponent,
    FroalaChartsSample,
    TabbedCode,
    FroalaTime
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FroalaChartsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    CodemirrorModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
