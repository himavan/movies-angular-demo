import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  movies = [
    {id:1, name:"Avengers", img_uri:"assets/movies/avengers.webp", description:"It's marvels movies series", comments:["Great Movie","Fantastic Movie"], rating:0},
    {id:2, name:"Matrix", img_uri:"assets/movies/matrix.jpeg", description:"It's marvels movies series", comments:[], rating:0},
    {id:3, name:"300 Rise of Empire", img_uri:"assets/movies/300_rise_of_empire.jpg", description:"It's marvels movies series", comments:[], rating:0},
    {id:4, name:"Man of Steel", img_uri:"assets/movies/man_of_steel.jpg", description:"It's marvels movies series", comments:[], rating:0},
    {id:4, name:"Spiderman", img_uri:"assets/movies/spiderman.jpg", description:"It's marvels movies series", comments:[], rating:0}
  ]

  users = [
    {id:1, name:"Admin",  username:"admin", password:"admin"},
    {id:1, name:"User1",  username:"user1", password:"user1"},
  ]

  getMovies(){
    return this.movies;
  }

  getMoviesById(id){
    for (let index = 0; index < this.movies.length; index++) {
      if(this.movies[index].id == id){
        return this.movies[index]
      }
    }
  }

  setMoviesComments(id, comment){
    for (let index = 0; index < this.movies.length; index++) {
      if(this.movies[index].id === id){
        this.movies[index].comments.push(comment);
      }
      
    }
  }

  setMoviesRating(id, rating){
    for (let index = 0; index < this.movies.length; index++) {
      if(this.movies[index].id === id){
        this.movies[index].rating += rating;
      }
      
    }
  }

  validateUser(username,password){
    for (let index = 0; index < this.users.length; index++) {
      if(this.users[index].username == username){
        if(this.users[index].password == password) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
}
