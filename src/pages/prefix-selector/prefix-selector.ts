import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';

import { PopoverSubjectPage } from './prefix-selector-subject';
import { PopoverObjectPage } from './prefix-selector-object';


//TODO: Change from full pop ups to Action Sheets
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

  updateSubject(){

  }

  updateObject(){

  }

  updateSelected(){
    console.log("Updated Seleceted");
    if(this.subject == null && this.object == null){
      this.status = "Select an object and subject.";
      this.word = "hidden";
    } else if(this.subject == null){
      this.status = "Select a subject.";
      this.word = "hidden";
    } else if(this.object == null){
      this.status = "Select an object.";
      this.word = "hidden";
    } else {
      this.status = "Your prefix is below.";
      this.updateWord();
    }
    if(this.popover != null){
      this.popover.dismiss();
      this.popover = null;
    }
  }

  word;

  isNotValidSubject(subject : string){
    return !this.isValidSubject(subject);
  }
  isValidSubject(subject : string){
    console.log("o: "+this.object+" s:"+subject+" E:"+(this.getWord(this.object, subject) != 'Not Valid'));
    return this.getWord(this.object, subject) != 'Not Valid';
  }
  isNotValidObject(object : string){
    return !this.isValidObject(object);
  }
  isValidObject(object : string){
    console.log("o: "+object+" s:"+this.subject+" E:"+(this.getWord(object, this.subject) != 'Not Valid'));
    return this.getWord(object, this.subject) != 'Not Valid';
  }

  getWord(object : string, subject : string){
    switch(subject){
      case "i":
        switch(object){
          case "none":
            return "jI-";
          case "me":
            console.log("WTF!");
            return "Not Valid";
          case "you":
            return "qa-";
          case "he":
            return "vI-";
          case "us":
            return "Not Valid";
          case "yous":
            return "Sa-";
          case "them":
            return "vI-";
        }
        break;
      case "you":
        switch(object){
          case "none":
            return "bI-";
          case "me":
            return "cho-";
          case "you":
            return "Not Valid";
          case "he":
            return "Da-";
          case "us":
            return "ju-";
          case "yous":
            return "Not Valid";
          case "them":
            return "Da-";
        }
        break;
      case "he":
        switch(object){
          case "none":
            return "The Null Prefix";
          case "me":
            return "mu-";
          case "you":
            return "Du-";
          case "he":
            return "The Null Prefix";
          case "us":
            return "nu-";
          case "yous":
            return "lI-";
          case "them":
            return "The Null Prefix";
        }
        break;
      case "we":
        switch(object){
          case "none":
            return "ma-";
          case "me":
            return "Not Valid";
          case "you":
            return "pI-";
          case "he":
            return "wI-";
          case "us":
            return "Not Valid";
          case "yous":
            return "re-";
          case "them":
            return "DI-";
        }
        break;
      case "yous":
        switch(object){
          case "none":
            return "Su-";
          case "me":
            return "tu-";
          case "you":
            return "Not Valid";
          case "he":
            return "bo-";
          case "us":
            return "che-";
          case "yous":
            return "Not Valid";
          case "them":
            return "bo-";
        }
        break;
      case "they":
        switch(object){
          case "none":
            return "The Null Prefix";
          case "me":
            return "mu-";
          case "you":
            return "nI-";
          case "he":
            return "lu-";
          case "us":
            return "nu-";
          case "yous":
            return "lI-";
          case "them":
            return "The Null Prefix";
        }
        break;
    }
    return null;
  }

  updateWord(){
    this.word = this.getWord(this.object, this.subject);
  }

  popover: any;

  presentSubjectPopover(ev) {

    this.popover = this.popoverCtrl.create(PopoverSubjectPage, {
      parent: this,
      subject: this.subject,
      popover: null
    });

    this.popover.present({
      ev: ev
    });

  }


  presentObjectPopover(ev) {

    this.popover = this.popoverCtrl.create(PopoverObjectPage, {
      parent: this,
      object: this.object
    });

    this.popover.present({
      ev: ev
    });
  }

}
