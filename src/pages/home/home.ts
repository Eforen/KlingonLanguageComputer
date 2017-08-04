import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DictionaryPage } from '../dictionary/dictionary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToDictionary(){//
    this.navCtrl.push(DictionaryPage, {search:true});
  }

}
