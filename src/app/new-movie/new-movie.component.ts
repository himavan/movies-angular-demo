import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data){
    this.dataservice.setMovie({
      id: 1, name: data.value.name, img_uri: "assets/movies/image.jpg", description: data.value.description, comments: [], ratings:0
    })
    alert("New Movie Added!")
  }

}
