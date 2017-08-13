import {Word} from "../models/word.model";

export interface DicionaryType{
  words: Word[],
  search: string,
  fetching: false,
  fetched: false,
  error: any
}

export const DictionaryActions = {
  load: "LOAD_DICTIONARY",
  loadFail: "LOAD_DICTIONARY_REJECTED",
  loadSuccessful: "LOAD_DICTIONARY_FULFILLED",
  words: {
    set: 'SET_WORDS',
    add: 'ADD_WORD',
    update: 'UPDATE_WORD',
    delete: 'DELETE_ITEM'
  },
}

export const DefaultState : DicionaryType = {
  words: [],
  search: "",
  fetching: false,
  fetched: false,
  error: null
}

export function DictionaryReducer(state : DicionaryType = DefaultState, action) {
  switch (action.type){
    case DictionaryActions.load: {
      console.log('--{DictionaryReducer}--');
      console.log(state);
      console.log({...state, fetching: true});
      return {...state, fetching: true}
    }
    case DictionaryActions.loadFail:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      }
    case DictionaryActions.loadSuccessful:
      return {
        ...state,
        fetching: false,
        fetched: true,
        words: action.payload.words
      }
    case DictionaryActions.words.set:
      return {...state, words: action.payload}
  }
  return state
}
