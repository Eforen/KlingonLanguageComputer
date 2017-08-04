import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DragulaModule } from 'ng2-dragula';

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
    DragulaModule
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
    DictionaryService,
    SentenceService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
