import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController  } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula';
import { SentenceService } from '../../services/sentence.service';

@Component({
  selector: 'page-sentence-tool',
  templateUrl: 'sentence-tool.html'
})
export class SentenceToolPage {
  public words;
  public currentSentence: string;

  constructor(
    public navCtrl: NavController,
    private dragulaService: DragulaService,
    private sentenceService: SentenceService,
    private actionSheet : ActionSheetController,
    private toast: ToastController
  ) {
    this.words = sentenceService.sentence;
    dragulaService.drop.subscribe((value) => {
      this.updateSentence();
    });
  }

  updateSentence(){
    this.currentSentence = "";
    for(var i = 0; i < this.words.length; i++){
      this.currentSentence += this.words[i].word;
    }
  }

  openSentenceMenu(){
    let actionSheet = this.actionSheet.create({
      title: 'Sentence Menu',
      buttons: [
        {
          text: 'Clear Sentence',
          role: 'destructive',
          handler: () => {
            this.sentenceService.sentence = [];
            this.words = [];
          }
        },{
          text: 'Add Space',
          handler: () => {
            let toast = this.toast.create({
              message: 'Feature not implemented yet...',
              duration: 3000
            });
            toast.present();
          }
        },{
          text: 'Add Period',
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

  public onclick(key): void {
    console.log("Clicked: " + key);
  }

}
