import { Module } from "@nestjs/common";
import { UsersProviders } from "../users/users.providers";
import { FilmsController } from "./films.controller";
import { FilmCommentsProviders, FilmGenreicProviders, FilmProviders } from "./films.providers";
import { FilmsService } from "./films.service";

@Module({
    providers: [
      FilmsService,
      ...FilmProviders,
      ...FilmGenreicProviders,
      ...FilmCommentsProviders,
      ...UsersProviders
    ],
    controllers: [FilmsController],
  })
  export class FilmModule {}
  