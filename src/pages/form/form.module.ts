import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderContentComponentModule } from '../../components/header-content/header-content.module';
import { FormPage } from './form';

@NgModule({
  declarations: [
    FormPage,
  ],
  imports: [
    IonicPageModule.forChild(FormPage),
    HeaderContentComponentModule
  ],
})
export class FormPageModule {}
