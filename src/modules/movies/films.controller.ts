import { Body, Controller, Get, Header, HttpStatus, Param, Patch, Post, Put, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FilmCommentsRequestDto } from 'src/models/dto/filmComments.request.dto';
import { MovieRequestDto } from './dto/movie.request.dto';
import { MovieResponseDto } from './dto/movie.response.dto';
import { FilmsService } from './films.service';


@Controller('films')
export class FilmsController {

    constructor(private filmService: FilmsService) {}

  /**
   * Method is used to fetch all films
   * 
   */
  @Get('/films')
  @ApiOperation({ summary: "Return all the ApplicationUser" })
  @ApiResponse({ status: HttpStatus.OK, description: "The request has succeeded 4.", type: MovieResponseDto })  
  async getAllFilms(@Req() req: any) {
    try {
      const queryParams = req.query
      return await this.filmService.findAll(queryParams);
    } catch (error) {
      console.error(error);
    }
  }

   /**
   * Method used to create films
   * @param filmRequestDtox
   */

  @Post('/')
  @Header("content-type", "application/json")
  @ApiOperation({ summary: "Create Film" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "The Film has been successfully created",
    type: MovieRequestDto,
})
  @ApiBody({ description: "Request Body", type: MovieRequestDto })
  async createFilm(@Body() filmRequestDto: MovieRequestDto) {
    try {
      Object.assign(filmRequestDto, { createdBy: 'kumar', upVote: 0, downVote: 0 });
      return await this.filmService.createFilm(filmRequestDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Post('/upVote') 
  async setUpVote(@Body() request: any) {
    try {
      console.log(request)
      return await this.filmService.upVote(request)
    } catch(error) {
      console.error(error)
    }
  }


  @Post('/downVote') 
  async setDownVote(@Body() request: any) {
    try {
      console.log(request)
      return await this.filmService.downVote(request)
    } catch(error) {
      console.error(error)
    }
  }

  /**
   * Method used to post film comments 
   * 
   * @param filmRequestComments 
   * @returns 
   */
  @Post('/filmComments')
  async createFilmComments(@Body() filmRequestComments: FilmCommentsRequestDto) {
    try {
      return await this.filmService.postComments(filmRequestComments);
    } catch (error) {
      console.error(error);
    }
  }

}
