import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { PlacesProvider } from '../../providers/places';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window: any;
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  public place = {
    id: Math.floor((Math.random() * 10000) + 1),
    name: '',
    description: '',
    lat : '',
    long : '',
    image: ''
  };
  public location: string;
  private error: string;
  private imageInfo: string = 'none';

  constructor(private readonly platform: Platform,
              private readonly camera: Camera,
              private readonly places: PlacesProvider,
              private readonly nativeGeocoder: NativeGeocoder) {}

  async getPicture() {

    await this.platform.ready();

    try {
      // Get Picture from camera and add it to the place as base64 image.
      await this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 200,
        targetHeight: 200
      }).then((imageData) => {
        this.place.image = "data:image/jpeg;base64," + imageData;
      }, (error) => this.error = error);
    }
    catch(e) {
      this.error = e;
    }

  }

  add() {
    // Get first the location coordinates.
    this.nativeGeocoder.forwardGeocode(this.location)
      .then((coordinates: NativeGeocoderForwardResult) => {
        this.place.lat = coordinates.latitude;
        this.place.long = coordinates.longitude;
        console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
        this.places.addPlaces(this.place).subscribe();
      })
      .catch((error: any) => {
        this.places.addPlaces(this.place).subscribe();
        console.log(error)
      });
  }

}
