import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPage } from './add';
import { HeaderContentComponentModule } from '../../components/header-content/header-content.module';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    AddPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPage),
    HeaderContentComponentModule
  ],
  exports: [
    AddPage
  ],
  providers: [
    Camera,
    NativeGeocoder
  ]
})
export class AddPageModule {}
