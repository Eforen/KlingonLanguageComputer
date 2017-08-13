import { Action } from '@ngrx/store';

export class MyNotStupidAction implements Action {
  type: string;
  payload: any;
}

export function  Words (state: any = [], action: MyNotStupidAction) {
  switch (action.type) {
    case 'SET_WORDS':
      console.log(action.payload);
      return action.payload;
    case 'ADD_WORD':
      return [...state, action.payload];
    case 'UPDATE_WORD':
      return state.map(word => {
        return word.id === action.payload.id ? Object.assign({}, word, action.payload) : word;
      });
    case 'DELETE_ITEM':
      return state.filter(word => {
        return word.id !== action.payload.id;
      });
    default:
      return state;
  }
};
