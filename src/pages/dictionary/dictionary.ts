import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WordDetailsPage } from '../word-details/word-details';

import { DictionaryService } from '../../services/dictionary.service';
//import * as Fuse from '../../libs/fuse.js';
import * as Fuzzaldrin from 'fuzzaldrin';
//

@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html'
})
export class DictionaryPage {
  selectedItem: any;
  dictionary: any;
  loading: boolean;
  searchHidden: boolean;
  currentSearch: string;
  englishMode: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dictionaryService: DictionaryService) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');


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

    this.searchHidden = true;
    this.fuseSetup = false;
  }

  goToEnglish(){
    this.englishMode = true;
  }

  goToKlingon(){
    this.englishMode = false;
  }

  ngOnInit() {
    this.dictionary = this.dictionaryService.getData();
    this.filterDictionary = this.dictionary.words;
  }
  toggleSearchBar(){
    this.searchHidden = !this.searchHidden;
    if(this.searchHidden) this.filterDictionary = this.dictionary.words; //reset the dictionary to all words
    else this.runSearchFilter(); //rerun the filter if the search is opened back up
  }

  itemTapped(event, word) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(WordDetailsPage, {
      word: word
    });
  }

  fuseOptions : any;
  fuse : any;
  fuseSetup : boolean;
  filterDictionary: any;

  /*
  setupFuse(){
    if(this.fuseSetup == false){
      this.fuseOptions = {
        shouldSort: true,
        tokenize: true,
        includeScore: true,
        includeMatches: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
          name: 'word',
          weight: 0.7
        }, {
          name: 'shortDef',
          weight: 0.3
        }
        ]
      };
      this.fuse = new Fuse(this.dictionary.words, this.fuseOptions); // "list" is the item array
      this.fuseSetup = true;
    }
  }
  */

  runSearchFilter(){
    if(this.englishMode) this.filterDictionary = Fuzzaldrin.filter(this.dictionary.words, this.currentSearch, {key: 'shortDef'});
    else this.filterDictionary = Fuzzaldrin.filter(this.dictionary.words, this.currentSearch, {key: 'word'});
  }

  getItems(ev: any) {
    this.currentSearch = ev.target.value.trim();
    this.runSearchFilter();


    //this.setupFuse();
    //this.filterDictionary = this.fuse.search(ev.target.value.trim());
    //console.log(this.filterDictionary);

    //console.log(this.dictionaryData.words);
    //console.log(this.dictionary.words);

    /*
    // With an array of strings
    var candidates = ['Call', 'Me', 'Maybe'];
    var results = Fuzzaldrin.filter(candidates, 'me');
    console.log(results) //# ['Me', 'Maybe']

    // With an array of objects
    var candidates2 = [
      {name: 'Call', id: 1},
      {name: 'Me', id: 2},
      {name: 'Maybe', id: 3}
    ]
    results = Fuzzaldrin.filter(candidates2, 'me', {key: 'name'});
    console.log(results) //# [{name: 'Me', id: 2}, {name: 'Maybe', id: 3}]
    */

    /*
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    */
  }
}
