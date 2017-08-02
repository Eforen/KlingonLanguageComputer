import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { WordDetailsPage } from '../word-details/word-details';

@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html'
})
export class DictionaryPage {
  selectedItem: any;
  dictionary: any;
  loading: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    this.loading = true;
    http.get('/assets/data/dictionary.json').success(function(response){
      this.dictionary = response.json();
    });


    /*
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    */
  }

  itemTapped(event, word) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(WordDetailsPage, {
      word: word
    });
  }
}
