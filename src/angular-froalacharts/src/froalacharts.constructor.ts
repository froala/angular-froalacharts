
import { FroalaChartsService } from './froalacharts.service';


export function FroalaChartsConstructor(froalachartsService: any, chartConfig: Object) {
    const FroalaCharts = froalachartsService.getFroalaChartsStatic();

    return new FroalaCharts(chartConfig);
}

