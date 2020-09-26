import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  selectedMovie;
  isAuth

  ratingClicked: number;
  itemIdRatingClicked: string;

  constructor(private route: ActivatedRoute, private dataservice:DataService, private auth:AuthService) { }

  ngOnInit(): void {
    this.selectedMovie = this.dataservice.getMoviesById(this.route.snapshot.params['id'])
    this.isAuth = this.auth.isAuthenticated()
  }

  onClickSubmit(data){
    this.dataservice.setMoviesComments(this.selectedMovie.id,"Test User",data.value.comment)
  }

  ratingComponentClick(clickObj: any): void {
  
      this.selectedMovie.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.dataservice.setMoviesRating(this.selectedMovie.id,clickObj.rating);

  }

}
