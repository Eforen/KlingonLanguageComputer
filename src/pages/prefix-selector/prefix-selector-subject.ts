import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'prefix-selector-subject.html'
})
export class PopoverSubjectPage {
  parent : any;
  subject;

  constructor(private navParams: NavParams) {
    if (this.navParams.data) {
      this.parent = this.navParams.data.parent;
      this.subject = this.navParams.data.subject;
    }
  }

  changeSubject(){
    this.parent.subject = this.subject;
    this.parent.updateSelected();
  }
}
