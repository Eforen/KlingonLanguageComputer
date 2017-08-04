
import { Http } from '@angular/http';

export class DictionaryService{
  private dictionaryData: any;
  private loading : boolean;


  constructor() {
    /*
    this.loading = true;
    http.get('/assets/data/dictionary.json').(function(response){
      this.dictionaryData = response.json();
      this.loading = false;
    });
    */

    //Temporary Hardcoding to work on app without needing to worry about the local storage of the database yet.
    this.dictionaryData = {
      "version": 1,
      "sources":{
        "TKD":"The Klingon Dictionary",
        "TKDA":"The Klingon Dictionary Addendum",
        "TKW":"The Klingon Way",
        "KGT":"Klingon for the Galactic Traveler",
        "E-K":"English–Klingon dictionary part",
        "K-E":"Klingon–English dictionary part",
        "KLIM3.16.15": "KLI mailing list 03/16/2015",
        "KLIM5.28.98": "KLI mailing list 05/28/1998"
      },
      "transitivity":{
        "state-quality-no_object":"This verb describes a state or quality and cannot take an object.",
        "verb-direct_object": "This verb can take a direct object."
      },
      "words":[
        {
          "id":0,
          "word":"mu-",
          "pIqaD": "",
          "type":"Pronoun Verb Prefix",
          "shortDef":"He/she/it → me; they → me",
          "def":["He, she, or it does/doing/did a verb to me","They do/doing/did a verb to me"],
          "antonms":[12],
          "see":[13],
          "sources":["TKD"]
        },
        {
          "id":1,
          "word":"mub",
          "pIqaD": "",
          "type":"Verb",
          "shortDef":"be legal",
          "def":["A state of being legal"],
          "antonms":[14],
          "see":[],
          "sources":["TKD"],
          "trans":"state-quality-no_object",
        },
        {
          "id":2,
          "word":"much",
          "pIqaD": "",
          "type":"Verb",
          "shortDef":"Present, Preform (music)",
          "def":["Present as in a gift", "Preform music"],
          "antonms":[],
          "see":[3],
          "sources":["TKD","KGT"],
          "trans":"verb-direct_object",
          "notes":"This word was defined in [TKD] as \"present\". The definition \"perform (music)\" was added in [KGT]."
        },
        {
          "id":3,
          "word":"much",
          "pIqaD": "",
          "type":"Noun",
          "shortDef":"Presentation",
          "def":[],
          "antonms":[],
          "see":[2,4],
          "sources":["TKD"]
        },
        {
          "id":4,
          "word":"muchpa'",
          "pIqaD": "",
          "type":"Noun",
          "shortDef":"Auditorium - the room in which a preformance takes place",
          "def":["The room in which a preformance takes place"],
          "antonms":[],
          "see":[5],
          "sources":["KLIM3.16.15"]
        },
        {
          "id":5,
          "word":"much qach",
          "pIqaD": " ",
          "type":"Noun",
          "shortDef":"Theater - The whole building",
          "def":["The entire theater building, including the auditorium, lobby, dressing rooms, and so on."],
          "antonms":[],
          "see":[4],
          "sources":["KLIM3.16.15"],
          "notes":"Maltz revealed this word to translate \"Bloomsbury Theater\" for the [Festival of Spoken Nerd DVD], but it ended up not being used on the DVD itself."
        },
        {
          "id":6,
          "word":"muchwI'",
          "pIqaD": "",
          "type":"Noun",
          "shortDef":"Musician - a being capable of language",
          "def":["a being capable of language who plays a musical instrument, especially as a profession, or is musically talented."],
          "antonms":[],
          "see":[],
          "sources":["KGT"],
          "usage":["It takes the plural suffix [#15]"]
        },
        {
          "id":12,
          "word":"vI-",
          "pIqaD": "",
          "type":"Pronoun Verb Prefix",
          "shortDef":"I → him/her/it; I → them",
          "def":["I do/doing/did a verb to he, she, or it","I do/doing/did a verb to them"],
          "antonms":[0],
          "see":[],
          "sources":["TKD"]
        },
        {
          "id":13,
          "word":"nu-",
          "pIqaD": "",
          "type":"Pronoun Verb Prefix",
          "shortDef":"He/she/it → us; they → us",
          "def":["He, she, or it does/doing/did a verb to us","They do/doing/did a verb to us"],
          "antonms":[12],
          "see":[0],
          "sources":["TKD"]
        },
        {
          "id":14,
          "word":"Hat",
          "pIqaD": "",
          "type":"Verb",
          "shortDef":"be illegal",
          "def":["A state of not being legal"],
          "antonms":[1],
          "see":[],
          "sources":["TKD"],
          "trans":"state-quality-no_object",
          "notes":"In slang, stolen goods are said to be \"hot\"."
        },
        {
          "id":15,
          "word":"-pu'",
          "pIqaD": "",
          "type":"Noun Suffix",
          "shortDef":"plural (beings capable of using language)(noun type 2)",
          "suffixType": 2,
          "def":["This suffix when attached to nouns capable of language indicates there is more then one."],
          "antonms":[12],
          "see":[0],
          "sources":["TKD 3.3.2", "KLIM5.28.98"],
          "notes": "This is used not only for nouns that are currently capable of language but who will later. For example when refuring to Klingon babies we still use [-pu'] even though they are not currently capable of speaking. For example [tlhInganpu'] can mean baby or adult Klingons."
        },
        {
          "id":16,
          "word":"-mey",
          "pIqaD": "",
          "type":"Noun Suffix",
          "shortDef":"plural (general)(noun type 2)",
          "suffixType": 2,
          "def":["beings capable of language scattered all about", "more then one being not capable of language", "(sometimes by poets) plural body parts no longer attached to the body"],
          "antonms":[12],
          "see":[0],
          "sources":["TKD"],
          "notes":["This suffix cannot be used for body parts (see [-Du'] (n)), but this rule is sometimes violated by poets.", "Some nouns are inherently plural in meaning, with singular forms which are utterly distinct. These inherently plural nouns are treated as grammatically singular, in that singular pronouns and verb prefixes are used for them. When the suffix [-mey] (n) is applied to the singular forms of these nouns, the resulting plural word carries the connotation of \"scattered all about\"."],
          "examples":[
            {"phrase":"pu'HIchmey", "text": "phasers"},
            {"phrase":"puqmey", "text": "children all over the place"},
            {"phrase":"jatmey", "text": "scattered tongues"},
            {"phrase":"DoSmey", "text": "targets scattered all about"}
          ]
        },
        {
          "id":17,
          "word":"-Du'",
          "pIqaD": "",
          "type":"Noun Suffix",
          "shortDef":"plural (body parts)(noun type 2)",
          "suffixType": 2,
          "def":[
            "body parts attached to the body still",
            "plural body parts of being capable of language (still attached)",
            "plural body parts of any animal (still attached)"
          ],
          "antonms":[],
          "see":[16],
          "sources":["TKD"],
        }
      ]
    };

    this.setuppIqaD();
  }

  setuppIqaD(){
    /*
    for(var i = 0; i < this.dictionaryData.words.count; i++){
      //this.dictionaryData.words[i].pIqaD = this.dictionaryData.words[i].word;
      this.dictionaryData.words[i].pIqaD = "WTF!";
    }
    */
  }

  // WARNING: This only works with properly formed tlhIngon words. It makes a lot of assumptions
  getpIqaD(word : string){
    let r = "";

    for(let c = 0; c < word.length; c++){
      switch(word[c]){
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
          if(word[c+1] != "g")
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
          if(word[c+1] != "l" || word[c+2] != "h")
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
  }
  getData(){
    return this.dictionaryData;
  }

  isDataReady(){
    return this.loading == false;
  }
}
