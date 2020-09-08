import { Injectable } from '@angular/core';
var FroalaChartsStatic = /** @class */ (function () {
    function FroalaChartsStatic() {
    }
    FroalaChartsStatic.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FroalaChartsStatic.ctorParameters = function () { return []; };
    return FroalaChartsStatic;
}());
export { FroalaChartsStatic };
var FroalaChartsService = /** @class */ (function () {
    function FroalaChartsService(FCStatic) {
        var fcRoot;
        if (FroalaChartsService.isFCRootSet()) {
            fcRoot = FroalaChartsService.getFCRoot();
        }
        else {
            fcRoot = {
                core: FCStatic.core,
                modules: FCStatic.modules
            };
        }
        this.resolveFroalaCharts(fcRoot.core, fcRoot.modules);
    }
    FroalaChartsService.setFCRoot = function (fcRoot) {
        FroalaChartsService._fcRoot = fcRoot;
    };
    FroalaChartsService.getFCRoot = function () {
        return FroalaChartsService._fcRoot;
    };
    FroalaChartsService.isFCRootSet = function () {
        return !!FroalaChartsService._fcRoot;
    };
    FroalaChartsService.prototype.resolveFroalaCharts = function (core, modules) {
        if (core && core.id && core.id === 'FroalaCharts') {
            this._froalachartsStatice = core;
        }
        else {
            this._froalachartsStatice = core();
        }
        if (modules) {
            modules.forEach(function (FroalaChartsModules) {
                if ((FroalaChartsModules.getName && FroalaChartsModules.getType) ||
                    (FroalaChartsModules.name && FroalaChartsModules.type)) {
                    core.addDep(FroalaChartsModules);
                }
                else {
                    FroalaChartsModules(core);
                }
            });
        }
    };
    FroalaChartsService.prototype.getFroalaChartsStatic = function () {
        return this._froalachartsStatice;
    };
    FroalaChartsService.prototype.getNextItemCount = function () {
        FroalaChartsService.itemCount++;
        return FroalaChartsService.itemCount;
    };
    FroalaChartsService._fcRoot = null;
    FroalaChartsService.itemCount = 0;
    FroalaChartsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FroalaChartsService.ctorParameters = function () { return [
        { type: FroalaChartsStatic, },
    ]; };
    return FroalaChartsService;
}());
export { FroalaChartsService };
//# sourceMappingURL=froalacharts.service.js.map