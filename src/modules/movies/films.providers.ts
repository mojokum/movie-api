import { FILMS_GENRIC_REPOSITORY, FILMS_REPOSITORY, FILM_COMMENTS_REPOSITORY } from "../../constants";
import { GenreType } from "../../models/entity";
import { MovieComments } from "../../models/entity/movieComments.entity";
import { Movie } from "../../models/entity/movies.entity";

export const FilmProviders = [
    {
      provide: FILMS_REPOSITORY,
      useValue: Movie,
    },
  ];
  
  export const FilmGenreicProviders = [
    {
      provide: FILMS_GENRIC_REPOSITORY,
      useValue: GenreType,
    },
  ];

  export const FilmCommentsProviders = [
    {
      provide: FILM_COMMENTS_REPOSITORY,
      useValue: MovieComments
    }
  ]