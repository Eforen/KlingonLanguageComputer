import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-prefix-selector-object',
  templateUrl: 'prefix-selector-object.html'
})
export class PopoverObjectPage {
  parent : any;
  object;
  firstUpdate: boolean;

  constructor(private navParams: NavParams) {
    this.firstUpdate = true;
    console.log(this.navParams.data);
    if (this.navParams.data) {
      this.parent = this.navParams.data.parent;
      this.object = this.navParams.data.object;
    }
  }

  changeObject(){
    if(this.firstUpdate == false) {
      this.parent.object = this.object;
      this.parent.updateSelected();
    } else{
      this.firstUpdate = false;
    }
  }
}
