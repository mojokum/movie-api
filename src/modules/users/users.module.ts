import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersProviders, UsersSettingProviders } from "./users.providers";
import { UsersService } from "./users.service";

@Module({
    providers: [
      UsersService,
      ...UsersProviders,
      ...UsersSettingProviders
    ],
    controllers: [UsersController],
  })
  export class UserModule {}
  