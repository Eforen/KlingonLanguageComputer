import {applyMiddleware, Store, compose, createStore, Reducer} from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {DefaultState} from "./data/reducers/index";
import reducers from "./data/reducers";
import {DicionaryType} from "./data/reducers/dictionary";

export interface IAppState{
  dictionary: DicionaryType;
}

export const INITIAL_STATE :IAppState = DefaultState;

export const rootReducer = reducers;


export const middleware = [createLogger()];

//export const store: Store<IAppState> = createStore(rootReducer, compose(middleware));
