import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT } from '../constants';
import { databaseConfig } from './database.config';
import { Movie } from '../models/entity/movies.entity';
import { GenreType } from '../models/entity/genreTypes.entity';
import { Users } from '../models/entity/users.entity';
import { MovieComments } from '../models/entity/movieComments.entity';
import { UserSetting } from 'src/models/entity/userSetting.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Movie, GenreType, GenreType, UserSetting, Users, MovieComments]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
