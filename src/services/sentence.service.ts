export class SentenceService{
  public sentence: any;

  constructor() {
    this.sentence = [];
  }

  addWord(word){
    this.sentence[this.sentence.length] = word;
  }
}
