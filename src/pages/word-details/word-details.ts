import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-word-details',
  templateUrl: 'word-details.html'
})
export class WordDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('word');

  }

}
