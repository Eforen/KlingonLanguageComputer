import { Component, ElementRef, ViewChild } from '@angular/core';
import {NavController, NavParams, ToastController, Searchbar, LoadingController } from 'ionic-angular';

import { WordDetailsPage } from '../word-details/word-details';

import { DictionaryService } from '../../services/dictionary.service';
import { SentenceService } from '../../services/sentence.service';
//import * as Fuse from '../../libs/fuse.js';
import * as Fuzzaldrin from 'fuzzaldrin';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {AppStore} from '../../app/data/models/appstore.model';
import {Word} from '../../app/data/models/word.model';
import {WordsService} from '../../app/data/services/words.service';
import {Store} from '@ngrx/store';

import {NgRedux, select} from 'ng2-redux'
import {IAppState} from '../../app/store'
import {actions} from '../../app/data/reducers'
import {BehaviorSubject} from "rxjs/BehaviorSubject";
//

@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html'
})
export class DictionaryPage {
  selectedItem: any;
  dictionary: Word[];
  loading: boolean;
  searchActive: boolean;
  currentSearch: string;
  englishMode: boolean;
  lissener: any;

  @ViewChild('search') searchElement : Searchbar;

  @select(['dictionary', 'words'])
  words: Observable<Word[]>;

  @select(['dictionary', 'fetched'])
  fetched: Observable<boolean>;
  @select(['dictionary', 'fetching'])
  fetching: Observable<boolean>;
  @select(['dictionary', 'error'])
  error: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dictionaryService: DictionaryService,
    private sentenceService: SentenceService,
    private toast: ToastController,
    //private wordsService: WordsService,
    //private store: Store<AppStore>
    private ngRedux: NgRedux<IAppState>,
    public loadingCtrl: LoadingController,
  ) {

    //this.words = wordsService.words;
    //this.words.subscribe((words)=>{ this.dictionary = words });

    //this.dictionary = wordsService.words;



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

    this.searchActive = false;
    this.fuseSetup = false;

    //NgRedux.instance.connect()
    //this.lissener = this.ngRedux.subscribe(this.storeChanged);
    //this.lissener = this.ngRedux.connect(this.storeChanged);
    this.fetching.subscribe((value)=>{
      this.fetchingValue = value;
      this.updateLoading();
    });
    this.fetched.subscribe((value)=>{
      this.fetchedValue = value;
      this.updateLoading();
    });
    this.error.subscribe((value)=>{
      this.errorValue = value;
      this.updateLoading();
    });

    this.words.subscribe((words)=> {
      this.dictionary = words;
      this.updateSearch();
    });
    this.loadWords();
  }

  private fetchedValue : Boolean;
  private fetchingValue : Boolean;
  private errorValue : any;

  private loader: any;
  updateLoading(){
    //console.log("Checking");
    if(this.loader != null){
      //Showing Loader
      if (this.fetchedValue || this.errorValue != null) {
        console.log("Loaded");
        this.loader.dismiss();

        //Display Error if available
        if(this.errorValue != null) this.toast.create({
          message: this.errorValue.toString(),
          position: "bottom",
          showCloseButton: true,
          closeButtonText: "OK"
        });

        //Focus Search if that was clicked to get here.
        if(this.navParams.get('search')){
          this.searchActive = true;

          setTimeout(this.searchElement.setFocus.bind(this.searchElement), 200);
        }
      }
    } else{
      //Not Showing Loader
      if(this.fetchingValue){
        console.log("Loading");
        this.loader = this.loadingCtrl.create({content: "Loading Words..."});
        this.loader.present();
      }
    }
  }

  loadWords(){
    this.dictionaryService.loadWords();
  }

  goToEnglish(){
    this.englishMode = true;
  }

  goToKlingon(){
    this.englishMode = false;
  }

  ngOnInit() {
    //this.dictionary = this.dictionaryService.getData();
    this.filterDictionary = this.dictionary;
  }

  ionViewDidEnter(){
    if(this.fetchingValue == false){
      if(this.navParams.get('search')){
        this.searchActive = true;

        setTimeout(this.searchElement.setFocus.bind(this.searchElement), 200);
      }
    }
  }

  ngAfterViewInit() {
    // If we navigated to this page, we may have an item available as a nav param
    if(this.navParams.get('search')){
      this.searchElement.setFocus();
    }
  }

  ngOnDestroy(){
    //this.lissener();
  }

  storeChanged(state){
    console.log(state);
  }

  toggleSearchBar(){
    this.searchActive = !this.searchActive;
    this.updateSearch();
  }

  updateSearch(){
    if(this.searchActive) this.runSearchFilter(); //rerun the filter if the search is opened back up
    else this.filterDictionary = this.dictionary; //reset the dictionary to all words
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

  addToList(word){
    this.sentenceService.addWord(word);
    let toast = this.toast.create({
      message: word.word+' added successfully to sentence inventory.',
      duration: 3000
    });
    toast.present();
  }

  openDictionaryFilterSettingsPage(){
    let toast = this.toast.create({
      message: 'Feature not implemented yet...',
      duration: 3000
    });
    toast.present();
  }

  runSearchFilter(){
    if(this.englishMode) this.filterDictionary = Fuzzaldrin.filter(this.dictionary, this.currentSearch, {key: 'shortDef'});
    else this.filterDictionary = Fuzzaldrin.filter(this.dictionary, this.currentSearch, {key: 'word'});
  }

  searchInputChanged(ev: any) {
    this.currentSearch = ev.target.value.trim();
    this.runSearchFilter();
  }

  searchCanceled(ev: any){

  }
}
