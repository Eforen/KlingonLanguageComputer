import { Source } from './source.model'
import { Example } from './example.model'

export interface Word {
  id: number;
  v: number;
  word: string;
  shortDef: string;
  tags: string[];
  def?: string[];
  antonyms?: number[];
  synonyms?: number[];
  subwords?: number[];
  see?: number[];
  sources: Source[];
  notes?: string;
  usage?: string[];
  examples?: Example[];
};
