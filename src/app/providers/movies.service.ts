import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    private apikey = '5a26c3bafc6b1d17d4a99115d9eeba63';
    private urlMoviedb = 'https://api.themoviedb.org/3';

    movies: any[] = [];

    constructor( private http: HttpClient ) { }

    getBillboard() {
        const date_start = new Date();
        const date_end = new Date();
        date_end.setDate(date_end.getDate() + 7);

        const start = `${date_start.getFullYear()}-${date_start.getMonth() + 1}-${date_start.getDate()}`;
        const end = `${date_end.getFullYear()}-${date_end.getMonth() + 1}-${date_end.getDate()}`;

        const URL_BILLBOARD = `/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`;
        const url = `${this.urlMoviedb}${URL_BILLBOARD}&api_key=${this.apikey}&language=es`;
        return this.http.get(url).pipe(map(response => response));
    }

    getPopulars() {
        const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
        return this.http.get(url).pipe(map(response => response));
    }

    getKidsMovies() {
        const URL_KIDS = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
        const url = `${ this.urlMoviedb }${URL_KIDS}&api_key=${ this.apikey }&language=es`;
        return this.http.get(url).pipe(map(response => response));
    }

    searchMovie(name: string) {
        const url = `${ this.urlMoviedb }/search/movie?query=${ name }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
        return this.http.get(url).pipe(map((response: any) => {
            this.movies = response.results;
            return response;
        }));
    }
}
