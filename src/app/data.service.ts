import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  searchValue = '';

  movies = [
    {
      id: 1, name: "Avengers", img_uri: "assets/movies/avengers.webp", description: "It's marvels movies series", comments: [{ name: "User1", comment: "Great Movie" },
      { name: "User1", comment: "Fantastic Movie" }], rating: 5 },
    { id: 2, name: "Matrix", img_uri: "assets/movies/matrix.jpeg", description: "It's marvels movies series", comments: [], rating: 0 },
    { id: 3, name: "300 Rise of Empire", img_uri: "assets/movies/300_rise_of_empire.jpg", description: "It's marvels movies series", comments: [], rating: 4 },
    { id: 4, name: "Man of Steel", img_uri: "assets/movies/man_of_steel.jpg", description: "It's marvels movies series", comments: [], rating: 0 },
    { id: 5, name: "Spiderman", img_uri: "assets/movies/spiderman.jpg", description: "It's marvels movies series", comments: [], rating: 0 }
  ]

  users = [
    { id: 1, name: "Admin", username: "admin", password: "admin", isAdmin: true },
    { id: 2, name: "User1", username: "user1", password: "user1", isAdmin: false },
    { id: 3, name: "User2", username: "user2", password: "user2", isAdmin: false },
  ]

  getMovies() {
    return this.movies;
  }

  getMoviesById(id) {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].id == id) {
        return this.movies[index]
      }
    }
  }

  getUser(username) {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].username == username) {
        return this.users[index]
      }
    }
  }

  setMoviesComments(id, user, comment) {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].id === id) {
        this.movies[index].comments.push({name:user, comment:comment});
      }

    }
  }

  setMoviesRating(id, rating) {
    console.log(rating)
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].id === id) {
        this.movies[index].rating = rating;
      }

    }
  }

  setMovie(data) {
    let id = this.movies.length + 1
    data.id = id;
    this.movies.push(data)
  }

  validateUser(username, password) {
    for (let index = 0; index < this.users.length; index++) {
      console.log(username, password)
      console.log(index)
      if (this.users[index].username == username) {
        if (this.users[index].password == password) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }

  setSearchValue(text) {
    this.searchValue = text;
  }
  getSearchValue() {
    return this.searchValue;
  }
}
