import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import '../../node_modules/prismjs/prism.js';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import CodeSnippets from './quickstart-snippet';
import SelectedSingleton from './froalacharts/services/selected.singleton';
import SampleCode from './froalacharts/samplecode';

@Component({
  selector: 'app',
  styleUrls: [
    './app.component.css',
    '../../node_modules/prismjs/themes/prism.css',
    './themes/fusioncharts.theme.fusion.css',
    './themes/github-css/codemirror.css',
    './themes/github-css/dracula.css',
    './themes/github-css/style.css'
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent {
  installCode = CodeSnippets.installCode;
  installFroalaCharts = CodeSnippets.installFroalaCharts;
  includeInModule = CodeSnippets.importCode;
  useDirective = CodeSnippets.useDirective;
  renderFroalaMaps = CodeSnippets.renderFroalaMaps;
  mapHtml = CodeSnippets.mapHtml;
  setupFroalaTime = CodeSnippets.setupFroalaTime;
  froalaTimeComponentCode = CodeSnippets.froalaTimeComponentCode;
  froalaTimeTemplateCode = CodeSnippets.froalaTimeTemplateCode;

  modalClasses = 'show fade in';
  isModalOpen = false;

  sampleCode = SampleCode;
  selectedTitle = '';

  toggleModal = state => {
    this.isModalOpen = state;
  };

  openPage = route => {
    this.isModalOpen = false;
    this.router.navigate([route]);
  };

  constructor(private router: Router) {
    SelectedSingleton.on = value => {
      this.selectedTitle = value;
    };
  }

  updateId(id) {}
}
