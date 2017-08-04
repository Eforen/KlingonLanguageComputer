import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController  } from 'ionic-angular';

import { DictionaryService } from '../../services/dictionary.service';
import { SentenceService } from '../../services/sentence.service';

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
    public dictionaryService: DictionaryService,
    private sentenceService: SentenceService,
    private actionSheet : ActionSheetController,
    private toast: ToastController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedWord = navParams.get('word');
    this.pIqaD = dictionaryService.getpIqaD(this.selectedWord.word);
  }

  openWordMenu(){
    let actionSheet = this.actionSheet.create({
      title: 'Word Menu',
      buttons: [
        {
          text: 'Add to sentence',
          handler: () => {
            this.sentenceService.addWord(this.selectedWord);
            let toast = this.toast.create({
              message: this.selectedWord.word+' added successfully to sentence inventory.',
              duration: 3000
            });
            toast.present();
          }
        },{
          text: 'Submit Correction',
          handler: () => {
            let toast = this.toast.create({
              message: 'Feature not implemented yet...',
              duration: 3000
            });
            toast.present();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //Who cares
          }
        }
      ]
    });
    actionSheet.present();
  }

}
