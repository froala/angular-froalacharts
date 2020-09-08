import { NgModule } from '@angular/core';
import { FroalaChartsComponent } from './src/froalacharts.component';
import { FroalaChartsDirective } from './src/froalacharts.directive';
import { FroalaChartsPipe } from './src/froalacharts.pipe';
import { FroalaChartsStatic, FroalaChartsService } from './src/froalacharts.service';
export { FroalaChartsComponent, FroalaChartsDirective, FroalaChartsPipe, FroalaChartsStatic };
var FroalaChartsModule = /** @class */ (function () {
    function FroalaChartsModule() {
    }
    // Keep this for backward compatible
    FroalaChartsModule.forRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        return {
            ngModule: FroalaChartsModule,
            providers: [{
                    provide: FroalaChartsStatic,
                    useValue: {
                        core: fcCore,
                        modules: fcModules
                    }
                }]
        };
    };
    FroalaChartsModule.fcRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        FroalaChartsService.setFCRoot({
            core: fcCore,
            modules: fcModules
        });
    };
    FroalaChartsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FroalaChartsComponent,
                        FroalaChartsDirective,
                        FroalaChartsPipe
                    ],
                    exports: [
                        FroalaChartsComponent,
                        FroalaChartsDirective,
                        FroalaChartsPipe
                    ],
                    providers: [
                        FroalaChartsService,
                        FroalaChartsStatic
                    ]
                },] },
    ];
    /** @nocollapse */
    FroalaChartsModule.ctorParameters = function () { return []; };
    return FroalaChartsModule;
}());
export { FroalaChartsModule };
//# sourceMappingURL=index.js.map