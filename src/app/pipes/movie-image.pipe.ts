import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

    transform(movie: any, poster: boolean = false): any {
        const URL = 'https://image.tmdb.org/t/p/w500';

        if (poster) {
            return URL + movie.poster_path;
        }

        if (movie.backdrop_path) {
            return URL + movie.backdrop_path;
        } else {
            if (movie.poster_path) {
                return URL + movie.poster_path;
            } else {
                return 'assets/images/no_image.png';
            }
        }
    }

}
