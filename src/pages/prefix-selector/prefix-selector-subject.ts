import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-prefix-selector-subject',
  templateUrl: 'prefix-selector-subject.html'
})
export class PopoverSubjectPage {
  parent : any;
  subject;
  firstUpdate: boolean;

  constructor(private navParams: NavParams) {
    if (this.navParams.data) {
      this.parent = this.navParams.data.parent;
      this.subject = this.navParams.data.subject;
    }
  }

  changeSubject(){
    if(this.firstUpdate == false) {
      this.parent.subject = this.subject;
      this.parent.updateSelected();
    } else{
      this.firstUpdate = false;
    }
  }
}
