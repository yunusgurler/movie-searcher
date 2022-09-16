import { CardComponent } from './../card/card.component';
import { MovieService } from './../movie.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('titleInput') titleInputRef!: ElementRef;
  title: any;
  category: any;
  year: any;
  imdb: any;
  imageUrl: any;
  plot: any;

  @Output() titleEvent = new EventEmitter<string>();
  @Output() yearEvent = new EventEmitter<string>();
  @Output() categoryEvent = new EventEmitter<string>();
  @Output() imdbEvent = new EventEmitter<string>();
  @Output() imageUrlEvent = new EventEmitter<string>();
  @Output() plotEvent = new EventEmitter<string>();


  constructor(private movieData: MovieService) {}

  ngOnInit() {}

  getMovieDataWithTitle = () => {
    const movieTitle = this.titleInputRef.nativeElement.value;
    this.movieData.titleListener(movieTitle).subscribe((data) => {
      const movieObj = data;

      this.title = Object.values(movieObj)[0];
      this.category = Object.values(movieObj)[5].split(",",1);
      this.imdb = Object.values(movieObj)[16];
      this.imageUrl = Object.values(movieObj)[13];
      this.year = Object.values(movieObj)[1];
      this.plot = Object.values(movieObj)[9];

      this.titleEvent.emit(this.title);
      this.yearEvent.emit(this.year);
      this.categoryEvent.emit(this.category);
      this.imageUrlEvent.emit(this.imageUrl);
      this.imdbEvent.emit(this.imdb);
      this.plotEvent.emit(this.plot);

      return movieObj;
    });
  };

}
