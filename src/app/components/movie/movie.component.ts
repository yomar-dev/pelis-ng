import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  movie: any;
  pageOrigin = '';
  movieName = '';

  constructor(public _movieService: MoviesService, public _activateRouter: ActivatedRoute) {
    this._activateRouter.params.subscribe(params => {
      if (params['movieName']) {
        this.movieName = params['movieName'];
      }
      this.pageOrigin = params['page'];
      this._movieService.getMovie(params['id']).subscribe(movie => {
        this.movie = movie;
      });
    });
  }


  ngOnInit() {
  }

}
