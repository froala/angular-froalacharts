import { Injectable } from '@angular/core';

@Injectable()
export class FroalaChartsStatic {
  core: any;
  modules: Function[];
}

@Injectable()
export class FroalaChartsService {
  static _fcRoot: any = null;
  static itemCount: any = 0;
  _froalachartsStatice: FroalaChartsStatic;

  static setFCRoot(fcRoot: any) {
    FroalaChartsService._fcRoot = fcRoot;
  }

  static getFCRoot(): any {
    return FroalaChartsService._fcRoot;
  }

  static isFCRootSet() {
    return !!FroalaChartsService._fcRoot;
  }

  constructor(FCStatic: FroalaChartsStatic) {
    let fcRoot: any;
    if (FroalaChartsService.isFCRootSet()) {
      fcRoot = FroalaChartsService.getFCRoot();
    } else {
      fcRoot = {
        core: FCStatic.core,
        modules: FCStatic.modules
      };
    }
    this.resolveFroalaCharts(fcRoot.core, fcRoot.modules);
  }

  resolveFroalaCharts(core: any, modules: any[]) {
    if (core && core.id && core.id === 'FroalaCharts') {
      this._froalachartsStatice = core;
    } else {
      this._froalachartsStatice = core();
    }

    if (modules) {
      modules.forEach((FroalaChartsModules: any) => {
        if (
          (FroalaChartsModules.getName && FroalaChartsModules.getType) ||
          (FroalaChartsModules.name && FroalaChartsModules.type)
        ) {
          core.addDep(FroalaChartsModules);
        } else {
          FroalaChartsModules(core);
        }
      });
    }
  }

  getFroalaChartsStatic() {
    return this._froalachartsStatice;
  }

  getNextItemCount() {
    FroalaChartsService.itemCount++;
    return FroalaChartsService.itemCount;
  }
}
