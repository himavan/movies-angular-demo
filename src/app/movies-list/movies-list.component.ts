import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.movies = this.dataService.getMovies();
  }

}
