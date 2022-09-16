import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  title: any;
  category: any;
  year: any;
  imdb: any;
  imageUrl: any;
  plot: any;

  constructor() {}

  ngOnInit() {}

  getMovieTitle($event: any) {
    this.title = $event;
  }
  getMovieYear($event: any) {
    this.year = $event;
  }
  getMovieImdb($event: any) {
    this.imdb = $event;
  }
  getMovieCategory($event: any) {
    this.category = $event;
  }
  getMovieImageUrl($event: any) {
    this.imageUrl = $event;
  }
  getMoviePlot($event: any) {
    this.plot = $event;
  }
}
