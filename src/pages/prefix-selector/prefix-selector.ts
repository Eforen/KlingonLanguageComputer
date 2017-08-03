import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';

import { PopoverSubjectPage } from './prefix-selector-subject';
import { PopoverObjectPage } from './prefix-selector-object';

@Component({
  selector: 'page-prefix-selector',
  templateUrl: 'prefix-selector.html'
})
export class PrefixSelectorPage {

  subject;
  object;
  status: string;

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {
    this.status = "Select an object and subject.";
  }

  updateSelected(){
    console.log(this.subject);
    console.log(this.object);
    if(this.subject == null && this.object == null){
      this.status = "Select an object and subject.";
    } else if(this.subject == null){
      this.status = "Select a subject.";
    } else if(this.object == null){
      this.status = "Select an object.";
    } else {
      this.status = "Your prefix is below.";
    }
  }


  presentSubjectPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverSubjectPage, {
      parent: this,
      subject: this.subject
    });

    popover.present({
      ev: ev
    });
  }


  presentObjectPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverObjectPage, {
      parent: this,
      object: this.object
    });

    popover.present({
      ev: ev
    });
  }

}
