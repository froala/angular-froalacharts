import { Injectable, Pipe } from '@angular/core';
/**
 * Transforms any input value
 */
var FroalaChartsPipe = /** @class */ (function () {
    function FroalaChartsPipe() {
    }
    FroalaChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    FroalaChartsPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'froalachartsPipe'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    FroalaChartsPipe.ctorParameters = function () { return []; };
    return FroalaChartsPipe;
}());
export { FroalaChartsPipe };
//# sourceMappingURL=froalacharts.pipe.js.map