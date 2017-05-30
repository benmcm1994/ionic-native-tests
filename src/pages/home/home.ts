import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { CameraPreview, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { CameraPage } from "../camera/camera";
import { MapPage } from "../map/map";
import { ScannerPage } from "../scanner/scanner";
import { LitPage } from "../lit/lit";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coords: any;
  accuracy: any;
  error: any;

  constructor(private cameraPreview: CameraPreview, public platform: Platform, private location: Geolocation, public navCtrl: NavController) {
    
  }

  openCameraPage(){
    this.navCtrl.setRoot(CameraPage);
  }

    openMapPage(){
    this.navCtrl.setRoot(MapPage);
  }

    openScannerPage(){
    this.navCtrl.setRoot(ScannerPage);
  }
  
    openLitPage(){
    this.navCtrl.setRoot(LitPage);
  }

}
