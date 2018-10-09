import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
  itunesUrl: string;
  typeMusic: string;
  typeMovie: string;
  typeBook: string;
  typeGeneric: string;
  choiceMusic: string;
  choiceMovie: string;
  choiceBook: string;
  choiceGeneric: string;

  constructor() {
    this.itunesUrl = 'https://itunes.apple.com/search';
    this.typeMusic = 'music';
    this.typeMovie = 'movie';
    this.typeBook = 'book';
    this.typeGeneric = 'generic';

    this.choiceMusic = 'Air';
    this.choiceMovie = 'Marvel';
    this.choiceBook = 'Tolkien';
    this.choiceGeneric = 'hot';
  }
}
