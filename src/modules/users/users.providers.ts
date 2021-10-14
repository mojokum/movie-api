import { FILMS_GENRIC_REPOSITORY, FILMS_REPOSITORY, USERSETTING_REPOSITORY, USERS_REPOSITORY } from "src/constants";
import { UserSetting } from "src/models/entity";
import { Users } from "../../models/entity/users.entity";

export const UsersProviders = [
    {
      provide: USERS_REPOSITORY,
      useValue: Users,
    },
  ];


  export const UsersSettingProviders = [
    {
      provide: USERSETTING_REPOSITORY,
      useValue: UserSetting,
    },
  ];
  
 