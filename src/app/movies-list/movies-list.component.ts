import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies
  isAdmin = false

  searchModel
  constructor(public dataService: DataService, public auth: AuthService) { }

  ngOnInit(): void {
    this.movies = this.dataService.getMovies();
    this.isAdmin = this.auth.isAdmin();
  }

}
