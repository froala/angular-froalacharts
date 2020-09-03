import { Routes } from '@angular/router';

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

// import { Ex10 } from './froalacharts/ex10/ex10';
import { MyAppComponent } from './observable/observable.component';

// import { HomeComponent } from './home/home.component';
import { FroalaChartsSample } from './froalacharts/froalacharts.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'ex1', pathMatch: 'full' },
  { path: 'ex1', component: Ex1 },
  { path: 'ex2', component: Ex2 },
  { path: 'ex3', component: Ex3 },
  { path: 'ex4', component: Ex4 },
  { path: 'ex5', component: Ex5 },
  { path: 'ex5a', component: Ex5a },
  { path: 'ex6', component: Ex6 },
  { path: 'ex7', component: Ex7 },
  { path: 'ex8', component: Ex8 },
  { path: 'ex9', component: Ex9 },
  { path: 'ex10', component: Ex10 },
  { path: 'ex11', component: Ex11 },
  { path: 'ex12', component: Ex12 },
  { path: 'ex13', component: Ex13 },
  { path: 'ex14', component: Ex14 },
  { path: 'ex15', component: Ex15 },
  { path: 'ex16', component: Ex16 },
  { path: 'ex17', component: Ex17 },
  { path: 'ex18', component: Ex18 },
  { path: 'ex19', component: Ex19 },
  { path: 'ex20', component: Ex20 },
  { path: 'ex21', component: Ex21 },
  { path: 'ex22', component: Ex22 },
  { path: 'ex23', component: Ex23 },
  { path: 'ex24', component: Ex24 },
  { path: 'ex25', component: Ex25 },
  { path: 'ex26', component: Ex26 },
  { path: 'ex27', component: Ex27 },
  { path: 'ex28', component: Ex28 },
  { path: 'ex29', component: Ex29 },
  { path: 'ex30', component: Ex30 },
  { path: 'ex31', component: Ex31 },
  { path: 'ex32', component: Ex32 },
  { path: 'ex33', component: Ex33 },
  { path: 'ex34', component: Ex34 },
  { path: 'ex35', component: Ex35 },
  { path: 'ex36', component: Ex36 },
  { path: 'froalacharts', component: MyAppComponent },
  { path: 'froalacharts', component: FroalaChartsSample }
];
