webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data_reducers__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DictionaryService = (function () {
    function DictionaryService(ngRedux, http) {
        /*
        this.loading = true;
        http.get('/assets/data/dictionary.json').(function(response){
          this.dictionaryData = response.json();
          this.loading = false;
        });
        */
        this.ngRedux = ngRedux;
        this.http = http;
        //Temporary Hardcoding to work on app without needing to worry about the local storage of the database yet.
        //this.dictionaryData = ;
        this.dictionaryWatcher.subscribe(function (state) {
            console.log(state);
        });
        console.log(ngRedux.getState());
        setTimeout(this.ngRedux.dispatch.bind(this, { type: __WEBPACK_IMPORTED_MODULE_2__app_data_reducers__["b" /* actions */].dictionary.loadSuccessful, payload: {
                "version": 1,
                "sources": {
                    "TKD": "The Klingon Dictionary",
                    "TKDA": "The Klingon Dictionary Addendum",
                    "TKW": "The Klingon Way",
                    "KGT": "Klingon for the Galactic Traveler",
                    "E-K": "English–Klingon dictionary part",
                    "K-E": "Klingon–English dictionary part",
                    "KLIM3.16.15": "KLI mailing list 03/16/2015",
                    "KLIM5.28.98": "KLI mailing list 05/28/1998"
                },
                "transitivity": {
                    "state-quality-no_object": "This verb describes a state or quality and cannot take an object.",
                    "verb-direct_object": "This verb can take a direct object."
                },
                "words": [
                    {
                        "id": 0,
                        "word": "mu-",
                        "pIqaD": "",
                        "type": "Pronoun Verb Prefix",
                        "shortDef": "He/she/it → me; they → me",
                        "def": ["He, she, or it does/doing/did a verb to me", "They do/doing/did a verb to me"],
                        "antonms": [12],
                        "see": [13],
                        "sources": ["TKD"]
                    },
                    {
                        "id": 1,
                        "word": "mub",
                        "pIqaD": "",
                        "type": "Verb",
                        "shortDef": "be legal",
                        "def": ["A state of being legal"],
                        "antonms": [14],
                        "see": [],
                        "sources": ["TKD"],
                        "trans": "state-quality-no_object",
                    },
                    {
                        "id": 2,
                        "word": "much",
                        "pIqaD": "",
                        "type": "Verb",
                        "shortDef": "Present, Preform (music)",
                        "def": ["Present as in a gift", "Preform music"],
                        "antonms": [],
                        "see": [3],
                        "sources": ["TKD", "KGT"],
                        "trans": "verb-direct_object",
                        "notes": "This word was defined in [TKD] as \"present\". The definition \"perform (music)\" was added in [KGT]."
                    },
                    {
                        "id": 3,
                        "word": "much",
                        "pIqaD": "",
                        "type": "Noun",
                        "shortDef": "Presentation",
                        "def": [],
                        "antonms": [],
                        "see": [2, 4],
                        "sources": ["TKD"]
                    },
                    {
                        "id": 4,
                        "word": "muchpa'",
                        "pIqaD": "",
                        "type": "Noun",
                        "shortDef": "Auditorium - the room in which a preformance takes place",
                        "def": ["The room in which a preformance takes place"],
                        "antonms": [],
                        "see": [5],
                        "sources": ["KLIM3.16.15"]
                    },
                    {
                        "id": 5,
                        "word": "much qach",
                        "pIqaD": " ",
                        "type": "Noun",
                        "shortDef": "Theater - The whole building",
                        "def": ["The entire theater building, including the auditorium, lobby, dressing rooms, and so on."],
                        "antonms": [],
                        "see": [4],
                        "sources": ["KLIM3.16.15"],
                        "notes": "Maltz revealed this word to translate \"Bloomsbury Theater\" for the [Festival of Spoken Nerd DVD], but it ended up not being used on the DVD itself."
                    },
                    {
                        "id": 6,
                        "word": "muchwI'",
                        "pIqaD": "",
                        "type": "Noun",
                        "shortDef": "Musician - a being capable of language",
                        "def": ["a being capable of language who plays a musical instrument, especially as a profession, or is musically talented."],
                        "antonms": [],
                        "see": [],
                        "sources": ["KGT"],
                        "usage": ["It takes the plural suffix [#15]"]
                    },
                    {
                        "id": 12,
                        "word": "vI-",
                        "pIqaD": "",
                        "type": "Pronoun Verb Prefix",
                        "shortDef": "I → him/her/it; I → them",
                        "def": ["I do/doing/did a verb to he, she, or it", "I do/doing/did a verb to them"],
                        "antonms": [0],
                        "see": [],
                        "sources": ["TKD"]
                    },
                    {
                        "id": 13,
                        "word": "nu-",
                        "pIqaD": "",
                        "type": "Pronoun Verb Prefix",
                        "shortDef": "He/she/it → us; they → us",
                        "def": ["He, she, or it does/doing/did a verb to us", "They do/doing/did a verb to us"],
                        "antonms": [12],
                        "see": [0],
                        "sources": ["TKD"]
                    },
                    {
                        "id": 14,
                        "word": "Hat",
                        "pIqaD": "",
                        "type": "Verb",
                        "shortDef": "be illegal",
                        "def": ["A state of not being legal"],
                        "antonms": [1],
                        "see": [],
                        "sources": ["TKD"],
                        "trans": "state-quality-no_object",
                        "notes": "In slang, stolen goods are said to be \"hot\"."
                    },
                    {
                        "id": 15,
                        "word": "-pu'",
                        "pIqaD": "",
                        "type": "Noun Suffix",
                        "shortDef": "plural (beings capable of using language)(noun type 2)",
                        "suffixType": 2,
                        "def": ["This suffix when attached to nouns capable of language indicates there is more then one."],
                        "antonms": [12],
                        "see": [0],
                        "sources": ["TKD 3.3.2", "KLIM5.28.98"],
                        "notes": "This is used not only for nouns that are currently capable of language but who will later. For example when refuring to Klingon babies we still use [-pu'] even though they are not currently capable of speaking. For example [tlhInganpu'] can mean baby or adult Klingons."
                    },
                    {
                        "id": 16,
                        "word": "-mey",
                        "pIqaD": "",
                        "type": "Noun Suffix",
                        "shortDef": "plural (general)(noun type 2)",
                        "suffixType": 2,
                        "def": ["beings capable of language scattered all about", "more then one being not capable of language", "(sometimes by poets) plural body parts no longer attached to the body"],
                        "antonms": [12],
                        "see": [0],
                        "sources": ["TKD"],
                        "notes": ["This suffix cannot be used for body parts (see [-Du'] (n)), but this rule is sometimes violated by poets.", "Some nouns are inherently plural in meaning, with singular forms which are utterly distinct. These inherently plural nouns are treated as grammatically singular, in that singular pronouns and verb prefixes are used for them. When the suffix [-mey] (n) is applied to the singular forms of these nouns, the resulting plural word carries the connotation of \"scattered all about\"."],
                        "examples": [
                            { "phrase": "pu'HIchmey", "text": "phasers" },
                            { "phrase": "puqmey", "text": "children all over the place" },
                            { "phrase": "jatmey", "text": "scattered tongues" },
                            { "phrase": "DoSmey", "text": "targets scattered all about" }
                        ]
                    },
                    {
                        "id": 17,
                        "word": "-Du'",
                        "pIqaD": "",
                        "type": "Noun Suffix",
                        "shortDef": "plural (body parts)(noun type 2)",
                        "suffixType": 2,
                        "def": [
                            "body parts attached to the body still",
                            "plural body parts of being capable of language (still attached)",
                            "plural body parts of any animal (still attached)"
                        ],
                        "antonms": [],
                        "see": [16],
                        "sources": ["TKD"],
                    }
                ]
            } }), 1000);
    }
    DictionaryService.prototype.loadWords = function () {
        if (!this.setup) {
            this.setup = true;
            this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__app_data_reducers__["b" /* actions */].dictionary.load });
        }
    };
    // WARNING: This only works with properly formed tlhIngon words. It makes a lot of assumptions
    DictionaryService.prototype.getpIqaD = function (word) {
        var r = "";
        for (var c = 0; c < word.length; c++) {
            switch (word[c]) {
                case "a":
                    r += "";
                    break;
                case "b":
                    r += "";
                    break;
                case "c":
                    r += "";
                    break;
                case "D":
                case "d":
                    r += "";
                    break;
                case "e":
                    r += "";
                    break;
                case "g":
                    r += "";
                    break;
                case "H":
                    r += "";
                    break;
                case "I":
                    r += "";
                    break;
                case "j":
                    r += "";
                    break;
                case "l":
                    r += "";
                    break;
                case "m":
                    r += "";
                    break;
                case "n":
                    if (word[c + 1] != "g")
                        r += "";
                    else
                        r += "";
                    break;
                case "o":
                    r += "";
                    break;
                case "p":
                    r += "";
                    break;
                case "q":
                    r += "";
                    break;
                case "Q":
                    r += "";
                    break;
                case "r":
                    r += "";
                    break;
                case "S":
                    r += "";
                    break;
                case "t":
                    if (word[c + 1] != "l" || word[c + 2] != "h")
                        r += ""; // t
                    else
                        r += ""; //tlh
                    break;
                case "u":
                    r += "";
                    break;
                case "v":
                    r += "";
                    break;
                case "w":
                    r += "";
                    break;
                case "y":
                    r += "";
                    break;
                case "'":
                    r += "";
                    break;
                case "-":
                case "0":
                    r += "";
                    break;
                case "1":
                    r += "";
                    break;
                case "2":
                    r += "";
                    break;
                case "3":
                    r += "";
                    break;
                case "4":
                    r += "";
                    break;
                case "5":
                    r += "";
                    break;
                case "6":
                    r += "";
                    break;
                case "7":
                    r += "";
                    break;
                case "8":
                    r += "";
                    break;
                case "9":
                    r += "";
                    break;
                case " ":
                    r += " ";
                    break;
            }
        }
        return r;
    };
    DictionaryService.prototype.getWord = function (id) {
    };
    DictionaryService.prototype.getData = function () {
        return this.ngRedux.getState().dictionary;
    };
    DictionaryService.prototype.isDataReady = function () {
        return this.ngRedux.getState().dictionary.fetched;
    };
    return DictionaryService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(['dictionary']),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], DictionaryService.prototype, "dictionaryWatcher", void 0);
DictionaryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_redux__["NgRedux"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _c || Object])
], DictionaryService);

var _a, _b, _c;
//# sourceMappingURL=dictionary.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__word_details_word_details__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dictionary_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sentence_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fuzzaldrin__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fuzzaldrin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fuzzaldrin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_redux__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_redux__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as Fuse from '../../libs/fuse.js';




//
var DictionaryPage = (function () {
    function DictionaryPage(navCtrl, navParams, dictionaryService, sentenceService, toast, 
        //private wordsService: WordsService,
        //private store: Store<AppStore>
        ngRedux, loadingCtrl) {
        //this.words = wordsService.words;
        //this.words.subscribe((words)=>{ this.dictionary = words });
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dictionaryService = dictionaryService;
        this.sentenceService = sentenceService;
        this.toast = toast;
        this.ngRedux = ngRedux;
        this.loadingCtrl = loadingCtrl;
        //this.dictionary = wordsService.words;
        /*
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        'american-football', 'boat', 'bluetooth', 'build'];
    
        this.items = [];
        for (let i = 1; i < 11; i++) {
          this.items.push({
            title: 'Item ' + i,
            note: 'This is item #' + i,
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
          });
        }
        */
        this.searchActive = false;
        this.fuseSetup = false;
        //NgRedux.instance.connect()
        //this.lissener = this.ngRedux.subscribe(this.storeChanged);
        //this.lissener = this.ngRedux.connect(this.storeChanged);
        this.fetching.subscribe(function (value) {
            _this.fetchingValue = value;
            _this.updateLoading();
        });
        this.fetched.subscribe(function (value) {
            _this.fetchedValue = value;
            _this.updateLoading();
        });
        this.error.subscribe(function (value) {
            _this.errorValue = value;
            _this.updateLoading();
        });
        this.words.subscribe(function (words) {
            _this.dictionary = words;
            _this.updateSearch();
        });
        this.loadWords();
    }
    DictionaryPage.prototype.updateLoading = function () {
        //console.log("Checking");
        if (this.loader != null) {
            //Showing Loader
            if (this.fetchedValue || this.errorValue != null) {
                console.log("Loaded");
                this.loader.dismiss();
                if (this.errorValue != null)
                    this.toast.create({
                        message: this.errorValue.toString(),
                        position: "bottom",
                        showCloseButton: true,
                        closeButtonText: "OK"
                    });
            }
        }
        else {
            //Not Showing Loader
            if (this.fetchingValue) {
                console.log("Loading");
                this.loader = this.loadingCtrl.create({ content: "Loading Words..." });
                this.loader.present();
            }
        }
    };
    DictionaryPage.prototype.loadWords = function () {
        this.dictionaryService.loadWords();
    };
    DictionaryPage.prototype.goToEnglish = function () {
        this.englishMode = true;
    };
    DictionaryPage.prototype.goToKlingon = function () {
        this.englishMode = false;
    };
    DictionaryPage.prototype.ngOnInit = function () {
        //this.dictionary = this.dictionaryService.getData();
        this.filterDictionary = this.dictionary;
    };
    DictionaryPage.prototype.ionViewDidEnter = function () {
        if (this.navParams.get('search')) {
            this.searchActive = true;
            this.searchElement.setFocus();
        }
    };
    DictionaryPage.prototype.ngAfterViewInit = function () {
        // If we navigated to this page, we may have an item available as a nav param
        if (this.navParams.get('search')) {
            this.searchElement.setFocus();
        }
    };
    DictionaryPage.prototype.ngOnDestroy = function () {
        //this.lissener();
    };
    DictionaryPage.prototype.storeChanged = function (state) {
        console.log(state);
    };
    DictionaryPage.prototype.toggleSearchBar = function () {
        this.searchActive = !this.searchActive;
        this.updateSearch();
    };
    DictionaryPage.prototype.updateSearch = function () {
        if (this.searchActive)
            this.runSearchFilter(); //rerun the filter if the search is opened back up
        else
            this.filterDictionary = this.dictionary; //reset the dictionary to all words
    };
    DictionaryPage.prototype.itemTapped = function (event, word) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__word_details_word_details__["a" /* WordDetailsPage */], {
            word: word
        });
    };
    /*
    setupFuse(){
      if(this.fuseSetup == false){
        this.fuseOptions = {
          shouldSort: true,
          tokenize: true,
          includeScore: true,
          includeMatches: true,
          threshold: 0.6,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [{
            name: 'word',
            weight: 0.7
          }, {
            name: 'shortDef',
            weight: 0.3
          }
          ]
        };
        this.fuse = new Fuse(this.dictionary.words, this.fuseOptions); // "list" is the item array
        this.fuseSetup = true;
      }
    }
    */
    DictionaryPage.prototype.addToList = function (word) {
        this.sentenceService.addWord(word);
        var toast = this.toast.create({
            message: word.word + ' added successfully to sentence inventory.',
            duration: 3000
        });
        toast.present();
    };
    DictionaryPage.prototype.openDictionaryFilterSettingsPage = function () {
        var toast = this.toast.create({
            message: 'Feature not implemented yet...',
            duration: 3000
        });
        toast.present();
    };
    DictionaryPage.prototype.runSearchFilter = function () {
        if (this.englishMode)
            this.filterDictionary = __WEBPACK_IMPORTED_MODULE_5_fuzzaldrin__["filter"](this.dictionary, this.currentSearch, { key: 'shortDef' });
        else
            this.filterDictionary = __WEBPACK_IMPORTED_MODULE_5_fuzzaldrin__["filter"](this.dictionary, this.currentSearch, { key: 'word' });
    };
    DictionaryPage.prototype.searchInputChanged = function (ev) {
        this.currentSearch = ev.target.value.trim();
        this.runSearchFilter();
    };
    DictionaryPage.prototype.searchCanceled = function (ev) {
    };
    return DictionaryPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Searchbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Searchbar */]) === "function" && _a || Object)
], DictionaryPage.prototype, "searchElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8_ng2_redux__["select"])(['dictionary', 'words']),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], DictionaryPage.prototype, "words", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8_ng2_redux__["select"])(['dictionary', 'fetched']),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], DictionaryPage.prototype, "fetched", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8_ng2_redux__["select"])(['dictionary', 'fetching']),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], DictionaryPage.prototype, "fetching", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8_ng2_redux__["select"])(['dictionary', 'error']),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"]) === "function" && _e || Object)
], DictionaryPage.prototype, "error", void 0);
DictionaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dictionary',template:/*ion-inline-start:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\dictionary\dictionary.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dictionary</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="toggleSearchBar()" end>\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button (click)="openDictionaryFilterSettingsPage()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button class="LangBtnKlingon" style="text-transform: none; width: 100%; margin-right: 1em;" *ngIf="!englishMode" ion-button start>tlhIngon Hol</button>\n          <button class="LangBtnKlingon" style="text-transform: none; width: 100%; margin-right: 1em;" *ngIf="englishMode" ion-button outline start (click)="goToKlingon()">tlhIngon Hol</button>\n        </ion-col>\n        <ion-col>\n          <button class="LangBtnEnglish" style="text-transform: none; width: 100%; margin-left: 1em;" *ngIf="!englishMode" ion-button outline end (click)="goToEnglish()">English</button>\n          <button class="LangBtnEnglish" style="text-transform: none; width: 100%; margin-left: 1em;" *ngIf="englishMode" ion-button end>English</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- <button class="LangBtnKlingon" style="text-transform: none;" *ngIf="!englishMode" ion-button start>tlhingon Hol</button> <button class="LangBtnEnglish" style="text-transform: none;" *ngIf="!englishMode" ion-button outline end (click)="goToEnglish()">English</button>\n    <button class="LangBtnKlingon" style="text-transform: none;" *ngIf="englishMode" ion-button outline start (click)="goToKlingon()">tlhingon Hol</button> <button class="LangBtnEnglish" style="text-transform: none;" *ngIf="englishMode" ion-button end>English</button>-->\n  </ion-toolbar>\n  <ion-searchbar #search (ionInput)="searchInputChanged($event)" (ionCancel)="searchCanceled($event)"></ion-searchbar>\n</ion-header>\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let word of filterDictionary">\n      <ion-item (click)="itemTapped($event, word)">\n        {{englishMode ? word.shortDef : word.word}}\n        <div class="word-note">\n          {{englishMode ? word.word : word.shortDef}}\n        </div>\n        <ion-icon name="arrow-forward" item-right light></ion-icon>\n      </ion-item>\n      <ion-item-options>\n        <!--\n        <button ion-button icon-only (click)="editNote(word)" light>\n          <ion-icon name="paper"></ion-icon>\n        </button>-->\n        <button ion-button icon-only (click)="addToList(word)" danger>\n          <ion-icon name="bookmark"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <!--s\n  <ion-list *ngIf="searchActive == false">\n    <ion-item-sliding *ngFor="let word of filterDictionary">\n      <ion-item (click)="itemTapped($event, word.item)">\n        {{word.item.word}}\n        <div class="word-note">\n          {{word.item.shortDef}}\n        </div>\n        <ion-icon name="arrow-forward" item-right light></ion-icon>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button icon-only (click)="editNote(word.item)" light>\n          <ion-icon name="paper"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="addToList(word.item)" danger>\n          <ion-icon name="bookmark"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  -->\n</ion-content>\n'/*ion-inline-end:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\dictionary\dictionary.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__services_dictionary_service__["a" /* DictionaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dictionary_service__["a" /* DictionaryService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__services_sentence_service__["a" /* SentenceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_sentence_service__["a" /* SentenceService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_redux__["NgRedux"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _m || Object])
], DictionaryPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=dictionary.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dictionary_dictionary__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToDictionary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dictionary_dictionary__["a" /* DictionaryPage */], { search: true });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (click)="goToDictionary()"></ion-searchbar>\n  <h1>Hol De\'wI\'</h1>\n  <h2>Language Computer</h2>\n  <h3 style="margin-bottom: 3em;">Disassemble (larghvam)&gt;</h3>\n\n  <div class="word-of-the-day-wrapper">\n    <h3>Word of the day</h3>\n    <div class="word-of-the-day">\n      <div class="content">\n        <div class="word">-vam</div>\n        <div class="type">Type 4 Noun Suffix</div>\n        <div class="definition">This - Indicates that the noun refers to an object which\n    is nearby or which is the topic of the conversation.</div>\n        <div class="examplesLabel">Examples</div>\n        <div class="examples">DISvam "the current year", jarvam "the current month"\n    Hoghvam "the current week"</div>\n      </div>\n    </div>\n  </div>\n\n  <div class="help">\n    <h3>Help Info</h3>\n    <span>To Begin searching, simply tap the <ion-icon name="menu"></ion-icon> button above or swipe out then tap dictionary, tap tlhIngan Hol or English based on the language of the word you want to find, then type the word in the "search" box at the top to filter the Dictionary. </span>\n  </div>\n\n  <div class="credits">\n    <h3>Credits</h3>\n    <span>This app was created by Ariel Lothlorien &#123;rel&#125;\n    The Database is maintained by the KLI (Klingon Language Institute)</span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dictionary_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sentence_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordDetailsPage = (function () {
    function WordDetailsPage(navCtrl, navParams, dictionaryService, sentenceService, actionSheet, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dictionaryService = dictionaryService;
        this.sentenceService = sentenceService;
        this.actionSheet = actionSheet;
        this.toast = toast;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedWord = navParams.get('word');
        this.pIqaD = dictionaryService.getpIqaD(this.selectedWord.word);
    }
    WordDetailsPage.prototype.openWordMenu = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            title: 'Word Menu',
            buttons: [
                {
                    text: 'Add to sentence',
                    handler: function () {
                        _this.sentenceService.addWord(_this.selectedWord);
                        var toast = _this.toast.create({
                            message: _this.selectedWord.word + ' added successfully to sentence inventory.',
                            duration: 3000
                        });
                        toast.present();
                    }
                }, {
                    text: 'Submit Correction',
                    handler: function () {
                        var toast = _this.toast.create({
                            message: 'Feature not implemented yet...',
                            duration: 3000
                        });
                        toast.present();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //Who cares
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return WordDetailsPage;
}());
WordDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-word-details',template:/*ion-inline-start:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\word-details\word-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Word Details</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="openWordMenu()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 class="word"> {{selectedWord.word}}</h1>\n  <h1 class="font-pIqaD">{{pIqaD}}</h1>\n  <div class="word-glimps">\n    <h3 class="word-type">{{selectedWord.type}}</h3>\n    <span class="word-def">{{selectedWord.shortDef}}</span>\n  </div>\n\n  <div class="definition">\n    <h1>Definition</h1>\n    <div *ngFor="let def of selectedWord.def">{{def}}</div>\n  </div>\n\n  <div class="sources" *ngIf="selectedWord.sources">\n    <h1>Source</h1>\n    <span *ngFor="let source of selectedWord.sources">{{source}}</span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\word-details\word-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_dictionary_service__["a" /* DictionaryService */],
        __WEBPACK_IMPORTED_MODULE_3__services_sentence_service__["a" /* SentenceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], WordDetailsPage);

//# sourceMappingURL=word-details.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrefixSelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prefix_selector_subject__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prefix_selector_object__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//TODO: Change from full pop ups to Action Sheets
var PrefixSelectorPage = (function () {
    function PrefixSelectorPage(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.status = "Select an object and subject.";
    }
    PrefixSelectorPage.prototype.updateSubject = function () {
    };
    PrefixSelectorPage.prototype.updateObject = function () {
    };
    PrefixSelectorPage.prototype.updateSelected = function () {
        console.log("Updated Seleceted");
        if (this.subject == null && this.object == null) {
            this.status = "Select an object and subject.";
            this.word = "hidden";
        }
        else if (this.subject == null) {
            this.status = "Select a subject.";
            this.word = "hidden";
        }
        else if (this.object == null) {
            this.status = "Select an object.";
            this.word = "hidden";
        }
        else {
            this.status = "Your prefix is below.";
            this.updateWord();
        }
        if (this.popover != null) {
            this.popover.dismiss();
            this.popover = null;
        }
    };
    PrefixSelectorPage.prototype.isNotValidSubject = function (subject) {
        return !this.isValidSubject(subject);
    };
    PrefixSelectorPage.prototype.isValidSubject = function (subject) {
        console.log("o: " + this.object + " s:" + subject + " E:" + (this.getWord(this.object, subject) != 'Not Valid'));
        return this.getWord(this.object, subject) != 'Not Valid';
    };
    PrefixSelectorPage.prototype.isNotValidObject = function (object) {
        return !this.isValidObject(object);
    };
    PrefixSelectorPage.prototype.isValidObject = function (object) {
        console.log("o: " + object + " s:" + this.subject + " E:" + (this.getWord(object, this.subject) != 'Not Valid'));
        return this.getWord(object, this.subject) != 'Not Valid';
    };
    PrefixSelectorPage.prototype.getWord = function (object, subject) {
        switch (subject) {
            case "i":
                switch (object) {
                    case "none":
                        return "jI-";
                    case "me":
                        console.log("WTF!");
                        return "Not Valid";
                    case "you":
                        return "qa-";
                    case "he":
                        return "vI-";
                    case "us":
                        return "Not Valid";
                    case "yous":
                        return "Sa-";
                    case "them":
                        return "vI-";
                }
                break;
            case "you":
                switch (object) {
                    case "none":
                        return "bI-";
                    case "me":
                        return "cho-";
                    case "you":
                        return "Not Valid";
                    case "he":
                        return "Da-";
                    case "us":
                        return "ju-";
                    case "yous":
                        return "Not Valid";
                    case "them":
                        return "Da-";
                }
                break;
            case "he":
                switch (object) {
                    case "none":
                        return "The Null Prefix";
                    case "me":
                        return "mu-";
                    case "you":
                        return "Du-";
                    case "he":
                        return "The Null Prefix";
                    case "us":
                        return "nu-";
                    case "yous":
                        return "lI-";
                    case "them":
                        return "The Null Prefix";
                }
                break;
            case "we":
                switch (object) {
                    case "none":
                        return "ma-";
                    case "me":
                        return "Not Valid";
                    case "you":
                        return "pI-";
                    case "he":
                        return "wI-";
                    case "us":
                        return "Not Valid";
                    case "yous":
                        return "re-";
                    case "them":
                        return "DI-";
                }
                break;
            case "yous":
                switch (object) {
                    case "none":
                        return "Su-";
                    case "me":
                        return "tu-";
                    case "you":
                        return "Not Valid";
                    case "he":
                        return "bo-";
                    case "us":
                        return "che-";
                    case "yous":
                        return "Not Valid";
                    case "them":
                        return "bo-";
                }
                break;
            case "they":
                switch (object) {
                    case "none":
                        return "The Null Prefix";
                    case "me":
                        return "mu-";
                    case "you":
                        return "nI-";
                    case "he":
                        return "lu-";
                    case "us":
                        return "nu-";
                    case "yous":
                        return "lI-";
                    case "them":
                        return "The Null Prefix";
                }
                break;
        }
        return null;
    };
    PrefixSelectorPage.prototype.updateWord = function () {
        this.word = this.getWord(this.object, this.subject);
    };
    PrefixSelectorPage.prototype.presentSubjectPopover = function (ev) {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__prefix_selector_subject__["a" /* PopoverSubjectPage */], {
            parent: this,
            subject: this.subject,
            popover: null
        });
        this.popover.present({
            ev: ev
        });
    };
    PrefixSelectorPage.prototype.presentObjectPopover = function (ev) {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__prefix_selector_object__["a" /* PopoverObjectPage */], {
            parent: this,
            object: this.object
        });
        this.popover.present({
            ev: ev
        });
    };
    return PrefixSelectorPage;
}());
PrefixSelectorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-prefix-selector',template:/*ion-inline-start:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\prefix-selector\prefix-selector.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Prefix Selector</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <button ion-button outline (click)="presentObjectPopover($event)">\n      Object\n    </button>\n    <button ion-button>Verb</button>\n    <button ion-button outline (click)="presentSubjectPopover($event)">\n      Subject\n    </button>\n  </div>\n  <div text-center>\n    <button ion-button outline>\n      {{object}}\n    </button>\n    <button ion-button>Verb</button>\n    <button ion-button outline>\n      {{subject}}\n    </button>\n  </div>\n  <div style="margin-top: 2em;" text-center>{{status}}</div>\n  <div style="margin-top: 2em; font-size: 3em;" text-center *ngIf="word!=\'hidden\'">{{word}}</div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\prefix-selector\prefix-selector.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
], PrefixSelectorPage);

//# sourceMappingURL=prefix-selector.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverSubjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverSubjectPage = (function () {
    function PopoverSubjectPage(navParams) {
        this.navParams = navParams;
        if (this.navParams.data) {
            this.parent = this.navParams.data.parent;
            this.subject = this.navParams.data.subject;
        }
    }
    PopoverSubjectPage.prototype.changeSubject = function () {
        if (this.firstUpdate == false) {
            this.parent.subject = this.subject;
            this.parent.updateSelected();
        }
        else {
            this.firstUpdate = false;
        }
    };
    return PopoverSubjectPage;
}());
PopoverSubjectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-prefix-selector-subject',template:/*ion-inline-start:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\prefix-selector\prefix-selector-subject.html"*/'<ion-list radio-group [(ngModel)]="subject" (ionChange)="changeSubject()" class="popover-subject-page">\n  <ion-item class="text-i" [ngClass]="{\'invalid\':(parent.isValidSubject(\'i\') == false)}">\n    <ion-label>I</ion-label>\n    <ion-radio value="i"></ion-radio>\n  </ion-item>\n  <ion-item class="text-you" [ngClass]="{\'invalid\':(parent.isValidSubject(\'you\') == false)}">\n    <ion-label>You</ion-label>\n    <ion-radio value="you"></ion-radio>\n  </ion-item>\n  <ion-item class="text-he" [ngClass]="{\'invalid\':(parent.isValidSubject(\'he\') == false)}">\n    <ion-label>He/She/It</ion-label>\n    <ion-radio value="he"></ion-radio>\n  </ion-item>\n  <ion-item class="text-we" [ngClass]="{\'invalid\':(parent.isValidSubject(\'we\') == false)}">\n    <ion-label>We</ion-label>\n    <ion-radio value="we"></ion-radio>\n  </ion-item>\n  <ion-item class="text-yous" [ngClass]="{\'invalid\':(parent.isValidSubject(\'yous\') == false)}">\n    <ion-label>You (plural)</ion-label>\n    <ion-radio value="yous"></ion-radio>\n  </ion-item>\n  <ion-item class="they" [ngClass]="{\'invalid\':(parent.isValidSubject(\'they\') == false)}">\n    <ion-label>They</ion-label>\n    <ion-radio value="they"></ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\prefix-selector\prefix-selector-subject.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PopoverSubjectPage);

//# sourceMappingURL=prefix-selector-subject.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverObjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverObjectPage = (function () {
    function PopoverObjectPage(navParams) {
        this.navParams = navParams;
        this.firstUpdate = true;
        console.log(this.navParams.data);
        if (this.navParams.data) {
            this.parent = this.navParams.data.parent;
            this.object = this.navParams.data.object;
        }
    }
    PopoverObjectPage.prototype.changeObject = function () {
        if (this.firstUpdate == false) {
            this.parent.object = this.object;
            this.parent.updateSelected();
        }
        else {
            this.firstUpdate = false;
        }
    };
    return PopoverObjectPage;
}());
PopoverObjectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-prefix-selector-object',template:/*ion-inline-start:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\prefix-selector\prefix-selector-object.html"*/'<ion-list radio-group [(ngModel)]="object" (ionChange)="changeObject()" class="popover-object-page">\n  <ion-item class="text-none" [ngClass]="{\'invalid\':(parent.isValidObject(\'none\') == false)}">\n    <ion-label>None</ion-label>\n    <ion-radio value="none"></ion-radio>\n  </ion-item>\n  <ion-item class="text-me" [ngClass]="{\'invalid\':(parent.isValidObject(\'me\') == false)}">\n    <ion-label>Me</ion-label>\n    <ion-radio value="me"></ion-radio>\n  </ion-item>\n  <ion-item class="text-you" [ngClass]="{\'invalid\':(parent.isValidObject(\'you\') == false)}">\n    <ion-label>You</ion-label>\n    <ion-radio value="you"></ion-radio>\n  </ion-item>\n  <ion-item class="text-he" [ngClass]="{\'invalid\':(parent.isValidObject(\'he\') == false)}">\n    <ion-label>He/She/It</ion-label>\n    <ion-radio value="he"></ion-radio>\n  </ion-item>\n  <ion-item class="text-us" [ngClass]="{\'invalid\':(parent.isValidObject(\'us\') == false)}">\n    <ion-label>Us</ion-label>\n    <ion-radio value="us"></ion-radio>\n  </ion-item>\n  <ion-item class="text-yous" [ngClass]="{\'invalid\':(parent.isValidObject(\'yous\') == false)}">\n    <ion-label>You (plural)</ion-label>\n    <ion-radio value="yous"></ion-radio>\n  </ion-item>\n  <ion-item class="text-them" [ngClass]="{\'invalid\':(parent.isValidObject(\'them\') == false)}">\n    <ion-label>Them</ion-label>\n    <ion-radio value="them"></ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\prefix-selector\prefix-selector-object.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PopoverObjectPage);

//# sourceMappingURL=prefix-selector-object.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentenceToolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sentence_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SentenceToolPage = (function () {
    function SentenceToolPage(navCtrl, dragulaService, sentenceService, actionSheet, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dragulaService = dragulaService;
        this.sentenceService = sentenceService;
        this.actionSheet = actionSheet;
        this.toast = toast;
        this.words = sentenceService.sentence;
        dragulaService.drop.subscribe(function (value) {
            _this.updateSentence();
        });
    }
    SentenceToolPage.prototype.updateSentence = function () {
        this.currentSentence = "";
        for (var i = 0; i < this.words.length; i++) {
            this.currentSentence += this.words[i].word;
        }
    };
    SentenceToolPage.prototype.openSentenceMenu = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            title: 'Sentence Menu',
            buttons: [
                {
                    text: 'Clear Sentence',
                    role: 'destructive',
                    handler: function () {
                        _this.sentenceService.sentence = [];
                        _this.words = [];
                    }
                }, {
                    text: 'Add Space',
                    handler: function () {
                        var toast = _this.toast.create({
                            message: 'Feature not implemented yet...',
                            duration: 3000
                        });
                        toast.present();
                    }
                }, {
                    text: 'Add Period',
                    handler: function () {
                        var toast = _this.toast.create({
                            message: 'Feature not implemented yet...',
                            duration: 3000
                        });
                        toast.present();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //Who cares
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SentenceToolPage.prototype.onclick = function (key) {
        console.log("Clicked: " + key);
    };
    return SentenceToolPage;
}());
SentenceToolPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sentence-tool',template:/*ion-inline-start:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\sentence-tool\sentence-tool.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sentence Tool</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="openSentenceMenu()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content text-center>\n      {{words.length == 0 ? \'No sentence add some words.\': currentSentence}}\n    </ion-card-content>\n\n  </ion-card>\n  <div text-center></div>\n\n  <ion-card>\n\n    <ion-card-header>\n      Sentence Construction\n    </ion-card-header>\n\n    <ion-card-content text-center *ngIf="words.length != 0" [dragula]=\'"sentence-bag"\' [dragulaModel]=\'words\' class="sentence">\n      <div *ngFor=\'let word of words\' style="text-transform: none;" class="sentence-word">\n        {{word.word}}\n      </div>\n    </ion-card-content>\n\n  </ion-card>\n  <div >\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\pages\sentence-tool\sentence-tool.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"],
        __WEBPACK_IMPORTED_MODULE_3__services_sentence_service__["a" /* SentenceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], SentenceToolPage);

//# sourceMappingURL=sentence-tool.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dictionary_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sentence_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dictionary_dictionary__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_word_details_word_details__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_prefix_selector_prefix_selector__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_prefix_selector_prefix_selector_object__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_prefix_selector_prefix_selector_subject__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sentence_tool_sentence_tool__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__data_services_words_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_redux__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_19__store__["c" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_19__store__["a" /* INITIAL_STATE */], __WEBPACK_IMPORTED_MODULE_19__store__["b" /* middleware */]);
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_dictionary_dictionary__["a" /* DictionaryPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_word_details_word_details__["a" /* WordDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_prefix_selector_prefix_selector__["a" /* PrefixSelectorPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_prefix_selector_prefix_selector_subject__["a" /* PopoverSubjectPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_prefix_selector_prefix_selector_object__["a" /* PopoverObjectPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_sentence_tool_sentence_tool__["a" /* SentenceToolPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaModule"],
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
            __WEBPACK_IMPORTED_MODULE_18_ng2_redux__["NgReduxModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_dictionary_dictionary__["a" /* DictionaryPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_word_details_word_details__["a" /* WordDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_prefix_selector_prefix_selector__["a" /* PrefixSelectorPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_prefix_selector_prefix_selector_subject__["a" /* PopoverSubjectPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_prefix_selector_prefix_selector_object__["a" /* PopoverObjectPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_sentence_tool_sentence_tool__["a" /* SentenceToolPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_sentence_service__["a" /* SentenceService */],
            __WEBPACK_IMPORTED_MODULE_17__data_services_words_service__["a" /* WordsService */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_5__services_dictionary_service__["a" /* DictionaryService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_18_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18_ng2_redux__["NgRedux"]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dictionary_dictionary__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_prefix_selector_prefix_selector__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sentence_tool_sentence_tool__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Dictionary', component: __WEBPACK_IMPORTED_MODULE_5__pages_dictionary_dictionary__["a" /* DictionaryPage */] },
            { title: 'Prefix Selector', component: __WEBPACK_IMPORTED_MODULE_6__pages_prefix_selector_prefix_selector__["a" /* PrefixSelectorPage */] },
            { title: 'Sentence Tool', component: __WEBPACK_IMPORTED_MODULE_7__pages_sentence_tool_sentence_tool__["a" /* SentenceToolPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\dev\Mobile\KlingonDictionary\KlingonDictionary\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = '/assets/data/dictionary.json';
var HEADER = { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) };
var WordsService = (function () {
    function WordsService(http, store) {
        this.http = http;
        this.store = store;
        this.words = store.select('words');
        this.checkWords();
    }
    WordsService.prototype.checkWords = function () {
        var _this = this;
        this.http.get(BASE_URL)
            .map(function (res) { return res.json(); })
            .map(function (res) { console.log(res); return res.words; })
            .map(function (payload) { return ({ type: 'SET_ITEMS', payload: payload }); })
            .subscribe(function (action) {
            console.log(action);
            _this.store.dispatch(action);
            console.log("Sent");
        });
        /*
        */
    };
    WordsService.prototype.saveWord = function (word) {
        (word.id) ? this.updateWord(word) : this.createWord(word);
    };
    WordsService.prototype.createWord = function (word) {
        var _this = this;
        this.http.post("" + BASE_URL, JSON.stringify(word), HEADER)
            .map(function (res) { return res.json(); })
            .map(function (payload) { return ({ type: 'CREATE_ITEM', payload: payload }); })
            .subscribe(function (action) { return _this.store.dispatch(action); });
    };
    WordsService.prototype.updateWord = function (word) {
        var _this = this;
        this.http.put("" + BASE_URL + word.id, JSON.stringify(word), HEADER)
            .subscribe(function (action) { return _this.store.dispatch({ type: 'UPDATE_ITEM', payload: word }); });
    };
    WordsService.prototype.deleteWord = function (word) {
        var _this = this;
        this.http.delete("" + BASE_URL + word.id)
            .subscribe(function (action) { return _this.store.dispatch({ type: 'DELETE_ITEM', payload: word }); });
    };
    return WordsService;
}());
WordsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
], WordsService);

//# sourceMappingURL=words.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return middleware; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_reducers_index__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_reducers__ = __webpack_require__(356);



var INITIAL_STATE = __WEBPACK_IMPORTED_MODULE_1__data_reducers_index__["a" /* DefaultState */];
var rootReducer = __WEBPACK_IMPORTED_MODULE_2__data_reducers__["c" /* default */];
var middleware = [Object(__WEBPACK_IMPORTED_MODULE_0_redux_logger__["createLogger"])()];
//export const store: Store<IAppState> = createStore(rootReducer, compose(middleware));
//# sourceMappingURL=store.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dictionary__ = __webpack_require__(357);


/* harmony default export */ __webpack_exports__["c"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    dictionary: __WEBPACK_IMPORTED_MODULE_1__dictionary__["c" /* DictionaryReducer */]
}));
var actions = {
    dictionary: __WEBPACK_IMPORTED_MODULE_1__dictionary__["b" /* DictionaryActions */]
};
var DefaultState = {
    dictionary: __WEBPACK_IMPORTED_MODULE_1__dictionary__["a" /* DefaultState */]
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DictionaryActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultState; });
/* harmony export (immutable) */ __webpack_exports__["c"] = DictionaryReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var DictionaryActions = {
    load: "LOAD_DICTIONARY",
    loadFail: "LOAD_DICTIONARY_REJECTED",
    loadSuccessful: "LOAD_DICTIONARY_FULFILLED",
    words: {
        set: 'SET_WORDS',
        add: 'ADD_WORD',
        update: 'UPDATE_WORD',
        delete: 'DELETE_ITEM'
    },
};
var DefaultState = {
    words: [],
    search: "",
    fetching: false,
    fetched: false,
    error: null
};
function DictionaryReducer(state, action) {
    if (state === void 0) { state = DefaultState; }
    switch (action.type) {
        case DictionaryActions.load: {
            console.log('--{DictionaryReducer}--');
            console.log(state);
            console.log(__assign({}, state, { fetching: true }));
            return __assign({}, state, { fetching: true });
        }
        case DictionaryActions.loadFail:
            return __assign({}, state, { fetching: false, fetched: false, error: action.payload });
        case DictionaryActions.loadSuccessful:
            return __assign({}, state, { fetching: false, fetched: true, words: action.payload.words });
        case DictionaryActions.words.set:
            return __assign({}, state, { words: action.payload });
    }
    return state;
}
//# sourceMappingURL=dictionary.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentenceService; });
var SentenceService = (function () {
    function SentenceService() {
        this.sentence = [];
    }
    SentenceService.prototype.addWord = function (word) {
        this.sentence[this.sentence.length] = word;
    };
    return SentenceService;
}());

//# sourceMappingURL=sentence.service.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map