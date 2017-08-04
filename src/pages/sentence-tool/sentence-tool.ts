import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula';
import { SentenceService } from '../../services/sentence.service';

@Component({
  selector: 'page-sentence-tool',
  templateUrl: 'sentence-tool.html'
})
export class SentenceToolPage {
  public words;
  public currentSentence: string;

  constructor(public navCtrl: NavController, private dragulaService: DragulaService, private sentenceService: SentenceService) {
    this.words = sentenceService.sentence;
    dragulaService.drop.subscribe((value) => {
      this.updateSentence();
    });
  }

  updateSentence(){
    this.currentSentence = "";
    for(var i = 0; i < this.words.length; i++){
      this.currentSentence += this.words[i];
    }
  }

  public onclick(key): void {
    console.log("Clicked: " + key);
  }

}
