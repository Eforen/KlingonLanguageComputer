import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'page-word-details',
  templateUrl: 'word-details.html'
})
export class WordDetailsPage {
  selectedWord: any;
  pIqaD: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dictionaryService: DictionaryService
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedWord = navParams.get('word');
    this.pIqaD = dictionaryService.getpIqaD(this.selectedWord.word);
  }

}
