import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  public myform : FormGroup;
  public showForm : boolean;

  constructor(private readonly formBuilder: FormBuilder) {
    this.myform = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      category: [''],
      email: [''],
    });
  }

  ionViewDidEnter() {
    this.showForm = true;
  }

  showResults() {
    this.showForm = false;
  }

  hideResults() {
    this.showForm = true;
  }

}
