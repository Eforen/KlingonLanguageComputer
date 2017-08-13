import { Word } from './word.model'

export interface AppStore {
  words: Word[];
  wordOfTheDay: Word;
};
