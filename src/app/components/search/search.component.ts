import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../providers/movies.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent implements OnInit {
    movieName = '';

    constructor(public _moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params) => {
            if (params['name']) {
                this.movieName = params['name'];
                this.searchMovie();
            }
        });
    }

    ngOnInit() {
    }

    searchMovie() {
        if (this.movieName.length === 0) {
            return;
        }
        this._moviesService.searchMovie(this.movieName).subscribe((data: any) => {});
    }

}
