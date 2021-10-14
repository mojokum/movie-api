import { Inject, Injectable } from "@nestjs/common";
import { FILMS_GENRIC_REPOSITORY, FILMS_REPOSITORY, FILM_COMMENTS_REPOSITORY, USERS_REPOSITORY } from "../../constants";
import { GenreType } from "src/models/entity";
import { MovieResponseDto } from "./dto/movie.response.dto";
import { Movie } from "../../models/entity/movies.entity";
import { MovieRequestDto } from "./dto/movie.request.dto";
import { FilmCommentsRequestDto } from "src/models/dto/filmComments.request.dto";
import { MovieComments } from "src/models/entity/movieComments.entity";
import { Users } from "../../models/entity/users.entity";
import { timeStamp } from "console";

@Injectable()
export class FilmsService {
  constructor( @Inject(FILMS_REPOSITORY)
  private readonly films: typeof Movie,
  @Inject(FILM_COMMENTS_REPOSITORY)
  private readonly filmComments: typeof MovieComments,
  @Inject(USERS_REPOSITORY)
  private readonly usersRepository: typeof Users) {} 

   /**
   * Method used to fetch the films
   */
    async findAll(queryParam): Promise<Movie[]> {
        return await this.films.findAll({
          order: [
            [queryParam.sortBy, queryParam.sortType]
          ]
        })
      }


  /**
   * Method used to create Films
   * @param filmreq
   */
  async createFilm(filmreq: MovieRequestDto): Promise<any> {
  
    const result = await this.films.create(filmreq);
    const response = result.save();
    return response;
  }


  /**
   * Method used to post comments for a film
   * @param filmComments
   * @returns
   */
  async postComments(comments: FilmCommentsRequestDto): Promise<any> {
    const result = await this.filmComments.create(comments);
    return null
  }

  async upVote(vote: any): Promise<any> {
    const result = await this.films.findOne({where: {movieId: vote.movieId}})
    console.log(result)
    if(result) {
      await this.films.update({ upVote: result.upVote + 1}, {where: {movieId: vote.movieId}})
    }

  }

  async downVote(vote: any): Promise<any> {
    const result = await this.films.findOne({where: {movieId: vote.movieId}})
    console.log(result)
    if(result) {
      await this.films.update({ downVote: result.downVote + 1}, {where: {movieId: vote.movieId}})
    }
  }
}
