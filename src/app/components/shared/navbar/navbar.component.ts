import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../../providers/movies.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: []
})
export class NavbarComponent implements OnInit {

    constructor(public _moviesService: MoviesService, private router: Router) { }

    ngOnInit() {
    }

    searchMovie(name: string) {
        if (name.length === 0) {
            return;
        }

        this.router.navigate(['search', name]);

        this._moviesService.searchMovie(name).subscribe((data: any) => {
            console.log(data.results);
        });
    }

}
