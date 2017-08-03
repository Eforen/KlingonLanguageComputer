import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-word-details',
  templateUrl: 'word-details.html'
})
export class WordDetailsPage {
  selectedWord: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedWord = navParams.get('word');

  }

}
