import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CameraPage } from "../camera/camera";
import { MapPage } from "../map/map";
import { ScannerPage } from "../scanner/scanner";
import { LitPage } from "../lit/lit";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CameraPage;
  tab3Root = MapPage;
  tab4Root = ScannerPage;
  tab5Root = LitPage;

  constructor() {

  }
}
