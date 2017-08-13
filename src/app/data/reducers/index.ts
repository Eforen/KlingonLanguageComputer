import { combineReducers } from "redux"

import {DictionaryReducer as dictionary, DictionaryActions, DefaultState as DictDefault} from "./dictionary"
import {IAppState} from "../../store";

export default combineReducers<IAppState>({
  dictionary
})

export const actions = {
  dictionary: DictionaryActions
}

export const DefaultState = {
  dictionary: DictDefault
}
