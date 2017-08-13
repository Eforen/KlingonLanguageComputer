import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {Word} from '../models/word.model';

const BASE_URL = '/assets/data/dictionary.json';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WordsService {
  words: Observable<Array<Word>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.words = store.select('words');
    this.checkWords();
  }

  checkWords() {

    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(res => { console.log(res); return res.words})
      .map(payload => ({ type: 'SET_ITEMS', payload }))
      .subscribe(action => {
        console.log(action);
        this.store.dispatch(action);
        console.log("Sent");
      });
    /*
    */
  }

  saveWord(word: Word) {
    (word.id) ? this.updateWord(word) : this.createWord(word);
  }

  createWord(word: Word) {
    this.http.post(`${BASE_URL}`, JSON.stringify(word), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_ITEM', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateWord(word: Word) {
    this.http.put(`${BASE_URL}${word.id}`, JSON.stringify(word), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_ITEM', payload: word }));
  }

  deleteWord(word: Word) {
    this.http.delete(`${BASE_URL}${word.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_ITEM', payload: word }));
  }
}
