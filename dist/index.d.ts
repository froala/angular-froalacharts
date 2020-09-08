import { ModuleWithProviders } from '@angular/core';
import { FroalaChartsComponent } from './src/froalacharts.component';
import { FroalaChartsDirective } from './src/froalacharts.directive';
import { FroalaChartsPipe } from './src/froalacharts.pipe';
import { FroalaChartsStatic } from './src/froalacharts.service';
export { FroalaChartsComponent, FroalaChartsDirective, FroalaChartsPipe, FroalaChartsStatic };
export declare class FroalaChartsModule {
    static forRoot(fcCore?: any, ...fcModules: any[]): ModuleWithProviders;
    static fcRoot(fcCore?: any, ...fcModules: any[]): void;
}
