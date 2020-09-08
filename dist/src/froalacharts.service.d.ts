export declare class FroalaChartsStatic {
    core: any;
    modules: Function[];
}
export declare class FroalaChartsService {
    static _fcRoot: any;
    static itemCount: any;
    _froalachartsStatice: FroalaChartsStatic;
    static setFCRoot(fcRoot: any): void;
    static getFCRoot(): any;
    static isFCRootSet(): boolean;
    constructor(FCStatic: FroalaChartsStatic);
    resolveFroalaCharts(core: any, modules: any[]): void;
    getFroalaChartsStatic(): FroalaChartsStatic;
    getNextItemCount(): any;
}
