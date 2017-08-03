import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'prefix-selector-object.html'
})
export class PopoverObjectPage {
  parent : any;
  object;

  constructor(private navParams: NavParams) {
    console.log(this.navParams.data);
    if (this.navParams.data) {
      this.parent = this.navParams.data.parent;
      this.object = this.navParams.data.object;
    }
  }

  changeObject(){
    this.parent.object = this.object;
    this.parent.updateSelected();
  }
}
