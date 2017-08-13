import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DragulaModule } from 'ng2-dragula';
import { StoreModule, Store} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';

import { DictionaryService } from '../services/dictionary.service';
import { SentenceService } from '../services/sentence.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DictionaryPage } from '../pages/dictionary/dictionary';
import { WordDetailsPage } from '../pages/word-details/word-details';
import { PrefixSelectorPage } from '../pages/prefix-selector/prefix-selector';
import { PopoverObjectPage } from '../pages/prefix-selector/prefix-selector-object';
import { PopoverSubjectPage} from '../pages/prefix-selector/prefix-selector-subject';
import { SentenceToolPage } from '../pages/sentence-tool/sentence-tool';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Words } from './data/reducers/words.reducers';
import { WordOfTheDay } from './data/reducers/wordOfTheDay.reducers';

import { WordsService } from './data/services/words.service';

import {NgRedux, NgReduxModule} from 'ng2-redux'
import {IAppState, rootReducer, INITIAL_STATE, middleware} from './store'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DictionaryPage,
    WordDetailsPage,
    PrefixSelectorPage,
    PopoverSubjectPage,
    PopoverObjectPage,
    SentenceToolPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    DragulaModule,
    /*
    StoreModule.forRoot({words: Words, wordOfTheDay: WordOfTheDay}),
    StoreDevtoolsModule.instrument({
      monitor: useLogMonitor({
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
    */
    NgReduxModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DictionaryPage,
    WordDetailsPage,
    PrefixSelectorPage,
    PopoverSubjectPage,
    PopoverObjectPage,
    SentenceToolPage
  ],
  providers: [
    SentenceService,
    WordsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DictionaryService,
  ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE, middleware);
  }
}
