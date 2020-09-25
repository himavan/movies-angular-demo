import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  selectedMovie;
  constructor(private route: ActivatedRoute, private dataservice:DataService) { }

  ngOnInit(): void {
    this.selectedMovie = this.dataservice.getMoviesById(this.route.snapshot.params['id'])
    console.log(this.selectedMovie);
  }

  onClickSubmit(data){
    this.dataservice.setMoviesComments(this.selectedMovie.id,data.value.comment)
  }

}
