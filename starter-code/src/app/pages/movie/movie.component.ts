import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieInfo: any = {};

  constructor(
      private activatedThang: ActivatedRoute,
      private moviesThang: MoviesService
  ) { }

  ngOnInit() {
    console.log("MIlann");
    this.activatedThang.params.subscribe(
  (myParams) => {
    // {path: 'partners/:thePartnerId'}
    const theId = Number(myParams.theMovieId);

    this.movieInfo = this.moviesThang.getMovieDetails(theId);
  }
);
  }

}
