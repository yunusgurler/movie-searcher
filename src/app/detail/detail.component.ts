import { CardComponent } from './../card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  titleDetail: any ;
  categoryDetail : any;
  yearDetail: any;
  imdbDetail: any;
  imageUrlDetail: any;
  plotDetail: any;

  constructor(private card: CardComponent) {}

  ngOnInit(
    
   ) {}


  getMovieTitle() {
    this.titleDetail = this.card.title;
  }
  getMovieYear() {
    this.yearDetail = this.card.year;
  }
  getMovieImdb() {
    this.imdbDetail = this.card.imdb;
  }
  getMovieCategory() {
    this.categoryDetail = this.card.category;
  }
  getMovieImageUrl() {
    this.imageUrlDetail = this.card.imageUrl;
  }
  getMoviePlot() {
    this.plotDetail = this.card.plot;
  }

}
