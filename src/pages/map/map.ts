import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { googlemaps } from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import { Mapbox } from 'Mapbox';

declare var Mapbox;

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    Mapbox.show();
  }

}

  /*initMap(){
    
    this.geolocation.getCurrentPosition().then((position) => {
      let latitudeLongitude = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latitudeLongitude,
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (error) => {
      console.log(error);
    });

  }*/