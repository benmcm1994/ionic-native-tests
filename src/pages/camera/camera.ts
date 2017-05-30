import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from "@ionic-native/camera-preview";
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cameraPreview: CameraPreview, private camera: Camera) {

      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
        };


          // start camera
      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res)
        },
        (err) => {
          console.log(err)
        });

  }

  takePic(){

    this.cameraPreview.takePicture({width: 1000, height: 1000, quality: 100
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  ionViewDidLeave(){
    this.cameraPreview.stopCamera();
  }

}
