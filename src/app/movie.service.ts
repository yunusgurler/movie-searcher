import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  @Output() titleEvent = new EventEmitter<string>();

constructor(private httpClient: HttpClient) { }


titleListener(title: string){
  let url = "https://www.omdbapi.com/?i=tt3896198&apikey=222c96d1&t=" + title;
  return this.httpClient.get(url);
}
}
