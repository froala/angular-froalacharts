import { NgModule, ModuleWithProviders } from '@angular/core';

import { FroalaChartsComponent } from './src/froalacharts.component';
import { FroalaChartsDirective } from './src/froalacharts.directive';
import { FroalaChartsPipe } from './src/froalacharts.pipe';
import { FroalaChartsStatic, FroalaChartsService } from './src/froalacharts.service';


export {
    FroalaChartsComponent,
    FroalaChartsDirective,
    FroalaChartsPipe,
    FroalaChartsStatic
};


@NgModule({
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
})


export class FroalaChartsModule {
    // Keep this for backward compatible
    static forRoot(fcCore?: any, ...fcModules: any[]): ModuleWithProviders {
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
    }

    static fcRoot(fcCore?: any, ...fcModules: any[]) {
        FroalaChartsService.setFCRoot({
            core: fcCore,
            modules: fcModules
        });
    }
}

