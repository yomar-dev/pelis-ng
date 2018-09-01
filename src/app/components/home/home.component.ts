import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    billboard: any;
    populars: any;
    kids: any;

    constructor(public _moviesService: MoviesService) {
        this._moviesService.getBillboard().subscribe((data: any) => { this.billboard = data.results; });
        this._moviesService.getPopulars().subscribe((data: any) => { this.populars = data.results; });
        this._moviesService.getKidsMovies().subscribe((data: any) => { this.kids = data.results; });
    }

    ngOnInit() {
    }

}
