import {
  Component,
  Input,
  ElementRef,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  OnDestroy,
  KeyValueDiffers,
  ViewChild,
  NgZone,
  Output,
  EventEmitter
} from '@angular/core';

import { FroalaChartsService } from './froalacharts.service';
import { FroalaChartsConstructor } from './froalacharts.constructor';
import FroalaChartsEvent from '../interfaces/FroalaChartsEvent';
import FroalaChartInstance from '../interfaces/FroalaChartInstance';
import EventsList from '../events/events';
@Component({
  selector: 'froalacharts',
  template: `
    <div attr.id="container-{{ containerId }}" style="width:100%;height:100%">
      {{ placeholder }}
    </div>
  `,
  providers: [FroalaChartsService]
})
class FroalaChartsComponent
  implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  chartObj: any;

  @Input() placeholder: string;
  @Input() dataSource: any;
  @Input() type: string;
  @Input() id: string;
  @Input() width: string;
  @Input() height: string;
  @Input() renderAt: string;
  @Input() dataFormat: string;
  @Input() events: string;
  @Input() link: string;
  @Input() showDataLoadingMessage: boolean;
  @Input() showChartLoadingMessage: boolean;
  @Input() baseChartMessageFont: string;
  @Input() baseChartMessageFontSize: string;
  @Input() baseChartMessageColor: string;
  @Input() dataLoadStartMessage: string;
  @Input() dataLoadErrorMessage: string;
  @Input() dataInvalidMessage: string;
  @Input() dataEmptyMessage: string;
  @Input() typeNotSupportedMessage: string;
  @Input() loadMessage: string;
  @Input() renderErrorMessage: string;
  @Input() containerBackgroundColor: string;
  @Input() containerBackgroundOpacity: string;
  @Input() containerClassName: string;
  @Input() baseChartMessageImageHAlign: string;
  @Input() baseChartMessageImageVAlign: string;
  @Input() baseChartMessageImageAlpha: number;
  @Input() baseChartMessageImageScale: number;
  @Input() typeNotSupportedMessageImageHAlign: string;
  @Input() typeNotSupportedMessageImageVAlign: string;
  @Input() typeNotSupportedMessageImageAlpha: number;
  @Input() typeNotSupportedMessageImageScale: number;
  @Input() dataLoadErrorMessageImageHAlign: string;
  @Input() dataLoadErrorMessageImageVAlign: string;
  @Input() dataLoadErrorMessageImageAlpha: number;
  @Input() dataLoadErrorMessageImageScale: number;
  @Input() dataLoadStartMessageImageHAlign: string;
  @Input() dataLoadStartMessageImageVAlign: string;
  @Input() dataLoadStartMessageImageAlpha: number;
  @Input() dataLoadStartMessageImageScale: number;
  @Input() dataInvalidMessageImageHAlign: string;
  @Input() dataInvalidMessageImageVAlign: string;
  @Input() dataInvalidMessageImageAlpha: number;
  @Input() dataInvalidMessageImageScale: number;
  @Input() dataEmptyMessageImageHAlign: string;
  @Input() dataEmptyMessageImageVAlign: string;
  @Input() dataEmptyMessageImageAlpha: number;
  @Input() dataEmptyMessageImageScale: number;
  @Input() renderErrorMessageImageHAlign: string;
  @Input() renderErrorMessageImageVAlign: string;
  @Input() renderErrorMessageImageAlpha: number;
  @Input() renderErrorMessageImageScale: number;
  @Input() loadMessageImageHAlign: string;
  @Input() loadMessageImageVAlign: string;
  @Input() loadMessageImageAlpha: number;
  @Input() loadMessageImageScale: number;
  @Input() chartConfig: string;

  /**
   * All Events List
   */

  private eventList: Array<string> = EventsList;

  /**
   * All events emitter
   */
  @Output() beforeLinkedItemOpen = new EventEmitter<FroalaChartsEvent>();
  @Output() linkedItemOpened = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeLinkedItemClose = new EventEmitter<FroalaChartsEvent>();
  @Output() linkedItemClosed = new EventEmitter<FroalaChartsEvent>();
  @Output() printReadyStateChange = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLoadRequestCompleted = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLoadError = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLoadCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLoadRequestCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() dataUpdated = new EventEmitter<FroalaChartsEvent>();
  @Output() dataUpdateCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLoadRequested = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeDataUpdate = new EventEmitter<FroalaChartsEvent>();
  @Output() realTimeUpdateComplete = new EventEmitter<FroalaChartsEvent>();
  @Output() chartCleared = new EventEmitter<FroalaChartsEvent>();
  @Output() slicingEnd = new EventEmitter<FroalaChartsEvent>();
  @Output() slicingStart = new EventEmitter<FroalaChartsEvent>();
  @Output() entityRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() entityRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() entityClick = new EventEmitter<FroalaChartsEvent>();
  @Output() connectorRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() connectorRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() connectorClick = new EventEmitter<FroalaChartsEvent>();
  @Output() markerRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() markerRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() markerClick = new EventEmitter<FroalaChartsEvent>();
  @Output() pageNavigated = new EventEmitter<FroalaChartsEvent>();
  @Output() rotationEnd = new EventEmitter<FroalaChartsEvent>();
  @Output() rotationStart = new EventEmitter<FroalaChartsEvent>();
  @Output() centerLabelRollover = new EventEmitter<FroalaChartsEvent>();
  @Output() centerLabelRollout = new EventEmitter<FroalaChartsEvent>();
  @Output() centerLabelClick = new EventEmitter<FroalaChartsEvent>();
  @Output() centerLabelChanged = new EventEmitter<FroalaChartsEvent>();
  @Output() chartClick = new EventEmitter<FroalaChartsEvent>();
  @Output() chartMouseMove = new EventEmitter<FroalaChartsEvent>();
  @Output() chartRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() chartRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() backgroundLoaded = new EventEmitter<FroalaChartsEvent>();
  @Output() backgroundLoadError = new EventEmitter<FroalaChartsEvent>();
  @Output() legendItemClicked = new EventEmitter<FroalaChartsEvent>();
  @Output() legendItemRollover = new EventEmitter<FroalaChartsEvent>();
  @Output() legendItemRollout = new EventEmitter<FroalaChartsEvent>();
  @Output() logoRollover = new EventEmitter<FroalaChartsEvent>();
  @Output() logoRollout = new EventEmitter<FroalaChartsEvent>();
  @Output() logoClick = new EventEmitter<FroalaChartsEvent>();
  @Output() logoLoaded = new EventEmitter<FroalaChartsEvent>();
  @Output() logoLoadError = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeExport = new EventEmitter<FroalaChartsEvent>();
  @Output() exported = new EventEmitter<FroalaChartsEvent>();
  @Output() exportCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() beforePrint = new EventEmitter<FroalaChartsEvent>();
  @Output() printComplete = new EventEmitter<FroalaChartsEvent>();
  @Output() printCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLabelClick = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLabelRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLabelRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() scrollStart = new EventEmitter<FroalaChartsEvent>();
  @Output() scrollEnd = new EventEmitter<FroalaChartsEvent>();
  @Output() onScroll = new EventEmitter<FroalaChartsEvent>();
  @Output() zoomReset = new EventEmitter<FroalaChartsEvent>();
  @Output() zoomedOut = new EventEmitter<FroalaChartsEvent>();
  @Output() zoomedIn = new EventEmitter<FroalaChartsEvent>();
  @Output() zoomed = new EventEmitter<FroalaChartsEvent>();
  @Output() zoomModeChanged = new EventEmitter<FroalaChartsEvent>();
  @Output() pinned = new EventEmitter<FroalaChartsEvent>();
  @Output() dataRestored = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeDataSubmit = new EventEmitter<FroalaChartsEvent>();
  @Output() dataSubmitError = new EventEmitter<FroalaChartsEvent>();
  @Output() dataSubmitted = new EventEmitter<FroalaChartsEvent>();
  @Output() dataSubmitCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() chartUpdated = new EventEmitter<FroalaChartsEvent>();
  @Output() nodeAdded = new EventEmitter<FroalaChartsEvent>();
  @Output() nodeUpdated = new EventEmitter<FroalaChartsEvent>();
  @Output() nodeDeleted = new EventEmitter<FroalaChartsEvent>();
  @Output() connectorAdded = new EventEmitter<FroalaChartsEvent>();
  @Output() connectorUpdated = new EventEmitter<FroalaChartsEvent>();
  @Output() connectorDeleted = new EventEmitter<FroalaChartsEvent>();
  @Output() labelAdded = new EventEmitter<FroalaChartsEvent>();
  @Output() labelDeleted = new EventEmitter<FroalaChartsEvent>();
  @Output() selectionRemoved = new EventEmitter<FroalaChartsEvent>();
  @Output() selectionStart = new EventEmitter<FroalaChartsEvent>();
  @Output() selectionEnd = new EventEmitter<FroalaChartsEvent>();
  @Output() labelClick = new EventEmitter<FroalaChartsEvent>();
  @Output() labelRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() labelRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() labelDragStart = new EventEmitter<FroalaChartsEvent>();
  @Output() labelDragEnd = new EventEmitter<FroalaChartsEvent>();
  @Output() dataplotDragStart = new EventEmitter<FroalaChartsEvent>();
  @Output() dataplotDragEnd = new EventEmitter<FroalaChartsEvent>();
  @Output() processClick = new EventEmitter<FroalaChartsEvent>();
  @Output() processRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() processRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() categoryClick = new EventEmitter<FroalaChartsEvent>();
  @Output() categoryRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() categoryRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() milestoneClick = new EventEmitter<FroalaChartsEvent>();
  @Output() milestoneRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() milestoneRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() chartTypeChanged = new EventEmitter<FroalaChartsEvent>();
  @Output() overlayButtonClick = new EventEmitter<FroalaChartsEvent>();
  @Output() loaded = new EventEmitter<FroalaChartsEvent>();
  @Output() rendered = new EventEmitter<FroalaChartsEvent>();
  @Output() drawComplete = new EventEmitter<FroalaChartsEvent>();
  @Output() renderComplete = new EventEmitter<FroalaChartsEvent>();
  @Output() dataInvalid = new EventEmitter<FroalaChartsEvent>();
  @Output() dataXMLInvalid = new EventEmitter<FroalaChartsEvent>();
  @Output() dataLoaded = new EventEmitter<FroalaChartsEvent>();
  @Output() noDataToDisplay = new EventEmitter<FroalaChartsEvent>();
  @Output() legendPointerDragStart = new EventEmitter<FroalaChartsEvent>();
  @Output() legendPointerDragStop = new EventEmitter<FroalaChartsEvent>();
  @Output() legendRangeUpdated = new EventEmitter<FroalaChartsEvent>();
  @Output() alertComplete = new EventEmitter<FroalaChartsEvent>();
  @Output() realTimeUpdateError = new EventEmitter<FroalaChartsEvent>();
  @Output() dataplotRollOver = new EventEmitter<FroalaChartsEvent>();
  @Output() dataplotRollOut = new EventEmitter<FroalaChartsEvent>();
  @Output() dataplotClick = new EventEmitter<FroalaChartsEvent>();
  @Output() linkClicked = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeRender = new EventEmitter<FroalaChartsEvent>();
  @Output() renderCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeResize = new EventEmitter<FroalaChartsEvent>();
  @Output() resized = new EventEmitter<FroalaChartsEvent>();
  @Output() resizeCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeDispose = new EventEmitter<FroalaChartsEvent>();
  @Output() disposed = new EventEmitter<FroalaChartsEvent>();
  @Output() disposeCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() linkedChartInvoked = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeDrillDown = new EventEmitter<FroalaChartsEvent>();
  @Output() drillDown = new EventEmitter<FroalaChartsEvent>();
  @Output() beforeDrillUp = new EventEmitter<FroalaChartsEvent>();
  @Output() drillUp = new EventEmitter<FroalaChartsEvent>();
  @Output() drillDownCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() drillUpCancelled = new EventEmitter<FroalaChartsEvent>();
  @Output() initialized = new EventEmitter<FroalaChartInstance>();

  containerId: string;
  private configObj: any;
  private oldDataSource: any = this.dataSource;
  private oldDataTable: any;
  private constructerParams = {
    type: true,
    id: true,
    width: true,
    height: true,
    renderAt: true,
    dataFormat: true,
    dataSource: true,
    events: true,
    link: true,
    showDataLoadingMessage: true,
    showChartLoadingMessage: true,
    baseChartMessageFont: true,
    baseChartMessageFontSize: true,
    baseChartMessageColor: true,
    dataLoadStartMessage: true,
    dataLoadErrorMessage: true,
    dataInvalidMessage: true,
    dataEmptyMessage: true,
    typeNotSupportedMessage: true,
    loadMessage: true,
    renderErrorMessage: true,
    containerBackgroundColor: true,
    containerBackgroundOpacity: true,
    containerClassName: true,
    baseChartMessageImageHAlign: true,
    baseChartMessageImageVAlign: true,
    baseChartMessageImageAlpha: true,
    baseChartMessageImageScale: true,
    typeNotSupportedMessageImageHAlign: true,
    typeNotSupportedMessageImageVAlign: true,
    typeNotSupportedMessageImageAlpha: true,
    typeNotSupportedMessageImageScale: true,
    dataLoadErrorMessageImageHAlign: true,
    dataLoadErrorMessageImageVAlign: true,
    dataLoadErrorMessageImageAlpha: true,
    dataLoadErrorMessageImageScale: true,
    dataLoadStartMessageImageHAlign: true,
    dataLoadStartMessageImageVAlign: true,
    dataLoadStartMessageImageAlpha: true,
    dataLoadStartMessageImageScale: true,
    dataInvalidMessageImageHAlign: true,
    dataInvalidMessageImageVAlign: true,
    dataInvalidMessageImageAlpha: true,
    dataInvalidMessageImageScale: true,
    dataEmptyMessageImageHAlign: true,
    dataEmptyMessageImageVAlign: true,
    dataEmptyMessageImageAlpha: true,
    dataEmptyMessageImageScale: true,
    renderErrorMessageImageHAlign: true,
    renderErrorMessageImageVAlign: true,
    renderErrorMessageImageAlpha: true,
    renderErrorMessageImageScale: true,
    loadMessageImageHAlign: true,
    loadMessageImageVAlign: true,
    loadMessageImageAlpha: true,
    loadMessageImageScale: true,
    chartConfig: true
  };
  element: ElementRef;
  froalachartsService: FroalaChartsService;

  constructor(
    element: ElementRef,
    froalachartsService: FroalaChartsService,
    private differs: KeyValueDiffers,
    private zone: NgZone
  ) {
    this.element = element;
    this.froalachartsService = froalachartsService;
    this.containerId = froalachartsService.getNextItemCount();
  }

  // @ViewChild('samplediv') chartContainer: ElementRef;

  checkIfDataTableExists(dataSource) {
    if (dataSource && dataSource.data && dataSource.data._dataStore) {
      return true;
    }
    return false;
  }

  cloneDataSource(obj) {
    let type = typeof obj;
    if (
      type === 'string' ||
      type === 'number' ||
      type === 'function' ||
      type === 'boolean'
    ) {
      return obj;
    }
    if (obj === null || obj === undefined) {
      return obj;
    }
    if (Array.isArray(obj)) {
      let arr: any[] = [];
      for (let i = 0; i < obj.length; i++) {
        arr.push(this.cloneDataSource(obj[i]));
      }
      return arr;
    }
    if (typeof obj === 'object') {
      let clonedObj = {};
      for (let prop in obj) {
        // Edge case handling for DataTable
        if (prop === 'data') {
          if (obj[prop]._dataStore) {
            clonedObj[prop] = `-`;
          } else {
            clonedObj[prop] = this.cloneDataSource(obj[prop]);
          }
          continue;
        }
        clonedObj[prop] = this.cloneDataSource(obj[prop]);
      }
      return clonedObj;
    }
  }

  ngOnInit() {
    if (this.checkIfDataTableExists(this.dataSource)) {
      this.oldDataSource = JSON.stringify(
        this.cloneDataSource(this.dataSource)
      );
    } else {
      this.oldDataSource = JSON.stringify(this.dataSource);
    }
    this.placeholder = this.placeholder || 'FroalaCharts will render here';
  }

  ngOnChanges(changes: any) {
    for (const i of Object.keys(changes)) {
      const key = i.charAt(0).toUpperCase() + i.slice(1),
        THIS = this,
        fnName = `update${key}`;
      if (THIS[fnName]) {
        THIS[fnName]();
      }
    }
  }

  ngDoCheck() {
    let data;
    if (this.checkIfDataTableExists(this.dataSource)) {
      data = JSON.stringify(this.cloneDataSource(this.dataSource));
    } else {
      data = JSON.stringify(this.dataSource);
    }
    if (
      this.oldDataSource !== data ||
      this.oldDataTable !== this.dataSource.data
    ) {
      this.oldDataTable = this.dataSource && this.dataSource.data;
      this.oldDataSource = data;
      this.updateChartData();
    }
  }

  updateChartData() {
    const dataFormat =
        this.configObj && this.configObj.dataFormat
          ? this.configObj.dataFormat
          : 'json',
      data = this.dataSource;

    if (this.chartObj) {
      this.chartObj.setChartData(data, dataFormat);
    }
  }

  updateWidth() {
    if (this.chartObj) {
      this.chartObj.resizeTo({
        w: this.width
      });
    }
  }

  updateHeight() {
    if (this.chartObj) {
      this.chartObj.resizeTo({
        h: this.height
      });
    }
  }

  updateType() {
    if (this.chartObj) {
      this.chartObj.chartType(this.type);
    }
  }

  generateEventsCallback(eventList: Array<string>) {
    let events = {};
    eventList.forEach(eventName => {
      events[eventName] = (eventObj: any, dataObj: any) => {
        let fEventObj: FroalaChartsEvent = { eventObj: {}, dataObj: {} };
        if (eventObj) fEventObj.eventObj = eventObj;
        if (dataObj) fEventObj.dataObj = dataObj;
        this[eventName].emit(fEventObj);
      };
    });
    return events;
  }

  ngAfterViewInit() {
    const _this = this,
      params = _this.constructerParams,
      configObj = _this.configObj || (_this.configObj = {});

    let _chartConfig: any = _this.chartConfig || {};

    if (typeof _chartConfig === 'string') {
      _chartConfig = JSON.parse(_chartConfig);
    }

    for (const i of Object.keys(params)) {
      const value = _this[i] || _chartConfig[i];
      if (value) {
        configObj[i] = value;
      }
    }

    if (configObj['type']) {
      let events = _this.generateEventsCallback(_this.eventList);
      if (!configObj['events']) {
        configObj['events'] = events;
      } else {
        configObj['events'] = Object.assign(events, configObj['events']);
      }

      // configObj['renderAt'] = 'container-' + _this.chartObj.id;
      // _this.containerId = _this.chartObj.id;

      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          _this.chartObj = FroalaChartsConstructor(
            _this.froalachartsService,
            configObj
          );
          this.initialized.emit({ chart: _this.chartObj });
          _this.chartObj.render(
            _this.element.nativeElement.querySelector('div')
          );
        }, 1);
      });
    }
  }

  ngOnDestroy() {
    this.chartObj && this.chartObj.dispose();
  }
}
export { FroalaChartsComponent };
