import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { FilmModule } from './modules/movies/films.module';
import { UserModule } from './modules/users/users.module';

@Module({
  imports: [
    FilmModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
