import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTheMovies: Array<object> = [];
  constructor(
    private moviesThang: MoviesService
  ) { }

  ngOnInit() {
  this.allTheMovies = this.moviesThang.getMovies();
  }

}
