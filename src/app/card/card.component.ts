import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: any;
  @Input() category: any;
  @Input() year: any;
  @Input() imdb: any;
  @Input() imageUrl: any;
  @Input() plot: any;


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

  // sendDetails() {
  //   this.imdbEventForDetail.emit(this.imdb);
  //   this.yearEventForDetail.emit(this.year);
  //   this.imageUrlEventForDetail.emit(this.imageUrl);
  //   this.titleEventForDetail.emit(this.title);
  //   this.categoryEventForDetail.emit(this.category);
  //   this.plotEventForDetail.emit(this.plot)
  // }
}
